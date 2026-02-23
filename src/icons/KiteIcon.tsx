import React from "react";
import { IconProps } from "../types";

const KiteIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 2L20 10L12 16L4 10Z" />
      <rect x="4" y="9.7" width="16" height="0.6" fill="white" opacity="0.7" />
      <rect x="11.7" y="2" width="0.6" height="14" fill="white" opacity="0.7" />
      <rect x="11.7" y="16" width="0.6" height="3" />
      <path d="M12 19L9.5 20.5L12 22L14.5 20.5Z" />
    </svg>
  );
};

export default KiteIcon;
