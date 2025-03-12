import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  noPadding?: boolean;
  centered?: boolean;
  animate?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'medium',
  noPadding = false,
  centered = false,
  animate = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <StyledContainer
      className={className}
      size={size}
      noPadding={noPadding}
      centered={centered}
      initial={animate ? 'hidden' : undefined}
      animate={animate ? 'visible' : undefined}
      variants={containerVariants}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)<{
  size: 'small' | 'medium' | 'large' | 'full';
  noPadding: boolean;
  centered: boolean;
}>`
  width: 100%;
  margin: 0 auto;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          max-width: 640px;
        `;
      case 'medium':
        return css`
          max-width: 960px;
        `;
      case 'large':
        return css`
          max-width: var(--container-width);
        `;
      case 'full':
        return css`
          max-width: none;
        `;
      default:
        return '';
    }
  }}
  
  ${({ noPadding }) =>
    !noPadding &&
    css`
      padding: 0 1rem;
      
      @media (max-width: 480px) {
        padding: 0 0.75rem;
      }
    `}
  
  ${({ centered }) =>
    centered &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}
`;

export default Container; 