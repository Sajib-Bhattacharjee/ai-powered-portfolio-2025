import React, { useState, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import { HiFilter, HiShare } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { renderIcon } from '../utils/iconHelpers';
import SectionTitle from '../components/SectionTitle';

// Styled Components with responsive design
const Container = styled(motion.div)`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const FilterToggle = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem;
  
  svg {
    font-size: 0.9rem;
  }
`;

interface FilterOptionsProps {
  isOpen: boolean;
}

const FilterOptions = styled.div<FilterOptionsProps>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 1.2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.div`
  font-weight: 500;
  margin-bottom: 0.8rem;
  color: var(--text-color);
`;

const FilterButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface FilterButtonProps {
  isActive: boolean;
}

const FilterButton = styled(motion.button)<FilterButtonProps>`
  background-color: ${props => props.isActive ? 'var(--primary-color)' : 'var(--light-background)'};
  color: ${props => props.isActive ? 'white' : 'var(--text-color)'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--primary-color)' : 'var(--border-color)'};
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-color);
  font-size: 1.1rem;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const CertificateCard = styled(motion.div)`
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const CertificateImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  ${CertificateCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--primary-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.7rem;
  }
`;

const IssuerBadge = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.7rem;
  }
`;

const CertificateContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CertificateTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: var(--heading-color);
  font-size: 1.25rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CertificateDate = styled.p`
  color: var(--secondary-text-color);
  font-size: 0.9rem;
  margin: 0 0 0.8rem;
`;

const CertificateDescription = styled.p`
  color: var(--text-color);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }
`;

const CertificateActions = styled.div`
  display: flex;
  gap: 0.8rem;
  
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const CertificateLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  
  &.download {
    background-color: var(--light-background);
    color: var(--text-color);
  }
  
  svg {
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    flex: 1;
    justify-content: center;
  }
`;

// Certification data
interface CertificationType {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  certificateUrl: string;
  pdfUrl: string;
  category: string;
}

const certificationsData: CertificationType[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'June 2023',
    description: 'A comprehensive course covering Node.js, Express, MongoDB, React, and Redux.',
    image: 'https://via.placeholder.com/600x400?text=Certificate',
    certificateUrl: '#',
    pdfUrl: '#',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'May 2023',
    description: 'In-depth understanding of JavaScript fundamentals, algorithms, and data structures.',
    image: 'https://via.placeholder.com/600x400?text=Certificate',
    certificateUrl: '#',
    pdfUrl: '#',
    category: 'Programming'
  },
  {
    id: 3,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'April 2023',
    description: 'Master React, Redux, React Router, and modern React development practices.',
    image: 'https://via.placeholder.com/600x400?text=Certificate',
    certificateUrl: '#',
    pdfUrl: '#',
    category: 'Web Development'
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'March 2023',
    description: 'Create responsive web designs using HTML, CSS, and various frameworks.',
    image: 'https://via.placeholder.com/600x400?text=Certificate',
    certificateUrl: '#',
    pdfUrl: '#',
    category: 'Web Design'
  }
];

// Get unique issuers and categories for filters
const getUniqueIssuers = () => {
  const issuers = certificationsData.map(cert => cert.issuer);
  return ['All', ...Array.from(new Set(issuers))];
};

const getUniqueCategories = () => {
  const categories = certificationsData.map(cert => cert.category);
  return ['All', ...Array.from(new Set(categories))];
};

// New component for search functionality
const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.8rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--input-background);
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1rem 0.7rem 2.6rem;
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 1.1rem;
  }
`;

// Custom hook for filtering certificates with localStorage persistence
const useCertificationsFilter = (certificates: CertificationType[]) => {
  // Try to load saved preferences from localStorage
  const getSavedPreference = (key: string, defaultValue: string) => {
    try {
      const saved = localStorage.getItem(`cert-filter-${key}`);
      return saved !== null ? saved : defaultValue;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return defaultValue;
    }
  };

  const [activeIssuer, setActiveIssuer] = useState(getSavedPreference('issuer', 'All'));
  const [activeCategory, setActiveCategory] = useState(getSavedPreference('category', 'All'));
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Save filter preferences to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('cert-filter-issuer', activeIssuer);
      localStorage.setItem('cert-filter-category', activeCategory);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [activeIssuer, activeCategory]);

  // Use useMemo to optimize performance by only recalculating when dependencies change
  const filteredCertifications = useMemo(() => {
    return certificates.filter(cert => {
      const matchesIssuer = activeIssuer === 'All' || cert.issuer === activeIssuer;
      const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesIssuer && matchesCategory && matchesSearch;
    });
  }, [certificates, activeIssuer, activeCategory, searchQuery]);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Function to reset all filters
  const resetFilters = () => {
    setActiveIssuer('All');
    setActiveCategory('All');
    setSearchQuery('');
  };

  return {
    activeIssuer,
    setActiveIssuer,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    isFilterOpen,
    toggleFilter,
    filteredCertifications,
    handleSearch,
    resetFilters
  };
};

const ResetButton = styled(motion.button)`
  background-color: var(--light-background);
  color: var(--text-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--border-color);
  }
`;

// Share functionality
const useShareCertificate = () => {
  const [shareSuccess, setShareSuccess] = useState<number | null>(null);
  const [shareError, setShareError] = useState<number | null>(null);
  
  const shareCertificate = (certId: number) => {
    try {
      // Create a URL with the certificate ID as a parameter
      const url = new URL(window.location.href);
      url.searchParams.set('cert', certId.toString());
      
      // Copy to clipboard
      navigator.clipboard.writeText(url.toString())
        .then(() => {
          setShareSuccess(certId);
          setTimeout(() => setShareSuccess(null), 2000);
        })
        .catch(err => {
          console.error('Failed to copy:', err);
          setShareError(certId);
          setTimeout(() => setShareError(null), 2000);
        });
    } catch (error) {
      console.error('Share failed:', error);
      setShareError(certId);
      setTimeout(() => setShareError(null), 2000);
    }
  };
  
  return { shareCertificate, shareSuccess, shareError };
};

const CertificateShareLink = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  color: var(--text-color);
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    background-color: white;
    color: var(--primary-color);
  }
  
  svg {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

const ShareTooltip = styled(motion.div)<{ status: 'success' | 'error' }>`
  position: absolute;
  top: -40px;
  left: 0;
  background-color: ${props => props.status === 'success' ? 'var(--success-color, #28a745)' : 'var(--error-color, #dc3545)'};
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 3;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${props => props.status === 'success' ? 'var(--success-color, #28a745)' : 'var(--error-color, #dc3545)'};
  }
`;

const Certifications: React.FC = () => {
  const {
    activeIssuer,
    setActiveIssuer,
    activeCategory,
    setActiveCategory,
    searchQuery,
    isFilterOpen,
    toggleFilter,
    filteredCertifications,
    handleSearch,
    resetFilters
  } = useCertificationsFilter(certificationsData);
  
  const [activeIndex, setActiveIndex] = useState(-1);
  const { shareCertificate, shareSuccess, shareError } = useShareCertificate();
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if we have certificates
      if (filteredCertifications.length === 0) return;
      
      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex(prev => 
            prev < filteredCertifications.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          if (activeIndex >= 0 && activeIndex < filteredCertifications.length) {
            // Navigate to certificate URL
            const cert = filteredCertifications[activeIndex];
            window.open(cert.certificateUrl, '_blank');
          }
          break;
        case 'Escape':
          setActiveIndex(-1);
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredCertifications, activeIndex]);

  // Reset active index when filters change
  useEffect(() => {
    setActiveIndex(-1);
  }, [activeIssuer, activeCategory, searchQuery]);

  // Get certificate counts
  const certificationCounts = useMemo(() => {
    const issuerCounts: Record<string, number> = {};
    const categoryCounts: Record<string, number> = {};
    
    certificationsData.forEach(cert => {
      issuerCounts[cert.issuer] = (issuerCounts[cert.issuer] || 0) + 1;
      categoryCounts[cert.category] = (categoryCounts[cert.category] || 0) + 1;
    });
    
    return { issuerCounts, categoryCounts };
  }, []);
  
  // Handle URL params for direct certificate link
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const certId = urlParams.get('cert');
      
      if (certId) {
        const id = parseInt(certId, 10);
        const certIndex = certificationsData.findIndex(cert => cert.id === id);
        
        if (certIndex !== -1 && gridRef.current) {
          // Wait for render then scroll to certificate
          setTimeout(() => {
            const certElement = document.getElementById(`certificate-${id}`);
            if (certElement) {
              certElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              setActiveIndex(certIndex);
            }
          }, 500);
        }
      }
    } catch (error) {
      console.error('Error handling URL params:', error);
    }
  }, []);
  
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle 
        title="Certifications" 
        subtitle="My educational qualifications and certifications" 
      />
      
      <SearchContainer>
        <SearchIcon>{renderIcon(BiSearch)}</SearchIcon>
        <SearchInput 
          type="text"
          placeholder="Search certifications..."
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search certifications"
        />
      </SearchContainer>
      
      <FiltersContainer>
        <FilterToggle 
          onClick={toggleFilter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {renderIcon(HiFilter)} Filters
        </FilterToggle>
        
        <FilterOptions isOpen={isFilterOpen}>
          <FilterSection>
            <FilterLabel>Filter by Issuer:</FilterLabel>
            <FilterButtonGroup>
              {getUniqueIssuers().map(issuer => (
                <FilterButton 
                  key={issuer}
                  isActive={activeIssuer === issuer}
                  onClick={() => setActiveIssuer(issuer)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {issuer}
                  {issuer !== 'All' && (
                    <FilterCount>
                      {certificationCounts.issuerCounts[issuer] || 0}
                    </FilterCount>
                  )}
                </FilterButton>
              ))}
            </FilterButtonGroup>
          </FilterSection>
          
          <FilterSection>
            <FilterLabel>Filter by Category:</FilterLabel>
            <FilterButtonGroup>
              {getUniqueCategories().map(category => (
                <FilterButton 
                  key={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  {category !== 'All' && (
                    <FilterCount>
                      {certificationCounts.categoryCounts[category] || 0}
                    </FilterCount>
                  )}
                </FilterButton>
              ))}
            </FilterButtonGroup>
          </FilterSection>
          
          <ResetButton
            onClick={resetFilters}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Filters
          </ResetButton>
        </FilterOptions>
      </FiltersContainer>
      
      {filteredCertifications.length === 0 ? (
        <NoResults>No certifications found matching your filters.</NoResults>
      ) : (
        <>
          <ResultCount>
            Showing {filteredCertifications.length} of {certificationsData.length} certifications
          </ResultCount>
          <CertificationsGrid ref={gridRef}>
            <AnimatePresence>
              {filteredCertifications.map((cert, index) => (
                <CertificateCard
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: activeIndex === index ? 1.02 : 1,
                    boxShadow: activeIndex === index 
                      ? '0 10px 30px rgba(0,0,0,0.15)' 
                      : '0 4px 10px rgba(0,0,0,0.05)'
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  tabIndex={0}
                  onFocus={() => setActiveIndex(index)}
                  onBlur={() => setActiveIndex(-1)}
                  id={`certificate-${cert.id}`}
                >
                  <CertificateImage>
                    <img src={cert.image} alt={cert.title} />
                    <CategoryBadge>{cert.category}</CategoryBadge>
                    <IssuerBadge>{cert.issuer}</IssuerBadge>
                    <CertificateShareLink
                      onClick={() => shareCertificate(cert.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Share ${cert.title} certificate`}
                    >
                      {renderIcon(HiShare)}
                      {shareSuccess === cert.id && (
                        <ShareTooltip 
                          status="success"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          Link copied!
                        </ShareTooltip>
                      )}
                      {shareError === cert.id && (
                        <ShareTooltip 
                          status="error"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          Failed to copy
                        </ShareTooltip>
                      )}
                    </CertificateShareLink>
                  </CertificateImage>
                  
                  <CertificateContent>
                    <CertificateTitle>{cert.title}</CertificateTitle>
                    <CertificateDate>{cert.date}</CertificateDate>
                    <CertificateDescription>{cert.description}</CertificateDescription>
                    
                    <CertificateActions>
                      <CertificateLink 
                        href={cert.certificateUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`View certificate for ${cert.title}`}
                      >
                        {renderIcon(FaExternalLinkAlt)} View
                      </CertificateLink>
                      <CertificateLink 
                        className="download"
                        href={cert.pdfUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Download PDF for ${cert.title}`}
                      >
                        {renderIcon(FaFilePdf)} PDF
                      </CertificateLink>
                    </CertificateActions>
                  </CertificateContent>
                </CertificateCard>
              ))}
            </AnimatePresence>
          </CertificationsGrid>
        </>
      )}
    </Container>
  );
};

const FilterCount = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  color: inherit;
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
  margin-left: 0.5rem;
`;

const ResultCount = styled.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--secondary-text-color);
  text-align: right;
  
  @media (max-width: 480px) {
    text-align: left;
    margin-bottom: 0.8rem;
  }
`;

export default Certifications; 