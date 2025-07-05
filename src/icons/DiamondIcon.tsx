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
      <path d="M12 2l6 8-6 12-6-12 6-8z M6.5 8.5h11L12 4.5 6.5 8.5z M7.5 10.5L12 19l4.5-8.5h-9z" />
    </svg>
  );
};

export default DiamondIcon;
