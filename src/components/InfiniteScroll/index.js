import React from "react";
import useInfiniteScroll from "./useInfiniteScroll";

const InfiniteScroll = ({
  next,
  hasMore,
  isLoading,
  loader,
  endMessage,
  children
}) => {
  useInfiniteScroll(isLoading, hasMore, next);

  return (
    <React.Fragment>
      {children}
      {isLoading && hasMore && loader}
      {!hasMore && endMessage}
    </React.Fragment>
  );
};

export default InfiniteScroll;
