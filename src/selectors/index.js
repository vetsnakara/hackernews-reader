import { createSelector } from "reselect";

export const isFetching = createSelector(
  state => state.storyState.isFetching,
  state => state.idState.isFetching,
  (isFetchingStories, isFetchingIds) => isFetchingStories || isFetchingIds
);

export const hasMoreStories = createSelector(
  state => state.storyState.stories.length,
  state => state.idState.ids.length,
  (storiesLength, idsLength) => {
    return idsLength === 0 || storiesLength < idsLength;
  }
);
