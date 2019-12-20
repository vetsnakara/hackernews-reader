import React from "react";
import { connect } from "react-redux";

import List from "../List";
import Grid from "../Grid";

import { Wrapper } from "./styles";

const Stories = ({ stories, layout }) => {
  return layout === "list" ? (
    <List items={stories} />
  ) : (
    <Grid items={stories} />
  );
};

const mapState = state => {
  return {
    stories: state.storyState.stories,
    layout: state.appState.layout
  };
};

export default connect(mapState)(Stories);
