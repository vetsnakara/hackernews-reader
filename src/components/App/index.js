import React from "react";
import List from "../List";
import { Wrapper, Title } from "./styles";

const App = () => {
  return (
    <Wrapper>
      <Title>{"//"} Hacker News Reader</Title>
      <List />
    </Wrapper>
  );
};

export default App;
