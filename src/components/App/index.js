import { connect } from "react-redux";

import App from "./App";

import {
  doInitialStoriesFetch,
  doFetchStories
} from "../../actions/storyActions";

import { isFetching, hasMoreStories } from "../../selectors";

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
