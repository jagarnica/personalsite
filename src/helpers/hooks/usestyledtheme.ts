import { ThemeContext, DefaultTheme } from "styled-components";
import { useContext } from "react";
/**
 * @name getTheme
 * @description If within a theme, it will return the entire theme in the given context. Otherwise it will return undefined.
 * @returns Object
 */
const getTheme = (): DefaultTheme => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
};
export default getTheme;
