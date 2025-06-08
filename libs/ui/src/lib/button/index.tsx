import { cva, type VariantProps } from 'class-variance-authority';

import React from 'react';
import clsx from 'clsx';

const buttonStyles = cva(``, {
  variants: {},
  defaultVariants: {},
});

type ButtonVariantProps = VariantProps<typeof buttonStyles>;

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonVariantProps
>;

export interface ButtonProps extends NativeButtonProps, ButtonVariantProps {
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={clsx(buttonStyles({}), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
