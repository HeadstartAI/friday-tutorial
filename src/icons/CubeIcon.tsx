import React from "react";
import { IconProps } from "../types";

const CubeIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.09 7 12 10.82 5.91 7 12 4.18zM5 8.77l6 3.46v6.95l-6-3.33V8.77zm8 10.41v-6.95l6-3.46v7.08l-6 3.33z" />
    </svg>
  );
};

export default CubeIcon;
