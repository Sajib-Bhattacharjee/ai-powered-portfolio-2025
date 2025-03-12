import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';
import { renderIcon } from '../utils/iconHelpers';

interface MenuItem {
  path: string;
  label: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems: MenuItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <NavContainer>
      <NavContent>
        <StyledLink to="/">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
        </StyledLink>

        <DesktopMenu>
          {menuItems.map(({ path, label }) => (
            <NavButton
              key={path}
              to={path}
              variant={isActive(path) ? 'primary' : 'ghost'}
              size="small"
            >
              {label}
            </NavButton>
          ))}
          <ThemeToggle
            variant="ghost"
            size="small"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {renderIcon(theme === 'dark' ? FiSun : FiMoon, 20)}
          </ThemeToggle>
        </DesktopMenu>

        <MobileMenuButton
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {renderIcon(isOpen ? FiX : FiMenu, 24)}
        </MobileMenuButton>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {menuItems.map(({ path, label }) => (
                <NavButton
                  key={path}
                  to={path}
                  variant={isActive(path) ? 'primary' : 'ghost'}
                  size="medium"
                  isFullWidth
                >
                  {label}
                </NavButton>
              ))}
              <ThemeToggle
                variant="ghost"
                size="medium"
                isFullWidth
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                {renderIcon(theme === 'dark' ? FiSun : FiMoon, 20)}
              </ThemeToggle>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.backgroundAlt};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const NavContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled(Button)`
  font-weight: 500;
`;

const ThemeToggle = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const MobileMenuButton = styled(Button)`
  display: none;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  backdrop-filter: blur(10px);

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Navigation; 