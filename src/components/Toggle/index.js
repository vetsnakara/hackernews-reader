import React from "react";

import { Button } from "./styles";

const Toggle = ({ isOn, icons: { IconOn, IconOff }, onToggle }) => {
  return (
    <Button type="button" onClick={onToggle}>
      {isOn() ? IconOn : IconOff}
    </Button>
  );
};

export default Toggle;
