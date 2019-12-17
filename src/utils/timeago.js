import { format } from "timeago.js";

export const secToTimeAgo = sec => {
  return format(sec * 1000).toLocaleString();
};
