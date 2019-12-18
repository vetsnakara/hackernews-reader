// todo: up button
// todo: error handling

import React, { useEffect } from "react";
import { connect } from "react-redux";

import List from "../List";
import Loader from "../Loader";
import InfiniteScroll from "../InfiniteScroll";
import { Wrapper, Title } from "./styles";

import {
  doInitialStoriesFetch,
  doFetchStories
} from "../../actions/storyActions";

import { isFetching, hasMoreStories } from "../../selectors";

const App = ({
  fetchStoriesFirstPage,
  fetchStories,
  isFetching,
  hasMoreStories
}) => {
  useEffect(() => {
    fetchStoriesFirstPage();
  }, []);

  console.log("============== render App");
  console.log("hasMore", hasMoreStories);
  console.log("isLoading", isFetching);

  return (
    <Wrapper>
      <Title>{"//"} Hacker News Reader</Title>
      <InfiniteScroll
        next={fetchStories}
        loader={<Loader />}
        isLoading={isFetching}
        hasMore={hasMoreStories}
        endMessage={<p style={{ color: "#fff" }}>No more stories</p>}
      >
        <List />
      </InfiniteScroll>
    </Wrapper>
  );
};

const mapState = state => {
  return {
    isFetching: isFetching(state),
    hasMoreStories: hasMoreStories(state)
  };
};

const mapDispatch = dispatch => {
  return {
    fetchStoriesFirstPage: () => dispatch(doInitialStoriesFetch()),
    fetchStories: () => dispatch(doFetchStories())
  };
};

export default connect(mapState, mapDispatch)(App);
