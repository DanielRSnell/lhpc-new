export default function AboutHero() {
  return (
    <section className="section-padding container">
      <div className="flex w-fit items-center rounded-full border p-1 text-xs">
        <span className="bg-muted rounded-full px-3 py-1">About LaunchHPC</span>
        <span className="px-3">Unified AI/HPC Orchestration</span>
      </div>

      <h1 className="my-5 text-5xl leading-none tracking-tight lg:text-7xl">
        Unified AI/HPC Orchestration
        <br className="hidden sm:block" />
        <span className="text-gradient">for Every Environment</span>
      </h1>

      <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
        LaunchHPC is the first agentic workflow orchestration platform that unifies operators, technical experts, and non-technical users around shared, portable workflows—maximizing GPU utilization, accelerating revenue, and ensuring sovereignty without vendor lock-in.
        <br />
        <br />
        Developed by ThisWay Global, an award-winning AI and HPC technology company founded by Angela Hood and backed by partnerships with NVIDIA, Amazon Web Services, Microsoft, and IBM. Our mission is to break down barriers to AI/HPC adoption, enabling organizations of all sizes to harness the power of high-performance computing without complexity or sovereignty concerns.
      </p>

      <img
        src="/data-center.jpg"
        alt="Modern data center with high-performance computing infrastructure"
        width={1920}
        height={1280}
        className="mt-16 aspect-video rounded-lg object-cover object-center"
      />
    </section>
  );
}
