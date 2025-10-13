import React from "react";
import { IconProps } from "../types";

const RocketIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 2L9 9h6l-3-7z"/>
      <rect x="9" y="9" width="6" height="8" rx="0.5"/>
      <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.8"/>
      <path d="M7 14L9 17v3l-2-6z"/>
      <path d="M17 14L15 17v3l2-6z"/>
      <path d="M10 20v2c0 0.5 0.5 1 1 1h2c0.5 0 1-0.5 1-1v-2h-4z"/>
      <ellipse cx="10.5" cy="21" rx="0.8" ry="1.2" fill="#ff6b35" opacity="0.7"/>
      <ellipse cx="13.5" cy="21" rx="0.8" ry="1.2" fill="#ff6b35" opacity="0.7"/>
      <ellipse cx="12" cy="22" rx="1" ry="1.5" fill="#ffa500" opacity="0.6"/>
    </svg>
  );
};

export default RocketIcon;
