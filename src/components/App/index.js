import React, { useEffect } from "react";
import { connect } from "react-redux";

import List from "../List";
import { Wrapper, Title } from "./styles";

import { doInitialStoriesFetch } from "../../actions/storyActions";

const App = ({ fetchStoriesFirstPage }) => {
  useEffect(() => {
    fetchStoriesFirstPage();
  }, [fetchStoriesFirstPage]);

  return (
    <Wrapper>
      <Title>{"//"} Hacker News Reader</Title>
      <List />
    </Wrapper>
  );
};

const mapDispatch = dispatch => {
  return {
    fetchStoriesFirstPage: () => dispatch(doInitialStoriesFetch())
  };
};

export default connect(null, mapDispatch)(App);
