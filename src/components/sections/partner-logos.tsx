const PARTNERS = [
  {
    name: 'NVIDIA',
    url: 'https://img.logo.dev/nvidia.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'Supermicro',
    url: 'https://img.logo.dev/supermicro.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'Mirantis',
    url: 'https://img.logo.dev/mirantis.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'IBM',
    url: 'https://img.logo.dev/ibm.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'AWS',
    url: 'https://img.logo.dev/aws.amazon.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'Microsoft',
    url: 'https://img.logo.dev/microsoft.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'TDSynnex',
    url: 'https://img.logo.dev/tdsynnex.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
  },
  {
    name: 'Oracle',
    url: 'https://img.logo.dev/oracle.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
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
