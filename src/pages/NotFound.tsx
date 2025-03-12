import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { renderIcon } from '../utils/iconHelpers';

const NotFound: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <ErrorCode
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </ErrorCode>
        
        <Title
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Page Not Found
        </Title>
        
        <Message
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The page you are looking for doesn't exist or has been moved.
        </Message>
        
        <ButtonGroup
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button 
            as={Link} 
            to="/"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {renderIcon(FiHome)} Go to Home
          </Button>
          
          <Button 
            as="button" 
            onClick={() => window.history.back()}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {renderIcon(FiArrowLeft)} Go Back
          </Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Message = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.textSecondary};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export default NotFound; 