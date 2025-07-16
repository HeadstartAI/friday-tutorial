import React from "react";
import { IconProps } from "../types";

const TreeIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 2L8 6h2v2L6 12h2v2L4 18h4v4h8v-4h4l-4-4h2v-2l-4-4h2v-2l-4-4zm0 2.83L14.17 6H13v2l2.83 2H14v2l2.83 2H13v6h-2v-6H7.17L10 12H8v-2l2.83-2H9V6H7.83L12 4.83z" />
    </svg>
  );
};

export default TreeIcon;
