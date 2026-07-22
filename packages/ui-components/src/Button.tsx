import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  const variantClassName =
    variant === 'primary' ? 'button button--primary' : 'button button--secondary';

  return (
    <button
      className={variantClassName}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
