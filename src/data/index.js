export const PROJECTS = [
  {
    id: 'varifai',
    title: 'VarifAI — Deepfake Detection',
    shortTitle: 'VarifAI',
    icon: '🧠',
    category: 'AI / ML',
    featured: true,
    summary:
      'AI-powered system to detect video manipulation using ResNeXt + LSTM. Deployed on AWS with Django REST APIs. Published in peer-reviewed journal.',
    metric: '95% accuracy · 10,000+ samples tested',
    tags: ['Python', 'Django REST', 'AWS', 'ResNeXt', 'LSTM', 'PostgreSQL'],
    specialTag: 'Published',
    github: 'https://github.com/nooralam4919',
    live: null,
    problem:
      'Deepfake videos have become increasingly sophisticated, making manual detection nearly impossible at scale. VarifAI tackles video authenticity verification using state-of-the-art computer vision and sequential deep learning.',
    approach:
      'Combined ResNeXt (spatial feature extraction from video frames) with LSTM (temporal pattern detection across frame sequences). Built a scalable Django REST backend to serve ML inference and deployed the full stack on AWS EC2 with S3 for media storage and PostgreSQL for result logging.',
    features: [
      'Frame-by-frame spatial analysis using ResNeXt convolutional backbone',
      'Temporal sequence modeling with LSTM to detect frame-level anomalies',
      'Scalable REST API for ML inference with rate limiting',
      'PostgreSQL-backed result logging, analytics, and audit trail',
      'Full deployment pipeline on AWS EC2 + S3 with Linux systemd',
      'F1-score validated via integration testing across diverse video datasets',
    ],
    challenges:
      'Training deep models on large video datasets required significant compute optimization. Frame extraction and preprocessing were a bottleneck — solved with batch processing, parallel data loaders, and S3-backed pipelines. Model generalization across different deepfake generation techniques required careful dataset curation and augmentation strategies.',
    impacts: [
      { num: '95%', label: 'Detection Accuracy' },
      { num: '10K+', label: 'Samples Tested' },
      { num: '1', label: 'Peer-Reviewed Publication' },
    ],
    date: 'Oct 2023 – May 2024',
  },
  {
    id: 'techtune',
    title: 'TechTune Motors',
    shortTitle: 'TechTune Motors',
    icon: '🚗',
    category: 'Full Stack',
    featured: true,
    summary:
      'Full-stack automotive service platform built with React, Node.js, and PostgreSQL. Reduced API latency by 25% via caching and backend optimizations.',
    metric: '25% faster API response times',
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API'],
    specialTag: null,
    github: 'https://github.com/nooralam4919',
    live: null,
    problem:
      'Automotive service businesses lacked a unified digital platform for customer management, service tracking, and appointment booking with real-time data updates and scalable architecture.',
    approach:
      'Built a full-stack application with React on the frontend and Node.js + Express on the backend. PostgreSQL handles all relational data. Applied a caching layer at the API level and optimized database queries to dramatically cut response times under concurrent load.',
    features: [
      'Responsive React UI for service catalog, booking, and customer management',
      'RESTful APIs with optimized PostgreSQL queries and indexing',
      'Caching layer for high-traffic read endpoints',
      'Scalable database schema designed to handle concurrent users under load',
      'Full API documentation maintained throughout development',
      'CI/CD pipeline with integration testing and automated deployments',
    ],
    challenges:
      'Frontend-backend data sync caused latency spikes under concurrent users. Resolved by restructuring API endpoints to minimize round trips, introducing query-level caching that cut average response time by 25%, and optimizing JOIN queries by adding composite indexes on frequently queried columns.',
    impacts: [
      { num: '25%', label: 'API Latency Reduction' },
      { num: '25%', label: 'Response Time Improvement' },
      { num: '100%', label: 'Full-Stack Coverage' },
    ],
    date: 'Oct 2023 – Nov 2023',
  },
  {
    id: 'ecommerce',
    title: 'MERN E-Commerce Platform',
    shortTitle: 'MERN E-Commerce',
    icon: '🛒',
    category: 'Full Stack',
    featured: false,
    summary:
      'Complete e-commerce solution with product catalog, cart, JWT auth, and order flow on the MERN stack. Reduced load time by 20% with backend optimizations.',
    metric: '20% load time improvement',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    specialTag: null,
    github: 'https://github.com/nooralam4919',
    live: null,
    problem:
      'A fully functional e-commerce platform needed to handle product listings, user authentication, cart management, and order processing — built entirely from scratch on the MERN stack with a focus on performance.',
    approach:
      'MongoDB for flexible product and order schemas, Express for REST APIs, React for a dynamic cart/checkout UX, and Node.js powering the backend business logic. Applied backend caching and code splitting on the frontend to reduce load times significantly.',
    features: [
      'Product catalog with search, filter, and pagination',
      'JWT-based user authentication and secure session management',
      'Cart state management and multi-step checkout flow',
      'Order history and user profile management',
      'Caching and backend optimization for fast initial loads',
      'Responsive design across mobile and desktop viewports',
    ],
    challenges:
      'Managing cart state consistency across page refreshes required careful design using React Context and localStorage sync, alongside backend session validation to prevent race conditions on concurrent cart updates.',
    impacts: [
      { num: '20%', label: 'Load Time Reduction' },
      { num: 'Full', label: 'CRUD Coverage' },
      { num: 'JWT', label: 'Secure Auth' },
    ],
    date: 'Jun 2023 – Aug 2023',
  },
  {
    id: 'varcons',
    title: 'Varcons Enterprise Frontend',
    shortTitle: 'Enterprise Frontend',
    icon: '💼',
    category: 'Frontend',
    featured: false,
    summary:
      'Rebuilt scalable frontend modules in React + TypeScript during internship. Fixed memory leaks, cut query latency 25%, improved load time 20%.',
    metric: '20% faster loads · 25% stability restored',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'REST API', 'CI/CD'],
    specialTag: 'Internship',
    github: 'https://github.com/nooralam4919',
    live: null,
    problem:
      'The enterprise platform suffered scalability issues in its frontend architecture, intermittent memory leaks causing crashes, and slow PostgreSQL API responses — all impacting production user experience.',
    approach:
      'Rebuilt key frontend modules using React with TypeScript for type safety and long-term maintainability. Integrated REST APIs with a refactored PostgreSQL backend, diagnosed and fixed memory leaks using Chrome DevTools heap snapshots, and followed V-Model SDLC from requirements to deployment.',
    features: [
      'Scalable React component architecture with TypeScript for type safety',
      'REST API integration with optimized PostgreSQL queries',
      'Memory leak root cause analysis and fix via OOP cleanup patterns',
      'Full V-Model SDLC: architecture → coding → testing → deployment',
      'End-to-end API documentation maintained for cross-team collaboration',
      'CI/CD integration with automated integration test gates',
    ],
    challenges:
      'Memory leaks were intermittent and hard to reproduce in development. Used Chrome DevTools heap snapshots to trace retained objects in event listeners across React re-renders — fixed by implementing proper cleanup functions in useEffect hooks and removing stale subscriptions on component unmount.',
    impacts: [
      { num: '20%', label: 'Faster Load Time' },
      { num: '25%', label: 'Stability Restored' },
      { num: '25%', label: 'Query Latency Cut' },
    ],
    date: 'Aug 2023 – Oct 2023',
  },
]

export const EXPERIENCE = [
  {
    company: 'Amazon Development Centre',
    location: 'Bengaluru, Karnataka',
    role: 'Support Operations Specialist — Tools & Automation',
    period: 'Feb 2025 – Feb 2026',
    bullets: [
      'Engineered Python automation tools on Linux-based AWS, reducing manual effort by **30%+** via diagnostic pipeline automation.',
      'Architected data analysis workflows using **AWS S3 and MySQL** for remote data transmission across cross-functional engineering teams.',
      'Debugged production issues using OOP-based log analysis and metrics, improving reliability and resolution time.',
      'Streamlined **CI/CD pipelines** using Git, enforcing configuration management and integration testing standards.',
      'Reduced **AWS compute and storage costs** by aligning resource allocation with actual system requirements.',
    ],
    tags: ['Python', 'AWS EC2', 'AWS S3', 'MySQL', 'Linux', 'CI/CD', 'Git', 'OOP'],
    color: '#6366F1',
  },
  {
    company: 'Varcons Technologies Pvt Ltd',
    location: 'Bengaluru, Karnataka',
    role: 'Software Developer Intern — Full Stack',
    period: 'Aug 2023 – Oct 2023',
    bullets: [
      'Engineered scalable frontend systems using **React and TypeScript**, improving user experience with **20% faster load time**.',
      'Designed and integrated REST APIs with **PostgreSQL**, reducing query latency by **25%** and maintaining API documentation.',
      'Debugged memory leaks using OOP principles, restoring application stability by **25%**.',
      'Drove end-to-end feature development following **V-Model SDLC**, from software architecture to CI/CD deployment.',
    ],
    tags: ['React', 'TypeScript', 'PostgreSQL', 'REST API', 'V-Model SDLC', 'Git'],
    color: '#22C55E',
  },
]

export const SKILLS = {
  Frontend: [
    { name: 'React', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 70 },
    { name: 'HTML / CSS', level: 90 },
  ],
  Backend: [
    { name: 'Python', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Django REST', level: 75 },
    { name: 'Express.js', level: 78 },
  ],
  Database: [
    { name: 'PostgreSQL', level: 82 },
    { name: 'MySQL', level: 78 },
    { name: 'MongoDB', level: 72 },
  ],
  'Cloud & DevOps': [
    { name: 'AWS (EC2 / S3)', level: 80 },
    { name: 'Docker', level: 65 },
    { name: 'CI/CD / Git', level: 82 },
    { name: 'Linux', level: 75 },
  ],
  Languages: [
    { name: 'C++', level: 85 },
    { name: 'SQL', level: 82 },
  ],
}

export const STATS = [
  { num: '500+', label: 'DSA Problems Solved' },
  { num: '30%', label: 'Manual Effort Reduced @ Amazon' },
  { num: '95%', label: 'AI Model Accuracy' },
  { num: '1', label: 'Research Publication' },
]

export const CONTACT = {
  email: 'nooralam.webd@gmail.com',
  github: 'https://github.com/nooralam4919',
  linkedin: 'https://linkedin.com/in/noor-alam-webd',
  leetcode: 'https://leetcode.com/u/alamsiw',
}
