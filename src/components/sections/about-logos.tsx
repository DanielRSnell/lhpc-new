const logos = [
  {
    name: 'Aave',
    src: '/images/logos/aave.svg',
    width: 130,
    height: 37.5,
  },
  {
    name: 'AE Studio',
    src: '/images/logos/ae-studio.svg',
    width: 156,
    height: 37,
  },
  {
    name: 'Atoms',
    src: '/images/logos/atoms.svg',
    width: 148,
    height: 28,
  },
  {
    name: 'Alchemy',
    src: '/images/logos/alchemy.svg',
    width: 200,
    height: 37,
  },
  {
    name: 'Atoms',
    src: '/images/logos/atoms.svg',
    width: 148,
    height: 28,
  },
];

export default function AboutLogos() {
  return (
    <section className="section-padding container !pt-0 text-center">
      <p className="text-muted-foreground tracking-normal">
        Trusted by Fortune 500 enterprises and leading research institutions
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-13">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className="opacity-70 invert dark:invert-0"
          />
        ))}
      </div>
    </section>
  );
}
