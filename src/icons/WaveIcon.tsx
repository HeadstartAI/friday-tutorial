import React from "react";
import { IconProps } from "../types";

const WaveIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} {...props}>
      <path d="M1 9C4.3 4 7.7 4 11 9s6.7 5 10 0v3c-3.3 5-6.7 5-10 0S4.3 7 1 12V9z"/>
      <path d="M1 15c3.3-5 6.7-5 10 0s6.7 5 10 0v3c-3.3 5-6.7 5-10 0s-6.7-5-10 0v-3z"/>
    </svg>
  );
};

export default WaveIcon;
