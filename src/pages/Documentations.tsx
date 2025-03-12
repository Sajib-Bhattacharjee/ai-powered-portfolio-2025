import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaGithub, FaBook } from 'react-icons/fa';
import { renderIcon } from '../utils/iconHelpers';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

// Documentation data
const documentationsData = [
  {
    id: 1,
    title: 'React Router DOM v6 Guide',
    description: 'A comprehensive guide to using React Router DOM v6 for navigation in React applications.',
    image: 'https://via.placeholder.com/800x450?text=React+Router',
    tags: ['React', 'Routing', 'Frontend'],
    github: 'https://github.com/yourusername/react-router-guide',
    demo: 'https://react-router-guide.example.com',
  },
  {
    id: 2,
    title: 'State Management with Redux Toolkit',
    description: 'Learn how to manage state efficiently in React applications using Redux Toolkit.',
    image: 'https://via.placeholder.com/800x450?text=Redux+Toolkit',
    tags: ['React', 'Redux', 'State Management'],
    github: 'https://github.com/yourusername/redux-toolkit-guide',
    demo: 'https://redux-toolkit-guide.example.com',
  },
  {
    id: 3,
    title: 'CSS Grid Layout System',
    description: 'A documentation on creating responsive layouts using CSS Grid with examples and use cases.',
    image: 'https://via.placeholder.com/800x450?text=CSS+Grid',
    tags: ['CSS', 'Layout', 'Frontend'],
    github: 'https://github.com/yourusername/css-grid-guide',
    demo: 'https://css-grid-guide.example.com',
  },
  {
    id: 4,
    title: 'Custom React Hooks Collection',
    description: 'A collection of useful custom React hooks to enhance your applications with reusable functionality.',
    image: 'https://via.placeholder.com/800x450?text=React+Hooks',
    tags: ['React', 'Hooks', 'JavaScript'],
    github: 'https://github.com/yourusername/react-hooks-collection',
    demo: 'https://react-hooks-collection.example.com',
  }
];

const Documentations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredDocs = documentationsData.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle 
        title="Documentations" 
        subtitle="Guides, tutorials, and resources I've created" 
      />
      
      <SearchSection>
        <SearchContainer>
          <SearchInput 
            type="text" 
            placeholder="Search documentations..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchIcon>
            {renderIcon(FaSearch)}
          </SearchIcon>
        </SearchContainer>
      </SearchSection>
      
      <DocsGrid>
        {filteredDocs.length > 0 ? (
          filteredDocs.map(doc => (
            <DocCard
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <DocImage>
                <img src={doc.image} alt={doc.title} />
              </DocImage>
              
              <DocContent>
                <DocTitle>{doc.title}</DocTitle>
                <DocDescription>{doc.description}</DocDescription>
                
                <TagsContainer>
                  {doc.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
                
                <DocActions>
                  <DocLink 
                    href={doc.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {renderIcon(FaGithub)} View Repo
                  </DocLink>
                  <ReadDocLink 
                    href={doc.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {renderIcon(FaBook)} Read Doc
                  </ReadDocLink>
                </DocActions>
              </DocContent>
            </DocCard>
          ))
        ) : (
          <NoResults>
            <h3>No documentation found</h3>
            <p>Try adjusting your search term to find what you're looking for.</p>
          </NoResults>
        )}
      </DocsGrid>
    </Container>
  );
};

const Container = styled(motion.div)`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const SearchSection = styled.div`
  margin-bottom: 3rem;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  
  &:focus-within {
    box-shadow: 0 0 0 2px var(--primary-color);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  
  &::placeholder {
    color: var(--light-text-color);
  }
`;

const SearchIcon = styled.div`
  padding: 0 1rem;
  color: var(--light-text-color);
`;

const DocsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DocCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
`;

const DocImage = styled.div`
  height: 200px;
  overflow: hidden;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DocContent = styled.div`
  padding: 1.5rem;
`;

const DocTitle = styled.h3`
  margin-bottom: 1rem;
`;

const DocDescription = styled.p`
  color: var(--light-text-color);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: var(--light-background);
  color: var(--text-color);
  padding: 0.3rem 0.6rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const DocActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const DocLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--text-color);
  color: white;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: black;
  }
`;

const ReadDocLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  grid-column: 1 / -1;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--light-text-color);
  }
`;

export default Documentations;