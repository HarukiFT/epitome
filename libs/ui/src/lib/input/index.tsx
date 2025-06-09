import clsx from 'clsx';
import * as React from 'react';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={clsx(
        'file:text-surface-medium placeholder:text-surface-medium selection:bg-brand-primary selection:text-brand-on bg-bg border-surface-border flex h-xs w-full min-w-0 rounded-xxs border px-sm py-xs text-md shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-[28px] file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-surface-border focus-visible:ring-status-error-sub focus-visible:ring-[3px]',
        'aria-invalid:ring-status-error-sub aria-invalid:border-status-error',
        className
      )}
      {...props}
    />
  );
}

export { Input };
