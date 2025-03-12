import { ComponentType, SVGAttributes } from 'react';

declare module 'react-icons/fa' {
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = ComponentType<IconBaseProps>;
  
  export const FaGithub: IconType;
  export const FaLinkedinIn: IconType;
  export const FaTwitter: IconType;
  export const FaEnvelope: IconType;
  export const FaArrowRight: IconType;
  export const FaTimes: IconType;
  export const FaBars: IconType;
  export const FaDownload: IconType;
  export const FaUserGraduate: IconType;
  export const FaGraduationCap: IconType;
  export const FaLaptopCode: IconType;
  export const FaCalendarAlt: IconType;
  export const FaUser: IconType;
  export const FaTags: IconType;
  export const FaExternalLinkAlt: IconType;
  export const FaFilePdf: IconType;
  export const FaPhone: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaSearch: IconType;
  export const FaBook: IconType;
  export const FaSun: IconType;
  export const FaMoon: IconType;
}

declare module 'react-icons/bs' {
  import { IconType } from 'react-icons';
  
  export const BsSun: IconType;
  export const BsMoonFill: IconType;
}

declare module 'react-icons/fi' {
  import { IconType } from 'react-icons';
  
  export const FiSend: IconType;
  export const FiMessageSquare: IconType;
  export const FiChevronLeft: IconType;
  export const FiChevronRight: IconType;
  export const FiArrowUp: IconType;
}

declare module 'react-icons' {
  import React from 'react';
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = React.ComponentType<IconBaseProps>;
} 