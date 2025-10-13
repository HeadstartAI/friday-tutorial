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
      <path d="M12 2c-1.5 3-3 5-3 8 0 1.5.5 3 1.5 4l-3 3c-.5.5-.5 1 0 1.5l1 1c.5.5 1 .5 1.5 0l3-3c1 1 2.5 1.5 4 1.5 3 0 5-1.5 8-3-4-4-8-8-12-12zm2 10c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"/>
      <path d="M5 19c-1 1-2 2-2 3 0 .5.5 1 1 1 1 0 2-1 3-2l-2-2z"/>
    </svg>
  );
};

export default RocketIcon;
