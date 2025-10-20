import { cn } from '@/lib/utils';
import TextLogo from './text-logo';

interface LogoProps {
  wordmarkClassName?: string;
  className?: string;
  href?: string;
  noLink?: boolean;
}

export default function Logo({
  wordmarkClassName,
  className,
  href = '/',
  noLink = false,
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
      <TextLogo textClassName={cn('text-2xl', wordmarkClassName)} />
    </Element>
  );
}
