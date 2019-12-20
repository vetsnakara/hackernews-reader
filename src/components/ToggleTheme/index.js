import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import Toggle from "../Toggle";

const ToggleTheme = ({ theme, onToggle }) => {
  return (
    <Toggle
      isOn={() => theme === "dark"}
      icons={{
        IconOn: <FaSun size="22" />,
        IconOff: <FaMoon size="22" />
      }}
      onToggle={onToggle}
    />
  );
};

export default ToggleTheme;
