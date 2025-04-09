import React from "react";
import { IconProps } from "../types";

const CompassIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      <path d="M12 5v2" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17v2" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M5 12h2" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M17 12h2" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 8l6 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default CompassIcon;
