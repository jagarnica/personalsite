import { useEffect, useState } from "react";
import { throttle } from "lodash";

/**
 * @name userScrollHandler
 * @description Return true if the user scrolls past a certain threshold set by the prop
 * or by the default of 10.
 * @param {number} scrollThreshold This sets at which points it returns true.
 * @returns {boolean}
 */
export default (scrollThreshold = 10) => {
  // setting initial value to true
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    setScroll(window?.scrollY > scrollThreshold);
  });
  useEffect(() => {
    const onScroll = throttle(() => {
      const scrollCheck = window?.scrollY > scrollThreshold;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
      console.log("calling!!");
    }, 60);
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll]);

  return scroll;
};
