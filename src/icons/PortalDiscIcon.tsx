import React from "react";
import { IconProps } from "../types";

const PortalDiscIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 6v12M6 12h12" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
      <path d="M12 3l1 3-1 3-1-3z" />
      <path d="M21 12l-3 1-3-1 3-1z" />
      <path d="M12 21l-1-3 1-3 1 3z" />
      <path d="M3 12l3-1 3 1-3 1z" />
    </svg>
  );
};

export default PortalDiscIcon;
