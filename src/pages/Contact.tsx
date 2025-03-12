import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { renderIcon } from '../utils/iconHelpers';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <Title>Get In Touch</Title>
        <Description>
          Have a project in mind or want to discuss a potential collaboration? 
          Feel free to reach out using the form below or through any of my contact channels.
        </Description>
      </Header>
      
      <ContactSection>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          <InfoDescription>
            Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible.
          </InfoDescription>
          
          <ContactMethods>
            <ContactMethod>
              <IconWrapper>
                {renderIcon(FiMail)}
              </IconWrapper>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue href="mailto:your.email@example.com">
                  your.email@example.com
                </ContactValue>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <IconWrapper>
                {renderIcon(FiPhone)}
              </IconWrapper>
              <ContactDetails>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue href="tel:+1234567890">
                  +1 (234) 567-890
                </ContactValue>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <IconWrapper>
                {renderIcon(FiMapPin)}
              </IconWrapper>
              <ContactDetails>
                <ContactLabel>Location</ContactLabel>
                <ContactValue as="span">
                  Dhaka, Bangladesh
                </ContactValue>
              </ContactDetails>
            </ContactMethod>
          </ContactMethods>
          
          <SocialLinks>
            <SocialLink 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              {renderIcon(FiLinkedin)}
            </SocialLink>
            <SocialLink 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              {renderIcon(FiGithub)}
            </SocialLink>
            <SocialLink 
              href="https://twitter.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              {renderIcon(FiTwitter)}
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <FormWrapper>
          <ContactForm />
        </FormWrapper>
      </ContactSection>
    </Container>
  );
};

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadowColor};
`;

const InfoTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const InfoDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
`;

export default Contact; 