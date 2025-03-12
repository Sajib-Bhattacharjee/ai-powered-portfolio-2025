import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1200px;
    --border-radius: 8px;
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
    --transition: all 0.3s ease;
    --container-width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  button {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbarThumb};
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primary};
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Container for main content */
  .main-content {
    min-height: calc(100vh - 160px);
    animation: fadeIn 0.5s ease;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  h1 {
    font-size: 2.5rem;
    background: ${({ theme }) => theme.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradientFlow 8s ease infinite;
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
  }

  /* Card styles */
  .card {
    background: ${({ theme }) => theme.cardBackground};
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 4px 6px ${({ theme }) => theme.shadowColor};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px ${({ theme }) => theme.shadowColor};
    }
  }

  .card-alt {
    background: ${({ theme }) => theme.cardBackgroundAlt};
  }

  /* Gradient backgrounds */
  .gradient-primary {
    background: ${({ theme }) => theme.gradient.primary};
    background-size: 200% 200%;
    animation: gradientFlow 8s ease infinite;
  }

  .gradient-secondary {
    background: ${({ theme }) => theme.gradient.secondary};
    background-size: 200% 200%;
    animation: gradientFlow 8s ease infinite;
  }

  /* Utility classes */
  .container {
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  .text-center {
    text-align: center;
  }

  .text-gradient {
    background: ${({ theme }) => theme.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradientFlow 8s ease infinite;
  }

  /* Spacing utilities */
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .mb-5 { margin-bottom: 3rem; }
  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mt-5 { margin-top: 3rem; }
  .mx-1 { margin-left: 0.5rem; margin-right: 0.5rem; }
  .mx-2 { margin-left: 1rem; margin-right: 1rem; }
  .mx-3 { margin-left: 1.5rem; margin-right: 1.5rem; }
  .my-1 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
  .my-2 { margin-top: 1rem; margin-bottom: 1rem; }
  .my-3 { margin-top: 1.5rem; margin-bottom: 1.5rem; }

  /* Padding utilities */
  .p-1 { padding: 0.5rem; }
  .p-2 { padding: 1rem; }
  .p-3 { padding: 1.5rem; }
  .p-4 { padding: 2rem; }
  .p-5 { padding: 3rem; }

  /* Flex utilities */
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .gap-1 { gap: 0.5rem; }
  .gap-2 { gap: 1rem; }
  .gap-3 { gap: 1.5rem; }
  .gap-4 { gap: 2rem; }

  /* Grid utilities */
  .grid { display: grid; }
  .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

  @media (max-width: 768px) {
    .grid-cols-2,
    .grid-cols-3,
    .grid-cols-4 {
      grid-template-columns: 1fr;
    }
  }

  /* Border utilities */
  .rounded { border-radius: var(--border-radius); }
  .rounded-full { border-radius: 9999px; }
  .border { border: 1px solid ${({ theme }) => theme.borderColor}; }

  /* Shadow utilities */
  .shadow-sm { box-shadow: 0 1px 2px ${({ theme }) => theme.shadowColor}; }
  .shadow { box-shadow: 0 4px 6px ${({ theme }) => theme.shadowColor}; }
  .shadow-lg { box-shadow: 0 8px 12px ${({ theme }) => theme.shadowColor}; }

  /* Text utilities */
  .text-primary { color: ${({ theme }) => theme.primary}; }
  .text-secondary { color: ${({ theme }) => theme.secondary}; }
  .text-tertiary { color: ${({ theme }) => theme.tertiary}; }
`;

export default GlobalStyles; 