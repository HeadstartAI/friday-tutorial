import React from "react";
import { IconProps } from "../types";

const TreeIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 2L8 8H11V12H8L12 18L16 12H13V8H16L12 2Z" />
      <rect x="11" y="18" width="2" height="4" />
    </svg>
  );
};

export default TreeIcon;
