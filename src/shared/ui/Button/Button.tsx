'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, memo } from 'react';

import cls from './Button.module.scss';

type ButtonVariants = 'primary';
type ButtonSize = 's' | 'm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo<ButtonProps>(function Button (props) {
  const {
    variant = 'primary',
    className,
    size = 'm',
    ...buttonProps
  } = props;

  return (
    <button
      className={clsx(
        cls.button,
        cls[variant],
        cls[size],
        className,
        { [cls.disabled]: buttonProps.disabled },
      )}
      {...buttonProps}
    />
  );
});
