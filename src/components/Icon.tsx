import React from 'react';
import { IconProps, IconSize } from '../types';

interface SizeStyles {
  width: string;
  height: string;
}

interface EnhancedIconProps extends IconProps {
  component: React.ComponentType<IconProps>;
}

const Icon: React.FC<EnhancedIconProps> = ({ component: IconComponent, size = 'medium', color, className, style: customStyle, ...props }) => {
  const sizeClasses: Record<IconSize, SizeStyles> = {
    small: { width: '24px', height: '24px' },
    medium: { width: '48px', height: '48px' },
    large: { width: '96px', height: '96px' },
    xlarge: { width: '144px', height: '144px' }
  };

  const style = { ...sizeClasses[size], ...customStyle };

  return (
    <div className={`icon icon-${size} ${className || ''}`} style={style}>
      <IconComponent color={color} {...props} />
    </div>
  );
};

export default Icon;
