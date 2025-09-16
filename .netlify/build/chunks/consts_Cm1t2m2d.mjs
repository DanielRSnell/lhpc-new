const SITE_TITLE = "LaunchHPC - Unified AI/HPC Orchestration Platform";
const SITE_DESCRIPTION = "Unified AI/HPC orchestration for every environment. LaunchHPC delivers secure, scalable compute orchestration across on-premises, cloud, and hybrid infrastructures. One platform for all your AI and HPC workloads.";
const SITE_METADATA = {
  title: {
    default: SITE_TITLE},
  description: SITE_DESCRIPTION,
  keywords: [
    "AI",
    "HPC",
    "High Performance Computing",
    "Cloud Orchestration",
    "Multi-Cloud",
    "Kubernetes",
    "Machine Learning",
    "Enterprise Computing",
    "GPU Computing",
    "Workload Management",
    "Infrastructure Management",
    "DevOps"
  ],
  authors: [{ name: "LaunchHPC Team" }],
  creator: "LaunchHPC Team",
  publisher: "LaunchHPC",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }]
  },
  openGraph: {
    siteName: "LaunchHPC",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "LaunchHPC - Unified AI/HPC Orchestration Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@LaunchHPC"
  }
};

export { SITE_DESCRIPTION as S, SITE_TITLE as a, SITE_METADATA as b };
