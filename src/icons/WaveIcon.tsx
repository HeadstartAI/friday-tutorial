import React from "react";
import { IconProps } from "../types";

const WaveIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12c2.5-2 5.5-2 8 0s5.5 2 8 0 5.5-2 8 0" />
      <path d="M2 18c2.5-2 5.5-2 8 0s5.5 2 8 0 5.5-2 8 0" />
    </svg>
  );
};

export default WaveIcon;
