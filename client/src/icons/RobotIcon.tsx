import React from "react";
import { IconProps } from "../types";

const RobotIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <rect x="7" y="2" width="10" height="3" rx="1" />
      <rect x="5" y="5" width="14" height="12" rx="2" />
      <rect x="8" y="17" width="8" height="4" rx="1" />
      <rect x="3" y="8" width="2" height="6" rx="1" />
      <rect x="19" y="8" width="2" height="6" rx="1" />
      <circle cx="9" cy="9" r="1.5" />
      <circle cx="15" cy="9" r="1.5" />
      <rect x="8" y="13" width="8" height="1.5" rx="0.75" />
    </svg>
  );
};

export default RobotIcon;
