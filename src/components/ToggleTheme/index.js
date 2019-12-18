import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { Button } from "./styles";

const ToggleTheme = ({ theme, onToggle }) => {
  return (
    <Button type="button" onClick={onToggle}>
      {theme === "dark" ? <FaSun size="24" /> : <FaMoon size="20" />}
    </Button>
  );
};

export default ToggleTheme;
