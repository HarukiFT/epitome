import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-xxs whitespace-nowrap rounded-xs text-button font-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-xxxs shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-surface-border focus-visible:ring-status-error-sub focus-visible:ring-[3px] aria-invalid:ring-status-error-sub aria-invalid:border-status-error",
  {
    variants: {
      variant: {
        default: 'bg-brand-primary text-brand-on shadow-xs hover:bg-brand-sub',
        destructive:
          'bg-status-error text-brand-on shadow-xs hover:bg-status-error/90 focus-visible:ring-status-error-sub',
        outline:
          'border border-surface-border bg-bg shadow-xs hover:bg-surface-surface hover:text-surface',
        secondary:
          'bg-surface-secondary text-surface shadow-xs hover:bg-surface-secondary/80',
        ghost: 'hover:bg-surface-surface hover:text-surface',
        link: 'text-brand-primary underline-offset-[4px] hover:underline',
      },
      size: {
        default: 'h-xs px-sm py-xs has-[>svg]:px-xs',
        sm: 'h-[36px] rounded-xs gap-xxxs px-xs has-[>svg]:px-[8px]',
        lg: 'h-sm rounded-xs px-md has-[>svg]:px-sm',
        icon: 'size-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={clsx(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
