import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { renderIcon } from '../utils/iconHelpers';

// Sample testimonial data - replace with actual testimonials
const testimonials = [
  {
    id: 1,
    text: "Working with Sajib was a fantastic experience. He delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
    name: "John Smith",
    position: "CEO",
    company: "TechStart Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "Sajib is an exceptional developer who truly understands both the technical and design aspects of web development. He transformed our outdated website into a modern, responsive platform.",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Creative Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "I've worked with many developers, but Sajib stands out for his communication skills and ability to translate complex requirements into elegant solutions. Highly recommended!",
    name: "Michael Chen",
    position: "Product Manager",
    company: "Innovate Labs",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 4,
    text: "Sajib helped us build our e-commerce platform from scratch. His expertise in React and attention to performance optimization resulted in a fast, user-friendly site that has significantly increased our conversions.",
    name: "Emily Rodriguez",
    position: "Founder",
    company: "StyleShop",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(2);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - visibleCount ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };
  
  const renderVisibleTestimonials = () => {
    const visibleTestimonials = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visibleTestimonials.push(
        <TestimonialCardWrapper key={testimonials[index].id}>
          <TestimonialCard
            testimonial={testimonials[index].text}
            name={testimonials[index].name}
            role={testimonials[index].position}
            company={testimonials[index].company}
            image={testimonials[index].image}
            delay={index * 0.2}
          />
        </TestimonialCardWrapper>
      );
    }
    
    return visibleTestimonials;
  };
  
  return (
    <SectionContainer>
      <SectionHeading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <HeadingTitle>Client Testimonials</HeadingTitle>
        <HeadingSubtitle>What people say about my work</HeadingSubtitle>
      </SectionHeading>
      
      <TestimonialsContainer>
        <TestimonialsGrid>
          {renderVisibleTestimonials()}
        </TestimonialsGrid>
        
        <SliderControls>
          <SliderButton 
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            {renderIcon(FiChevronLeft, 24)}
          </SliderButton>
          
          <SlideIndicators>
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
              <SlideIndicator 
                key={index}
                active={currentSlide === index}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </SlideIndicators>
          
          <SliderButton 
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            {renderIcon(FiChevronRight, 24)}
          </SliderButton>
        </SliderControls>
      </TestimonialsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.background};
`;

const SectionHeading = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeadingTitle = styled.h2`
  font-size: 2.5rem;
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
    font-size: 2rem;
  }
`;

const HeadingSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 600px;
  margin: 1.5rem auto 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCardWrapper = styled.div`
  height: 100%;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 1.5rem;
`;

const SliderButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const SlideIndicators = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface SlideIndicatorProps {
  active: boolean;
}

const SlideIndicator = styled.button<SlideIndicatorProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, active }) => 
    active ? theme.primary : theme.backgroundSecondary};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme, active }) => 
      active ? theme.primary : theme.borderColor};
  }
`;

export default TestimonialsSection; 