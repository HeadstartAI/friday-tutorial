import React from "react";
import { IconProps } from "../types";

const DiamondIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M6 2h12l4 6-10 14L2 8l4-6zm1.5 2L5 8l7 10.5L19 8l-2.5-4h-9zM8 4h8l2 3H6l2-3z" />
    </svg>
  );
};

export default DiamondIcon;
