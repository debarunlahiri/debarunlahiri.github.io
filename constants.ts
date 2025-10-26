
import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  contactInfo: {
    name: "Debarun Lahiri",
    email: "debarunlahiri2016@gmail.com",
    github: "https://github.com/debarunlahiri",
    phone: "+91-9205225428",
  },
  skills: [
    { category: "Programming Languages", skills: ["Java", "Kotlin", "SQL", "JavaScript", "Angular"] },
    { category: "Mobile Development", skills: ["Android (Java, Kotlin)", "iOS", "React Native", "Performance Profiling & Optimization"] },
    { category: "Backend Development", skills: ["Spring Boot", "RESTful APIs", "Microservices", "Kafka"] },
    { category: "Cloud, Tools & AI", skills: ["Firebase", "ML Kit", "Google Cloud", "NLP", "MVVM", "Jetpack Compose"] },
    { category: "Databases", skills: ["RoomDB", "MySQL", "PostgreSQL", "Oracle SQL"] },
    { category: "Soft Skills", skills: ["Leadership", "Agile Methodologies", "Problem Solving"] },
  ],
  experience: [
    {
      company: "Samsung Display Noida",
      role: "Senior Assistant Engineer",
      location: "Ghaziabad, India",
      period: "Dec 2022 - Present",
      tasks: [
        "Led the design and implementation of an Optical Character Recognition (OCR) system using ML Kit, improving data extraction efficiency by 20%.",
        "Designed and developed a user-centric web portal that streamlined business operations, resulting in a 15% increase in platform functionality.",
        "Led the development of an NLP-powered chatbot, reducing customer response time by 40% and automating routine inquiries.",
        "Collaborated with cross-functional teams to deliver solutions that improved manufacturing efficiency by 15%."
      ],
    },
    {
      company: "TraqIQ",
      role: "Software Engineer",
      location: "Ghaziabad, India",
      period: "Nov 2021 - Dec 2022",
      tasks: [
        "Integrated Paytm Payment Gateway into Spring Boot applications, ensuring secure and seamless transactions.",
        "Developed dynamic, responsive user interfaces, reducing page load times by 30% using frontend optimization techniques.",
        "Developed a high-performance, cross-platform hybrid mobile app using Ionic Framework.",
      ],
    },
    {
      company: "Bnext IT Solutions",
      role: "Android Developer",
      location: "Ghaziabad, India",
      period: "May 2021 - Nov 2021",
      tasks: [
        "Enhanced mobile app performance, leading to a 25% increase in user retention by fixing key bottlenecks.",
        "Integrated OneSignal for push notifications and Google Play Payment Gateway for seamless communication and transactions.",
      ],
    },
    {
      company: "Grepix Infotech Private Limited",
      role: "Android Developer",
      location: "Ghaziabad, India",
      period: "Jan 2020 - Feb 2021",
      tasks: [
        "Designed and developed responsive mobile and tablet applications, improving accessibility and user engagement.",
        "Integrated Google Maps APIs into mobile apps for real-time location-based services.",
      ],
    },
     {
      company: "Rounderlabs Private Limited",
      role: "Android Developer",
      location: "Ghaziabad, India",
      period: "Jun 2019 - Dec 2019",
      tasks: [
        "Implemented multiple authentication services including mobile, Facebook, Google, and email login.",
        "Worked on optimizing a video streaming application, reducing buffering times and ensuring smoother playback."
      ],
    },
  ],
  projects: [
    {
      title: "OTR - Operator Training Records",
      description: "Led the design, development, and deployment of an Android application to provide operators with access to their training records and compliance status.",
      techStack: ["Java", "Kotlin", "React Native", "Spring Boot", "Angular"],
    },
    {
      title: "Chat Bot",
      description: "Designed conversational flows and integrated NLP models for a chatbot, resulting in a 40% reduction in customer response times.",
      techStack: ["Java", "Android", "Kotlin", "NLP", "Spring Boot", "Oracle SQL"],
    },
    {
      title: "Motion Tracking",
      description: "Developed an application to track object motion on a production line and generate graphs for analysis via a mobile app and monitoring portal.",
      techStack: ["Java", "Android", "Firebase", "OpenCV", "Spring Boot"],
    },
    {
      title: "e-VIS (Violation Information System)",
      description: "Developed an Android app for the Manufacturing Department to manage operator violations, allowing efficient tracking and reporting.",
      techStack: ["React Native", "Kotlin", "Java", "Spring MVC", "Node.js", "Oracle SQL"],
    },
    {
      title: "LMS - Learning Management System",
      description: "Collaborated in a team of 7 to deploy an LMS for managing skills and training, using Spring MVC for interactive interfaces.",
      techStack: ["Spring Boot", "Java", "Oracle SQL", "Angular(18)", "RxJS", "Microservices", "AWS", "GCP", "Kafka"],
    },
    {
      title: "HireMe Driver & Rider",
      description: "Developed a cab booking app with a platform for both riders and drivers to manage bookings, including a RestAPI backend.",
      techStack: ["Java", "Kotlin", "Android", "Firebase", "Google Maps API", "WebSockets"],
    },
    {
      title: "TraqPayments",
      description: "Built a payment and collection management system with multi-channel communication tools and an Android app for customer access.",
      techStack: ["Java", "Android", "Kotlin", "Angular", "Spring Boot", "MySQL"],
    },
     {
      title: "PictureTime & Filamchi",
      description: "Developed and maintained mobile apps, focusing on backend optimizations to improve response times and system reliability.",
      techStack: ["React Native", "Java", "Firebase", "Microservices", "Spring Boot"],
    },
    {
      title: "Masala Dish (Customer, Driver & Restaurant Manager)",
      description: "Spearheaded development of a food delivery ecosystem app, improving performance with faster load times.",
      techStack: ["Kotlin", "React Native", "Microservices", "Spring Boot"],
    },
     {
      title: "OnDemand Services",
      description: "Led development of an On-Demand Services Android application, integrating real-time communication between customers and providers.",
      techStack: ["Java", "Kotlin", "React Native", "WebSockets", "Angular", "Spring Boot"],
    },
  ],
  education: [
    {
      institution: "Institute of Management and Studies",
      degree: "Bachelor of Computer Applications (BCA)",
      location: "Ghaziabad, India",
      period: "2016 - 2019",
    },
    {
      institution: "D.D.M. Public School",
      degree: "Class 12th (C.B.S.E. Board)",
      location: "Ghaziabad, India",
      period: "2015",
    },
    {
      institution: "D.D.M. Public School",
      degree: "Class 10th (C.B.S.E. Board)",
      location: "Ghaziabad, India",
      period: "2013",
    },
  ],
};
