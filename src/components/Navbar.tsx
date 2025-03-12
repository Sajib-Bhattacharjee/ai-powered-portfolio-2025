import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { renderIcon } from '../utils/iconHelpers';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <Logo to="/">
          <LogoText>Sajib</LogoText>
        </Logo>

        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLink 
              to="/" 
              active={location.pathname === '/' ? 'true' : 'false'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/about" 
              active={location.pathname === '/about' ? 'true' : 'false'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/projects" 
              active={location.pathname.includes('/projects') ? 'true' : 'false'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/certifications" 
              active={location.pathname === '/certifications' ? 'true' : 'false'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Certifications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/documentations" 
              active={location.pathname === '/documentations' ? 'true' : 'false'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Docs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/blog" 
              active={location.pathname === '/blog' ? 'true' : 'false'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/contact" 
              active={location.pathname === '/contact' ? 'true' : 'false'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavLinks>

        <NavActions>
          <ThemeToggle 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? renderIcon(FaSun) : renderIcon(FaMoon)}
          </ThemeToggle>
          
          <MenuButton 
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? renderIcon(FaTimes) : renderIcon(FaBars)}
          </MenuButton>
        </NavActions>
      </NavbarContent>
    </NavbarContainer>
  );
};

interface NavbarContainerProps {
  scrolled: boolean;
}

const NavbarContainer = styled.nav<NavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? theme.background : 'transparent'};
  box-shadow: ${({ scrolled }) => 
    scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 1001;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0;
`;

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.background};
    padding: 6rem 2rem 2rem;
    transform: ${({ isOpen }) => 
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    box-shadow: ${({ isOpen }) => 
      isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
    z-index: 1000;
  }
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

interface NavLinkProps {
  active: string;
}

const NavLink = styled(motion(Link))<NavLinkProps>`
  color: ${({ theme, active }) => 
    active === 'true' ? theme.primary : theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${({ active }) => active === 'true' ? '80%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 80%;
  }
  
  @media (max-width: 768px) {
    display: block;
    padding: 0.75rem 0;
    width: 100%;
    
    &:after {
      bottom: 0;
      left: 0;
      width: ${({ active }) => active === 'true' ? '30%' : '0'};
      transform: none;
    }
    
    &:hover:after {
      width: 30%;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  z-index: 1001;
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  cursor: pointer;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Navbar; 