import * as React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import ExitButton from "./exitbutton";
import { FocusScope } from "@react-aria/focus";
import { useButton } from "@react-aria/button";
export interface DropDownMenuProps {
  isVisible?: boolean;
  width?: string;
  backgroundColor?: string;
  onRequestOpen?: () => void;
  onRequestClose?: () => void;
  exitButtonColor?: string;
  children?: React.ReactNode;
}

export function DropDownMenu({
  children,
  isVisible,
  width = "100vw",
  backgroundColor = "#fff",
  onRequestOpen,
  onRequestClose,
  exitButtonColor = "#000",
}: DropDownMenuProps): JSX.Element | null {
  const [showDropDown, setShowDropDownMenu] = React.useState(false);
  const [previousAttributes, setPreviousAttributes] = React.useState("");
  const exitButtonRef = React.useRef<HTMLDivElement>(null);
  const { buttonProps } = useButton(
    {
      elementType: "div",
      onPress: onMaskClick,
    },
    exitButtonRef
  );

  React.useEffect(() => {
    // This is run only when mounting

    function checkIfVisible(isVisible?: boolean) {
      if (isVisible) {
        setShowDropDownMenu(true);
        onRequestOpen?.();
        preventScrolling();
      }
    }
    checkIfVisible(isVisible);
    return () => {
      restoreScrolling();
    };
  }, []);
  // Handle the prop of visibility changing
  React.useEffect(() => {
    if (isVisible) {
      // We want to show the menu
      preventScrolling();
      onRequestOpen?.();
      // Add in the portal element
      setShowDropDownMenu(true);
    } else {
      restoreScrolling();
    }
  }, [isVisible]);

  function preventScrolling() {
    const previousAttributes = document.body.getAttribute("style")
      ? String(document.documentElement.getAttribute("style"))
      : "";
    setPreviousAttributes(previousAttributes);
    document.documentElement.setAttribute(
      "style",
      `overflow:hidden;${previousAttributes}`
    );
  }

  function restoreScrolling() {
    document.documentElement.setAttribute("style", previousAttributes);
  }
  function onMaskClick() {
    //Undo the scrolling event blocking now that the modal is closed.
    restoreScrolling();
    onRequestClose?.();
  }
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      onMaskClick();
    }
  }
  /**
   * @function handleAnimationEnd When the animation is over, we will update our state, causing a rerender to remove it from the DOM.
   * @param event
   */
  function handleAnimationEnd(event: React.AnimationEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!isVisible) {
      setShowDropDownMenu(false);
    }
  }

  const drawerClassName = isVisible ? "show" : "hide";
  return showDropDown
    ? ReactDOM.createPortal(
        <ModelMask className={drawerClassName}>
          <ModalWrapper onClick={onMaskClick}>
            <ModalContainer
              onAnimationEnd={handleAnimationEnd}
              className={drawerClassName}
              backgroundColor={backgroundColor}
              onKeyDown={handleKeyDown}
              onClick={onMaskClick}
              style={{ width: width }}
            >
              {isVisible && (
                <FocusScope contain autoFocus>
                  <ExitButtonContainer ref={exitButtonRef} {...buttonProps}>
                    <ExitButton fillColor={exitButtonColor} />
                  </ExitButtonContainer>
                  {children}
                </FocusScope>
              )}
            </ModalContainer>
          </ModalWrapper>
        </ModelMask>,
        document.body
      )
    : null;
}

const ButtonSpin = keyframes`
from {
  transform: rotate(0deg);
}
to{
  transform: rotate(180deg);
}

`;
const ExitButtonContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50px;
  right: 10%;
  padding: 10px;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 52px;
  height: 52px;
  @media only screen and (max-device-width: 600px) {
    top: 20px;

    right: 5%;
  }
  &:focus-visible {
    box-shadow: var(--focus-box-shadow);
  }
  &:active {
    outline: 0;
  }
  &:hover {
    animation: 0.3s ${ButtonSpin} ease;
  }
`;
// Styling for the Modal Components **********
const NavigationEnter = keyframes`
from {
  transform: translateY(-100%);
}
to{
    transform: translateY(0%);
}
`;
const NavigationExit = keyframes`
from{
    transform: translateY(0%);
}
to{
    transform: translateY(-100%);
}
`;

const ModelMask = styled.div<{ width?: string; height?: string }>`
  position: fixed;
  z-index: 20;
  * {
    z-index: 20;
  }
  top: 0;
  left: 0;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
  &.show {
    opacity: 1;
  }
`;
/* This styling is for the corner buttons containing the content */
const ModalWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  transform: translate3d(0, 0, 0);
`;
/* This styling is for the actual border containing the content */
const ModalContainer = styled.div<{
  className?: string;
  backgroundColor?: string;
}>`
  position: absolute;
  opacity: 1; /* This sets the opacity for the entire container */
  transform: translateX(-100%);
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : ``};
  border-radius: 4px;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: 0 7px 14px 0 rgba(60, 66, 87, 0.12),
    0 3px 6px 0 rgba(0, 0, 0, 0.12);
  transition: width, height 0.3s ease;
  transform: translate3d(0, 0, 0);
  &.hide {
    animation: ${NavigationExit} forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    animation-duration: 0.4s;
  }
  &.show {
    animation: ${NavigationEnter} forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    animation-duration: 0.4s;
  }
`;
