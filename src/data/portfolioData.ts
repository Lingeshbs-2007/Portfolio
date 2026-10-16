import { Project, SkillCategory, AchievementItem, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Lingesh B',
  role: 'Computer Science and Engineering Student',
  positioning: 'Computer Science & Engineering Student | Web3 & Full-Stack Developer',
  heroTagline: "Hi, I'm Lingesh — a Computer Science and Engineering Student. I enjoy building practical software projects across web development, blockchain, and AI.",
  about: {
    summary: 'I am pursuing a B.E. in Computer Science and Engineering at Dr. N.G.P. Institute of Technology (2024–2028).',
    interests: 'I am interested in full-stack web development, blockchain, AI, and cloud computing. I learn by building projects and solving programming problems.',
    experienceHighlights: 'I have developed projects involving blockchain-based systems and AI applications, and I am preparing for software development internships and placement opportunities.'
  },
  contacts: {
    email: 'lingeshbs2007@gmail.com',
    github: 'https://github.com/Lingeshbs-2007',
    linkedin: 'https://www.linkedin.com/in/lingesh-b-825a68376/',
    leetcode: 'https://leetcode.com/u/J00i7ZP2T8/'
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & DSA',
    skills: [
      { name: 'Java', status: 'Core' },
      { name: 'Data Structures & Algorithms', status: 'Core' },
      { name: 'Python', status: 'Core' }
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', status: 'Core' },
      { name: 'CSS', status: 'Core' },
      { name: 'JavaScript', status: 'Core' },
      { name: 'TypeScript', status: 'Core' },
      { name: 'React', status: 'Core' },
      { name: 'Tailwind CSS', status: 'Core' },
      { name: 'Node.js', status: 'Core' }
    ]
  },
  {
    title: 'Blockchain & Web3',
    skills: [
      { name: 'Solidity', status: 'Core' },
      { name: 'Ethereum', status: 'Core' },
      { name: 'Ethers.js', status: 'Core' },
      { name: 'MetaMask', status: 'Core' },
      { name: 'Smart Contracts', status: 'Core' }
    ]
  },
  {
    title: 'Data & Databases',
    skills: [
      { name: 'SQL', status: 'Core' },
      { name: 'MongoDB', status: 'Core' },
      { name: 'Data Preprocessing', status: 'Core' },
      { name: 'Data Visualization', status: 'Core' }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', status: 'Core' },
      { name: 'GitHub', status: 'Core' },
      { name: 'VS Code', status: 'Core' },
      { name: 'Sepolia Testnet', status: 'Core' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'fertitrack',
    name: 'FertiTrack',
    title: 'FertiTrack — Blockchain-Based Fertilizer Subsidy Distribution and Tracking System',
    description: 'A blockchain-based application designed to improve the traceability and transparency of fertilizer subsidy distribution. The project explores smart-contract-based eligibility and claim tracking, farmer records, dealer interactions, and public visibility of distribution statistics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Solidity', 'Ethers.js v6', 'MetaMask', 'Ethereum Sepolia'],
    category: 'Blockchain',
    features: [
      'Farmer registration by an authorized administrator',
      'Smart-contract-based fertilizer voucher and claim tracking',
      'Dealer interaction with farmer records',
      'Public dashboard statistics for transparent monitoring',
      'Hashed Aadhaar representation rather than storing raw Aadhaar numbers in the smart contract'
    ],
    architectureDetails: [
      'Separation of administrator verification, licensed dealer claims, and farmer beneficiary records',
      'Direct interaction with Sepolia testnet smart contracts using MetaMask and Ethers.js v6',
      'Privacy protection by computing SHA-256 hashes for Aadhaar identification before contract calls'
    ]
  },
  {
    id: 'certichain',
    name: 'CertiChain',
    title: 'CertiChain — Blockchain-Based Certificate Verification System',
    description: 'A blockchain-based certificate verification application designed to explore tamper-resistant certificate records and easier verification of academic credentials.',
    technologies: ['React', 'Vite', 'Solidity', 'Ethers.js', 'MetaMask', 'Ethereum'],
    category: 'Blockchain',
    features: [
      'Authorized certificate issuance workflow',
      'Certificate record retrieval and verification portal',
      'Tamper-resistant credential records managed via Solidity smart contracts',
      'Direct verification interface eliminating intermediary attestation delays'
    ],
    architectureDetails: [
      'Cryptographic record hash storage verifying academic authenticity without third-party delay',
      'Smart contract mapping institution authority to credential IDs',
      'Web interface for public certificate lookup and authenticity verification'
    ]
  },
  {
    id: 'fpo-ledger',
    name: 'FPO Ledger',
    title: 'FPO Ledger — Blockchain-Based FPO Ledger and Profit-Sharing System',
    description: 'A blockchain-based project exploring transparent transaction records for Farmer Producer Organizations, including farmer purchases, buyer sales, and rule-based profit-sharing calculations.',
    technologies: ['Solidity', 'Ethereum', 'Smart Contracts', 'React', 'Web3'],
    category: 'Blockchain',
    features: [
      'Transparent transaction records for farmer produce, purchases, and sales',
      'Solidity smart contract implementing rule-based profit-sharing calculations',
      'Decentralized ledger accessible to registered collective members',
      'Ongoing exploration into automated agricultural collective revenue distribution'
    ],
    architectureDetails: [
      'Smart contract rule definitions for collective revenue allocation',
      'Decentralized transaction records accessible to FPO members',
      'Web3 frontend connection providing auditable accounting records'
    ]
  },
  {
    id: 'jarvis',
    name: 'Jarvis',
    title: 'Jarvis — Personal Voice Assistant',
    description: 'A personal voice-assistant project designed to support voice-based interaction and desktop automation. The implementation explores speech recognition, text-to-speech, application launching, and AI-assisted responses.',
    technologies: ['Python', 'Speech Recognition', 'pyttsx3', 'Desktop Automation'],
    category: 'Python',
    features: [
      'Vocal command capture and acoustic speech recognition pipeline in Python',
      'Text-to-speech synthesized audio feedback for conversational interaction',
      'Desktop task automation: launching applications, search queries, and system routines',
      'Personal development project exploring voice-driven developer productivity'
    ],
    architectureDetails: [
      'Modular audio input capture and intent classification in Python',
      'Integration with local desktop processes for voice-activated application execution',
      'Offline synthesis via pyttsx3 with optional API integration experiments'
    ]
  }
];

export const INTERNSHIP_EXPERIENCE: ExperienceItem = {
  role: 'Data Analytics Intern',
  organization: 'Techvolt Software Pvt. Ltd.',
  duration: '15 Days',
  type: 'Internship',
  description: 'Completed a short-term internship focused on data analytics, gaining exposure to data preprocessing, analysis, visualization, and reporting.',
  highlights: [
    'Completed a short-term internship focused on data analytics',
    'Gained exposure to data preprocessing, analysis, visualization, and reporting'
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Dr. N.G.P. Institute of Technology',
    period: '2024 – 2028',
    scoreLabel: 'CGPA',
    scoreValue: '8.20',
    discipline: 'Computer Science and Engineering'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Literacy Mission Matric Higher Secondary School',
    period: '2024',
    scoreLabel: 'Score',
    scoreValue: '90.1%',
    discipline: 'Computer Science Stream'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'leetcode-200',
    title: '200+ Problems Solved on LeetCode',
    organization: 'LeetCode',
    type: 'Problem Solving',
    description: 'Practicing Data Structures and Algorithms in Java and continuously improving problem-solving skills through LeetCode: leetcode.com/u/J00i7ZP2T8/'
  },
  {
    id: 'nptel-cloud',
    title: 'NPTEL — Cloud Computing',
    organization: 'NPTEL / IIT',
    type: 'Certification',
    description: 'Coursework in cloud computing concepts, virtualization, and distributed infrastructure.'
  },
  {
    id: 'nptel-iot',
    title: 'NPTEL — Introduction to IoT',
    organization: 'NPTEL / IIT',
    type: 'Certification',
    description: 'Coursework covering Internet of Things architecture, sensor networking, and embedded systems.'
  },
  {
    id: 'prompt-eng',
    title: 'Prompt Engineering Value Added Course',
    organization: 'VisaiThalam Solutions',
    type: 'Certification',
    description: 'Value added course focusing on structured prompt engineering and LLM interaction.'
  },
  {
    id: 'hackiton-24hr',
    title: "HackITon'26 24-Hour Hackathon",
    organization: 'K.S.R. College of Engineering',
    type: 'Hackathon',
    description: 'Participated in a 24-hour hackathon (October 8–9, 2026) developing predictive solar energy optimization for grid-connected homes.'
  },
  {
    id: 'kpr-ignitrion',
    title: 'KPR Ignitrion — Project & Paper Presentation',
    organization: 'KPR Institute of Engineering and Technology',
    type: 'Presentation',
    description: 'Participated individually in project and paper presentation (September 18–19, 2026) presenting FertiTrack under team name BlockHarvest.'
  },
  {
    id: 'eureka-pitch',
    title: 'Eureka Idea Pitching Pre-Zonals',
    organization: 'National Entrepreneurship Challenge / IIT Bombay context',
    type: 'Presentation',
    description: 'Participated individually in the online pre-zonals pitching decentralized agricultural ledger concepts.'
  },
  {
    id: 'sdc-council',
    title: 'Member, Student Development Council',
    organization: 'Dr. N.G.P. Institute of Technology',
    type: 'Leadership',
    description: 'Executive member contributing to planning and coordinating college events, including KANAM\'26.'
  }
];
