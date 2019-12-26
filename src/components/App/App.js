import React, { useEffect } from "react";

import Header from "../Header";
import Stories from "../Stories";
import Loader from "../Loader";
import InfiniteScroll from "../InfiniteScroll";
import Message from "../Message";
import UpButton from "../UpButton";

import { Container } from "../../styles/utils";

import useScrollUp from "../../hooks/useScrollUp";

const App = ({
  fetchStoriesFirstPage,
  fetchStories,
  isFetching,
  hasMoreStories
}) => {
  const isScrollEnabled = useScrollUp();

  useEffect(() => {
    fetchStoriesFirstPage();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <InfiniteScroll
          next={fetchStories}
          loader={<Loader />}
          isLoading={isFetching}
          hasMore={hasMoreStories}
          endMessage={<Message>No more stories</Message>}
        >
          <Stories />
        </InfiniteScroll>
        {isScrollEnabled && <UpButton />}
      </Container>
    </React.Fragment>
  );
};

export default App;
