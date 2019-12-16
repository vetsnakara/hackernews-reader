import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE
} from "../constants/actionTypes";

const initialState = {
  stories: [],
  page: -1,
  isFetching: false,
  error: null
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_REQUEST:
      return applyFetchStoriesRequest(state, action);
    case FETCH_STORIES_SUCCESS:
      return applyFetchStoriesSuccess(state, action);
    case FETCH_STORIES_FAILURE:
      return applyFetchStoriesFailure(state, action);
    default:
      return state;
  }
};

const applyFetchStoriesRequest = (state, action) => {
  return {
    ...state,
    isFetching: true,
    error: null
  };
};

const applyFetchStoriesSuccess = (
  state,
  { payload: { stories, nextPage } }
) => {
  return {
    ...state,
    stories: [...state.stories, ...stories],
    page: nextPage,
    isFetching: false,
    error: null
  };
};

const applyFetchStoriesFailure = (state, { payload: { error } }) => {
  return {
    ...state,
    isFetching: false,
    error
  };
};

export default storyReducer;
