import React, { useEffect } from "react";
import { connect } from "react-redux";

import List from "../List";
import Loader from "../Loader";
import InfiniteScroll from "../InfiniteScroll";
import { Wrapper, Title } from "./styles";

import { doInitialStoriesFetch } from "../../actions/storyActions";

const App = ({ fetchStoriesFirstPage }) => {
  useEffect(() => {
    fetchStoriesFirstPage();
  }, [fetchStoriesFirstPage]);

  return (
    <Wrapper>
      <Loader />
      <Title>{"//"} Hacker News Reader</Title>
      <List />
      <InfiniteScroll />
    </Wrapper>
  );
};

const mapDispatch = dispatch => {
  return {
    fetchStoriesFirstPage: () => dispatch(doInitialStoriesFetch())
  };
};

export default connect(null, mapDispatch)(App);
