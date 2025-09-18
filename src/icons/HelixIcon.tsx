import React from "react";
import { IconProps } from "../types";

const HelixIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
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
      <path d="M4 4c4 0 4 8 8 8s4-8 8-8" />
      <path d="M4 20c4 0 4-8 8-8s4 8 8 8" />
      <line x1="6" y1="7" x2="18" y2="17" />
      <line x1="6" y1="17" x2="18" y2="7" />
    </svg>
  );
};

export default HelixIcon;
