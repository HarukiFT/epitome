import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import clsx from 'clsx';

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={clsx(
        'bg-surface-border shrink-0 data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px]',
        className
      )}
      {...props}
    />
  );
}

export { Separator };
