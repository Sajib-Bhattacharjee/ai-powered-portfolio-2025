import React from 'react';
import styled, { css } from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  useGradient?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

type ButtonAsButton = BaseButtonProps & {
  to?: never;
  href?: never;
  type?: 'button' | 'submit' | 'reset';
} & Omit<HTMLMotionProps<'button'>, keyof BaseButtonProps>;

type ButtonAsLink = BaseButtonProps & {
  to: string;
  href?: never;
  type?: never;
} & Omit<HTMLMotionProps<'a'>, keyof BaseButtonProps>;

type ButtonAsAnchor = BaseButtonProps & {
  href: string;
  to?: never;
  type?: never;
} & Omit<HTMLMotionProps<'a'>, keyof BaseButtonProps>;

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      isFullWidth = false,
      isDisabled = false,
      useGradient = false,
      to,
      href,
      type = 'button',
      onClick,
      children,
      className,
      icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </>
    );

    const buttonProps = {
      ref,
      variant,
      size,
      isFullWidth,
      isDisabled,
      useGradient,
      onClick: isDisabled ? undefined : onClick,
      className,
      whileHover: isDisabled ? undefined : { y: -2 },
      whileTap: isDisabled ? undefined : { scale: 0.98 },
      transition: { duration: 0.2 },
      ...props,
    };

    if (to) {
      return (
        <StyledLink to={to} {...(buttonProps as any)}>
          {content}
        </StyledLink>
      );
    }

    if (href) {
      return (
        <StyledAnchor href={href} target="_blank" rel="noopener noreferrer" {...(buttonProps as any)}>
          {content}
        </StyledAnchor>
      );
    }

    return (
      <StyledButton type={type} {...(buttonProps as any)}>
        {content}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

const buttonStyles = css<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  text-decoration: none;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};

  /* Size variants */
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 1rem 2rem;
      font-size: 1.125rem;
    `}

  /* Color variants */
  ${({ theme, variant, useGradient }) => {
    if (useGradient) {
      return css`
        background: ${variant === 'secondary'
          ? theme.gradient.secondary
          : theme.gradient.primary};
        color: white;
        background-size: 200% 200%;
        animation: gradientFlow 8s ease infinite;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${theme.shadowColor};
        }
      `;
    }

    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.primary};
          color: white;

          &:hover {
            background-color: ${theme.secondary};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.secondary};
          color: white;

          &:hover {
            background-color: ${theme.primary};
          }
        `;
      case 'tertiary':
        return css`
          background-color: ${theme.tertiary};
          color: white;

          &:hover {
            filter: brightness(110%);
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border: 2px solid ${theme.primary};
          color: ${theme.primary};

          &:hover {
            background-color: ${theme.primary};
            color: white;
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.primary};

          &:hover {
            background-color: ${theme.backgroundHover};
          }
        `;
      default:
        return '';
    }
  }}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}40;
  }
`;

const StyledButton = styled(motion.button)<BaseButtonProps>`
  ${buttonStyles}
`;

const StyledLink = styled(motion(Link))<BaseButtonProps>`
  ${buttonStyles}
`;

const StyledAnchor = styled(motion.a)<BaseButtonProps>`
  ${buttonStyles}
`;

export default Button;