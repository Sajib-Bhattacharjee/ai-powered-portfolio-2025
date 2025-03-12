import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type AccentColor = 'blue' | 'purple' | 'teal' | 'cyan' | 'green' | 'orange' | 'pink' | 'indigo' | 'red';

interface CardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  accentColor?: AccentColor;
  className?: string;
  onClick?: () => void;
  isHoverable?: boolean;
  useGradient?: boolean;
}

const cardAccentColors = {
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

const StyledCard = styled(motion.div)<{
  variant?: string;
  accentColor?: string;
  isHoverable?: boolean;
  useGradient?: boolean;
}>`
  background: ${({ theme, variant, useGradient }) =>
    useGradient
      ? variant === 'primary'
        ? theme.gradient.primary
        : theme.gradient.secondary
      : theme.cardBackground};
  border-radius: var(--border-radius);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ isHoverable }) =>
    isHoverable &&
    `
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
    }
  `}

  box-shadow: 0 4px 6px ${({ theme }) => theme.shadowColor};
  
  &:hover {
    box-shadow: 0 8px 12px ${({ theme }) => theme.shadowColor};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme, accentColor, variant }) =>
      accentColor
        ? theme.cardAccent[accentColor as keyof typeof cardAccentColors]
        : variant === 'primary'
        ? theme.primary
        : variant === 'secondary'
        ? theme.secondary
        : theme.tertiary};
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Card: React.FC<CardProps> = ({
  children,
  variant = 'primary',
  accentColor,
  className,
  onClick,
  isHoverable = true,
  useGradient = false,
}) => {
  return (
    <StyledCard
      variant={variant}
      accentColor={accentColor}
      className={className}
      onClick={onClick}
      isHoverable={isHoverable}
      useGradient={useGradient}
      whileHover={isHoverable ? { y: -5 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </StyledCard>
  );
};

export default Card; 