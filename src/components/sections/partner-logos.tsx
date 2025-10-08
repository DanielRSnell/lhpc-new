const PARTNERS = [
  {
    name: 'Dell',
    url: 'https://img.logo.dev/dell.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'Supermicro',
    url: 'https://img.logo.dev/supermicro.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'NVIDIA',
    url: 'https://img.logo.dev/nvidia.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'AMD',
    url: 'https://img.logo.dev/amd.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'Intel',
    url: 'https://img.logo.dev/intel.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'HPE',
    url: 'https://img.logo.dev/hpe.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
];

export default function PartnerLogos() {
  return (
    <section className="section-padding container text-center">
      <p className="text-muted-foreground tracking-normal">
        Trusted by industry leaders
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-13">
        {PARTNERS.map((partner, index) => (
          <img
            key={index}
            src={partner.url}
            alt={partner.name}
            className="h-16 w-auto rounded-lg transition-opacity hover:opacity-80 md:h-20"
          />
        ))}
      </div>
    </section>
  );
}
