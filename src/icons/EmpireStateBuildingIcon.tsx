import React from "react";
import { IconProps } from "../types";

const EmpireStateBuildingIcon: React.FC<IconProps> = ({ color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      {/* Spire */}
      <rect x="11.5" y="1" width="1" height="3"/>
      {/* Antenna base */}
      <rect x="11" y="4" width="2" height="1"/>
      {/* Crown tier 1 (top) */}
      <rect x="10.5" y="5" width="3" height="1"/>
      {/* Crown tier 2 */}
      <rect x="10" y="6" width="4" height="1"/>
      {/* Crown tier 3 */}
      <rect x="9.5" y="7" width="5" height="1"/>
      {/* Upper body step 1 */}
      <rect x="9" y="8" width="6" height="2"/>
      {/* Upper body step 2 */}
      <rect x="8.5" y="10" width="7" height="2"/>
      {/* Mid body step */}
      <rect x="8" y="12" width="8" height="2"/>
      {/* Lower body step */}
      <rect x="7" y="14" width="10" height="2"/>
      {/* Base */}
      <rect x="6" y="16" width="12" height="6"/>
      {/* Ground */}
      <rect x="1" y="22" width="22" height="1"/>
    </svg>
  );
};

export default EmpireStateBuildingIcon;
