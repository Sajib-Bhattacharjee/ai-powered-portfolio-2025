import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

// Type assertion for icons
type IconComponent = React.ComponentType<{size?: number}>;

interface SocialLink {
  name: string;
  url: string;
  icon: IconComponent;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Cast the icon components to fix TypeScript errors
  const GithubIcon = FiGithub as IconComponent;
  const LinkedinIcon = FiLinkedin as IconComponent;
  const TwitterIcon = FiTwitter as IconComponent;
  const InstagramIcon = FiInstagram as IconComponent;
  const MailIcon = FiMail as IconComponent;
  const MapPinIcon = FiMapPin as IconComponent;
  const PhoneIcon = FiPhone as IconComponent;

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: LinkedinIcon,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: TwitterIcon,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: InstagramIcon,
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* About Section */}
          <FooterSection>
            <FooterSectionTitle>About Me</FooterSectionTitle>
            <AboutText>
              I'm a passionate full-stack developer dedicated to creating
              beautiful and functional web applications. Let's work together to
              bring your ideas to life.
            </AboutText>
            <ContactInfo>
              <ContactItem>
                <IconWrapper>
                  <MapPinIcon size={16} />
                </IconWrapper>
                <span>Dhaka, Bangladesh</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <PhoneIcon size={16} />
                </IconWrapper>
                <span>+880 1234-567890</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <MailIcon size={16} />
                </IconWrapper>
                <span>your.email@example.com</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          {/* Quick Links Section */}
          <FooterSection>
            <FooterSectionTitle>Quick Links</FooterSectionTitle>
            <FooterNav>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterNav>
          </FooterSection>

          {/* Services Section */}
          <FooterSection>
            <FooterSectionTitle>Services</FooterSectionTitle>
            <FooterList>
              <FooterListItem>Web Development</FooterListItem>
              <FooterListItem>Mobile App Development</FooterListItem>
              <FooterListItem>UI/UX Design</FooterListItem>
              <FooterListItem>Technical Consultation</FooterListItem>
              <FooterListItem>Code Review</FooterListItem>
            </FooterList>
          </FooterSection>

          {/* Newsletter Section */}
          <FooterSection>
            <FooterSectionTitle>Newsletter</FooterSectionTitle>
            <NewsletterText>
              Subscribe to my newsletter for the latest updates on projects,
              blog posts, and tech insights.
            </NewsletterText>
            <NewsletterForm>
              <NewsletterInput
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
              />
              <SubscribeButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </SubscribeButton>
            </NewsletterForm>
          </FooterSection>
        </FooterGrid>

        {/* Bottom Section */}
        <FooterBottom>
          <CopyrightText>
            © {currentYear} Your Name. All rights reserved.
          </CopyrightText>
          <SocialLinks>
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <SocialButton
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </SocialButton>
            ))}
          </SocialLinks>
          <LegalLinks>
            <LegalLink to="/privacy">Privacy Policy</LegalLink>
            <LegalLink to="/terms">Terms of Service</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FooterSectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
`;

const NewsletterText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SubscribeButton = styled(motion.button)`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const LegalLink = styled(Link)`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
`;

export default Footer;
