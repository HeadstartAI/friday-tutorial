import React from "react";
import { IconProps } from "../types";

const FireworksIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="1" fill={color} />
      <g>
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.2" y1="4.2" x2="6.8" y2="6.8" />
        <line x1="17.2" y1="17.2" x2="19.8" y2="19.8" />
        <line x1="4.2" y1="19.8" x2="6.8" y2="17.2" />
        <line x1="17.2" y1="6.8" x2="19.8" y2="4.2" />
      </g>
      <g>
        <circle cx="6" cy="6" r="0.5" fill={color} />
        <circle cx="18" cy="6" r="0.5" fill={color} />
        <circle cx="6" cy="18" r="0.5" fill={color} />
        <circle cx="18" cy="18" r="0.5" fill={color} />
      </g>
    </svg>
  );
};

export default FireworksIcon;
