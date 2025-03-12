import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import Button from '../components/Button';
import { renderIcon } from '../utils/iconHelpers';

// Sample projects data - would be replaced with actual data from an API or database
const projectsData = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB, featuring product listings, cart functionality, user authentication, and payment processing.",
    longDescription: `
      This e-commerce platform was built to provide a seamless shopping experience for users. The project includes features such as:
      
      • Responsive product catalog with filtering and search
      • User authentication and profile management
      • Shopping cart with persistent storage
      • Checkout process with Stripe payment integration
      • Admin dashboard for product and order management
      • Reviews and ratings system
    `,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
    challenges: "The main challenge was implementing a secure payment system and ensuring a smooth user experience across different devices and screen sizes.",
    solution: "I used Stripe's API for secure payment processing and implemented a responsive design with CSS Grid and Flexbox. The state management was handled using Redux for a consistent user experience.",
    image: "https://via.placeholder.com/1200x600?text=E-Commerce+Project",
    additionalImages: [
      "https://via.placeholder.com/800x600?text=E-Commerce+Screenshot+1",
      "https://via.placeholder.com/800x600?text=E-Commerce+Screenshot+2",
      "https://via.placeholder.com/800x600?text=E-Commerce+Screenshot+3"
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "web",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    date: "June 2023"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A weather application that shows current weather and forecasts using OpenWeatherMap API.",
    longDescription: `
      This weather application provides real-time weather information and forecasts for any location around the world. The project features:
      
      • Current weather conditions display
      • 5-day weather forecast
      • Location search functionality
      • Geolocation API integration
      • Weather alerts and notifications
      • Responsive design for all devices
    `,
    technologies: ["React", "CSS3", "OpenWeatherMap API", "Geolocation API"],
    challenges: "The main challenge was handling API rate limits and implementing accurate location-based weather data with fallback options.",
    solution: "I implemented caching to reduce API calls and used the browser's Geolocation API with IP-based location fallback for better accuracy.",
    image: "https://via.placeholder.com/1200x600?text=Weather+App",
    additionalImages: [
      "https://via.placeholder.com/800x600?text=Weather+App+Screenshot+1",
      "https://via.placeholder.com/800x600?text=Weather+App+Screenshot+2"
    ],
    tags: ["React", "API", "CSS"],
    category: "web",
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.com",
    date: "April 2023"
  }
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Simulate fetching project data
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <LoadingContainer>
        <Loader />
      </LoadingContainer>
    );
  }
  
  if (!project) {
    return (
      <NotFoundContainer>
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Button to="/projects" variant="primary">Back to Projects</Button>
      </NotFoundContainer>
    );
  }
  
  return (
    <Container>
      <BackButton to="/projects">
        {renderIcon(FiArrowLeft)} Back to Projects
      </BackButton>
      
      <Header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        
        <TagsContainer>
          {project.tags.map((tag: string, index: number) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
        
        <LinksContainer>
          {project.githubUrl && (
            <LinkButton 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {renderIcon(FiGithub)} View Code
            </LinkButton>
          )}
          
          {project.liveUrl && (
            <LinkButton 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              primary
            >
              {renderIcon(FiExternalLink)} Live Demo
            </LinkButton>
          )}
        </LinksContainer>
      </Header>
      
      <MainImage 
        src={project.image} 
        alt={project.title}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      <ContentSection>
        <SectionTitle>Project Overview</SectionTitle>
        <Paragraph>{project.longDescription}</Paragraph>
        
        <TwoColumns>
          <Column>
            <SectionTitle>Challenges</SectionTitle>
            <Paragraph>{project.challenges}</Paragraph>
          </Column>
          
          <Column>
            <SectionTitle>Solution</SectionTitle>
            <Paragraph>{project.solution}</Paragraph>
          </Column>
        </TwoColumns>
        
        <SectionTitle>Technologies Used</SectionTitle>
        <TechnologiesList>
          {project.technologies.map((tech: string, index: number) => (
            <TechnologyItem key={index}>
              {tech}
            </TechnologyItem>
          ))}
        </TechnologiesList>
      </ContentSection>
      
      {project.additionalImages && project.additionalImages.length > 0 && (
        <GallerySection>
          <SectionTitle>Project Gallery</SectionTitle>
          <Gallery>
            {project.additionalImages.map((img: string, index: number) => (
              <GalleryImage 
                key={index}
                src={img} 
                alt={`${project.title} screenshot ${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </Gallery>
        </GallerySection>
      )}
      
      <NextProjectSection>
        <SectionTitle>Other Projects</SectionTitle>
        <RelatedProjects>
          {projectsData
            .filter(p => p.id !== id)
            .slice(0, 2)
            .map((p, index) => (
              <RelatedProjectCard 
                key={p.id}
                to={`/projects/${p.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <RelatedProjectImage src={p.image} alt={p.title} />
                <RelatedProjectContent>
                  <RelatedProjectTitle>{p.title}</RelatedProjectTitle>
                  <RelatedProjectDescription>{p.description}</RelatedProjectDescription>
                </RelatedProjectContent>
              </RelatedProjectCard>
            ))}
        </RelatedProjects>
      </NextProjectSection>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.backgroundSecondary};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.primary};
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const NotFoundContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Header = styled(motion.header)`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 800px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.primary};
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

interface LinkButtonProps {
  primary?: boolean;
}

const LinkButton = styled(motion.a)<LinkButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  background-color: ${({ theme, primary }) => 
    primary ? theme.primary : 'transparent'};
  color: ${({ theme, primary }) => 
    primary ? 'white' : theme.text};
  border: 1px solid ${({ theme, primary }) => 
    primary ? theme.primary : theme.borderColor};
  
  &:hover {
    background-color: ${({ theme, primary }) => 
      primary ? theme.secondary : theme.backgroundSecondary};
    border-color: ${({ theme, primary }) => 
      primary ? theme.secondary : theme.primary};
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const MainImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadowColor};
`;

const ContentSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  
  &:not(:first-child) {
    margin-top: 3rem;
  }
`;

const Paragraph = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  white-space: pre-line;
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Column = styled.div``;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TechnologyItem = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
`;

const GallerySection = styled.section`
  margin-bottom: 4rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadowColor};
`;

const NextProjectSection = styled.section`
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const RelatedProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RelatedProjectCard = styled(motion(Link))`
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadowColor};
  transition: all 0.3s ease;
`;

const RelatedProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RelatedProjectContent = styled.div`
  padding: 1.5rem;
`;

const RelatedProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const RelatedProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export default ProjectDetails; 