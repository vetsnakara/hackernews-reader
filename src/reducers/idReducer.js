import {
  FETCH_IDS_REQUEST,
  FETCH_IDS_SUCCESS,
  FETCH_IDS_FAILURE
} from "../constants/actionTypes";

const initialState = {
  ids: [],
  isFetching: false,
  error: null
};

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IDS_REQUEST:
      return applyFetchIdsRequest(state);
    case FETCH_IDS_SUCCESS:
      return applyFetchIdsSuccess(state, action);
    case FETCH_IDS_FAILURE:
      return applyFetchIdsFailure(state, action);
    default:
      return state;
  }
};

const applyFetchIdsRequest = state => {
  return {
    ...state,
    isFetching: true,
    error: null
  };
};

const applyFetchIdsSuccess = (state, { payload: { ids } }) => {
  return {
    ...state,
    ids,
    isFetching: false,
    error: null
  };
};

const applyFetchIdsFailure = (state, { payload: { error } }) => {
  return {
    ...state,
    isFetching: false,
    error
  };
};

export default idReducer;
