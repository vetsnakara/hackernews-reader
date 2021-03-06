import React from "react";
import GridItem from "../GridItem";

import { GridWrapper } from "./styles";

const Grid = ({ items }) => {
  return (
    <GridWrapper>
      {items.map(item => (
        <GridItem key={item.id} item={item} />
      ))}
    </GridWrapper>
  );
};

export default Grid;
