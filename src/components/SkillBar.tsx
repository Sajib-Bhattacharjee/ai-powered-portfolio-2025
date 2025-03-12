import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color 
}) => {
  return (
    <SkillBarContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SkillInfo>
        <SkillName>{name}</SkillName>
        <SkillPercentage>{percentage}%</SkillPercentage>
      </SkillInfo>
      <ProgressContainer>
        <Progress 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          color={color || ''}
        />
      </ProgressContainer>
    </SkillBarContainer>
  );
};

const SkillBarContainer = styled(motion.div)`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const SkillPercentage = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const ProgressContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled(motion.div)<ProgressBarProps>`
  height: 100%;
  background: ${({ theme, color }) => 
    color ? color : `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`};
  border-radius: 4px;
`;

interface ProgressBarProps {
  color: string;
}

export default SkillBar; 