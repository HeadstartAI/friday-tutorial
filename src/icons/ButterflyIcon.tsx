import React from "react";
import { IconProps } from "../types";

const ButterflyIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 3c-.5 0-1 .5-1 1v2.5c-1.5.5-2.5 1.5-3 2.5-1-.5-2-.5-3-.5-1.5 0-3 1-3 3s1.5 3 3 3c1 0 2 0 3-.5.5 1 1.5 2 3 2.5V19c0 .5.5 1 1 1s1-.5 1-1v-2.5c1.5-.5 2.5-1.5 3-2.5 1 .5 2 .5 3 .5 1.5 0 3-1 3-3s-1.5-3-3-3c-1 0-2 0-3 .5-.5-1-1.5-2-3-2.5V4c0-.5-.5-1-1-1zm-6 6c.8 0 1.5.2 2 .5-.3.8-.5 1.6-.5 2.5s.2 1.7.5 2.5c-.5.3-1.2.5-2 .5-1 0-1.5-.5-1.5-1.5S5 11 6 11zm12 0c1 0 1.5.5 1.5 1.5S19 14 18 14c-.8 0-1.5-.2-2-.5.3-.8.5-1.6.5-2.5s-.2-1.7-.5-2.5c.5-.3 1.2-.5 2-.5z" />
    </svg>
  );
};

export default ButterflyIcon;
