import React from 'react';
import StarIcon from './StarIcon';
import SmileyIcon from './SmileyIcon';
import CompassIcon from './CompassIcon';
import RobotIcon from './RobotIcon';
import MountainIcon from './MountainIcon';

const iconComponents: Record<string, React.FC<any>> = {
  StarIcon,
  SmileyIcon,
  CompassIcon,
  RobotIcon,
  MountainIcon
};

export default iconComponents;
