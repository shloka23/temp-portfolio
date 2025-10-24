import type { Metadata } from 'next';
import { FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaRaspberryPi, FaTasks, FaStripeS, FaBrain, FaServer, FaRobot } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiTypescript, SiNextdotjs, SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSpring, SiPostman, SiHibernate, SiGithub, SiSwift, SiFirebase, SiXcode, SiDjango, SiReact, SiGraphql, SiMicrosoftazure, SiPython, SiAwsamplify, SiAmazondynamodb, SiKotlin, SiFastapi, SiStreamlit, SiAndroid, SiMongodb } from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Shloka Pandya - Portfolio',
  description: 'Professional portfolio showcasing full-stack development projects and skills',
  author: 'Shloka Pandya',
  siteUrl: 'https://github.com/shloka23/temp-portfolio/',
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;
  
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${currentUrl}/images/shloka-png.png`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
}; 

export const experiences = [

  {
    title: "Software Engineer",
    company: "Clientjoy CRM",
    location: "Ahmedabad, IN",
    type: "Full-time",
    date: "2020 - 2023",
    // description: "Spearheaded the development of a microservices-based inventory system using Spring Boot, React.js, and MongoDB, improving stock accuracy and automating operations across multiple locations. Migrated backend services to Azure Kubernetes Service (AKS), reducing downtime and integrating Apache Kafka for real-time updates. Managed the entire software development lifecycle, delivering the project two weeks ahead of schedule while optimizing costs.",
    skills: ["Java", "Spring boot", "React", "PHP", "Laravel", "VueJs", "AWS", "MYSQL", "Kafka", "REST API", "Docker", "Agile"],
  },
  {
    title: "Software Engineer Intern",
    company: "Pivoting Softwares Pvt. Ltd.",
    location: "Ahmedabad, IN",
    type: "Internship",
    date: "2020 - 2020",
    // description: "Developed 3+ full-stack applications, improving scalability and engagement. Built an management web app with Spring Boot and MySQL, optimizing API performance. Designed a CRM dashboard using React.js, Redux, and MongoDB for efficient data handling. Architected an e-commerce backend with Node.js and PayPal integration, ensuring reliable transactions. Improved CI/CD pipelines with Jenkins and Docker while enhancing security with Spring Security and JUnit testing.",
    skills: ["VueJs", "Laravel", "React", "Node.js", "Express", "AWS", "MySQL", "MongoDB", "Docker", "WebSocket", "Agile"],
  },
];

export const education = [
  {
    title: "Master of Science in Computer Software Engineer",
    institution: "Arizona State University",
    location: "Tempe, AZ",
    date: "2024 - 2025",
  },
  {
    title: "Bachelor of Technology in Information and Communication Technology",
    institution: "Dhirubhai Ambani University",
    location: "Gandhinagar, IN",
    date: "2016 - 2020",
  }
];

export const timeline = [

  {
    type: "education",
    title: "Master of Science in Computer Software Engineer",
    institution: "Arizona State University",
    location: "Tempe, AZ",
    date: "2024 - 2025",
  },
   {
    title: "Software Engineer",
    institution: "Clientjoy CRM",
    location: "Ahmedabad, IN",
    type: "experience",
    date: "2020 - 2023",
    // description: "Spearheaded the development of a microservices-based inventory system using Spring Boot, React.js, and MongoDB, improving stock accuracy and automating operations across multiple locations. Migrated backend services to Azure Kubernetes Service (AKS), reducing downtime and integrating Apache Kafka for real-time updates. Managed the entire software development lifecycle, delivering the project two weeks ahead of schedule while optimizing costs.",
    // skills: ["Java", "Spring boot", "React", "PHP", "Laravel", "VueJs", "AWS", "MYSQL", "Kafka", "REST API", "Docker", "Agile"],
  },
  {
    title: "Software Engineer Intern",
    institution: "Pivoting Softwares Pvt. Ltd.",
    location: "Ahmedabad, IN",
    type: "experience",
    date: "2020 - 2020",
    // description: "Developed 3+ full-stack applications, improving scalability and engagement. Built an management web app with Spring Boot and MySQL, optimizing API performance. Designed a CRM dashboard using React.js, Redux, and MongoDB for efficient data handling. Architected an e-commerce backend with Node.js and PayPal integration, ensuring reliable transactions. Improved CI/CD pipelines with Jenkins and Docker while enhancing security with Spring Security and JUnit testing.",
    // skills: ["VueJs", "Laravel", "React", "Node.js", "Express", "AWS", "MySQL", "MongoDB", "Docker", "WebSocket", "Agile"],
  },
  {
    type: "education",
    title: "Bachelor of Technology in Information and Communication Technology",
    institution: "Dhirubhai Ambani University",
    location: "Gandhinagar, IN",
    date: "2016 - 2020",
  }
];




export const projects = [
  {
    id: 1,
    title: "Privacy-Check (AI Policy Summarizer)",
    des: "Cross-platform Android app that summarizes app privacy policies using LLaMA 3.3-70B via Groq API. Achieved 90% accuracy and 70% API call reduction via caching.",
    img: "images/projects/privacycheck.png",
    icons: [
      { icon: SiKotlin, color: "#A97BFF" }, // Kotlin
      { icon: SiFastapi, color: "#009688" }, // FastAPI
      { icon: FaRobot, color: "#FF6B81" }, // LLMs
      { icon: FaBrain, color: "#9B59B6" }, // AI
      { icon: SiAndroid, color: "#3DDC84" }, // Android
    ],
    link: "https://github.com/shloka-812/PrivacyPolicySummarizer",
    github: "https://github.com/shloka-812/PrivacyPolicySummarizer",
  },
  {
    id: 2,
    title: "Smart Habitat Finder",
    des: "Engineered a graph-based recommendation system ranking communities by user preferences. Deployed on Azure with CI/CD achieving 99.9% uptime.",
    img: "images/projects/smarthabitat.png",
    icons: [
      { icon: SiReact, color: "#61DAFB" }, // React
      { icon: SiTailwindcss, color: "#38B2AC" }, // TailwindCSS
      { icon: FaJava, color: "#007396" }, // Java
      { icon: SiGraphql, color: "#E10098" }, // GraphDB (closest visual match)
      { icon: SiMicrosoftazure, color: "#0078D4" }, // Azure
    ],
    link: "https://github.com/rhmodi/SmartHabitat_Frontend",
    github: "https://github.com/rhmodi/SmartHabitat_Frontend",
  },
  {
    id: 3,
    title: "CareerSync",
    des: "Serverless job application tracker using AWS Comprehend, Textract, Lambda, and DynamoDB. Matches resumes and job descriptions via NLP-based keyword extraction.",
    img: "images/projects/careerSync.png",
    icons: [
      { icon: SiAwsamplify, color: "#FF9900" }, // AWS
      { icon: SiReact, color: "#61DAFB" }, // React
      { icon: FaServer, color: "#888888" }, // Lambda
      { icon: SiAmazondynamodb, color: "#4053D6" }, // DynamoDB
      { icon: FaRobot, color: "#00CED1" }, // Comprehend NLP
    ],
    link: "https://github.com/shloka-812/Job-Application-Tracker",
    github: "https://github.com/shloka-812/Job-Application-Tracker",
  },
  {
    id: 4,
    title: "AI Document Querying Tool",
    des: "Developed a RAG-based QA system using Llama 3 and Faiss, reducing query time by 40%. Integrated LangSmith for debugging and Streamlit UI for interaction.",
    img: "images/projects/docuQuery.png",
    icons: [
      { icon: SiPython, color: "#3776AB" }, // Python
      { icon: FaRobot, color: "#FF6B81" }, // Llama 3 (custom)
      { icon: FaBrain, color: "#9B59B6" }, // AI/NLP
      { icon: SiStreamlit, color: "#FF4B4B" }, // Streamlit
      // { icon: SiLangchain, color: "#00A67E" }, // LangSmith/LangChain
    ],
    link: "https://github.com/shloka-812/AIDocumentQ-A",
    github: "https://github.com/shloka-812/AIDocumentQ-A",
  },
  {
    id: 5,
    title: "MelodiMind",
    des: "Built for Arizona Opportunity Hackathon. A music therapy nonprofit platform with React, Express.js, and MongoDB. Enables users to explore therapeutic content.",
    img: "images/projects/melodi.png",
    icons: [
      { icon: SiReact, color: "#61DAFB" }, // React
      { icon: SiTypescript, color: "#3178C6" }, // TypeScript
      { icon: SiExpress, color: "#000000" }, // Express
      { icon: SiMongodb, color: "#47A248" }, // MongoDB
      { icon: SiTailwindcss, color: "#38B2AC" }, // TailwindCSS
    ],
    link: "https://devpost.com/software/melodimind",
    github: "https://github.com/2025-Arizona-Opportunity-Hack/Enemies-of-Syntaxx-NMTSAWebsite",
  },
];