import React from 'react';

const intentClass = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted',
  inverse: 'text-inverse',
  error: 'text-error',
  success: 'text-success',
  warning: 'text-warning',
  brand: 'text-brand',
};

const sizeClass = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
};

const weightClass = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

export default function Text({
  as: Component = 'span',
  intent = 'primary',
  size = 'base',
  weight = 'normal',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`font-rubik ${intentClass[intent] || ''} ${sizeClass[size] || ''} ${weightClass[weight] || ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
} 