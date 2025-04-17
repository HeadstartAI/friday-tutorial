import React from "react";
import { IconProps } from "../types";

const SparkleIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    <path d="M12 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5-4-2.5-4 2.5 1.5-4.5-3.5-2.5h4.5z" />
    <circle cx="19" cy="5" r="1.5" />
    <circle cx="5" cy="17" r="1.5" />
    <circle cx="17" cy="19" r="1" />
    <circle cx="7" cy="7" r="1" />
  </svg>
);

export default SparkleIcon;
