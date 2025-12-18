import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offset = 80) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (!section) continue;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

export const scrollToSection = (id, offset = 70) => {
  const section = document.getElementById(id);
  if (!section) return;

  window.scrollTo({
    top: section.offsetTop - offset,
    behavior: "smooth",
  });
};
