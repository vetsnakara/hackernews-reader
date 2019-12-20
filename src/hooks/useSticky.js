import { useState, useEffect, useRef } from "react";
import throttle from "lodash/throttle";

const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = throttle(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsSticky(scrollTop > ref.current.offsetHeight);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, isSticky };
};

export default useSticky;
