import { cn } from '@/lib/utils';

interface LogoProps {
  iconClassName?: string;
  wordmarkClassName?: string;
  className?: string;
  href?: string;
  noLink?: boolean;
  iconOnly?: boolean;
}

export default function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = '/',
  noLink = false,
  iconOnly = false,
}: LogoProps) {
  const Element = noLink ? 'div' : 'a';

  return (
    <Element
      href={href}
      className={cn(
        'flex items-center gap-1.75 text-xl font-medium',
        className,
      )}
    >
      <img
        src="/logos/light-icon.png"
        alt="LaunchHPC"
        className={cn('h-8 w-8 object-contain dark:hidden', iconClassName)}
      />
      <img
        src="/logos/dark-icon.png"
        alt="LaunchHPC"
        className={cn(
          'hidden h-8 w-8 object-contain dark:block',
          iconClassName,
        )}
      />
      {!iconOnly && (
        <span className={cn('font-semibold', wordmarkClassName)}>
          LaunchHPC
        </span>
      )}
    </Element>
  );
}
