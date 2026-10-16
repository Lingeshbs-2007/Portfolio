export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  image: string;
  aspect: 'tall' | 'landscape' | 'square';
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  timePeriod: string;
  theme: 'dark' | 'light';
}

export interface ProcessStep {
  step: string;
  title: string;
  features: string[];
  variant: 'red' | 'charcoal' | 'light' | 'outline';
}

export interface PricingPlan {
  type: 'Monthly' | 'Project Based';
  label: string;
  badge: string;
  price: string;
  period: string;
  description: string;
  features: string[];
}

export const PORTFOLIO_CONTENT = {
  hero: {
    nameLine1: 'LINGESH',
    nameLine2: 'B',
    roleLine1: 'CSE STUDENT',
    roleLine2: '& DEVELOPER',
    headlineLine1: 'CREATING',
    headlineLine2: 'WEBSITES',
    headlineLine3: '& APPS',
    location: 'TIRUPPUR, IN',
    phone: '+91 9894385025',
    experienceYears: '200+ LeetCode · 5 Core Projects',
    copyright: '©2026',
    educationShort: 'B.E. CSE (CGPA 8.20) · Dr. N.G.P. iTech',
    portraitImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tools: [
      { name: 'Java', icon: 'Cpu' },
      { name: 'React', icon: 'Code2' },
      { name: 'Solidity', icon: 'Boxes' },
      { name: 'Python', icon: 'Terminal' },
      { name: 'Node.js', icon: 'Server' },
      { name: 'SQL & MongoDB', icon: 'Database' }
    ]
  },
  socials: [
    { name: 'GITHUB', url: 'https://github.com/Lingeshbs-2007' },
    { name: 'LINKEDIN', url: 'https://linkedin.com/in/lingesh-b-825a68376' },
    { name: 'LEETCODE', url: 'https://leetcode.com' },
    { name: 'EMAIL', url: 'mailto:lingeshbs2007@gmail.com' }
  ],
  editorialBanner: {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85',
    caption: 'EDITORIAL MOTION VISUAL · SWISS TYPOGRAPHY'
  },
  projects: [
    {
      id: 'fertitrack',
      index: '01 / 06',
      title: 'BLOCKCHAIN FERTILIZER TRACKING',
      category: 'BLOCKCHAIN / WEB3',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=900&q=80',
      aspect: 'tall',
      description: 'Blockchain-Based Fertilizer Subsidy Tracking System developing a decentralized pipeline to track fertilizer subsidy distribution from farmer registration to dealer-based claiming.',
      technologies: ['React', 'Solidity', 'Ethers.js', 'Ethereum', 'MetaMask'],
      features: [
        'Built a transparent platform to manage farmer subsidy records and monitor fertilizer claims',
        'Directly reduced duplicate and incorrect claims across distribution channels',
        'Smart contract verification connecting farmers and licensed agricultural dealers',
        'EVM state integration using MetaMask wallet transactions'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007'
    },
    {
      id: 'certichain',
      index: '02 / 06',
      title: 'DECENTRALIZED CERTIFICATE SYSTEM',
      category: 'DAPP / IPFS',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      description: 'Decentralized Certificate Verification System building a tamper-proof credential issuance and validation platform using blockchain and IPFS.',
      technologies: ['React', 'Solidity', 'IPFS', 'Ethers.js', 'Ethereum', 'MetaMask'],
      features: [
        'Built a decentralized certificate issuance and verification platform for secure and tamper-proof credential validation',
        'Stored certificate files on IPFS and verified hashes using Solidity smart contracts',
        'Eliminated intermediary attestation delays with cryptographic proof of authenticity',
        'Integrated multi-party validation interfaces for employers and academic institutions'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007'
    },
    {
      id: 'smart-helmet',
      index: '03 / 06',
      title: 'SMART HELMET RIDER SAFETY',
      category: 'IOT / EMBEDDED HARDWARE',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80',
      aspect: 'tall',
      description: 'Smart Helmet for Rider Safety System using Arduino Uno to detect accidents, measure impact intensity, and monitor rider speed in real time.',
      technologies: ['Arduino Uno', 'Accelerometer', 'GPS', 'GSM', 'Potentiometer'],
      features: [
        'Designed a smart helmet system using Arduino Uno to detect accidents and monitor rider speed in real time',
        'Integrated GPS and GSM modules for real-time emergency coordinate alerts and rider warnings',
        'Tri-axis accelerometer threshold trigger for automated collision notification to emergency contacts',
        'Potentiometer-based speed telemetry sensing with audio-visual rider alerts'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007'
    },
    {
      id: 'fpo-ledger',
      index: '04 / 06',
      title: 'FPO LEDGER & PROFIT-SHARING',
      category: 'SMART CONTRACTS / ETHEREUM',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      description: 'Blockchain-Based FPO Ledger & Profit-Sharing System developed to maintain transparent and traceable records of farmer produce, sales, and transactions.',
      technologies: ['React', 'Solidity', 'Ethers.js', 'Ethereum', 'MetaMask'],
      features: [
        'Developed a blockchain-based FPO ledger to maintain transparent and traceable records of farmer produce, sales, and transactions',
        'Implemented Solidity smart contracts to calculate and distribute farmer profit shares based on predefined rules',
        'Guaranteed tamper-proof revenue settlement for agricultural collective producer organizations',
        'Real-time transaction auditing via Web3 frontend connection'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007'
    },
    {
      id: 'jarvis',
      index: '05 / 06',
      title: 'JARVIS — AI PERSONAL ASSISTANT',
      category: 'PYTHON / AI AUTOMATION',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
      aspect: 'tall',
      description: 'Voice-based AI assistant that converses with users, answers questions, and responds through voice with natural-language laptop automation.',
      technologies: ['Python', 'AI', 'Automation', 'Speech Recognition', 'Pyttsx3'],
      features: [
        'Developed a voice-based AI assistant that converses with users, answers questions, and responds through voice',
        'Integrated natural-language commands with laptop task automation, allowing users to control system functions through voice',
        'Automated desktop workflows, browser searches, file operations, and application launches',
        'Modular command processor for developer productivity automation'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007'
    },
    {
      id: 'leetcode-vault',
      index: '06 / 06',
      title: '200+ LEETCODE ALGORITHMIC SUITE',
      category: 'DATA STRUCTURES / JAVA',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      description: 'Comprehensive problem-solving repository covering 200+ LeetCode problems in Java spanning Dynamic Programming, Graphs, Trees, and Array transformations.',
      technologies: ['Java', 'Algorithms', 'Data Structures', 'OOP', 'Optimization'],
      features: [
        'Solved 200+ LeetCode algorithmic challenges demonstrating strong Java object-oriented foundations',
        'Implemented optimized space-time solutions across binary search, sliding window, and backtracking',
        'Applied algorithmic thinking to smart contract gas minimization and backend data queries',
        'Active problem solver preparing for software engineering and technical roles'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007'
    }
  ] as ProjectItem[],
  statement: {
    line1Left: 'DRIVEN BY DESIGN,',
    line2Right: 'POWERED BY PURPOSE',
    reelThumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    reelVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-in-an-office-41551-large.mp4',
    stats: [
      { number: '8.20', label: 'B.E. CSE CGPA · DR. N.G.P. ITECH' },
      { number: '200+', label: 'LEETCODE PROBLEMS IN JAVA' },
      { number: '90.1%', label: 'HSC MERIT · LITERACY MISSION' }
    ],
    bio: 'Lingesh B is a Computer Science and Engineering student at Dr. N.G.P. iTech with hands-on experience in Java, React.js, SQL, and Blockchain development. Passionate about building secure, scalable applications and expanding expertise in the MERN stack, Solidity smart contracts, and embedded IoT systems.'
  },
  services: [
    {
      id: 'web-design',
      title: 'FULL-STACK & REACT WEB APPS',
      description: 'Building modern, high-performance web applications using React, HTML, CSS, JavaScript, and expanding into the MERN stack.',
      features: [
        'Pixel-perfect responsive frontend in React',
        'RESTful API integration with Node.js & Express.js',
        'Relational SQL schemas & MongoDB data modeling',
        'Clean component architecture and state management'
      ],
      timePeriod: 'Time period: 2–3 weeks',
      theme: 'dark'
    },
    {
      id: 'blockchain-dev',
      title: 'BLOCKCHAIN & SMART CONTRACTS',
      description: 'Architecting decentralized applications, custom Solidity smart contracts, and IPFS tamper-proof verification on Ethereum.',
      features: [
        'Solidity smart contract authoring & audits',
        'Ethers.js & MetaMask wallet integrations',
        'IPFS decentralized file & certificate storage',
        'Escrow, subsidy & automated profit-sharing rules'
      ],
      timePeriod: 'Time period: 2–4 weeks',
      theme: 'light'
    },
    {
      id: 'ai-automation',
      title: 'PYTHON AI & DESKTOP AUTOMATION',
      description: 'Engineering intelligent voice-based assistants, speech recognition workflows, and desktop process automation systems.',
      features: [
        'Acoustic speech recognition & voice synthesis',
        'Natural-language command parsing',
        'OS task automation and background scripts',
        'Integration with local and external APIs'
      ],
      timePeriod: 'Time period: 1–2 weeks',
      theme: 'light'
    },
    {
      id: 'iot-embedded',
      title: 'IOT & EMBEDDED SYSTEMS',
      description: 'Prototyping safety and monitoring hardware with Arduino Uno, sensors, and GPS/GSM real-time telemetry.',
      features: [
        'Arduino Uno microcontroller firmware',
        'Accelerometer & potentiometer sensor calibration',
        'GPS location tracking & GSM emergency messaging',
        'Hardware-to-cloud telemetry & alert pipelines'
      ],
      timePeriod: 'Time period: 2–3 weeks',
      theme: 'dark'
    }
  ],
  process: {
    headingLeft: 'FROM IDEA',
    headingRight: 'TO LAUNCH',
    intro: 'Every successful software project starts with a clear engineering process. From requirement scoping to deployment, defined stages ensure reliability, security, and performance.',
    steps: [
      {
        step: '01',
        title: 'DISCOVER',
        features: [
          'Project scoping & architectural requirements',
          'Data schema design (SQL / MongoDB / EVM state)',
          'Tech stack selection & feasibility validation',
          'Defining milestone deliverables and timelines'
        ],
        variant: 'red'
      },
      {
        step: '02',
        title: 'DESIGN',
        features: [
          'Wireframes and user interaction flows',
          'Component hierarchy & state management plan',
          'Smart contract rule definitions & state machines',
          'Interface prototyping & accessibility checks'
        ],
        variant: 'charcoal'
      },
      {
        step: '03',
        title: 'BUILD',
        features: [
          'Clean, modular code in React, Java, or Python',
          'Solidity smart contracts with gas optimization',
          'Database connectivity & API integration',
          'Thorough unit testing and edge case handling'
        ],
        variant: 'light'
      },
      {
        step: '04',
        title: 'LAUNCH',
        features: [
          'End-to-end testing and quality assurance',
          'Deployment to production or Ethereum testnets',
          'Performance profiling & security checks',
          'Clear technical documentation and GitHub release'
        ],
        variant: 'outline'
      }
    ]
  },
  education: [
    {
      degree: 'B.E. Computer Science & Engineering',
      institution: 'Dr. N.G.P. iTech',
      period: '2024 – 2028',
      score: 'CGPA : 8.20',
      status: 'Current Undergraduate'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Literacy Mission Matric Hr Sec School',
      period: '2024',
      score: 'Percentage : 90.1 %',
      status: 'Completed'
    }
  ],
  skillsCategorized: [
    { category: 'Languages', skills: ['Java', 'Python', 'JavaScript'] },
    { category: 'Frontend', skills: ['HTML', 'CSS', 'React'] },
    { category: 'Backend', skills: ['Node.js', 'Express.js (Learning)'] },
    { category: 'Database', skills: ['SQL', 'MongoDB'] },
    { category: 'Blockchain', skills: ['Solidity', 'Ethers.js (Learning)'] },
    { category: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] }
  ],
  certificationsAndAchievements: [
    {
      title: 'NPTEL Certifications',
      description: 'Cloud Computing & Introduction to IoT'
    },
    {
      title: 'Prompt Engineering',
      description: 'VisaiThalam Solutions'
    },
    {
      title: '200+ LeetCode Problems',
      description: 'Java Data Structures and Algorithms Mastery'
    },
    {
      title: 'Student Development Council',
      description: 'Organized KANAM\'26 and college technical events'
    },
    {
      title: 'Data Science Workshop',
      description: 'IIT Bombay'
    }
  ],
  brands: [
    'Dr. N.G.P. iTech',
    'Literacy Mission',
    'NPTEL & IIT Bombay',
    'VisaiThalam',
    'Ethereum & IPFS',
    'LeetCode'
  ],
  testimonials: [
    {
      id: 't1',
      clientName: 'Department Academic Guide',
      role: 'Dept. of CSE · Dr. N.G.P. iTech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      initialMessage: 'How did Lingesh demonstrate technical capability across blockchain and embedded systems coursework?',
      responseMessage: 'Lingesh developed both the Fertilizer Subsidy tracking dApp and the Smart Helmet rider safety system with exceptional dedication. His 8.20 CGPA and 200+ LeetCode problem solutions in Java reflect deep commitment to engineering.'
    },
    {
      id: 't2',
      clientName: 'Student Development Council Lead',
      role: 'KANAM\'26 Technical Committee',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      initialMessage: 'What was Lingesh\'s impact in organizing KANAM\'26 and institutional events?',
      responseMessage: 'Lingesh took charge of technical event logistics, collaborative coordination, and execution with flawless initiative. He balances rigorous academics with strong practical leadership.'
    }
  ],
  pricing: {
    monthly: {
      type: 'Monthly',
      label: 'DEDICATED TECHNICAL INTERN',
      badge: 'OPEN FOR HIRE',
      price: '$1,500',
      period: '/ month',
      description: 'Full-time or part-time technical internship commitment across React, Java, Solidity smart contracts, and full-stack development.',
      features: [
        'Dedicated 40 hrs/week engineering focus',
        'Java, React, SQL, and Solidity builds',
        'Daily git commits, PRs, and team standups',
        'Continuous problem-solving and documentation',
        'Direct email & phone contact (+91 9894385025)',
        'Available immediately for 2026 roles'
      ]
    },
    projectBased: {
      type: 'Project Based',
      label: 'SCOPED CONTRACT BUILD',
      badge: 'FIXED SCOPE',
      price: '$950',
      period: '/ milestone',
      description: 'Complete delivery of a defined web application, smart contract module, or Python automation solution with testing and deployment.',
      features: [
        'Full end-to-end project implementation',
        'Smart contracts on Ethereum / IPFS or MERN web app',
        'Clean repository with documentation on GitHub',
        'Thorough testing and verification',
        '2 rounds of revisions included',
        'Post-delivery support and handover'
      ]
    }
  },
  contact: {
    headline: 'LET’S WORK TOGETHER',
    emailPlaceholder: 'Enter your email address',
    submitText: 'GET IN TOUCH',
    email: 'lingeshbs2007@gmail.com',
    phone: '+91 9894385025',
    location: 'Tiruppur, Tamil Nadu, India',
    phoneNote: 'Available for software internships, hackathons & technical projects'
  }
};
