import React from 'react';
import StarIcon from './StarIcon';
import SmileyIcon from './SmileyIcon';
import CompassIcon from './CompassIcon';
import RobotIcon from './RobotIcon';
import MoonIcon from './MoonIcon';
import TreeIcon from './TreeIcon';

const iconComponents: Record<string, React.FC<any>> = {
  StarIcon,
  SmileyIcon,
  CompassIcon,
  RobotIcon,
  MoonIcon,
  TreeIcon
};

export default iconComponents;
