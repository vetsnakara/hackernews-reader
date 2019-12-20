import React from "react";
import { FaList, FaThLarge } from "react-icons/fa";

import Toggle from "../Toggle";

const ToggleLayout = ({ layout, onToggle }) => {
  return (
    <Toggle
      isOn={() => layout === "list"}
      icons={{
        IconOn: <FaThLarge size="22" />,
        IconOff: <FaList size="22" />
      }}
      onToggle={onToggle}
    />
  );
};

export default ToggleLayout;
