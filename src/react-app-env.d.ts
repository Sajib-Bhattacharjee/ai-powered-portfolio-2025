/// <reference types="react-scripts" />

declare namespace JSX {
  interface IntrinsicElements {
    'n': any;
  }
}

declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  
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
