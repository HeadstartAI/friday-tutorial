import React from "react";
import { IconProps } from "../types";

const BridgeIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M3 18v-2h2v-4c0-1.1.9-2 2-2h2V8H7c-1.1 0-2-.9-2-2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v2c0 1.1-.9 2-2 2h-2v2h2c1.1 0 2 .9 2 2v4h2v2H3zm6-2h2v-4h-2v4zm4 0h2v-4h-2v4z" />
    </svg>
  );
};

export default BridgeIcon;
