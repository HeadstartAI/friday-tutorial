import React from "react";
import { IconProps } from "../types";

const MothIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <defs>
        <mask id="moth-cutout">
          <rect width="24" height="24" fill="white" />
          <circle cx="6" cy="8.5" r="0.8" fill="black" />
          <circle cx="18" cy="8.5" r="0.8" fill="black" />
          <circle cx="5.5" cy="14" r="0.6" fill="black" />
          <circle cx="18.5" cy="14" r="0.6" fill="black" />
          <path d="M7 9.5c.5-.8 1.2-1.5 2-1.8" stroke="black" strokeWidth="0.5" fill="none"/>
          <path d="M17 9.5c-.5-.8-1.2-1.5-2-1.8" stroke="black" strokeWidth="0.5" fill="none"/>
          <path d="M6.5 13c.3-.5.8-1 1.5-1.2" stroke="black" strokeWidth="0.4" fill="none"/>
          <path d="M17.5 13c-.3-.5-.8-1-1.5-1.2" stroke="black" strokeWidth="0.4" fill="none"/>
          <line x1="12" y1="7" x2="12" y2="9" stroke="black" strokeWidth="0.6"/>
          <line x1="12" y1="10.5" x2="12" y2="12.5" stroke="black" strokeWidth="0.6"/>
          <line x1="12" y1="14" x2="12" y2="15.5" stroke="black" strokeWidth="0.6"/>
        </mask>
      </defs>
      <g mask="url(#moth-cutout)">
        <path d="M10 9c-2-2.5-4.5-3.5-6.5-3 .5 2.5 2 4 4 4.5L10 9z" fill={color}/>
        <path d="M14 9c2-2.5 4.5-3.5 6.5-3-.5 2.5-2 4-4 4.5L14 9z" fill={color}/>
        <path d="M10 13c-1.5 2.5-4 3.5-6 3 .5-2 2-3.5 3.5-3.5L10 13z" fill={color}/>
        <path d="M14 13c1.5 2.5 4 3.5 6 3-.5-2-2-3.5-3.5-3.5L14 13z" fill={color}/>
        <ellipse cx="12" cy="11" rx="1.8" ry="6" fill={color}/>
      </g>
      <path d="M10.5 5c-.5-1.2-1-2.5-1.2-3.5" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M13.5 5c.5-1.2 1-2.5 1.2-3.5" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
};

export default MothIcon;
