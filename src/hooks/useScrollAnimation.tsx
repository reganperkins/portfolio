import { useLayoutEffect, useState } from "react";

function useScrollAnimation(refEl: any) {
  const [show, setShow] = useState(false);
  const [showPercent, setShowPercent] = useState(0);

  useLayoutEffect(() => {
    const target = refEl.current;
    const targetPos = target.getBoundingClientRect().top;
    const targetHeight = target.offsetHeight;
    console.log(targetPos, targetHeight)

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

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [refEl]);

  return {
    show,
    showPercent,
  }
}

export default useScrollAnimation;