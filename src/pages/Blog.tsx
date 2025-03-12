import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import { renderIcon } from '../utils/iconHelpers';
import SectionTitle from '../components/SectionTitle';

// Sample blog data (replace with actual API call in production)
const blogData = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state.',
    content: '',
    image: 'https://via.placeholder.com/800x450',
    slug: 'getting-started-with-react-hooks',
    date: 'June 15, 2023',
    author: 'Sajib Bhattacharjee',
    categories: ['React', 'JavaScript', 'Web Development']
  },
  // ... more blog entries
];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogData);
  
  useEffect(() => {
    const results = posts.filter(post => {
      return (
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase())) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPosts(results);
  }, [searchTerm, posts]);
  
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
        title="Blog" 
        subtitle="Articles, tutorials, and thoughts on web development" 
      />
      
      <SearchSection>
        <SearchInput 
          type="text" 
          placeholder="Search blog posts..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchSection>
      
      <BlogGrid>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <BlogPost 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <PostImage>
                <img src={post.image} alt={post.title} />
              </PostImage>
              
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                
                <PostMeta>
                  <MetaItem>
                    {renderIcon(FaCalendarAlt)} {post.date}
                  </MetaItem>
                  <MetaItem>
                    {renderIcon(FaUser)} {post.author}
                  </MetaItem>
                  <MetaItem>
                    {renderIcon(FaTags)} {post.categories.join(', ')}
                  </MetaItem>
                </PostMeta>
                
                <ReadMoreLink to={`/blog/${post.slug}`}>
                  Read More {renderIcon(FaArrowRight)}
                </ReadMoreLink>
              </PostContent>
            </BlogPost>
          ))
        ) : (
          <NoResults>
            <h3>No posts found</h3>
            <p>Try adjusting your search term to find what you're looking for.</p>
          </NoResults>
        )}
      </BlogGrid>
    </Container>
  );
};

interface CategoryItemProps {
  active: boolean;
}

const Container = styled(motion.div)`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const SearchSection = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const BlogPost = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const PostImage = styled.div`
  position: relative;
  height: 300px;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const PostContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const PostExcerpt = styled.p`
  margin-bottom: 1.5rem;
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--light-text-color);
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    gap: 0.8rem;
    color: var(--secondary-color);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--light-text-color);
  font-size: 1.1rem;
`;

export default Blog; 