import { cn } from '@/lib/utils';

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
      {/* Light mode logo with gradient */}
      <div className={cn('logo-light dark:hidden', wordmarkClassName)}>
        <img
          src="/branding/logo.svg"
          alt="Amalgamy.ai"
          className="h-auto w-full"
          style={{
            filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) contrast(100%)',
          }}
        />
      </div>

      {/* Dark mode logo with gradient */}
      <div className={cn('logo-dark hidden dark:block', wordmarkClassName)}>
        <img
          src="/branding/logo.svg"
          alt="Amalgamy.ai"
          className="h-auto w-full"
          style={{
            filter: 'brightness(0) saturate(100%) invert(90%) sepia(0%) saturate(0%) hue-rotate(0deg) contrast(90%)',
          }}
        />
      </div>

      <style jsx>{`
        .logo-light img {
          filter: url(#gradient-light);
        }
        .logo-dark img {
          filter: url(#gradient-dark);
        }
      `}</style>

      {/* SVG filter definitions for gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Light mode gradient */}
          <filter id="gradient-light" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.1 0 0 0 0
                      0.1 0 0 0 0
                      0.1 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          {/* Dark mode gradient */}
          <filter id="gradient-dark" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.9 0 0 0 0
                      0.9 0 0 0 0
                      0.9 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </Element>
  );
}
