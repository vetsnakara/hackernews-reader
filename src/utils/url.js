import url from "url";

const HN_ROOT = "http://news.ycombinator.com";
const HN_ITEM = `${HN_ROOT}/item?id=`;
const HN_USER = `${HN_ROOT}/user?id=`;

export const getCommentUrl = storyId => `${HN_ITEM}${storyId}`;

export const getUserUrl = userId => `${HN_USER}${userId}`;

export const getSiteHostName = (siteUrl, defaultHostname = "") => {
  let hostname = "";

  if (siteUrl) {
    hostname = url.parse(siteUrl).hostname;
  }

  if (hostname.includes("www")) {
    hostname = hostname.split("www.")[1];
  }

  return hostname || defaultHostname;
};
