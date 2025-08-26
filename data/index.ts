import { Assets } from "./assets";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "full-time" | "contract" | "internship" | "remote";
}

interface Testimonial {
  name: string;
  mentions: string;
  review: string;
}

export const navLinks = [
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: Assets.b1,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: Assets.grid,
    spareImg: Assets.b4,
  },
  {
    id: 4,
    title: "",
    description: "",
    cv: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: Assets.grid,
    link: "Download the resume for expanded details on my background.",
  },
  {
    id: 5,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: Assets.grid,
    stats: [
      { number: "4+", text: "Years Experience" },
      { number: "100%", text: "Client Satisfaction" },
      { number: "18+", text: "Total Projects" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Fleet Management",
    des: "Developed modules for vehicle tracking, dispatch management, and driver information handling.",
    img: Assets.fleet,
    iconLists: [
      Assets.next,
      Assets.re,
      Assets.js,
      Assets.tail,
      Assets.python,
      Assets.postgres,
    ],
    deploy: false,
    link: "#",
    private: true,
  },
  {
    id: 2,
    title: "YC-Style Startup Project",
    des: "Built and launched a full-stack MVP using Next.js, NextAuth, Sanity CMS, and Sentry.",
    img: Assets.yc,
    iconLists: [Assets.next, Assets.re, Assets.ts, Assets.tail],
    deploy: true,
    link: "https://yc-dagimgetaw.vercel.app/",
    private: false,
  },
  {
    id: 3,
    title: "HelpEthiopia Website",
    des: "Enhanced HelpEthiopia’s implementing role-based authentication, Chapa and Stripe payment integrations, with admin dashboard and dynamic blog.",
    img: Assets.help,
    iconLists: [
      Assets.re,
      Assets.js,
      Assets.tail,
      Assets.node,
      Assets.express,
      Assets.mongodb,
    ],
    deploy: false,
    link: "#",
    private: true,
  },
  {
    id: 4,
    title: "Youtube Clone",
    des: "Built a YouTube clone with React and YouTube API featuring video search, playback... in a fully responsive UI.",
    img: Assets.yt,
    iconLists: [Assets.re, Assets.css, Assets.js],
    deploy: true,
    link: "https://ytclonereactjs.netlify.app/",
    private: false,
  },
  {
    id: 5,
    title: "Satellite Image Enhancement",
    des: "Developed a full-stack app with React and FastAPI for satellite image enhancement using DSen2 and Real-ESRGAN.",
    img: Assets.sie,
    iconLists: [Assets.re, Assets.tail, Assets.ts, Assets.python],
    deploy: false,
    link: "https://github.com/dagimgetaw/sie",
    private: false,
  },
  {
    id: 6,
    title: "Generative AI-Chatbot",
    des: "AI chat app using Google Gemini with context-aware replies, Clerk OAuth, and secure login/signup system.",
    img: Assets.ai,
    iconLists: [
      Assets.re,
      Assets.css,
      Assets.js,
      Assets.node,
      Assets.express,
      Assets.mongodb,
    ],
    deploy: false,
    link: "https://github.com/dagimgetaw/Generative-AI-Chatbot",
    private: false,
  },
  {
    id: 7,
    title: "Optical Character Recognition",
    des: "Developed a FastAPI OCR app using Tesseract to extract text and tables from images and PDFs, returning structured in JSON format.",
    img: Assets.ocr,
    iconLists: [Assets.html5, Assets.css, Assets.js, Assets.python],
    deploy: false,
    link: "https://github.com/dagimgetaw/ocr",
    private: false,
  },
  {
    id: 8,
    title: "Bank Management System",
    des: "Developed a Java Swing-based banking app with user registration, login, transactions....",
    img: Assets.bank,
    iconLists: [Assets.java],
    deploy: false,
    link: "https://github.com/dagimgetaw/banking_management_system",
    private: false,
  },
];

export const workExperiences: WorkExperience[] = [
  {
    title: "Freelancer",
    company: "Upwork",
    location: "Remote",
    duration: "Feb 2025 - Present",
    description:
      "Working on full-stack web development projects, building responsive front-end interfaces and robust back-end systems using modern technologies like React, Next.js, Node.js, and Python (FastAPI/Django)",

    achievements: [
      "Achieved 100% client satisfaction with consistent 5-star reviews",
      "Improved application performance by 40% through frontend and backend optimization",
      "Built scalable REST and GraphQL APIs for real-time data operations",
      "Enhanced code quality and collaboration using Git, Docker, and best practices",
    ],

    technologies: [
      "React",
      "Next",
      "Node.js",
      "Express",
      "JavaScript",
      "Tailwind",
      "TypeScript",
      "SEO",
      "n8n",
      "MERN",
      "Django",
      "FastAPI",
    ],
    type: "remote",
  },
  {
    title: "Full-Stack Developer",
    company: "Help Ethiopia Organization",
    location: "Addis Ababa",
    duration: "Mar 2025 - Present",
    description:
      "Enhancing the organization’s platform by building responsive UIs and robust backend systems using React, Next.js, Node.js, and Stripe/Chapa integrations.",

    achievements: [
      "Implemented role-based authentication with Clerk and custom logic",
      "Integrated Chapa and Stripe for secure, seamless donations",
      "Built dynamic blog and interactive admin dashboard for content management",
      "Optimized performance and SEO for faster loads and better visibility",
      "Improved user management with secure login, logout, and registration flows",
    ],

    technologies: [
      "React",
      "Next",
      "JavaScript",
      "Tailwind",
      "MonogoDB",
      "NextAuth",
    ],
    type: "full-time",
  },
  {
    title: "Machine Learning & Geospatial Technology Intern",
    company: "Space Science & Geospatial Institution",
    location: "Addis Ababa",
    duration: "Jun 2025 - Sep 2025",
    description:
      "Worked on projects involving satellite image enhancement and real-time geospatial systems using deep learning and modern web technologies.",
    achievements: [
      "Applied Real-ESRGAN and DSen2 models to enhance satellite imagery",
      "Implemented semantic segmentation for land-use classification tasks",
      "Developed a full-stack interface for image upload, preview, and analysis",
      "Improved model inference time and visualization accuracy across datasets",
    ],

    technologies: [
      "React",
      "Python",
      "FastAPI",
      "Postgres SQL",
      "ML",
      "Real-ESRGAN",
      "DSen2",
    ],
    type: "internship",
  },
  {
    title: "Mentor & Marketing Team",
    company: "CSEC-ASTU",
    location: "Adama",
    duration: "Oct 2024 - May 2025",
    description:
      "Volunteered at CESC-ASTU, contributing to web development, DSA problem-solving, and event marketing initiatives.",
    achievements: [
      "Built internal tools and platforms to support club activities",
      "Participated in DSA challenges and university-level hackathons",
      "Contributed to organizing ETCPC by reaching out to sponsors",
      "Collaborated with team members to promote tech awareness on campus",
    ],
    technologies: [
      "C++",
      "React",
      "DSA",
      "Java",
      "ML",
      "Problem Solving",
      "Python",
      "GitHub",
    ],
    type: "full-time",
  },
  {
    title: "Full-Stack Web Developer",
    company: "Kasma Solution",
    location: "Addis Ababa",
    duration: "Mar 2024 - Jun 2024",
    description:
      "Developed responsive and dynamic frontend interfaces to enhance user experience for event and environmental platforms.",
    achievements: [
      "Built Embrace Event and Plogging Ethiopia websites from scratch",
      "Implemented reusable UI components using React and Tailwind CSS",
      "Improved mobile responsiveness and load performance across devices",
      "Collaborated closely with stakeholders for real-time updates and feedback",
    ],
    technologies: [
      "React",
      "HTML",
      "CSS",
      "BootStrap",
      "Node.js",
      "Express",
      "MonogoDB",
      "Tailwind",
      "GitHub",
    ],
    type: "contract",
  },
  {
    title: "Front-End Web Developer Intern",
    company: "CodeAlpha",
    location: "Remote",
    duration: "Feb 2023 - Jul 2023",
    description:
      "Built interactive web applications using modern front-end frameworks with a focus on performance and SEO.",
    achievements: [
      "Developed dynamic and accessible UIs using React and Tailwind",
      "Implemented SEO best practices to boost search engine visibility",
      "Optimized loading speed and mobile responsiveness across devices",
      "Integrated analytics tools for performance tracking and insights",
    ],
    technologies: ["HTML", "CSS", "GitHub", "JavaScript", "SEO"],
    type: "internship",
  },
  {
    title: "Penetration Tester & Vulnerability Analysis Intern",
    company: "Information Network Security Administration",
    location: "Addis Ababa",
    duration: "Jun 2021 - Oct 2021",
    description:
      "Developed an automated Python-based tool for network vulnerability analysis and topology mapping.",
    achievements: [
      "Mapped network topologies and identified open ports automatically",
      "Performed detailed vulnerability assessment for each exposed service",
      "Enhanced security evaluation workflows with minimal manual input",
      "Improved detection accuracy using layered scanning techniques",
    ],
    technologies: [
      "Python",
      "Socket",
      "Nmap",
      "Networking",
      "Cybersecurity",
      "HTML",
      "Penetration Testing",
    ],

    type: "internship",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Bura",
    mentions: "Kasma Solution",
    review:
      "I can’t say enough good things about Dagim. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    name: "Alemework Getachew",
    mentions: "SSGI",
    review:
      "Working with Dagim was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    name: "Roebl Hiruy",
    mentions: "Upwork",
    review:
      "Collaborating with Dagim was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dagim's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dagim is the ideal partner.",
  },
  {
    name: "Yonathan Sisay",
    mentions: "INSA",
    review:
      "Dagim was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
  },
  {
    name: "Dr Kefyalew",
    mentions: "Help Ethiopia",
    review:
      "Dagim’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
  },
  {
    name: "Dr Esayas",
    mentions: "Help Ethiopia",
    review:
      "Dagim was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/dagimgetaw",
    icon: "FaGithub",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/dagimgetaw",
    icon: "FaLinkedin",
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:dagimgetaw27@gmail.com",
    icon: "SiGmail",
  },
  {
    id: 4,
    name: "Telegram",
    url: "https://t.me/dagimdev",
    icon: "FaTelegram",
  },
];
