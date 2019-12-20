import React from "react";
import { getCommentUrl, getSiteHostName } from "../../utils/url";

import { Card, Image, Content, Source, Title } from "./styles";

const GridItem = ({ item: { id: storyId, title, url } }) => {
  const host = getSiteHostName(url, "news.ycombinator.com");
  const commentUrl = getCommentUrl(storyId);

  return (
    <a href={commentUrl} target="__black">
      <Card>
        <Image src="https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png" />
        <Content>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <Source>{`// ${host}`}</Source>
        </Content>
      </Card>
    </a>
  );
};

export default GridItem;
