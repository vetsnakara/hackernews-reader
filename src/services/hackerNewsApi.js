import HttpService from "./httpService";
import paginate from "../utils/paginate";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const PAGE_SIZE = 20;

const http = new HttpService({ baseURL: BASE_URL });

const hackerNewsApi = {
  getStory: id => http.get(`/item/${id}.json`),
  getTopStoriesIds: () => http.get("/topstories.json"),
  getStoriesByPage: (ids, page) => {
    const paginatedIds = paginate(ids, page, PAGE_SIZE);
    const storyPromises = paginatedIds.map(id => hackerNewsApi.getStory(id));
    return Promise.all(storyPromises);
  }
};

export default hackerNewsApi;
