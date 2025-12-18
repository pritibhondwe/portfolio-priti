import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1200,
      easing: "cubic-bezier(0.37, 0, 0.63, 1)",
      reset: false,
      viewFactor: 0.2,
      ...options,
    });

    sr.reveal(selector);

    return () => {
      sr.destroy();
    };
  }, [selector, options]);
};
