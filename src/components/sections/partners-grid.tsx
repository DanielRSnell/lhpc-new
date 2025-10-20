import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Partner {
  name: string;
  logoUrl: string;
  website: string;
  type: 'Technology Partner' | 'OEM Partner' | 'Cloud Partner' | 'Strategic Partner' | 'Distribution Partner';
  description: string;
}

const PARTNERS: Partner[] = [
  {
    name: 'NVIDIA',
    logoUrl: 'https://img.logo.dev/nvidia.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://nvidia.com',
    type: 'Technology Partner',
    description: 'As an exclusive DGX Cloud Reseller, Amalgamy partners with NVIDIA to provide cutting-edge GPU technology and AI solutions. NVIDIA\'s industry-leading GPUs power our high-performance computing platforms and AI implementations.',
  },
  {
    name: 'Supermicro',
    logoUrl: 'https://img.logo.dev/supermicro.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://supermicro.com',
    type: 'OEM Partner',
    description: 'Supermicro delivers high-performance server solutions optimized for HPC and AI workloads. Our partnership ensures access to enterprise-grade hardware infrastructure designed for maximum compute density and efficiency.',
  },
  {
    name: 'Mirantis',
    logoUrl: 'https://img.logo.dev/mirantis.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://mirantis.com',
    type: 'Technology Partner',
    description: 'Mirantis provides cloud-native infrastructure and Kubernetes solutions. Our partnership enables seamless container orchestration and cloud-native application deployment across hybrid and multi-cloud environments.',
  },
  {
    name: 'IBM',
    logoUrl: 'https://img.logo.dev/ibm.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://ibm.com',
    type: 'Strategic Partner',
    description: 'IBM brings enterprise-grade solutions and decades of computing innovation to our partnership. Our collaboration enables advanced AI and hybrid cloud capabilities for mission-critical enterprise workloads.',
  },
  {
    name: 'AWS',
    logoUrl: 'https://img.logo.dev/aws.amazon.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://aws.amazon.com',
    type: 'Cloud Partner',
    description: 'Amazon Web Services provides comprehensive cloud infrastructure and services. Together, we enable seamless workload orchestration across AWS regions with unified management and complete portability.',
  },
  {
    name: 'Microsoft',
    logoUrl: 'https://img.logo.dev/microsoft.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://microsoft.com',
    type: 'Cloud Partner',
    description: 'Microsoft Azure offers enterprise cloud computing and AI services. Our partnership delivers integrated orchestration solutions that span Azure cloud and on-premises infrastructure for hybrid computing excellence.',
  },
  {
    name: 'TDSynnex',
    logoUrl: 'https://img.logo.dev/tdsynnex.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://tdsynnex.com',
    type: 'Distribution Partner',
    description: 'TDSynnex is a leading global distributor and aggregator of technology products and services. Our partnership expands market reach and enables efficient distribution of Amalgamy solutions to enterprises worldwide.',
  },
  {
    name: 'Oracle',
    logoUrl: 'https://img.logo.dev/oracle.com?token=pk_JuRpzKiHQniWr0CmqpMOBA',
    website: 'https://oracle.com',
    type: 'Cloud Partner',
    description: 'Oracle Cloud Infrastructure provides scalable, high-performance cloud computing resources. Together, we deliver unified orchestration across on-premises and Oracle Cloud environments for seamless workload portability.',
  },
];

export default function PartnersGrid() {
  return (
    <section className="section-padding container">
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xxl leading-none tracking-tight md:text-6xl">
            Our Partners
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-snug">
            Amalgamy collaborates with industry leaders to deliver cutting-edge AI/HPC orchestration solutions. Together, we&apos;re building the future of enterprise compute.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {PARTNERS.map((partner, index) => (
            <Card
              key={index}
              className="group relative flex flex-col overflow-hidden border-border/50 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30 p-8 ring-1 ring-border/50 transition-all duration-200 hover:shadow-lg dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
            >
              {/* Partner Type Badge */}
              <div className="absolute top-6 right-6">
                <Badge variant="secondary" className="text-xs">
                  {partner.type}
                </Badge>
              </div>

              {/* Logo */}
              <div className="mb-6 flex h-16 items-center">
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} Logo`}
                  className="h-full w-auto max-w-[180px] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <p className="text-muted-foreground flex-1 leading-relaxed">
                {partner.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
