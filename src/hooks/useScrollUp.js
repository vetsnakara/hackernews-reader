import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const useScrollUp = () => {
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  const handleScroll = throttle(() => {
    const windowHeight = window.innerHeight;
    const documentScroll = document.documentElement.scrollTop;
    const isScrollEnabled = documentScroll > 0.5 * windowHeight;
    setIsScrollEnabled(isScrollEnabled);
  }, 1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrollEnabled;
};

export default useScrollUp;
