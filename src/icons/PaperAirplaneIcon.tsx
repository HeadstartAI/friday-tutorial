import React from "react";
import { IconProps } from "../types";

const PaperAirplaneIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
};

export default PaperAirplaneIcon;
