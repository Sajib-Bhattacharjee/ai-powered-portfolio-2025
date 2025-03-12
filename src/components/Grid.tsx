import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  minChildWidth?: string;
  autoFit?: boolean;
  autoFill?: boolean;
  animate?: boolean;
}

const Grid: React.FC<GridProps> = ({
  children,
  className,
  columns = 1,
  gap = 1,
  rowGap,
  columnGap,
  minChildWidth,
  autoFit = false,
  autoFill = false,
  animate = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <StyledGrid
      className={className}
      columns={columns}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      minChildWidth={minChildWidth}
      autoFit={autoFit}
      autoFill={autoFill}
      initial={animate ? 'hidden' : undefined}
      animate={animate ? 'visible' : undefined}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) =>
        child ? (
          <motion.div variants={itemVariants}>{child}</motion.div>
        ) : null
      )}
    </StyledGrid>
  );
};

const StyledGrid = styled(motion.div)<{
  columns: number;
  gap: number;
  rowGap?: number;
  columnGap?: number;
  minChildWidth?: string;
  autoFit: boolean;
  autoFill: boolean;
}>`
  display: grid;
  width: 100%;
  
  ${({ columns, minChildWidth, autoFit, autoFill }) => {
    if (minChildWidth) {
      return css`
        grid-template-columns: repeat(
          ${autoFit ? 'auto-fit' : autoFill ? 'auto-fill' : columns},
          minmax(${minChildWidth}, 1fr)
        );
      `;
    }
    return css`
      grid-template-columns: repeat(${columns}, 1fr);
    `;
  }}
  
  gap: ${({ gap }) => `${gap}rem`};
  row-gap: ${({ rowGap }) => rowGap && `${rowGap}rem`};
  column-gap: ${({ columnGap }) => columnGap && `${columnGap}rem`};
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(${({ minChildWidth }) => minChildWidth || '250px'}, 1fr)
    );
  }
  
  @media (max-width: 768px) {
    gap: ${({ gap }) => `${gap * 0.75}rem`};
  }
  
  @media (max-width: 480px) {
    gap: ${({ gap }) => `${gap * 0.5}rem`};
  }
`;

export default Grid; 