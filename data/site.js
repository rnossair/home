export const site = {
  name: 'Rayane Nossair',
  role: 'Full-Stack Developer',
  intro: 'Passionate about building software for good',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/rnossair',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rayane-nossair/',
      icon: 'linkedin',
    },
  ],
  about: {
    heading: 'About Me',
    message:
      'Hi! I am Rayane, a rising sophomore at Grinnell College studying Computer Science. Most of my experience centers around full-stack web development, which I have taught myself through online curriculums and project work.',
    resumeHref: '/docs/resume.pdf',
    imageHref: '/images/profile/pfp.png',
  },
  experiences: {
    heading: 'Experience',
    items: [
      {
        role: 'DXC Technology | Software Engineering Intern',
        company: 'DXC Technology',
        date: 'June 2026 - July 2026',
        imageHref: '/images/companies/dxc.svg',
        responsibilities: [
          'Built developer-facing web tools using React and Node.js',
          'Implemented reusable UI components and improved test coverage',
          'Assisted in migrating legacy UI components to modern frameworks',
        ],
      },
      {
        role: 'Grinnell College | Computer Science Grader & Tutor',
        company: 'Grinnell College',
        date: 'August 2025 - Present',
        imageHref: '/images/companies/grinnell.png',
        responsibilities: [
          'Grade assignments and provide targeted feedback to students',
          'Hold weekly office hours for debugging and problem-solving help',
          'Support exam prep and reinforce data structures fundamentals',
        ],
      },
      {
        role: 'YJSR | Web Developer',
        company: 'YJSR',
        date: 'May 2023 - March 2024',
        imageHref: '/images/companies/YJSR.png',
        responsibilities: [
          'Built responsive front-end features and polished UI interactions',
          'Collaborated with stakeholders to iterate on UX and requirements',
          'Deployed updates and maintained the site with modern tooling',
        ],
      },
    ],
  },
  projects: {
    heading: 'Recent GitHub Projects',
    username: 'rnossair',
    recentCount: 4,
    featuredRepos: [],
  },
  skills: {
    heading: 'Skills',
    technical: [
      { name: 'React', value: 70 },
      { name: 'Python', value: 65 },
      { name: 'Java', value: 55 },
      { name: 'Express.js', value: 40 },
      { name: 'Data Structures', value: 45 },
      { name: 'C', value: 50 },
    ],
    soft: [
      { name: 'Collaboration', value: 90 },
      { name: 'Creativity', value: 75 },
      { name: 'Adaptability', value: 85 },
      { name: 'Goal-Oriented', value: 80 },
      { name: 'Problem Solving', value: 75 },
      { name: 'Positivity', value: 85 },
    ],
  },
  contact: {
    heading: 'Get In Touch',
    message:
      'I am currently looking for software engineering or web development internships. If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at',
    email: 'nossairr@grinnell.edu',
  },
};
