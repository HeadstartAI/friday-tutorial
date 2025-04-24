import React from "react";
import { IconProps } from "../types";

const LightbulbIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 14h2v1h-2v-1zm0-2h2v1h-2v-1zm3-3.74V11c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-.74c-1.22-.97-2-2.47-2-4.26 0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.79-.78 3.29-2 4.26z" />
    </svg>
  );
};

export default LightbulbIcon;
