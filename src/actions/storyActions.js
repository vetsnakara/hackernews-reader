import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
  FETCH_IDS_REQUEST,
  FETCH_IDS_SUCCESS,
  FETCH_IDS_FAILURE
} from "../constants/actionTypes";

import api from "../services/hackerNewsApi";

const isFetching = ({ storyState, idState }) => {
  return storyState.isFetching || idState.isFetching;
};

const doFetchIds = () => async (dispatch, getState) => {
  try {
    if (isFetching(getState())) return;

    dispatch({ type: FETCH_IDS_REQUEST });

    const ids = await api.getTopStoriesIds();
    dispatch({ type: FETCH_IDS_SUCCESS, payload: { ids } });
  } catch (error) {
    dispatch({ type: FETCH_IDS_FAILURE, payload: { error } });
  }
};

export const doFetchStories = () => async (dispatch, getState) => {
  try {
    if (isFetching(getState())) return;

    dispatch({ type: FETCH_STORIES_REQUEST });

    const {
      idState: { ids },
      storyState: { page }
    } = getState();

    if (ids.length === 0) {
      throw new Error("Story ids not fetched yet");
    }

    const nextPage = page + 1;

    const stories = await api.getStoriesByPage(ids, nextPage);
    dispatch({ type: FETCH_STORIES_SUCCESS, payload: { stories, nextPage } });
  } catch (error) {
    dispatch({ type: FETCH_STORIES_FAILURE, payload: { error } });
  }
};

export const doInitialStoriesFetch = () => async (dispatch, getState) => {
  await dispatch(doFetchIds());

  if (getState().idState.error) return;

  await dispatch(doFetchStories());
};
