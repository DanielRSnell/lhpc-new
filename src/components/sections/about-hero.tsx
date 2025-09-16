export default function AboutHero() {
  return (
    <section className="section-padding container">
      <div className="flex w-fit items-center rounded-full border p-1 text-xs">
        <span className="bg-muted rounded-full px-3 py-1">About LaunchHPC</span>
        <span className="px-3">Enterprise AI/HPC Platform</span>
      </div>

      <h1 className="my-5 text-5xl leading-none tracking-tight lg:text-7xl">
        Built for scale. Backed by innovation.
        <br className="hidden sm:block" />
        Powered by AI.
      </h1>

      <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
        LaunchHPC is the enterprise AI/HPC orchestration platform that unifies
        compute across every environment. We believe high-performance computing
        should be accessible, secure, and intelligent. That means seamless
        multi-cloud orchestration, zero-trust security, and AI-powered
        optimization. Whether you&apos;re running massive training workloads or
        complex simulations, LaunchHPC puts you in control of your entire
        infrastructure.
        <br />
        <br />
        We believe enterprise software should be powerful, transparent, and
        adaptable to your needs. That&apos;s why LaunchHPC is built for
        security, compliance, and performance at any scale—from edge to
        exascale.
      </p>

      <img
        src="/images/about/hero.webp"
        alt="LaunchHPC Platform"
        width={1920}
        height={1280}
        className="mt-16 aspect-video object-cover object-top"
      />
    </section>
  );
}
