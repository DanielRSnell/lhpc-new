'use client';

import teamData from '@/config/team.json';

export default function AboutTeam() {
  // Specific leadership team members to display
  const includedNames = [
    'Angela Hood',
    'Alex Shmelev', 
    'Christian Kennedy',
    'Justin Hood',
    'Craig Peters',
    'Joel Mjolsness',
    'Chris Ramirez',
    'Lisa Rawls'
  ];

  // Filter for specific team members and sort by order
  const teamMembers = teamData
    .filter((member) =>
      member.Active === 'TRUE' &&
      includedNames.includes(member.Name)
    )
    .sort((a, b) => a.order - b.order)
    .map((member) => ({
      name: member.Name,
      role: member.Role,
      image: member.path,
      linkedin: member['Linked In'],
    }));

  return (
    <section className="section-padding container max-w-screen-xl">
      <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
        Meet the Amalgamy Leadership Team
      </h2>
      <p className="text-muted-foreground mt-3 max-w-2xl text-lg leading-snug">
        Amalgamy is led by experienced executives with deep expertise in
        enterprise technology, high-performance computing, and AI infrastructure
        at scale.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col">
            <a
              href={member.linkedin || '#'}
              target={member.linkedin ? '_blank' : undefined}
              rel={member.linkedin ? 'noopener noreferrer' : undefined}
              className={member.linkedin ? 'group cursor-pointer' : 'cursor-default'}
            >
              <img
                src={member.image}
                alt={member.name}
                width={289}
                height={358}
                className={'w-full aspect-[289/358] object-cover rounded-lg ' + (member.linkedin ? 'group-hover:opacity-90 transition-opacity' : '')}
              />
              <h3 className="text-accent-foreground mt-4 text-2xl font-bold">
                {member.name}
              </h3>
              <p className="text-muted-foreground">{member.role}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
