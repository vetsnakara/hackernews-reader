import debounce from "lodash/debounce";

const KEY = "hn-app-state";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(KEY);
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const saveState = debounce(state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (error) {
    console.log(error);
  }
}, 1000);
