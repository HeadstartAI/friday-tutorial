import React from "react";
import { IconProps } from "../types";

const GearRocketIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.13 5.07L10.26 2.15L13.74 2.15L14.87 5.07L17.74 3.81L20.19 6.26L18.93 9.13L21.85 10.26L21.85 13.74L18.93 14.87L20.19 17.74L17.74 20.19L14.87 18.93L13.74 21.85L10.26 21.85L9.13 18.93L6.26 20.19L3.81 17.74L5.07 14.87L2.15 13.74L2.15 10.26L5.07 9.13L3.81 6.26L6.26 3.81Z M17 12A5 5 0 1 1 7 12A5 5 0 1 1 17 12Z"
      />
      <path d="M12 7.5L10.5 10V14H13.5V10Z" />
      <path d="M10.5 12L9 14.5L10.5 14Z" />
      <path d="M13.5 12L15 14.5L13.5 14Z" />
      <circle cx="12" cy="11" r="0.8" fill="white" opacity="0.8" />
      <ellipse cx="12" cy="15.5" rx="1" ry="1.5" fill="#ff6b35" opacity="0.8" />
    </svg>
  );
};

export default GearRocketIcon;
