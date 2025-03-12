import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

// Sample project data - would be replaced with actual data from an API or database
const projectsData = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB, featuring product listings, cart functionality, user authentication, and payment processing.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Project",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "web",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A weather application that shows current weather and forecasts using OpenWeatherMap API.",
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    tags: ["React", "API", "CSS"],
    category: "web",
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.com"
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "A task management application with features like drag-and-drop, categories, priorities, and notifications.",
    image: "https://via.placeholder.com/600x400?text=Task+Manager",
    tags: ["React", "Redux", "Firebase"],
    category: "web",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and styled-components, featuring dark mode and animations.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    tags: ["React", "Styled Components", "Framer Motion"],
    category: "web",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://portfolio-demo.com"
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    description: "A recipe application that allows users to search, save, and share recipes. Features include user authentication and a favorites system.",
    image: "https://via.placeholder.com/600x400?text=Recipe+App",
    tags: ["React Native", "Firebase", "API"],
    category: "mobile",
    githubUrl: "https://github.com/yourusername/recipe-app",
    liveUrl: "https://recipe-app-demo.com"
  },
  {
    id: "chat-application",
    title: "Chat Application",
    description: "A real-time chat application with features like private messaging, group chats, and file sharing.",
    image: "https://via.placeholder.com/600x400?text=Chat+App",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "web",
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-app-demo.com"
  }
];

// Get all unique categories from projects
const allCategories = ['all', ...Array.from(new Set(projectsData.map(project => project.category)))];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on category and search term
  useEffect(() => {
    let filteredProjects = projectsData;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filteredProjects = filteredProjects.filter(project => 
        project.category === activeCategory
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredProjects = filteredProjects.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setProjects(filteredProjects);
  }, [activeCategory, searchTerm]);

  return (
    <ProjectsContainer>
      <SectionTitle 
        title="My Projects" 
        subtitle="Recent Work"
      />
      
      <FiltersContainer>
        <SearchContainer>
          <SearchInput 
            type="text" 
            placeholder="Search projects..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <CategoriesContainer>
          {allCategories.map((category, index) => (
            <CategoryButton 
              key={index}
              active={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))}
        </CategoriesContainer>
      </FiltersContainer>
      
      <ProjectsGrid>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                {...project}
                category={project.category || 'Project'}
                index={index}
              />
            </motion.div>
          ))
        ) : (
          <NoResults>
            <h3>No projects found</h3>
            <p>Try changing your search criteria</p>
          </NoResults>
        )}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 300px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface CategoryButtonProps {
  active: boolean;
}

const CategoryButton = styled.button<CategoryButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({ theme, active }) => 
    active ? theme.primary : theme.borderColor};
  background-color: ${({ theme, active }) => 
    active ? theme.primary : 'transparent'};
  color: ${({ theme, active }) => 
    active ? 'white' : theme.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme, active }) => 
      active ? theme.primary : theme.backgroundSecondary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.textSecondary};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
  }
`;

export default Projects; 