// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'LaunchHPC - AI/HPC Orchestration Platform';
export const SITE_DESCRIPTION =
  'Enterprise-grade AI/HPC orchestration platform for multi-cloud compute workloads. Intelligent scheduling, zero-trust security, and real-time monitoring for mission-critical applications.';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | LaunchHPC',
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
  authors: [{ name: 'LaunchHPC Team' }],
  creator: 'LaunchHPC Team',
  publisher: 'LaunchHPC',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'LaunchHPC',
    images: [
      {
        url: '/images/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'LaunchHPC - AI/HPC Orchestration Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.jpeg'],
    creator: '@LaunchHPC',
  },
};
