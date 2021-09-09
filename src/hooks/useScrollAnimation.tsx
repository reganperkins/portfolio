import { useLayoutEffect, useState } from "react";

function useScrollAnimation(refEl: any) {
  console.log("This is the target received: " + refEl);

  const [show, setShow] = useState(false);
  const [percentShown, setPercentShow] = useState(0);
  const target = refEl.current;

  useLayoutEffect(() => {
    const targetPos = target.getBoundingClientRect().top;
    const targetHeight = target.offsetHeight;

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (targetPos < scrollPos) {
        setShow(() => true);
        let itemPercent = ((scrollPos - targetPos) * 100) / targetHeight;
        if (itemPercent > 100) itemPercent = 100;
        if (itemPercent < 0) itemPercent = 0;
        setPercentShow(() => itemPercent);
      } else if (targetPos > scrollPos) {
        setShow(() => false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [target]);
}

export default useScrollAnimation;