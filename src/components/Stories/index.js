import { connect } from "react-redux";

import Stories from "./Stories";

const mapState = state => {
  return {
    stories: state.storyState.stories,
    layout: state.appState.layout
  };
};

export default connect(mapState)(Stories);
