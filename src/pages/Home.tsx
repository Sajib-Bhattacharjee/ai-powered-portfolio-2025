import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { renderIcon } from '../utils/iconHelpers';

// Placeholder for profile image (will be replaced with user's actual image)
const placeholderImage = 'https://via.placeholder.com/400';

const Home: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { ease: 'easeInOut' } 
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5
      }
    }
  };
  
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeroSection>
        <TextContent>
          <motion.div variants={itemVariants}>
            <Greeting>Hello, I'm</Greeting>
            <Name>Sajib Bhattacharjee</Name>
            <Title>Frontend Web Developer</Title>
            <Description>
              I build exceptional digital experiences for the web.
              Specializing in creating responsive and intuitive user interfaces.
            </Description>
            
            <ButtonContainer>
              <PrimaryButton 
                to="/contact"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch {renderIcon(FaArrowRight)}
              </PrimaryButton>
              <SecondaryButton 
                to="/projects"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </SecondaryButton>
            </ButtonContainer>
            
            <SocialLinks>
              <SocialLink 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {renderIcon(FaGithub)}
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {renderIcon(FaLinkedinIn)}
              </SocialLink>
              <SocialLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {renderIcon(FaTwitter)}
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </TextContent>
        
        <ImageContent variants={itemVariants}>
          <ProfileImage
            src="/images/profile.jpg"
            alt="Sajib Bhattacharjee"
          />
          <BackgroundCircle />
        </ImageContent>
      </HeroSection>
      
      <SkillsSection>
        <SectionHeader variants={itemVariants}>
          <SectionTitle>My Skills</SectionTitle>
          <SectionSubtitle>Expertise in modern web technologies</SectionSubtitle>
        </SectionHeader>
        
        <SkillsContainer variants={itemVariants}>
          <SkillBar>
            <SkillInfo>
              <SkillName>HTML / CSS</SkillName>
              <SkillPercentage>90%</SkillPercentage>
            </SkillInfo>
            <ProgressBar>
              <Progress style={{ width: '90%' }} />
            </ProgressBar>
          </SkillBar>
          
          <SkillBar>
            <SkillInfo>
              <SkillName>JavaScript</SkillName>
              <SkillPercentage>85%</SkillPercentage>
            </SkillInfo>
            <ProgressBar>
              <Progress style={{ width: '85%' }} />
            </ProgressBar>
          </SkillBar>
          
          <SkillBar>
            <SkillInfo>
              <SkillName>React.js</SkillName>
              <SkillPercentage>80%</SkillPercentage>
            </SkillInfo>
            <ProgressBar>
              <Progress style={{ width: '80%' }} />
            </ProgressBar>
          </SkillBar>
          
          <SkillBar>
            <SkillInfo>
              <SkillName>Node.js</SkillName>
              <SkillPercentage>75%</SkillPercentage>
            </SkillInfo>
            <ProgressBar>
              <Progress style={{ width: '75%' }} />
            </ProgressBar>
          </SkillBar>
          
          <ViewAllButton
            to="/about"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Skills {renderIcon(FaArrowRight)}
          </ViewAllButton>
        </SkillsContainer>
      </SkillsSection>
    </Container>
  );
};

const Container = styled(motion.div)`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--light-text-color);
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 500px;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PrimaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const SecondaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--light-background);
  color: var(--text-color);
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const ImageContent = styled(motion.div)`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  opacity: 0.2;
  z-index: 1;
`;

const SkillsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--light-background);
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  color: var(--light-text-color);
`;

const SkillsContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SkillBar = styled.div`
  margin-bottom: 2rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillPercentage = styled.span`
  font-weight: 700;
  color: var(--primary-color);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 5px;
`;

const ViewAllButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

export default Home; 