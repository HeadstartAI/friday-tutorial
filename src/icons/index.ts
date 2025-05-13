import React from 'react';
import StarIcon from './StarIcon';
import SmileyIcon from './SmileyIcon';
import CompassIcon from './CompassIcon';
import RobotIcon from './RobotIcon';
import MoonIcon from './MoonIcon';
import PlanetIcon from './PlanetIcon';
import CoffeeIcon from './CoffeeIcon';
import BookIcon from './BookIcon';

const iconComponents: Record<string, React.FC<any>> = {
  StarIcon,
  SmileyIcon,
  CompassIcon,
  RobotIcon,
  MoonIcon,
  PlanetIcon,
  CoffeeIcon,
  BookIcon
};

export default iconComponents;
