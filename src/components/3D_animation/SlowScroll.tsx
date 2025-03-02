import { useEffect } from "react";

const SlowScroll = () => {
  useEffect(() => {
    let scrollSpeed = 4;
    let scrollPosition = window.scrollY;

    const handleScroll = (event) => {
      event.preventDefault();
      scrollPosition += event.deltaY * scrollSpeed;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return null;
};

export default SlowScroll;
