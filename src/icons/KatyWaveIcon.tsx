import React from "react";
import { IconProps } from "../types";

const KatyWaveIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M3 15c2.5-3.5 5.5-3.5 8 0s5.5 3.5 10 0v2c-4.5 3.5-7.5 3.5-10 0s-5.5-3.5-8 0v-2z" />
      <path d="M17.5 4l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
    </svg>
  );
};

export default KatyWaveIcon;
