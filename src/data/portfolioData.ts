import { Project, SkillCategory, AchievementItem, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Lingesh B',
  role: 'Computer Science and Engineering Student',
  positioning: 'Computer Science & Engineering Student | Web3 & Full-Stack Developer',
  heroTagline: 'Building blockchain-powered applications and modern web experiences.',
  about: {
    summary: 'Lingesh is a Computer Science and Engineering student with hands-on experience in Java, React.js, SQL, and blockchain development.',
    interests: 'He is interested in building secure, scalable applications and expanding his expertise in the MERN stack.',
    experienceHighlights: 'He has worked on practical projects involving blockchain, Web3, React, Solidity, IPFS, Ethereum, MetaMask, Python, and IoT.'
  },
  contacts: {
    email: 'lingeshbs2007@gmail.com',
    github: 'https://github.com/Lingeshbs-2007',
    linkedin: 'https://www.linkedin.com/in/lingesh-b-825a68376',
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', status: 'Core' },
      { name: 'Python', status: 'Core' },
      { name: 'JavaScript', status: 'Core' },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', status: 'Core' },
      { name: 'CSS', status: 'Core' },
      { name: 'React', status: 'Core' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', status: 'Core' },
      { name: 'Express.js', status: 'Learning' },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'SQL', status: 'Core' },
      { name: 'MongoDB', status: 'Core' },
    ]
  },
  {
    title: 'Blockchain',
    skills: [
      { name: 'Solidity', status: 'Core' },
      { name: 'Ethers.js', status: 'Learning' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', status: 'Core' },
      { name: 'GitHub', status: 'Core' },
      { name: 'VS Code', status: 'Core' },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'fertitrack',
    name: 'FertiTrack',
    title: 'Blockchain-Based Fertilizer Subsidy Tracking System',
    description: 'A blockchain-based fertilizer subsidy management system with secure farmer registration and dealer-based subsidy verification.',
    technologies: ['React', 'Solidity', 'Ethers.js', 'Ethereum', 'MetaMask'],
    category: 'Blockchain',
    features: [
      'Farmer registration',
      'Dealer-based subsidy verification',
      'Blockchain-backed transactions',
      'MetaMask integration',
      'Transparent and tamper-resistant subsidy tracking'
    ],
    architectureDetails: [
      'Decentralized identity mapping ensuring legitimate farmer beneficiary credentials',
      'Dealer claim validation preventing duplicate subsidy redemptions',
      'State-managed audit log permanently verified across the Ethereum test network'
    ]
  },
  {
    id: 'certichain',
    name: 'CertiChain',
    title: 'Decentralized Certificate Verification System',
    description: 'A decentralized certificate issuance and verification platform designed for secure and tamper-proof credential validation.',
    technologies: ['React', 'Solidity', 'IPFS', 'Ethers.js', 'Ethereum', 'MetaMask'],
    category: 'Blockchain',
    features: [
      'Certificate issuance',
      'Certificate verification',
      'IPFS-based certificate storage',
      'Solidity smart contracts',
      'Blockchain-based validation'
    ],
    architectureDetails: [
      'Cryptographic content hash generation for document immutability via IPFS',
      'Smart contract registries mapping issuer digital signatures to credential IDs',
      'Zero-intermediary instant verification portal for academic and institutional certificates'
    ]
  },
  {
    id: 'fpo-ledger',
    name: 'FPO Ledger',
    title: 'Blockchain-Based FPO Ledger & Profit-Sharing System',
    description: 'A blockchain project focused on transparent FPO transaction tracking and profit sharing.',
    technologies: ['Blockchain', 'Smart Contracts', 'Web3'],
    category: 'Blockchain',
    features: [
      'Transparent FPO transaction tracking',
      'Decentralized profit-sharing calculation',
      'Verifiable ledger records'
    ],
    architectureDetails: [
      'Equitable ledger record distribution for Farmer Producer Organizations',
      'Smart contract automated calculation of collective crop profits',
      'Auditable transaction logging accessible to all registered collective members'
    ]
  },
  {
    id: 'jarvis',
    name: 'Jarvis',
    title: 'AI Voice Assistant',
    description: 'A Python-based voice assistant project built for responsive vocal command recognition, speech processing, and desktop application workflow control.',
    technologies: ['Python', 'Speech Recognition', 'Text-to-Speech'],
    category: 'Python',
    features: [
      'Voice interaction',
      'Speech recognition',
      'Text-to-speech',
      'Application control'
    ],
    architectureDetails: [
      'Audio stream capture and acoustic speech parsing pipeline in Python',
      'Synthesized text-to-speech feedback loop for conversational responses',
      'OS-level application launching and desktop task automation routines'
    ]
  }
];

export const INTERNSHIP_EXPERIENCE: ExperienceItem = {
  role: 'Data Analytics Intern',
  organization: 'Techvolt Software Pvt. Ltd.',
  duration: '15 Days',
  type: 'Internship',
  description: 'Assisted in data analysis and visualization using data analytics techniques. Gained practical experience in data preprocessing, analysis, and reporting.',
  highlights: [
    'Assisted in data analysis and visualization using data analytics techniques',
    'Gained practical experience in data preprocessing, analysis, and reporting'
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.E. Computer Science & Engineering',
    institution: 'Dr. N.G.P. Institute of Technology',
    period: '2024 - 2028',
    scoreLabel: 'CGPA',
    scoreValue: '8.20',
    discipline: 'Computer Science & Engineering'
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'Literacy Mission Matric Hr Sec School',
    period: '2024',
    scoreLabel: 'Score',
    scoreValue: '90.1%',
    discipline: 'Computer Science Stream'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'nptel-cloud',
    title: 'NPTEL Certification – Cloud Computing',
    organization: 'NPTEL / IIT',
    type: 'Certification',
    description: 'Certified coursework in cloud computing fundamentals, distributed systems, and virtualization architectures.'
  },
  {
    id: 'nptel-iot',
    title: 'NPTEL Certification – Introduction to IoT',
    organization: 'NPTEL / IIT',
    type: 'Certification',
    description: 'Certified coursework covering Internet of Things architecture, sensor networking, and embedded telemetry.'
  },
  {
    id: 'prompt-eng',
    title: 'Prompt Engineering Value Added Course',
    organization: 'VisaiThalam Solutions',
    type: 'Certification',
    description: 'Professional value-added certification focusing on structured prompt engineering paradigms and LLM interaction.'
  },
  {
    id: 'paper-pres',
    title: 'Paper Presentation',
    organization: 'KPR Institute of Engineering and Technology',
    type: 'Presentation',
    description: 'Technical paper presentation presenting research concepts to faculty reviewers and student peers.'
  },
  {
    id: 'hackathon',
    title: '24-Hour Hackathon',
    organization: 'K.S.R. College of Engineering',
    type: 'Hackathon',
    description: 'Participated in an intensive 24-hour engineering hackathon developing software under tight deadlines.'
  },
  {
    id: 'iit-bombay',
    title: 'Data Science Workshop',
    organization: 'IIT Bombay',
    type: 'Workshop',
    description: 'Hands-on technical workshop on data science paradigms, exploratory data analysis, and predictive modeling.'
  },
  {
    id: 'sdc-member',
    title: 'Member, Student Development Council',
    organization: 'Dr. N.G.P. Institute of Technology',
    type: 'Leadership',
    description: 'Active council member contributing to student technical initiatives, development programs, and peer mentorship.'
  },
  {
    id: 'kanam-organizer',
    title: "Organized KANAM'26 & College Technical Events",
    organization: 'Dr. N.G.P. Institute of Technology',
    type: 'Leadership',
    description: 'Coordinated and organized KANAM\'26 symposium along with institutional technical events and student workshops.'
  }
];
