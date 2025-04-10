export interface IconEntry {
  id: string;
  componentName: string;
  contributor: string;
  message: string;
  date?: string;
  githubUsername?: string;
}

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface IconProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
