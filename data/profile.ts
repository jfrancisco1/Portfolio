import type { Profile } from "@/types/profile";

/**
 * Single source of truth for all site content.
 */
export const profile: Profile = {
  person: {
    name: "Julius T. Francisco",
    title: "Full-Stack Developer",
    pitch: "I build things.",
    metaDescription:
      "Full-stack developer building web and mobile apps end to end, from Laravel APIs to React Native apps that real businesses depend on.",
    summary:
      "10+ years building with Laravel, Vue.js, React, and React Native, including leading a 6-person Agile team through code reviews and mentoring. I use AI coding assistants like Claude to ship faster without sacrificing code quality.",
    email: "juliusfrancisco724@gmail.com",
    githubUrl: "https://github.com/jfrancisco1",
    linkedinUrl: "https://linkedin.com/in/julius-francisco",
    resumeUrl: "/resume.pdf",
    photo: {
      src: "/images/profile.jpg",
      alt: "Portrait of Julius T. Francisco",
      width: 625,
      height: 781,
    },
  },

  about: {
    heading: "Hi, I'm Julius.",
    paragraphs: [
      "I got into programming through a school project and have been building software professionally for over ten years since.",
      "What I enjoy most is building products that solve a real problem. Quinns started that way: my laundry business needed a better way to handle orders, deliveries, and sales, so I built one, and it runs the business every day.",
      "People I've worked with usually describe me as reliable. Outside of code, you'll usually find me playing video games.",
    ],
    facts: [
      { label: "Based in", value: "Naga City, Camarines Sur, Philippines" },
      { label: "Works", value: "Remote" },
      { label: "Time zones", value: "US and Philippine hours" },
      {
        label: "Looking for",
        value: "Full-time software engineering roles or related",
      },
      { label: "Currently", value: "Improving Quinns POS" },
    ],
  },

  contact: {
    heading: "Let's build something together",
    message:
      "I'm looking for a full-time software engineering role or related where I can keep growing and building. I work remotely on US or Philippine hours. Email is the fastest way to reach me, and I'm also on LinkedIn and GitHub.",
  },

  caseStudy: {
    eyebrow: "Featured case study",
    title: "Quinns Business Suite",
    role: "Founder & Lead Developer · Personal project",
    tagline:
      "Three connected React Native apps that run day-to-day operations for a self-owned laundry business.",
    // Customer names and the business phone number are blurred in these screenshots.
    gallery: [
      {
        src: "/projects/quinns/pos-login.webp",
        alt: "Quinns POS PIN login screen on a tablet",
        caption: "PIN login for counter staff",
        width: 804,
        height: 480,
      },
      {
        src: "/projects/quinns/pos-home.webp",
        alt: "Quinns POS home screen with New Order, All Orders, Expenses, Receipt Editor, and Settings",
        caption: "Home: orders, expenses, receipts, settings",
        width: 804,
        height: 480,
      },
      {
        src: "/projects/quinns/pos-orders.webp",
        alt: "Quinns POS All Orders list with filters for payment, status, fulfillment, and date; customer names blurred",
        caption: "All orders with payment and fulfillment filters",
        width: 804,
        height: 480,
      },
      {
        src: "/projects/quinns/pos-receipt.webp",
        alt: "Quinns POS receipt preview with Print Receipt and Copy Invoice actions; customer details blurred",
        caption: "Receipt preview, printing, and invoice sharing",
        width: 804,
        height: 480,
      },
    ],
    apps: [
      {
        name: "Quinns POS",
        summary: "Point-of-sale for front-counter order intake.",
        device: "tablet",
        screenshot: {
          src: "/projects/quinns/pos-home.webp",
          alt: "Quinns POS home screen on a tablet",
        },
      },
      {
        name: "Quinns Admin",
        summary: "Admin dashboard for managing orders and business reporting.",
        device: "phone",
        screenshot: {
          src: "/projects/quinns/admin.webp",
          alt: "Quinns Admin Sales screen with a monthly sales chart and a gross-to-net profit breakdown; amounts blurred",
        },
      },
      {
        name: "Quinns Driver",
        summary: "Driver app for pickup and delivery dispatch and tracking.",
        device: "phone",
        screenshot: {
          src: "/projects/quinns/driver.jpg",
          alt: "Quinns Driver Orders screen with Available Orders, For Delivery, and For Pickup tabs",
        },
      },
    ],
    stack: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Laravel REST API", icon: "laravel" },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.kheldiente.quinnlaundryapp",
    playStoreLabel: "Quinns POS on Google Play",
    problem:
      "Before Quinn's POS, the laundry shop ran everything by hand. Orders went on paper at the counter, lining up pickups and deliveries was all manual, and I had no single place to see how the business was actually doing.",
    solution: [
      "Built three React Native apps on Expo: a counter POS, an admin dashboard, and a driver app for pickups and deliveries.",
      "Connected all three apps through a shared Laravel REST API so order intake, dispatch, and reporting work from the same data.",
      "Now orders, driver dispatch and tracking, and reporting all live in one system, so I can see the whole business in one place.",
    ],
    impact: [
      "Replaced manual, paper-based processes across the business.",
      "Runs day-to-day operations of a live laundry business end-to-end.",
      "Gives the owner one connected view of orders, deliveries, and reporting.",
    ],
  },

  otherCaseStudies: [
    {
      eyebrow: "Healthcare case study",
      title: "EHR platform modernization",
      role: "Application Developer → Technical Lead · Medx Open Systems · 2016–2021",
      tagline:
        "Core modules, partner APIs, and a single-page-app migration for an Electronic Health Record system used by doctors and healthcare facilities across Hawaii.",
      stack: [
        { name: "Vue.js", icon: "vue" },
        { name: "Laravel", icon: "laravel" },
        { name: "PHP", icon: "php" },
        { name: "RESTful APIs", icon: "api" },
      ],
      problem:
        "The EHR's legacy application had become hard to maintain and slow to load, but clinicians across Hawaii relied on it every day, and it had to stay certified to U.S. healthcare software standards throughout any change.",
      solution: [
        "Built core EHR modules as an Application Developer, then designed RESTful APIs that let third-party partners securely access and exchange patient healthcare data.",
        "As Technical Lead, directed the rebuild of the legacy application as a single-page app with a Vue.js frontend and a Laravel backend.",
        "Led a 6-person team through Agile adoption, setting up sprint rituals, task breakdown, and status reporting.",
        "Partnered directly with the CEO to keep the software certified to U.S. healthcare standards, and reviewed code and mentored developers across the team.",
      ],
      impact: [
        "Moved the team onto a modern Vue.js + Laravel architecture built for easier maintenance and faster page loads. The new app was still in development when I left in August 2021.",
        "Third-party partners could exchange patient data with the EHR through secure REST APIs.",
      ],
    },
  ],

  clientWork: [
    {
      client: "Jingxing Paper (JXPaper)",
      url: "https://jxpapers.com/",
      company: "TaoCrowd Inc.",
      role: "Custom WordPress theme development",
      summary:
        "Built and maintain the custom WordPress theme for a paper and packaging manufacturer's corporate site.",
      stack: [
        { name: "WordPress", icon: "wordpress" },
        { name: "PHP", icon: "php" },
      ],
    },
    {
      client: "Cuervo Appraisers Inc.",
      url: "https://cuervoappraisers.com.ph/",
      company: "TaoCrowd Inc.",
      role: "Website redesign",
      summary:
        "Redesigned the website for a Philippine valuation and appraisal firm, presenting its real estate, machinery, and business valuation services with a request-for-proposal flow.",
      stack: [
        { name: "WordPress", icon: "wordpress" },
        { name: "PHP", icon: "php" },
      ],
    },
    {
      client: "Agreatertown",
      url: "https://agreatertown.com/",
      company: "TaoCrowd Inc.",
      role: "Delivery & engineering support (SLA account)",
      summary:
        "Own delivery and engineering support for the team's dedicated SLA account, keeping uptime and turnaround commitments on track, resolving production issues across the stack, and managing the site's Google Cloud Console.",
      note: "Legacy project: a long-running codebase that mixes Tailwind with older hand-written CSS.",
      stack: [
        { name: "Slim Framework", icon: "code" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Legacy CSS", icon: "css" },
        { name: "Google Cloud", icon: "gcp" },
      ],
    },
  ],

  experience: [
    {
      role: "Full-Stack Engineer",
      company: "TaoCrowd Inc. (formerly August99)",
      start: "Aug 2021",
      end: "Present",
      highlights: [
        "Own delivery and engineering support for Agreatertown, the team's dedicated SLA account, ensuring uptime and turnaround commitments are consistently met.",
        "Independently debug and resolve medium-to-high complexity production issues across the stack.",
        "Build and maintain custom WordPress themes for 5+ client sites, including JXPaper.",
      ],
    },
    {
      role: "Technical Lead",
      company: "Medx Open Systems Inc.",
      companyUrl: "https://medxos.com/",
      start: "Sep 2018",
      end: "Aug 2021",
      highlights: [
        "Led a 6-person development team through Agile adoption, establishing sprint rituals, task breakdown, and status reporting practices still in use today.",
        "Partnered directly with the CEO and engineering team to build and maintain software certified to United States healthcare software standards.",
        "Directed the migration of a legacy application into a modern SPA using Vue.js and Laravel, designed to improve maintainability and load performance.",
        "Performed code reviews across the team and mentored developers on best practices and emerging tools.",
      ],
    },
    {
      role: "Application Developer",
      company: "Medx Open Systems Inc.",
      companyUrl: "https://medxos.com/",
      start: "May 2016",
      end: "Sep 2018",
      highlights: [
        "Built core modules of an Electronic Health Record (EHR) system used by doctors and healthcare facilities across Hawaii.",
        "Designed and built RESTful APIs enabling third-party partners to securely access and exchange patient healthcare data.",
      ],
    },
  ],

  skills: [
    {
      title: "Frontend",
      items: [
        { name: "JavaScript (ES6+)", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Vue.js", icon: "vue" },
        { name: "React Native", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Twig", icon: "code" },
      ],
    },
    {
      title: "Backend & CMS",
      items: [
        { name: "PHP", icon: "php" },
        { name: "Laravel", icon: "laravel" },
        { name: "Slim Framework", icon: "code" },
        { name: "RESTful API design", icon: "api" },
        { name: "WordPress (custom themes)", icon: "wordpress" },
      ],
    },
    {
      title: "Data",
      items: [
        { name: "MySQL", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "GraphQL", icon: "graphql" },
      ],
    },
    {
      title: "DevOps & Deployment",
      items: [
        { name: "Docker", icon: "docker" },
        { name: "Railway", icon: "railway" },
        { name: "Google Cloud Platform", icon: "gcp" },
        { name: "Git", icon: "git" },
      ],
    },
    {
      title: "Tools & Practices",
      items: [
        { name: "Agile / Scrum", icon: "agile" },
        { name: "Code review", icon: "code" },
        { name: "AI-assisted development (Claude)", icon: "claude" },
      ],
    },
  ],

  education: {
    degree: "BS in Information Technology",
    school: "Ateneo de Naga University",
    location: "Naga City",
    period: "2012 – 2016",
  },

  certifications: [
    {
      title: "React Native – The Practical Guide 2023",
      issuer: "Udemy / Academind",
      hours: "28.5 hrs",
      completed: "Oct 2023",
    },
    {
      title: "Claude Code Beginner to Pro: Agentic Coding for Developers",
      issuer: "Udemy / WebDevEducation",
      hours: "5.5 hrs",
      completed: "Mar 2026",
    },
    {
      title: "Vue - The Complete Guide (incl. Router & Composition API)",
      issuer: "Udemy / Academind",
      hours: "32 hrs",
      completed: "Mar 2026",
    },
  ],
};
