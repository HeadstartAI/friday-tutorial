import React from "react";
import { IconProps } from "../types";

const SpiralIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
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
      <path d="M12 2a10 10 0 1 0 7.07 2.93" />
      <path d="M12 6a6 6 0 1 0 4.24 1.76" />
      <path d="M12 10a2 2 0 1 0 1.41.59" />
    </svg>
  );
};

export default SpiralIcon;
