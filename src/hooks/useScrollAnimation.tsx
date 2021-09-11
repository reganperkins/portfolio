import { useLayoutEffect, useState } from "react";
import throttle from 'lodash/throttle';

function useScrollAnimation(refEl: any) {
  const [show, setShow] = useState(false);
  const [showPercent, setShowPercent] = useState(0);

  useLayoutEffect(() => {
    const target = refEl.current;
    if (!target) return;
    const targetPos = window.pageYOffset + target.getBoundingClientRect().top;
    const targetHeight = target.offsetHeight;

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (targetPos < scrollPos) {
        setShow(() => true);
        let itemPercent = ((scrollPos - targetPos) * 100) / targetHeight;
        if (itemPercent > 100) itemPercent = 100;
        if (itemPercent < 0) itemPercent = 0;
        setShowPercent(() => itemPercent);
      } else if (targetPos > scrollPos) {
        setShow(() => false);
      }
    };

    const throttledOnScroll = throttle(onScroll, 10);

    window.addEventListener("scroll", throttledOnScroll);
    return () => window.removeEventListener("scroll", throttledOnScroll);
  }, [refEl]);
  return {
    show,
    showPercent,
  }
}

export default useScrollAnimation;