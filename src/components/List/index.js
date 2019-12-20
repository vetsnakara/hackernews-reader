import React from "react";
import ListItem from "../ListItem";
import { ListWrapper } from "./styles";

const List = ({ items }) => {
  return (
    <ListWrapper>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ListWrapper>
  );
};

export default List;
