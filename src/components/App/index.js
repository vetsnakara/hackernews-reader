// todo: up button
// todo: error handling
// todo: add separate reducer for loading state (or add loading and error state in appState, use OR logic)
// todo: style end message
// todo: add theme toggling
// todo: add grid toggling
// todo: check debounce correctness
// todo: no fetchches after hasMore = false
// todo: correct colors in light mode
// todo: separate presentational and container components
// todo: fix styles in FF
// todo: check responsive
// todo: use Helmet for metadata (title, etc)
// todo: check origin repo for thoughts

import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "../Header";
import List from "../List";
import Loader from "../Loader";
import InfiniteScroll from "../InfiniteScroll";

import { Wrapper } from "./styles";

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
      <Header />
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
