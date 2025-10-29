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
      { url: '/branding/app-icon-light.png', sizes: '96x96', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/branding/app-icon-dark.png', sizes: '96x96', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      { url: '/branding/app-icon-dark.png', sizes: '96x96', type: 'image/png' }, // Default fallback
    ],
    apple: [{ url: '/branding/app-icon-dark.png', sizes: '180x180' }],
    shortcut: [{ url: '/branding/app-icon-dark.png' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Amalgamy',
    images: [
      {
        url: '/branding/og-branded.png',
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
    images: ['/branding/og-branded.png'],
    creator: '@Amalgamy',
  },
};
