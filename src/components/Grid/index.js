import React from "react";
import GridItem from "../GridItem";
import { GridWrapper } from "./styles";

const Grid = ({ items }) => {
  return (
    <GridWrapper>
      {items.map(item => (
        <GridItem key={item.id} item={item} />
        // <div style={{ border: "1px solid red", color: "#fff" }} key={item.id}>
        //   {/* {JSON.stringify(item, null,   )} */}
        //   {1}
        // </div>
      ))}
    </GridWrapper>
  );
};

export default Grid;
