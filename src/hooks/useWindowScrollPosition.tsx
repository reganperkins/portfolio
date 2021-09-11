import { useEffect, useState } from "react";
import throttle from 'lodash/throttle';

function useWindowScrollPosition() {
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  // const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.scrollY)
    };

    const throttledOnScroll = throttle(onScroll, 100);
    window.addEventListener("scroll", throttledOnScroll);
    return () => window.removeEventListener("scroll", throttledOnScroll);
  }, []);

  return {
    scrollPos,
    // scrollDirection
  }
}

export default useWindowScrollPosition;
