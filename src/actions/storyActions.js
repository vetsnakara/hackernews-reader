import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
  FETCH_STORIES_IDS
} from "../constants/actionTypes";

import api from "../services/hackerNewsApi";

export const doFetchStories = () => async (dispatch, getState) => {
  try {
    const {
      storyState: { isFetching, ids: stateIds, page }
    } = getState();

    if (isFetching) return;

    dispatch({ type: FETCH_STORIES_REQUEST });

    const isFirstFetch = stateIds.length === 0;
    const ids = stateIds.length > 0 ? stateIds : await api.getTopStoriesIds();

    if (isFirstFetch) {
      dispatch({ type: FETCH_STORIES_IDS, payload: { ids } });
    }

    const nextPage = page + 1;
    const stories = await api.getStoriesByPage(ids, nextPage);

    dispatch({
      type: FETCH_STORIES_SUCCESS,
      payload: {
        stories,
        page: nextPage
      }
    });
  } catch (error) {
    dispatch({ type: FETCH_STORIES_FAILURE, payload: { error } });
  }
};
