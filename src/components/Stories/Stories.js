import React from "react";

import List from "../List";
import Grid from "../Grid";

const Stories = ({ stories, layout }) => {
  return layout === "list" ? (
    <List items={stories} />
  ) : (
    <Grid items={stories} />
  );
};

export default Stories;
