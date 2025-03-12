import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    backgroundAlt: string;
    backgroundSecondary: string;
    backgroundHover: string;
    cardBackground: string;
    cardBackgroundAlt: string;
    text: string;
    textSecondary: string;
    heading: string;
    borderColor: string;
    shadowColor: string;
    scrollbarTrack: string;
    scrollbarThumb: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    cardAccent: {
      blue: string;
      purple: string;
      teal: string;
      cyan: string;
      green: string;
      orange: string;
      pink: string;
      indigo: string;
      red: string;
    };
    gradient: {
      primary: string;
      secondary: string;
    };
  }
} 