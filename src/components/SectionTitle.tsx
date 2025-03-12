import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light = false
}) => {
  return (
    <TitleContainer centered={centered}>
      <Title 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        light={light}
      >
        {title}
      </Title>
      
      {subtitle && (
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          light={light}
          centered={centered}
        >
          {subtitle}
        </Subtitle>
      )}
      
      <Underline 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        centered={centered}
        light={light}
      />
    </TitleContainer>
  );
};

interface TitleContainerProps {
  centered: boolean;
}

const TitleContainer = styled.div<TitleContainerProps>`
  margin-bottom: 3rem;
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
`;

interface TitleProps {
  light: boolean;
}

const Title = styled(motion.h2)<TitleProps>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme, light }) => light ? 'white' : theme.text};
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

interface SubtitleProps extends TitleProps {
  centered: boolean;
}

const Subtitle = styled(motion.p)<SubtitleProps>`
  font-size: 1.25rem;
  color: ${({ theme, light }) => light ? 'rgba(255, 255, 255, 0.8)' : theme.textSecondary};
  max-width: 600px;
  line-height: 1.6;
  margin: ${({ centered }) => centered ? '0 auto 1.5rem' : '0 0 1.5rem'};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

interface UnderlineProps {
  centered: boolean;
  light: boolean;
}

const Underline = styled(motion.div)<UnderlineProps>`
  height: 4px;
  background: ${({ theme, light }) => light ? 'white' : theme.primary};
  border-radius: 2px;
  margin: ${({ centered }) => centered ? '0 auto' : '0'};
`;

export default SectionTitle; 