import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
  FETCH_STORIES_IDS
} from "../constants/actionTypes";

const initialState = {
  ids: [],
  stories: [],
  page: 0,
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
    case FETCH_STORIES_IDS:
      return applyFetchStoriesIds(state, action);
    default:
      return state;
  }
};

const applyFetchStoriesIds = (state, { payload: { ids } }) => {
  return {
    ...state,
    ids
  };
};

const applyFetchStoriesRequest = (state, action) => {
  return {
    ...state,
    isFetching: true
  };
};

const applyFetchStoriesSuccess = (state, { payload: { stories, page } }) => {
  return {
    ...state,
    stories: [...state.stories, ...stories],
    page,
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
