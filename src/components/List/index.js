import React from "react";
import { connect } from "react-redux";
import ListItem from "../ListItem";
import { ListWrapper } from "./styles";

const List = ({ stories }) => {
  return (
    <ListWrapper>
      {stories.map(story => (
        <ListItem key={story.id} story={story} />
      ))}
    </ListWrapper>
  );
};

const mapState = state => {
  return {
    stories: state.storyState.stories
  };
};

export default connect(mapState)(List);
