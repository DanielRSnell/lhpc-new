import { cn } from '@/lib/utils';

interface TextLogoProps {
  className?: string;
  textClassName?: string;
}

export default function TextLogo({ className, textClassName }: TextLogoProps) {
  return (
    <>
      {/* Light mode gradient */}
      <span
        className={cn(
          'bg-clip-text text-transparent lowercase dark:hidden',
          textClassName,
          className
        )}
        style={{
          fontFamily: 'Comfortaa, sans-serif',
          fontWeight: 600,
          backgroundImage:
            'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 25%, #6b6b6b 50%, #4a4a4a 75%, #1a1a1a 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        Amalgamy.ai
      </span>
      {/* Dark mode gradient */}
      <span
        className={cn(
          'hidden bg-clip-text text-transparent lowercase dark:inline',
          textClassName,
          className
        )}
        style={{
          fontFamily: 'Comfortaa, sans-serif',
          fontWeight: 600,
          backgroundImage:
            'linear-gradient(135deg, #e5e5e5 0%, #b5b5b5 25%, #8a8a8a 50%, #b5b5b5 75%, #e5e5e5 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        Amalgamy.ai
      </span>
    </>
  );
}
