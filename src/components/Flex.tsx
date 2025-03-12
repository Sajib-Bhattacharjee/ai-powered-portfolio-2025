import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type FlexAlign = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type FlexGap = number;

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  rowGap?: FlexGap;
  columnGap?: FlexGap;
  fullWidth?: boolean;
  fullHeight?: boolean;
  animate?: boolean;
}

const Flex: React.FC<FlexProps> = ({
  children,
  className,
  direction = 'row',
  wrap = 'nowrap',
  justify = 'flex-start',
  align = 'stretch',
  gap,
  rowGap,
  columnGap,
  fullWidth = false,
  fullHeight = false,
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
    <StyledFlex
      className={className}
      direction={direction}
      wrap={wrap}
      justify={justify}
      align={align}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      initial={animate ? 'hidden' : undefined}
      animate={animate ? 'visible' : undefined}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) =>
        child ? (
          <motion.div variants={itemVariants}>{child}</motion.div>
        ) : null
      )}
    </StyledFlex>
  );
};

const StyledFlex = styled(motion.div)<{
  direction: FlexDirection;
  wrap: FlexWrap;
  justify: FlexJustify;
  align: FlexAlign;
  gap?: FlexGap;
  rowGap?: FlexGap;
  columnGap?: FlexGap;
  fullWidth: boolean;
  fullHeight: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  
  ${({ gap }) =>
    gap !== undefined &&
    css`
      gap: ${gap}rem;
    `}
  
  ${({ rowGap }) =>
    rowGap !== undefined &&
    css`
      row-gap: ${rowGap}rem;
    `}
  
  ${({ columnGap }) =>
    columnGap !== undefined &&
    css`
      column-gap: ${columnGap}rem;
    `}
  
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
  
  @media (max-width: 768px) {
    ${({ gap }) =>
      gap !== undefined &&
      css`
        gap: ${gap * 0.75}rem;
      `}
    
    ${({ rowGap }) =>
      rowGap !== undefined &&
      css`
        row-gap: ${rowGap * 0.75}rem;
      `}
    
    ${({ columnGap }) =>
      columnGap !== undefined &&
      css`
        column-gap: ${columnGap * 0.75}rem;
      `}
  }
  
  @media (max-width: 480px) {
    ${({ gap }) =>
      gap !== undefined &&
      css`
        gap: ${gap * 0.5}rem;
      `}
    
    ${({ rowGap }) =>
      rowGap !== undefined &&
      css`
        row-gap: ${rowGap * 0.5}rem;
      `}
    
    ${({ columnGap }) =>
      columnGap !== undefined &&
      css`
        column-gap: ${columnGap * 0.5}rem;
      `}
  }
`;

export default Flex; 