import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  useGradient?: boolean;
  accentColor?: keyof typeof badgeAccentColors;
}

const badgeAccentColors = {
  teal: '#38B2AC',
  purple: '#805AD5',
  indigo: '#667EEA',
  blue: '#4299E1',
  cyan: '#0BC5EA',
  green: '#48BB78',
  orange: '#ED8936',
  pink: '#ED64A6',
  red: '#F56565',
};

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  useGradient = false,
  accentColor,
}) => {
  return (
    <StyledBadge
      className={className}
      variant={variant}
      size={size}
      useGradient={useGradient}
      accentColor={accentColor}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled(motion.span)<{
  variant: BadgeVariant;
  size: BadgeSize;
  useGradient?: boolean;
  accentColor?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-weight: 500;
  border-radius: 9999px;
  transition: all 0.2s ease;
  white-space: nowrap;

  /* Size variants */
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.375rem 1rem;
      font-size: 0.875rem;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 0.5rem 1.25rem;
      font-size: 1rem;
    `}

  /* Color variants */
  ${({ theme, variant, useGradient, accentColor }) => {
    if (useGradient) {
      return css`
        background: ${variant === 'secondary'
          ? theme.gradient.secondary
          : theme.gradient.primary};
        color: white;
        background-size: 200% 200%;
        animation: gradientFlow 8s ease infinite;
      `;
    }

    const baseColor = accentColor ? badgeAccentColors[accentColor as keyof typeof badgeAccentColors] : undefined;

    switch (variant) {
      case 'primary':
        return css`
          background-color: ${baseColor || theme.primary};
          color: white;
        `;
      case 'secondary':
        return css`
          background-color: ${baseColor || theme.secondary};
          color: white;
        `;
      case 'tertiary':
        return css`
          background-color: ${baseColor || theme.tertiary};
          color: white;
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid ${baseColor || theme.primary};
          color: ${baseColor || theme.primary};
        `;
      case 'ghost':
        return css`
          background-color: ${theme.backgroundSecondary};
          color: ${baseColor || theme.text};

          &:hover {
            background-color: ${theme.backgroundHover};
          }
        `;
      default:
        return '';
    }
  }}

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Badge; 