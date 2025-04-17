import React from 'react';
import StarIcon from './StarIcon';
import SmileyIcon from './SmileyIcon';
import CompassIcon from './CompassIcon';
import RobotIcon from './RobotIcon';
import SparkleIcon from './SparkleIcon';

const iconComponents: Record<string, React.FC<any>> = {
  StarIcon,
  SmileyIcon,
  CompassIcon,
  RobotIcon,
  SparkleIcon
};

export default iconComponents;
