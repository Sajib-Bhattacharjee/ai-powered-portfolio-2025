import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  primary: '#0070f3',
  secondary: '#0056b3',
  tertiary: '#00a8e8',
  background: '#ffffff',
  backgroundAlt: '#ffffff',
  backgroundSecondary: '#f7f7f7',
  backgroundHover: '#f0f0f0',
  cardBackground: '#ffffff',
  cardBackgroundAlt: '#f8f9fa',
  text: '#333333',
  textSecondary: '#666666',
  heading: '#222222',
  borderColor: '#e0e0e0',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  scrollbarTrack: '#f1f1f1',
  scrollbarThumb: '#c1c1c1',
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#17a2b8',
  cardAccent: {
    blue: '#4299E1',
    purple: '#805AD5',
    teal: '#38B2AC',
    cyan: '#0BC5EA',
    green: '#48BB78',
    orange: '#ED8936',
    pink: '#ED64A6',
    indigo: '#667EEA',
    red: '#F56565'
  },
  gradient: {
    primary: 'linear-gradient(135deg, #0070f3 0%, #00a8e8 100%)',
    secondary: 'linear-gradient(135deg, #0056b3 0%, #00c6fb 100%)'
  }
};

export const darkTheme: DefaultTheme = {
  primary: '#0070f3',
  secondary: '#4dabf7',
  tertiary: '#00c6fb',
  background: '#1f1f1f',
  backgroundAlt: '#2d2d2d',
  backgroundSecondary: '#2d2d2d',
  backgroundHover: '#333333',
  cardBackground: '#2d2d2d',
  cardBackgroundAlt: '#363636',
  text: '#e0e0e0',
  textSecondary: '#b0b0b0',
  heading: '#ffffff',
  borderColor: '#444444',
  shadowColor: 'rgba(0, 0, 0, 0.3)',
  scrollbarTrack: '#2d2d2d',
  scrollbarThumb: '#555555',
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  cardAccent: {
    blue: '#60A5FA',
    purple: '#A78BFA',
    teal: '#5EEAD4',
    cyan: '#67E8F9',
    green: '#86EFAC',
    orange: '#FDBA74',
    pink: '#F9A8D4',
    indigo: '#818CF8',
    red: '#FCA5A5'
  },
  gradient: {
    primary: 'linear-gradient(135deg, #4dabf7 0%, #00c6fb 100%)',
    secondary: 'linear-gradient(135deg, #00c6fb 0%, #60a5fa 100%)'
  }
}; 