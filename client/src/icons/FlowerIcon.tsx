import React from "react";
import { IconProps } from "../types";

const FlowerIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2L12 9" />
      <path d="M12 15L12 22" />
      <path d="M2 12L9 12" />
      <path d="M15 12L22 12" />
      <path d="M4.93 4.93L9.17 9.17" />
      <path d="M14.83 14.83L19.07 19.07" />
      <path d="M19.07 4.93L14.83 9.17" />
      <path d="M9.17 14.83L4.93 19.07" />
    </svg>
  );
};

export default FlowerIcon;
