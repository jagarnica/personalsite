import { useEffect, useState } from "react";
import { debounce } from "lodash";

/**
 * @name userScrollHandler
 * @description Return true if the user scrolls past a certain threshold set by the prop
 * or by the default of 60.
 * @param {number} scrollThreshold This sets at which points it returns true.
 * @returns {boolean}
 */
export default (scrollThreshold = 60): boolean => {
  // setting initial value to true
  const [scroll, setScroll] = useState(false);

  // running on mount
  useEffect(() => {
    const onScroll = debounce(() => {
      const scrollCheck = window.scrollY > scrollThreshold;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    }, 80);

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
