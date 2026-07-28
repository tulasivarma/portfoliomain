// All site copy lives here so it can be edited without touching components.
// Fields marked TODO have no source value yet and use obvious placeholders.

export const site = {
  displayName: 'Tulasi Ram',
  fullName: 'Reyyi Tulasi Ram',
  role: 'Entry-Level Python & Backend Developer',
};

const RESUME_HREF = '/Reyyi-Tulasi-Ram-Python-Developer.pdf';

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: RESUME_HREF, download: true },
];

export const hero = {
  greeting: "Hello, I'm",
  name: 'Tulasi Ram',
  roles: ['Python Developer', 'Backend Developer', 'API Developer', 'SQL & Data Enthusiast'],
  subheadline:
    'I build backend services, database applications, and ML-powered tools using Python, FastAPI, and SQL. Based in Vizianagaram, Andhra Pradesh — open to full-time roles across India and remote.',
  socials: {
    github: 'https://github.com/tulasivarma',
    linkedin: 'https://www.linkedin.com/in/reyyi-tulasiram/',
  },
  resumeHref: RESUME_HREF,
  projectsHref: '#projects',
};

export const about = {
  heading: 'About',
  paragraphs: [
    "I'm an Information Technology graduate who started with web pages and moved to the systems behind them. Most of my work now lives on the backend — Python services, FastAPI endpoints, relational schemas, and small machine-learning models that turn messy input into something a user can act on.",
    'My most substantial project so far is an AI-powered grievance management system. Public complaint portals usually pile up faster than staff can sort them, so I trained an NLP classifier to read each complaint, predict its category and urgency, and route it automatically through a FastAPI endpoint.',
    "I'm looking for an entry-level Python or backend role where I can work on production code with a team, learn proper engineering practice — testing, code review, deployment — and grow toward data-driven software.",
  ],
  whatIBring: {
    heading: 'What I bring',
    text: 'Readable code, a habit of actually finishing what I start, and comfort with SQL — the part most beginners skip.',
  },
};

export const services = {
  heading: 'What I Work On',
  items: [
    {
      title: 'Backend Development with Python',
      description:
        'REST APIs built with FastAPI — request validation, structured error responses, and clean separation between routing, logic, and data access.',
    },
    {
      title: 'Databases & SQL',
      description:
        'Schema design, normalisation, joins and aggregate queries in MySQL and Oracle. I write the SQL myself rather than leaning entirely on an ORM.',
    },
    {
      title: 'Machine Learning & Automation',
      description:
        'Text-classification models with scikit-learn, data cleaning with pandas, and Python scripts that remove repetitive manual steps.',
    },
  ],
};

export const skills = {
  heading: 'Skills',
  groups: [
    {
      label: 'Working knowledge',
      items: ['Python', 'SQL (MySQL, Oracle)', 'FastAPI', 'REST API design', 'HTML', 'CSS', 'Git & GitHub'],
    },
    {
      label: 'Familiar',
      items: ['JavaScript', 'React.js', 'Bootstrap', 'pandas', 'scikit-learn', 'Java'],
    },
    {
      label: 'Currently learning',
      items: ['Docker', 'Unit testing with pytest', 'Deployment (Render / Railway)'],
    },
  ],
};

export const experience = {
  heading: 'Experience',
  items: [
    {
      role: 'Web Development Intern',
      company: 'ApexPlanet Software Pvt. Ltd.',
      dates: 'June 2025 – July 2025',
      bullets: [
        'Built three responsive projects from scratch: a portfolio site, a to-do app with localStorage persistence, and an API-integrated web app.',
        'Implemented DOM manipulation, client-side form validation, and mobile-first responsive layouts.',
        'Reduced page load weight by compressing assets and deferring non-critical scripts.',
      ],
    },
    {
      role: 'Web Development Intern',
      company: 'Codsoft',
      dates: 'June 2024 – July 2024',
      bullets: [
        'Delivered multiple responsive web pages using HTML, CSS, and JavaScript within weekly deadlines.',
        'Applied semantic markup and cross-browser layout fixes across assigned tasks.',
        'Certificate issued 13 July 2024.',
      ],
    },
  ],
};

export const projects = {
  heading: 'Projects',
  items: [
    {
      title: 'AI-Powered Predictive Grievance Management System',
      summary:
        'Public grievance portals collect complaints faster than staff can triage them. This system reads each incoming complaint, predicts its department and urgency, and routes it to the correct queue automatically.',
      bullets: [
        'Trained an NLP text-classification model on labelled complaint data',
        'Served predictions through a FastAPI REST endpoint with typed request validation',
        'Designed a relational schema tracking complaints, categories, and status history',
      ],
      stack: ['Python', 'FastAPI', 'scikit-learn', 'NLP', 'SQL'],
      roleLabel: 'Python Developer — model training, API layer, and database design',
      codeUrl: '', // TODO: link to repo
      demoUrl: '', // TODO: link to live demo
    },
    {
      title: 'Electricity Bill Management System',
      summary:
        'A billing tool for tracking consumers, meter readings, and monthly charges, built around a properly normalised database rather than flat tables.',
      bullets: [
        'Designed schema for consumers, tariff slabs, readings, and payments',
        'Wrote SQL for bill generation, arrears tracking, and monthly summaries',
        'Built the application layer in Java with input validation',
      ],
      stack: ['SQL', 'MySQL', 'Java'],
      roleLabel: 'Backend / Database Developer',
      codeUrl: '', // TODO: link to repo
      demoUrl: '',
    },
    {
      title: 'Movie Browser — Streaming-Style UI',
      summary:
        'A responsive streaming-style interface that pulls live movie data from a public REST API.',
      bullets: [
        'Fetched and rendered data asynchronously with the Fetch API',
        'Handled loading states, empty results, and API errors gracefully',
        'Built a mobile-first responsive grid with category rows and search',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'REST API'],
      roleLabel: 'Frontend Developer',
      codeUrl: '', // TODO: link to repo
      demoUrl: '', // TODO: link to live demo
    },
  ],
};

export const contact = {
  heading: 'Contact',
  blurb:
    "I'm actively looking for entry-level Python and backend developer roles, and I'm open to relocating. Email is the fastest way to reach me — I reply within a day.",
  email: 'tulasiramreyyi@gmail.com',
  location: 'Vizianagaram, Andhra Pradesh, India',
  github: 'https://github.com/tulasivarma',
  linkedin: 'https://linkedin.com/in/reyyi-tulasiram/',
};

export const footer = {
  name: 'Tulasi Ram',
};
