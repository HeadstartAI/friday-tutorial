import React from "react";
import { IconProps } from "../types";

const AuroraIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 18 Q6 10 10 18 T18 18 T22 18" opacity="0.8" />
      <path d="M1 15 Q5 8 9 15 T17 15 T23 15" opacity="0.6" />
      <path d="M3 12 Q7 6 11 12 T19 12 T23 12" opacity="0.5" />
      <path d="M4 9 Q8 4 12 9 T20 9 T24 9" opacity="0.4" />
    </svg>
  );
};

export default AuroraIcon;
