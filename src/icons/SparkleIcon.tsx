import React from "react";
import { IconProps } from "../types";

const SparkleIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill={color}
       {...props}>
    <path d="M12 2l1.5 4.6L18 7l-3.7 2.7L15 14l-3-1.6L9 14l.7-4.3L6 7l4.5-.4L12 2z"/>
  </svg>
);

export default SparkleIcon;
