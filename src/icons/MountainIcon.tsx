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
      <path d="M22 21H2L12 3L22 21Z" />
      <path d="M19 21L13 11L16 15L19 21Z" fill="white" />
      <path d="M9 13L4 21H14L9 13Z" fill="white" />
      <circle cx="7.5" cy="10.5" r="1" fill="white" />
    </svg>
  );
};

export default MountainIcon;
