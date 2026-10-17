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

export interface OpportunityPlan {
  type: 'Internship' | 'Academic & Projects';
  label: string;
  badge: string;
  availabilityTitle: string;
  availabilitySubtitle: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  eventName: string;
  role: string;
  avatar: string;
  initialMessage: string;
  responseMessage: string;
  tag: string;
}

export const PORTFOLIO_CONTENT = {
  hero: {
    greeting: "Hi, I'm Lingesh — a Computer Science and Engineering Student.",
    summary:
      "I enjoy building practical software projects across web development, blockchain, and AI. I am continuously improving my problem-solving skills and exploring technologies that help me turn ideas into working applications.",
    nameLine1: 'LINGESH',
    nameLine2: 'B.',
    roleLine1: 'WEB3 & FULL-STACK',
    roleLine2: 'DEVELOPER',
    headlineLine1: 'BUILDING',
    headlineLine2: 'PRACTICAL',
    headlineLine3: 'SOFTWARE',
    location: 'TIRUPPUR, INDIA',
    experienceYears: '200+ LeetCode · 5 Core Projects',
    copyright: '©2026',
    educationShort: 'B.E. CSE (CGPA 8.20) · Dr. N.G.P. Institute of Technology',
    portraitImage: '', // Blank by default so container renders the stylized initials/silhouette card rather than an unrelated portrait
    tools: [
      { name: 'Java', icon: 'Cpu' },
      { name: 'React', icon: 'Code2' },
      { name: 'Solidity', icon: 'Boxes' },
      { name: 'Python', icon: 'Terminal' },
      { name: 'TypeScript', icon: 'Code2' },
      { name: 'SQL & MongoDB', icon: 'Database' }
    ]
  },
  socials: [
    { name: 'GITHUB', url: 'https://github.com/Lingeshbs-2007' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/lingesh-b-825a68376/' },
    { name: 'LEETCODE', url: 'https://leetcode.com/u/J00i7ZP2T8/' },
    { name: 'EMAIL', url: 'mailto:lingeshbs2007@gmail.com' }
  ],
  editorialBanner: {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85',
    caption: 'ENGINEERING & PRACTICAL SOFTWARE IMPLEMENTATION'
  },
  projects: [
    {
      id: 'fertitrack',
      index: '01 / 05',
      title: 'FERTITRACK — BLOCKCHAIN SUBSIDY TRACKING',
      category: 'BLOCKCHAIN / SEPOLIA',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=900&q=80',
      aspect: 'tall',
      description:
        'A prototype blockchain-based application designed to explore transparency and traceability in agricultural fertilizer subsidy distribution. Built on Ethereum Sepolia testnet to explore smart-contract-based eligibility, simulated farmer voucher claims, and public monitoring.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Solidity', 'Ethers.js v6', 'MetaMask', 'Ethereum Sepolia'],
      features: [
        'Authorized administrator registration for simulated farmer records',
        'Smart-contract-based fertilizer voucher issuance and claim tracking on Sepolia',
        'Licensed dealer interface for validating and claiming allocated vouchers',
        'Public dashboard view for transparent tracking of distribution statistics',
        'SHA-256 hashed representation of identification data rather than storing raw Aadhaar numbers on-chain'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007/FertiTrack'
    },
    {
      id: 'certichain',
      index: '02 / 05',
      title: 'CERTICHAIN — CERTIFICATE VERIFICATION',
      category: 'BLOCKCHAIN / ETHEREUM',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      description:
        'A prototype blockchain-based certificate verification application designed to explore tamper-resistant academic credential records and public verification workflows via Ethereum smart contracts.',
      technologies: ['React', 'Vite', 'Solidity', 'Ethers.js', 'MetaMask', 'Ethereum'],
      features: [
        'Authorized certificate issuance workflow by accredited institutions',
        'Public certificate verification portal to query credential validity',
        'Tamper-resistant credential records managed via Solidity smart contracts',
        'Direct smart-contract query interface for verifying credential authenticity'
      ],
      githubUrl: 'https://github.com/Lingeshbs-2007/CertiChain'
    },
    {
      id: 'fpo-ledger',
      index: '03 / 05',
      title: 'FPO LEDGER & PROFIT-SHARING',
      category: 'SMART CONTRACTS / WEB3',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=900&q=80',
      aspect: 'tall',
      description:
        'A prototype smart-contract project exploring transparent record-keeping for Farmer Producer Organizations (FPOs), including member crop records, purchase logs, and automated profit-sharing calculation rules.',
      technologies: ['Solidity', 'Ethereum', 'Smart Contracts', 'React', 'Web3'],
      features: [
        'Transparent ledger records for farmer produce, purchases, and sales transactions',
        'Solidity smart contract prototype implementing rule-based profit-sharing calculation logic',
        'Role-based smart contract access for registered collective members',
        'Exploratory smart contract architecture for cooperative accounting transparency'
      ]
    },
    {
      id: 'jarvis',
      index: '04 / 05',
      title: 'JARVIS — PERSONAL VOICE ASSISTANT',
      category: 'PYTHON / AUTOMATION',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      description:
        'A personal voice-assistant project designed to support voice-based interaction and desktop automation. The implementation explores speech recognition, text-to-speech, application launching, and AI-assisted responses.',
      technologies: ['Python', 'Speech Recognition', 'pyttsx3', 'Desktop Automation'],
      features: [
        'Vocal command capture and acoustic speech recognition pipeline in Python',
        'Text-to-speech synthesized audio feedback using pyttsx3',
        'Desktop task automation: launching applications, search queries, and system routines',
        'Personal development project exploring voice-driven developer productivity'
      ]
    },
    {
      id: 'smart-helmet',
      index: '05 / 05',
      title: 'SMART HELMET FOR RIDER SAFETY',
      category: 'EMBEDDED HARDWARE / IOT',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80',
      aspect: 'tall',
      description:
        'A rider safety prototype developed using Arduino Uno to detect collisions, monitor rider speed, and alert emergency contacts with real-time GPS coordinates.',
      technologies: ['Arduino Uno', 'Accelerometer', 'GPS', 'GSM', 'Potentiometer'],
      features: [
        'Arduino Uno microcontroller firmware calibrated for impact threshold detection',
        'Integrated GPS and GSM modules for real-time emergency alert SMS dispatch',
        'Tri-axis accelerometer trigger for automated accident detection',
        'Speed monitoring via potentiometer sensor telemetry'
      ]
    }
  ] as ProjectItem[],
  statement: {
    line1Left: 'LEARN BY',
    line1Right: 'BUILDING,',
    line2Left: 'DRIVEN BY',
    line2Right: 'PURPOSE',
    reelThumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    reelVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-in-an-office-41551-large.mp4',
    stats: [
      { number: '8.20', label: 'B.E. CSE CGPA · DR. N.G.P. INSTITUTE OF TECHNOLOGY' },
      { number: '200+', label: 'LEETCODE PROBLEMS SOLVED IN JAVA' },
      { number: '90.1%', label: 'HSC MERIT · LITERACY MISSION MATRIC HR. SEC.' }
    ],
    bio: 'I am a Computer Science and Engineering student at Dr. N.G.P. Institute of Technology (2024–2028). I enjoy building practical software applications across full-stack web development, blockchain, and AI. I learn primarily by solving programming problems and implementing working projects, and I am actively preparing for software development internships and placement opportunities.'
  },
  services: [
    {
      id: 'web-development',
      title: 'WEB APPLICATION DEVELOPMENT',
      description:
        'Building responsive frontends and full-stack web applications using React, TypeScript, HTML, CSS, JavaScript, and Node.js.',
      features: [
        'Component-driven UI development with React and Vite',
        'Responsive styling using Tailwind CSS',
        'RESTful API communication and client state management',
        'Relational SQL schemas and MongoDB document storage'
      ],
      timePeriod: 'Focus: Full-Stack & React',
      theme: 'dark'
    },
    {
      id: 'blockchain-dev',
      title: 'BLOCKCHAIN & SMART CONTRACTS',
      description:
        'Developing decentralized applications and smart contracts exploring transparency, subsidy tracking, and verifiable credential records.',
      features: [
        'Solidity smart contract authoring and local testing',
        'Ethers.js integration with MetaMask wallet',
        'State-managed registries on Ethereum testnets (Sepolia)',
        'Transparent eligibility and voucher verification logic'
      ],
      timePeriod: 'Focus: Solidity & Web3',
      theme: 'light'
    },
    {
      id: 'ai-automation',
      title: 'AI-POWERED EXPERIMENTATION',
      description:
        'Building voice-based assistants and automation scripts in Python, exploring speech recognition, text-to-speech, and AI integrations.',
      features: [
        'Python scripting and desktop process automation',
        'Speech recognition and audio feedback synthesis',
        'Exploratory AI API integration for natural responses',
        'Command parsing for personal productivity workflows'
      ],
      timePeriod: 'Focus: Python & AI APIs',
      theme: 'light'
    },
    {
      id: 'data-analytics',
      title: 'DATA ANALYSIS & VISUALIZATION',
      description:
        'Analyzing datasets, cleaning information, and creating visual summaries, building on 15 days of internship experience at Techvolt Software.',
      features: [
        'Data preprocessing and cleaning techniques',
        'Exploratory data analysis in Python',
        'Visualization charts and structured reporting',
        'Algorithmic problem-solving foundation in Java'
      ],
      timePeriod: 'Experience: Techvolt Intern',
      theme: 'dark'
    }
  ],
  process: {
    headingLeft: 'FROM CONCEPT',
    headingRight: 'TO WORKING CODE',
    intro:
      'My approach to building software projects centres on clear problem definition, disciplined implementation, and thorough testing.',
    steps: [
      {
        step: '01',
        title: 'UNDERSTAND',
        features: [
          'Problem research and requirement scoping',
          'Identifying user interactions and data flow',
          'Selecting practical, modern technology stacks',
          'Defining core milestones before writing code'
        ],
        variant: 'red'
      },
      {
        step: '02',
        title: 'ARCHITECT',
        features: [
          'Schema design (SQL tables, MongoDB, or EVM state)',
          'Component hierarchy and state management planning',
          'Smart contract rule and access control definitions',
          'Wireframing clean and accessible user interfaces'
        ],
        variant: 'charcoal'
      },
      {
        step: '03',
        title: 'IMPLEMENT',
        features: [
          'Clean, structured code in Java, React, or Python',
          'Solidity smart contract logic with proper validations',
          'API connectivity and secure data handling',
          'Testing edge cases and functional flow'
        ],
        variant: 'light'
      },
      {
        step: '04',
        title: 'VERIFY & DEPLOY',
        features: [
          'Testing user flows and debugging contract calls',
          'Deploying to Ethereum testnets (Sepolia) or web hosting',
          'Writing comprehensive README documentation on GitHub',
          'Iterating based on peer and mentor feedback'
        ],
        variant: 'outline'
      }
    ]
  },
  education: [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Dr. N.G.P. Institute of Technology',
      period: '2024 – 2028',
      score: 'CGPA : 8.20',
      status: 'Current Undergraduate'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Literacy Mission Matric Higher Secondary School',
      period: '2024',
      score: 'Percentage : 90.1 %',
      status: 'Completed'
    }
  ],
  internship: {
    role: 'Data Analytics Intern',
    organization: 'Techvolt Software Pvt. Ltd.',
    duration: '15 Days',
    description:
      'Completed a short-term internship focused on data analytics, gaining exposure to data preprocessing, analysis, visualization, and reporting.'
  },
  skillsCategorized: [
    { category: 'Programming & DSA', skills: ['Java', 'Data Structures & Algorithms', 'Python'] },
    { category: 'Web Development', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js'] },
    { category: 'Blockchain & Web3', skills: ['Solidity', 'Ethereum', 'Ethers.js', 'MetaMask', 'Smart Contracts'] },
    { category: 'Data & Databases', skills: ['SQL', 'MongoDB', 'Data Preprocessing', 'Data Visualization'] },
    { category: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Sepolia Testnet'] }
  ],
  certifications: [
    {
      title: 'NPTEL — Cloud Computing',
      organization: 'NPTEL / IIT'
    },
    {
      title: 'NPTEL — Introduction to IoT',
      organization: 'NPTEL / IIT'
    },
    {
      title: 'Prompt Engineering Value Added Course',
      organization: 'VisaiThalam Solutions'
    }
  ],
  brands: [
    'Dr. N.G.P. Institute of Technology',
    'Techvolt Software (Internship)',
    'Literacy Mission Hr. Sec.',
    'NPTEL / IIT Online Learning',
    'VisaiThalam Solutions',
    'LeetCode (200+ Solved)'
  ],
  activitiesAndEvents: [
    {
      id: 'hackiton',
      eventName: "HackITon'26 · KPR Institute of Engineering & Technology",
      role: '24-Hour Hackathon · Oct 8–9, 2026',
      avatar: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80',
      initialMessage: 'Participated in an intensive 24-hour hackathon, working on predictive solar energy forecasting and household load scheduling for grid-connected homes without battery storage.',
      responseMessage: 'Developed an algorithmic approach for solar generation forecasting and household energy consumption optimization under rapid hackathon constraints.',
      tag: 'HACKATHON PARTICIPATION'
    },
    {
      id: 'vibecode',
      eventName: "VibeCode'26 · K.S.R. College of Technology",
      role: 'Hackathon Participation · 2026',
      avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=150&q=80',
      initialMessage: 'Participated in the VibeCode\'26 hackathon, tackling collaborative software problem-solving and rapid prototyping challenges.',
      responseMessage: 'Collaborated on rapid solution ideation, algorithmic problem breakdown, and working prototype development under hackathon deadlines.',
      tag: 'HACKATHON PARTICIPATION'
    },
    {
      id: 'kpr-ignitrion',
      eventName: 'KPR Ignitrion · KPR Institute of Engineering & Technology',
      role: 'Project & Paper Presentation · Sep 18–19, 2026',
      avatar: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=150&q=80',
      initialMessage: 'Participated individually in both project presentation and paper presentation with FertiTrack under the team name BlockHarvest.',
      responseMessage: 'Presented the smart-contract architecture for fertilizer subsidy tracking and transparent claim verification to faculty evaluators.',
      tag: 'TECHNICAL PRESENTATION'
    },
    {
      id: 'eureka-pitching',
      eventName: 'Eureka Idea Pitching · National Entrepreneurship Challenge / IIT Bombay Context',
      role: 'Online Pre-Zonals · Innovation Pitch',
      avatar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=150&q=80',
      initialMessage: 'Participated individually in the online pre-zonals associated with Eureka Idea Pitching in the NEC / IIT Bombay context.',
      responseMessage: 'Pitched agricultural transparency mechanisms using decentralized ledger technology for rural producer collectives.',
      tag: 'IDEA PITCHING'
    },
    {
      id: 'sdc-leadership',
      eventName: 'Student Development Council · Dr. N.G.P. Institute of Technology',
      role: 'Executive Member · Event Coordination',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80',
      initialMessage: 'Executive Member of the Student Development Council, contributing to planning and coordinating institutional technical events.',
      responseMessage: 'Contributed to event planning, student team coordination, and session execution for the KANAM\'26 technical symposium.',
      tag: 'COUNCIL LEADERSHIP'
    }
  ] as TestimonialItem[],
  opportunities: {
    monthly: {
      type: 'Internship',
      label: 'TECHNICAL INTERNSHIP',
      badge: 'OPEN TO WORK',
      availabilityTitle: 'OPEN FOR INTERNSHIP',
      availabilitySubtitle: 'Software Development & Technical Roles',
      description: 'Seeking software development internships to apply problem-solving skills in Java, React, SQL, and Web3 technologies.',
      features: [
        'Dedicated student engineer eager to learn & contribute',
        'Strong Java & Data Structures foundation (200+ LeetCode)',
        'React, TypeScript, Tailwind CSS, & Node.js frontend/backend',
        'Solidity smart contract & Web3 development experience',
        'Data analytics background (Techvolt Software internship)',
        'Dr. N.G.P. iTech CSE Undergraduate (CGPA: 8.20)'
      ]
    } as OpportunityPlan,
    projectBased: {
      type: 'Academic & Projects',
      label: 'ACADEMIC & HACKATHONS',
      badge: 'COLLABORATION',
      availabilityTitle: 'OPEN TO COLLABORATE',
      availabilitySubtitle: 'Hackathons, Competitions & Open Source',
      description: 'Open for hackathons, engineering competitions, research paper presentations, and open-source contributions.',
      features: [
        'Hands-on hackathon experience (HackITon\'26 & VibeCode\'26)',
        'Paper and project presentation experience (KPR Ignitrion)',
        'Decentralized systems and AI application interest',
        'Modular, maintainable code with git version control',
        'Clear technical documentation and presentation skills',
        'Direct contact: lingeshbs2007@gmail.com'
      ]
    } as OpportunityPlan
  },
  contact: {
    headline: 'LET’S CONNECT',
    subheadline: 'Available for software development internships, hackathons, and technical collaborations.',
    emailPlaceholder: 'Enter your email address',
    submitText: 'SEND MESSAGE',
    email: 'lingeshbs2007@gmail.com',
    location: 'Tiruppur, Tamil Nadu, India'
  }
};
