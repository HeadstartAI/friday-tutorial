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
      <path d="M20.5 11H19V7.5C19 6.12 17.88 5 16.5 5S14 6.12 14 7.5V9H12.5C11.12 9 10 10.12 10 11.5S11.12 14 12.5 14H14V16.5C14 17.88 15.12 19 16.5 19S19 17.88 19 16.5V15H20.5C21.88 15 23 13.88 23 12.5S21.88 11 20.5 11ZM9 11H7.5C6.12 11 5 9.88 5 8.5S6.12 6 7.5 6H9V4.5C9 3.12 10.12 2 11.5 2S14 3.12 14 4.5V6H15.5C16.88 6 18 7.12 18 8.5S16.88 11 15.5 11H14V12.5C14 13.88 12.88 15 11.5 15S9 13.88 9 12.5V11Z" />
    </svg>
  );
};

export default PuzzleIcon;
