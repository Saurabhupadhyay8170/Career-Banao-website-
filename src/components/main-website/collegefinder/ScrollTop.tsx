import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  const scrollPosition = useRef(0);

  // Before navigation: Save scroll position
  useEffect(() => {
    const saveScroll = () => {
      scrollPosition.current = window.scrollY;
    };
    window.addEventListener("beforeunload", saveScroll);
    return () => window.removeEventListener("beforeunload", saveScroll);
  }, []);

  // After navigation: Restore scroll position
  useEffect(() => {
    window.scrollTo(0, scrollPosition.current);
  }, [pathname]);

  return null;
};

export default ScrollTop;
