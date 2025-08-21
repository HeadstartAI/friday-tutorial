import React from "react";
import { IconProps } from "../types";

const PuzzleIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M20.5 11H19V7.5C19 6.12 17.88 5 16.5 5S14 6.12 14 7.5V9H9V7.5C9 6.12 7.88 5 6.5 5S4 6.12 4 7.5V11H2.5C1.12 11 0 12.12 0 13.5S1.12 16 2.5 16H4V18.5C4 19.88 5.12 21 6.5 21S9 19.88 9 18.5V17H14V18.5C14 19.88 15.12 21 16.5 21S19 19.88 19 18.5V16H20.5C21.88 16 23 14.88 23 13.5S21.88 11 20.5 11Z" />
    </svg>
  );
};

export default PuzzleIcon;
