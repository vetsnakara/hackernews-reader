import React from "react";

import {
  Item,
  ExternalLink,
  Title,
  Description,
  CommentLink,
  Host
} from "./styles";

const ListItem = () => {
  return (
    <Item>
      <ExternalLink href="#" target="_blank">
        <Title>
          The Developer Community <Host>(gitconnected.com)</Host>
        </Title>
      </ExternalLink>
      <Description>
        9000 points by{" "}
        <CommentLink href="#" target="_blank">
          Test User
        </CommentLink>{" "}
        1 Hour Ago {" | "}
        <CommentLink href="#" target="_blank">
          42 comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;
