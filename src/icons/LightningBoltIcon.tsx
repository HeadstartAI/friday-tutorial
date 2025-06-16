import React from "react";
import { IconProps } from "../types";

const LightningBoltIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M13 2L3 14h7v8l10-12h-7z" />
    </svg>
  );
};

export default LightningBoltIcon;
