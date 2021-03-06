import { useEffect } from "react";
import debounce from "lodash/debounce";

const useInfiniteScroll = (isLoading, hasMore, next) => {
  const handleScroll = debounce(() => {
    const windowHeight = window.innerHeight;
    const documentScroll = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;

    const isBottomReached =
      windowHeight + documentScroll > documentHeight - 0.05 * windowHeight;

    if (hasMore && !isLoading && isBottomReached) next();
  }, 400);

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);
};

export default useInfiniteScroll;
