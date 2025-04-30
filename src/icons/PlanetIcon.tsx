import React from "react";
import { IconProps } from "../types";

const PlanetIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <ellipse cx="9" cy="9" rx="1.5" ry="1.5" fill="white" />
      <ellipse cx="15" cy="10" rx="2" ry="1" fill="white" />
    </svg>
  );
};

export default PlanetIcon;
