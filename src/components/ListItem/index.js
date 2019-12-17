import React from "react";
import { getCommentUrl, getUserUrl, getSiteHostName } from "../../utils/url";
import { secToTimeAgo } from "../../utils/timeago";

import {
  Item,
  ExternalLink,
  Title,
  Description,
  CommentLink,
  Host
} from "./styles";

const ListItem = ({
  story: { id: storyId, title, by: userId, kids: commentIds, score, url, time }
}) => {
  const host = getSiteHostName(url, "news.ycombinator.com");
  const userUrl = getUserUrl(userId);
  const commentUrl = getCommentUrl(storyId);
  const ago = secToTimeAgo(time);
  const commentNum = commentIds ? commentIds.length : 0;

  return (
    <Item>
      <ExternalLink href={url} target="_blank">
        <Title>
          {title} <Host>({host})</Host>
        </Title>
      </ExternalLink>
      <Description>
        {score} points by{" "}
        <CommentLink href={userUrl} target="_blank">
          {userId}
        </CommentLink>{" "}
        {ago} {" | "}
        <CommentLink href={commentUrl} target="_blank">
          {commentNum} comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;
