import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

// Define card accent colors for variety
const cardAccentColors = {
  teal: '#38B2AC',
  purple: '#805AD5',
  indigo: '#667EEA',
  blue: '#4299E1',
  cyan: '#0BC5EA',
  green: '#48BB78',
  orange: '#ED8936',
  pink: '#ED64A6',
  red: '#F56565',
};

// Define the structure of our theme
const lightTheme: DefaultTheme = {
  primary: '#3B82F6', // Vibrant blue
  secondary: '#8B5CF6', // Bright purple
  tertiary: '#14B8A6', // Teal
  background: '#F9FAFB', // Very light gray
  backgroundAlt: '#F3F4F6', // Light gray for alternate backgrounds
  backgroundSecondary: '#F3F4F6', // Light gray
  backgroundHover: '#E5E7EB', // Medium light gray
  cardBackground: '#FFFFFF', // White
  cardBackgroundAlt: '#F7FAFC', // Very light blue-gray
  text: '#1F2937', // Very dark gray (almost black)
  textSecondary: '#4B5563', // Dark gray
  heading: '#111827', // Almost black
  borderColor: '#E5E7EB', // Medium light gray
  shadowColor: 'rgba(0, 0, 0, 0.08)',
  scrollbarTrack: '#F3F4F6', // Light gray
  scrollbarThumb: '#CBD5E1', // Light blue-gray
  success: '#10B981', // Bright green
  error: '#EF4444', // Bright red
  warning: '#F59E0B', // Amber
  info: '#3B82F6', // Bright blue
  cardAccent: cardAccentColors,
  gradient: {
    primary: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', // Blue to purple
    secondary: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)', // Green to blue
  }
};

const darkTheme: DefaultTheme = {
  primary: '#60A5FA', // Light blue
  secondary: '#A78BFA', // Light purple
  tertiary: '#2DD4BF', // Light teal
  background: '#111827', // Very dark blue-gray
  backgroundAlt: '#1F2937', // Dark blue-gray for alternate backgrounds
  backgroundSecondary: '#1F2937', // Dark blue-gray
  backgroundHover: '#374151', // Medium dark blue-gray
  cardBackground: '#1F2937', // Dark blue-gray
  cardBackgroundAlt: '#242F41', // Slightly lighter dark blue-gray
  text: '#F9FAFB', // Almost white
  textSecondary: '#D1D5DB', // Light gray
  heading: '#F3F4F6', // Very light gray
  borderColor: '#374151', // Medium dark blue-gray
  shadowColor: 'rgba(0, 0, 0, 0.3)',
  scrollbarTrack: '#1F2937', // Dark blue-gray
  scrollbarThumb: '#4B5563', // Medium gray
  success: '#34D399', // Medium green
  error: '#F87171', // Medium red
  warning: '#FBBF24', // Medium amber
  info: '#60A5FA', // Medium blue
  cardAccent: {
    teal: '#2DD4BF',    // Lighter teal for dark mode
    purple: '#A78BFA',  // Lighter purple for dark mode
    indigo: '#818CF8',  // Lighter indigo for dark mode
    blue: '#60A5FA',    // Lighter blue for dark mode
    cyan: '#22D3EE',    // Lighter cyan for dark mode
    green: '#34D399',   // Lighter green for dark mode
    orange: '#FB923C',  // Lighter orange for dark mode
    pink: '#F472B6',    // Lighter pink for dark mode
    red: '#F87171',     // Lighter red for dark mode
  },
  gradient: {
    primary: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)', // Light blue to light purple
    secondary: 'linear-gradient(135deg, #34D399 0%, #60A5FA 100%)', // Light green to light blue
  }
};

// Theme context interface
interface ThemeContextType {
  theme: string;
  themeObject: DefaultTheme;
  toggleTheme: () => void;
}

// Create the theme context
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  themeObject: darkTheme,
  toggleTheme: () => {}
});

// Custom hook for using the theme context
export const useTheme = () => useContext(ThemeContext);

// Props for ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  
  // Get current theme object based on theme name
  const themeObject = theme === 'light' ? lightTheme : darkTheme;
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update document's data-theme attribute for global CSS variables
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.documentElement.setAttribute('data-theme', defaultTheme);
    }
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, themeObject, toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 