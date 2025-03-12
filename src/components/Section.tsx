import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  centered?: boolean;
  useGradient?: boolean;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  className,
  fullWidth = false,
  noPadding = false,
  centered = false,
  useGradient = false,
  animate = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <StyledSection
      className={className}
      fullWidth={fullWidth}
      noPadding={noPadding}
      centered={centered}
      initial={animate ? 'hidden' : undefined}
      whileInView={animate ? 'visible' : undefined}
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {(title || subtitle) && (
        <SectionHeader useGradient={useGradient}>
          {title && <SectionTitle>{title}</SectionTitle>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </SectionHeader>
      )}
      <SectionContent>{children}</SectionContent>
    </StyledSection>
  );
};

const StyledSection = styled(motion.section)<{
  fullWidth: boolean;
  noPadding: boolean;
  centered: boolean;
}>`
  width: 100%;
  margin: 0 auto;
  ${({ fullWidth }) =>
    !fullWidth &&
    css`
      max-width: var(--container-width);
    `}
  
  ${({ noPadding }) =>
    !noPadding &&
    css`
      padding: 4rem 1rem;
      
      @media (max-width: 768px) {
        padding: 3rem 1rem;
      }
      
      @media (max-width: 480px) {
        padding: 2rem 1rem;
      }
    `}
  
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

const SectionHeader = styled.div<{ useGradient?: boolean }>`
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.heading};
  
  ${({ theme }) => css`
    background: ${theme.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradientFlow 8s ease infinite;
  `}
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionContent = styled.div`
  width: 100%;
`;

export default Section; 