import React from "react";
import { IconProps } from "../types";

const MountainIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M14 2l6 9 4 11H0l4-11 6-9 4 5.5L14 2zm0 4.5L12 9l-2-3-4 7 2 5h12l2-5-4-7-2 .5z" />
    </svg>
  );
};

export default MountainIcon;
