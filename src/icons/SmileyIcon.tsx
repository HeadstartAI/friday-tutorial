import React from "react";
import { IconProps } from "../types";

const SmileyIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="9" r="1.5" fill="white" />
      <circle cx="16" cy="9" r="1.5" fill="white" />
      <path d="M7.5 14.5C9 16.5 15 16.5 16.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
};

export default SmileyIcon;
