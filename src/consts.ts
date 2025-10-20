// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Amalgamy - Unified AI/HPC Orchestration Platform';
export const SITE_DESCRIPTION =
  'Unified AI/HPC orchestration for every environment. Amalgamy delivers secure, scalable compute orchestration across on-premises, cloud, and hybrid infrastructures. One platform for all your AI and HPC workloads.';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | Amalgamy',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'AI',
    'HPC',
    'High Performance Computing',
    'Cloud Orchestration',
    'Multi-Cloud',
    'Kubernetes',
    'Machine Learning',
    'Enterprise Computing',
    'GPU Computing',
    'Workload Management',
    'Infrastructure Management',
    'DevOps',
  ],
  authors: [{ name: 'Amalgamy Team' }],
  creator: 'Amalgamy Team',
  publisher: 'Amalgamy',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Amalgamy',
    images: [
      {
        url: '/open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Amalgamy - Unified AI/HPC Orchestration Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/open-graph.png'],
    creator: '@Amalgamy',
  },
};
