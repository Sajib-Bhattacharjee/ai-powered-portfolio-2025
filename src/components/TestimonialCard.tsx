import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
 ;
import { FaQuoteLeft } from "react-icons/fa6";
import Card, { AccentColor } from './Card';
import { renderIcon } from '../utils/iconHelpers';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  role: string;
  company: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  role,
  company,
  image,
  delay = 0
}) => {
  const getAccentColor = (): AccentColor => {
    const colors: AccentColor[] = ['blue', 'purple', 'teal', 'cyan', 'green'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Card accentColor={getAccentColor()}>
      <TestimonialContainer>
        <QuoteIconWrapper>
          {renderIcon(FaQuoteLeft, 24)}
        </QuoteIconWrapper>
        
        <Content>
          <TestimonialText>{testimonial}</TestimonialText>
          
          <AuthorInfo>
            <AuthorImage src={image} alt={name} />
            <AuthorDetails>
              <AuthorName>{name}</AuthorName>
              <AuthorRole>
                {role} at <CompanyName>{company}</CompanyName>
              </AuthorRole>
            </AuthorDetails>
          </AuthorInfo>
        </Content>
      </TestimonialContainer>
    </Card>
  );
};

const TestimonialContainer = styled.div`
  position: relative;
  padding-top: 1rem;
`;

const QuoteIconWrapper = styled.div`
  position: absolute;
  top: -1rem;
  left: -0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  opacity: 0.2;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TestimonialText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary};
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  color: ${({ theme }) => theme.heading};
  font-weight: 600;
  font-size: 1rem;
`;

const AuthorRole = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
`;

const CompanyName = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

export default TestimonialCard; 