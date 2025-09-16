import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const teamMembers = [
  {
    name: 'Angela Hood',
    role: 'Founder & CEO',
    image: '/images/team-members/angela.jpeg',
  },
  {
    name: 'Justin Hood', 
    role: 'Chief Operating Officer',
    image: '/images/team-members/justin.jpeg',
  },
  {
    name: 'Christian Kennedy',
    role: 'Chief Technology Officer', 
    image: '/images/team-members/chris.jpeg',
  },
  {
    name: 'Alex Shmelev',
    role: 'Chief Innovations Officer',
    image: '/images/team-members/alex.jpeg',
  },
];

export default function AboutTeam() {
  return (
    <section className="section-padding container max-w-screen-xl">
      <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
        Meet the LaunchHPC leadership team
      </h2>
      <p className="text-muted-foreground mt-3 max-w-2xl text-lg leading-snug">
        LaunchHPC is led by experienced executives with deep expertise in
        enterprise technology, high-performance computing, and AI infrastructure
        at scale.
      </p>

      <Carousel
        className="mt-10"
        opts={{
          align: 'start',
          loop: false,
        }}
      >
        <CarouselContent className="cursor-grab snap-x snap-mandatory">
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="min-w-[289px] basis-1/4 snap-start"
            >
              <img
                src={member.image}
                alt={member.name}
                width={289}
                height={358}
              />
              <h3 className="text-accent-foreground mt-4 text-2xl font-bold">
                {member.name}
              </h3>
              <p className="text-muted-foreground">{member.role}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
