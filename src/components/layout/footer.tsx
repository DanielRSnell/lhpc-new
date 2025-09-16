'use client';

import {
  FaAngular,
  FaGithub,
  FaInstagram,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

import Logo from '@/components/layout/logo';
import { NAV_LINKS } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: <FaInstagram className="size-4" />,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me',
    icon: <FaWhatsapp className="size-4" />,
  },
  {
    name: 'X',
    href: 'https://x.com',
    icon: <FaXTwitter className="size-4" />,
  },
];

const TECH_ICONS = [
  {
    name: 'React',
    icon: <FaReact className="size-7 lg:size-10" />,
  },
  {
    name: 'Vue',
    icon: <FaVuejs className="size-7 lg:size-10" />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="size-7 lg:size-10" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="size-7 lg:size-10" />,
  },
  {
    name: 'Angular',
    icon: <FaAngular className="size-7 lg:size-10" />,
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="size-7 lg:size-10" />,
  },
];

interface FooterProps {
  currentPage: string;
}

const Footer = ({ currentPage }: FooterProps) => {
  const hideFooter = [
    '/signin',
    '/signup',
    '/login',
    '/(auth)/signin',
    '/(auth)/signup',
    '/(auth)/otp',
    '/(auth)/forgot-password',
    '/docs',
  ].some((route) => currentPage.includes(route));
  if (hideFooter) return null;

  return (
    <footer className="section-padding relative overflow-hidden">
      <div className="container text-center">
        <Logo
          className="mt-20 justify-center gap-3 text-3xl lg:mt-30"
          iconClassName="w-10"
        />

        <h2 className="my-8 text-2xl lg:my-6 lg:text-5xl">
          Deploy it. Scale it.{' '}
          <span className="text-gradient">Orchestrate it. Effortlessly.</span>
        </h2>

        <div className="mx-auto flex max-w-sm justify-center gap-4.5">
          <Button className="flex-1">Get Started</Button>
          <Button
            variant="secondary"
            className="border-input bg-accent flex-1 border"
          >
            Learn More
          </Button>
        </div>

        <p className="mt-3 text-sm">Trusted by enterprises worldwide</p>
      </div>

      <div className="container mt-20 flex flex-col-reverse justify-between gap-8 text-xs lg:mt-30 lg:flex-row">
        <div className="flex items-center justify-between gap-2">
          <p className="">
            © {new Date().getFullYear()} LaunchHPC — Built for builders.
          </p>{' '}
          <div className="flex items-center gap-7 lg:hidden">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 lg:justify-center lg:gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <GradientSVG className="absolute right-0 bottom-0 -z-10 origin-bottom-right scale-50 rotate-30 md:scale-100 md:rotate-0" />
    </footer>
  );
};

export default Footer;

const GradientSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1728}
      height={846}
      fill="none"
      {...props}
    >
      <path
        fill="#D9D9D9"
        d="M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
      />
      <path
        fill="url(#a)"
        d="M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
      />
      <path
        stroke="url(#b)"
        strokeWidth={0.382}
        d="M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
      />
      <path
        fill="url(#c)"
        d="m1170.06 635.181 383.29 10.476c89.05 23.364-95.87-.687-14.62 49.327 129.26 79.561 496.5 237.203 415.69 243.884-131.61 10.88-539.49-145.574-692.48-205.16-122.39-47.67-112.25-85.547-91.88-98.527Z"
      />
      <path
        fill="url(#d)"
        d="M-589.438 206.029 1045.4 512.02l232.91 49.794-97.31 27.814-306.061 28.434c-52.525-1.145-204.218-25.902-390.785-115.779C320.26 423.329-330.864 259.672-589.438 206.029l-82.447-15.432c18.417 2.695 46.676 8.01 82.447 15.432Z"
      />
      <g filter="url(#e)">
        <path
          fill="url(#f)"
          d="m1178.94 817.498 871.42 102.661-430.03-28.582-441.39-74.079Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={1421.68}
          x2={1373.8}
          y1={757.825}
          y2={919.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9D83E7" />
          <stop offset={0.582} stopColor="#E74548" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={1421.68}
          x2={1373.81}
          y1={757.825}
          y2={919.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#10CBF4" />
          <stop offset={1} stopColor="#10CBF4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={1151.22}
          x2={1703.59}
          y1={674.289}
          y2={839.434}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9259ED" />
          <stop offset={0.514} stopColor="#CF54EE" />
          <stop offset={1} stopColor="#FB8684" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={564.644}
          x2={509.973}
          y1={350.376}
          y2={534.962}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B956EE" />
          <stop offset={1} stopColor="#9672FF" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={1801.48}
          x2={1525.2}
          y1={895.985}
          y2={590.241}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C7F9" />
          <stop offset={1} stopColor="#FF474A" />
        </linearGradient>
        <filter
          id="e"
          width={907.452}
          height={138.693}
          x={1160.92}
          y={799.482}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_401_39876"
            stdDeviation={9.008}
          />
        </filter>
      </defs>
    </svg>
  );
};
