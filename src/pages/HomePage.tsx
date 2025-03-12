import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowRight, FaLaptopCode, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { renderIcon } from '../utils/iconHelpers';
import Button from '../components/Button';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <HeroSection>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Greeting>Hello, I'm</Greeting>
              <NameHeading>Sajib Bhattacharjee</NameHeading>
              <Title>Frontend Web Developer</Title>
              <Description>
                I build exceptional and accessible digital experiences for the web.
                Focused on creating clean, user-friendly interfaces with modern technologies.
              </Description>
              
              <ButtonGroup>
                <Button 
                  to="/contact"
                  variant="primary"
                  size="large"
                  icon={renderIcon(FaArrowRight)}
                  iconPosition="right"
                >
                  Contact Me
                </Button>
                <Button 
                  to="/projects"
                  variant="outline"
                  size="large"
                >
                  View Projects
                </Button>
              </ButtonGroup>
              
              <SocialLinks>
                <SocialLink 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {renderIcon(FaGithub)}
                </SocialLink>
                <SocialLink 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {renderIcon(FaLinkedinIn)}
                </SocialLink>
                <SocialLink 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {renderIcon(FaTwitter)}
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </HeroContent>
          
          <HeroImageWrapper
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroImageContainer>
              <HeroImage src="https://avatars.githubusercontent.com/u/86997775?v=4" alt="Sajib Bhattacharjee" />
              <HeroGradientOverlay />
              <HeroPatternOverlay />
            </HeroImageContainer>
            <HeroFloatingElement
              animate={{ 
                y: ['-5px', '5px', '-5px'],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
            >
              <FloatingCard>
                <FloatingIcon>{renderIcon(FaLaptopCode)}</FloatingIcon>
                <FloatingText>Web Developer</FloatingText>
              </FloatingCard>
            </HeroFloatingElement>
            <HeroFloatingElement
              style={{ top: '10%', right: '-20px' }}
              animate={{ 
                y: ['5px', '-5px', '5px'],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <ExperienceCard>
                <ExperienceYears>5+</ExperienceYears>
                <ExperienceText>Years Experience</ExperienceText>
              </ExperienceCard>
            </HeroFloatingElement>
            <DownloadResumeButton 
              href="/resume.pdf" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {renderIcon(FaDownload)} Resume
            </DownloadResumeButton>
          </HeroImageWrapper>
        </HeroSection>
      </HomeContainer>
      
      <FeaturedSection>
        <HomeContainer>
          <SectionHeading>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <SectionDescription>
              A selection of my recent work. Check out my complete portfolio for more.
            </SectionDescription>
          </SectionHeading>
          
          <FeaturedProjectsGrid>
            <FeaturedProject 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage src="https://via.placeholder.com/600x400?text=Featured+Project" alt="Featured Project" />
              <ProjectContent>
                <ProjectTitle>E-Commerce Platform</ProjectTitle>
                <ProjectDescription>
                  A full-featured online store with product listings, cart functionality, payment processing, and user authentication.
                </ProjectDescription>
                <ProjectTags>
                  <Tag>React</Tag>
                  <Tag>Node.js</Tag>
                  <Tag>MongoDB</Tag>
                </ProjectTags>
                <Link to="/projects/ecommerce-platform" className="project-link">View Details</Link>
              </ProjectContent>
            </FeaturedProject>
            
            <FeaturedProject 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage src="https://via.placeholder.com/600x400?text=Featured+Project" alt="Featured Project" />
              <ProjectContent>
                <ProjectTitle>Portfolio Website</ProjectTitle>
                <ProjectDescription>
                  A modern, responsive portfolio website showcasing projects, skills, and contact information.
                </ProjectDescription>
                <ProjectTags>
                  <Tag>React</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>Styled Components</Tag>
                </ProjectTags>
                <Link to="/projects/portfolio-website" className="project-link">View Details</Link>
              </ProjectContent>
            </FeaturedProject>
          </FeaturedProjectsGrid>
          
          <ViewAllButtonWrapper>
            <Button 
              to="/projects"
              variant="primary"
              size="large"
              icon={renderIcon(FaArrowRight)}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </ViewAllButtonWrapper>
        </HomeContainer>
      </FeaturedSection>
      
      <TestimonialsSection />
      
      <ServicesSection>
        <HomeContainer>
          <SectionHeading>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services I Offer
            </motion.h2>
            <motion.div 
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </SectionHeading>
          
          <ServicesGrid>
            <ServiceCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>💻</ServiceIcon>
              <ServiceTitle>Web Development</ServiceTitle>
              <ServiceDescription>
                Creating responsive, modern websites using the latest technologies like React, Next.js, and more.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>🎨</ServiceIcon>
              <ServiceTitle>UI/UX Design</ServiceTitle>
              <ServiceDescription>
                Designing intuitive, beautiful user interfaces that enhance user experience and engagement.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>📱</ServiceIcon>
              <ServiceTitle>Mobile Development</ServiceTitle>
              <ServiceDescription>
                Building cross-platform mobile applications using React Native for both iOS and Android.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>🔌</ServiceIcon>
              <ServiceTitle>API Development</ServiceTitle>
              <ServiceDescription>
                Creating robust and scalable RESTful APIs using Node.js, Express, and MongoDB.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </HomeContainer>
      </ServicesSection>
    </>
  );
};

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
  align-items: center;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 991px) {
    text-align: center;
    order: 2;
  }
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const NameHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 991px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 991px) {
    order: 1;
    height: 380px;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 991px) {
    width: 280px;
    height: 280px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
`;

const HeroGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 112, 243, 0.5), rgba(77, 171, 247, 0.3));
  mix-blend-mode: overlay;
`;

const HeroPatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
  background-size: 50px 50px;
`;

const HeroFloatingElement = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: -30px;
  z-index: 10;
  
  @media (max-width: 576px) {
    display: none;
  }
`;

const FloatingCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const FloatingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50%;
  font-size: 1rem;
`;

const FloatingText = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
`;

const ExperienceCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.borderColor};
  text-align: center;
`;

const ExperienceYears = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const ExperienceText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const DownloadResumeButton = styled(motion.a)`
  position: absolute;
  bottom: 20px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.borderColor};
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 576px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

const FeaturedSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.background};
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
  }
  
  .underline {
    height: 4px;
    background: ${({ theme }) => `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`};
    margin: 0 auto;
    border-radius: 2px;
  }
`;

const SectionDescription = styled.p`
  max-width: 600px;
  margin: 1.5rem auto 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadowColor};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.borderColor};
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const FeaturedProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeaturedProject = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadowColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  
  .project-link {
    display: inline-block;
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.backgroundHover};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ViewAllButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export default HomePage; 