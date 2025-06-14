import React from 'react';
import StarIcon from './StarIcon';
import SmileyIcon from './SmileyIcon';
import CompassIcon from './CompassIcon';
import RobotIcon from './RobotIcon';
import MoonIcon from './MoonIcon';
import TreeIcon from './TreeIcon';
import PlanetIcon from './PlanetIcon';
import CoffeeIcon from './CoffeeIcon';
import BookIcon from './BookIcon';
import MusicNoteIcon from './MusicNoteIcon';

const iconComponents: Record<string, React.FC<any>> = {
  StarIcon,
  SmileyIcon,
  CompassIcon,
  RobotIcon,
  MoonIcon,
  TreeIcon
  PlanetIcon,
  CoffeeIcon,
  BookIcon,
  MusicNoteIcon
};

export default iconComponents;
