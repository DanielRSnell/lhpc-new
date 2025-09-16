import { Button } from '@/components/ui/button';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function GovernmentHero() {
  return (
    <section className="section-padding relative">
      <div className="relative container">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="flex max-w-3xl flex-1 flex-col items-start gap-5">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">
                Government Solution
              </span>
              <span className="px-3">FISMA Compliant • FedRAMP Ready</span>
            </div>

            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Secure AI/HPC infrastructure for{' '}
              <span className="text-gradient">national security</span>
            </h1>

            <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
              LaunchHPC delivers mission-critical AI and high-performance computing 
              orchestration for federal agencies, defense contractors, and government 
              organizations. Built to meet the most stringent security requirements.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <div className="flex gap-4.5">
              <Button className="flex-1 md:min-w-45" asChild>
                <a href="/demo">Request Security Brief</a>
              </Button>
              <Button className="flex-1 md:min-w-45" variant="outline" asChild>
                <a href="/demo">Schedule Clearance Demo</a>
              </Button>
            </div>
            <div className="text-center text-sm">
              Trusted by federal agencies • IL-5 authorized
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src="/dashboard.png"
          alt="LaunchHPC Government Security Dashboard"
          className="ring-foreground/5 mt-10 w-full rounded-xs shadow-2xl ring-6 invert md:mt-20 md:rounded-sm md:px-[1px] md:ring-16 lg:mt-30 dark:invert-0"
          width={1440}
          height={905}
        />
        <GradientSVG className="absolute top-0 right-0 -z-10 origin-right scale-30 md:scale-50 lg:scale-100" />
      </div>
    </section>
  );
}

// SVG Components
function GradientSVG({ ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1342}
      height={1199}
      fill="none"
      {...props}
    >
      <path
        fill="#D9D9D9"
        d="M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
      />
      <path
        fill="url(#a)"
        d="M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
      />
      <path
        stroke="url(#b)"
        strokeWidth={0.631}
        d="M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
      />
      <path
        fill="url(#c)"
        d="m875.715 420.318 203.405-357.96c50.52-10.487-50.57 96.246 0 186.332 80.45 143.304 298.36 312.903 256.86 419.243-67.58 173.19-306.7 49.523-396.529 0-71.863-39.618-72.434-181.585-63.736-247.615Z"
      />
      <path
        fill="url(#d)"
        d="m46.623 746.37 908.336-619.388 130.381-66.714-46.89 196.709-156.685 413.622c-27.829 50.066-111.545 120.16-223.775 0-98.592-105.557-466.882-3.975-611.367 75.771L.814 777.607c10.115-9.59 25.82-20.205 45.809-31.237Z"
      />
      <g filter="url(#e)">
        <path
          fill="url(#f)"
          d="m883.093 595.649 164.727-565.43 4.66 326.52-169.387 238.91Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={1027.3}
          x2={1027.73}
          y1={587.333}
          y2={1198.11}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9D83E7" />
          <stop offset={0.516} stopColor="#D445E7" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={1027.3}
          x2={1027.3}
          y1={587.333}
          y2={1197.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#10CBF4" />
          <stop offset={1} stopColor="#10CBF4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={871.897}
          x2={1188.44}
          y1={575.509}
          y2={575.628}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9259ED" />
          <stop offset={0.514} stopColor="#CF54EE" />
          <stop offset={1} stopColor="#FB8684" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={676.669}
          x2={677.051}
          y1={60.268}
          y2={757.516}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B956EE" />
          <stop offset={1} stopColor="#9672FF" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={1020.81}
          x2={814.267}
          y1={202.771}
          y2={477.618}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB07FF" />
          <stop offset={0.505} stopColor="#FF6847" />
          <stop offset={1} stopColor="#FF474A" />
        </linearGradient>
        <filter
          id="e"
          width={228.968}
          height={625.009}
          x={853.303}
          y={0.429}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_401_39842"
            stdDeviation={14.895}
          />
        </filter>
      </defs>
    </svg>
  );
}