import React from "react";
import { IconProps } from "../types";

const DiamondIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
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
      <path d="M12 2l9 7.5L12 22 3 9.5z" />
      <path d="M3 9.5h18" />
      <path d="M12 2l-4.5 7.5L12 22l4.5-12.5z" />
    </svg>
  );
};

export default DiamondIcon;
