/**
 * Portfolio Data File - Sachin (Java Full Stack Developer)
 * All dynamic content is centralized here for easy updates without touching the HTML/CSS layout.
 */

const personalInfo = {
  name: "Sachin",
  title: "Java Full Stack Developer",
  subTitle: "Spring Boot • REST APIs • React",
  tagline: "Building scalable backend microservices and clean, responsive web applications with Spring Boot and modern web standards.",
  status: "Actively seeking Fresher Java Full Stack Roles in Bengaluru",
  location: "Bengaluru, Karnataka, India",
  email: "sachin.dev.work@gmail.com",
  github: "https://github.com/Me-sachin123",
  linkedin: "https://www.linkedin.com/in/sachin-dev-profile",
  resume: "resume.pdf",
  aboutParagraphs: [
    "I am an MCA graduate and proactive Java Full Stack Developer based in Bengaluru, specializing in building enterprise-grade backend architectures using Java, Spring Boot, and relational databases like MySQL.",
    "During my intensive full-stack internship at QSpiders and analytical role at Simdaa Technologies, I engineered RESTful APIs, implemented secure role-based access control with JWT, and developed intuitive front-end interfaces.",
    "I focus on writing clean, maintainable, and well-documented code with a strong understanding of OOP principles, MVC architecture, and API performance. I am eager to contribute immediately to high-impact software engineering teams."
  ]
};

const skills = {
  Backend: [
    "Java (Core & Advanced)",
    "Spring Boot",
    "Spring Data JPA",
    "Spring Security",
    "RESTful APIs",
    "Hibernate / ORM",
    "Microservices Architecture"
  ],
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Responsive Design",
    "DOM Manipulation",
    "React (in progress)"
  ],
  Database: [
    "MySQL",
    "PostgreSQL",
    "SQL Schema Design",
    "Query Optimization",
    "Redis (Basics)"
  ],
  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "Apache Maven",
    "Power BI",
    "Docker (Basics)",
    "IntelliJ IDEA",
    "VS Code"
  ]
};

const projects = [
  {
    id: "fertilizer-shop",
    name: "Fertilizer Shop Application",
    category: "Full Stack",
    desc: "A full-featured inventory control and point-of-sale billing system engineered to digitize fertilizer shop operations and prevent stockouts.",
    problem: "Solves complex stock reconciliation, manual paper invoices, and credit balance tracking for agricultural retailers.",
    tech: ["Spring Boot", "Spring Data JPA", "Spring Security", "MySQL", "JWT", "Thymeleaf", "HTML/CSS/JS"],
    features: [
      "Role-Based Access Control (Admin & Cashier) secured with JWT authentication",
      "Real-time inventory decrementing with automatic low-stock replenishment alerts",
      "GST-compliant billing engine with itemized receipt printing and transaction history",
      "Customer credit account management and supplier ledger reconciliation"
    ],
    image: "images/projects/fertilizer.jpg",
    github: "https://github.com/Me-sachin123/fertilizer-shop-application",
    demo: "", // Empty: button will not render or will show repository link
    featured: true
  },
  {
    id: "api-rate-limiter",
    name: "API Rate Limiter Service",
    category: "Backend / Microservices",
    desc: "High-performance API rate limiting middleware designed to throttle incoming HTTP traffic and defend backend microservices from Denial-of-Service attacks.",
    problem: "Protects sensitive server endpoints from cascading failure and abusive client traffic spikes.",
    tech: ["Java 17", "Spring Boot", "Redis", "Token Bucket Algorithm", "Docker", "JUnit 5"],
    features: [
      "Thread-safe Token Bucket Algorithm processing requests with under 15ms latency overhead",
      "Distributed cache synchronization across instances using Redis key-value storage",
      "Granular tier policies (Free, Pro, Enterprise) based on client API keys and IP addresses",
      "RFC-compliant HTTP 429 'Too Many Requests' responses with dynamic Retry-After headers"
    ],
    image: "images/projects/rate-limiter.jpg",
    github: "https://github.com/Me-sachin123/api-rate-limiter",
    demo: "",
    featured: true
  },
  {
    id: "habit-tracker",
    name: "Productivity Habit Tracker",
    category: "Frontend / Productivity",
    desc: "An intuitive web application empowering users to establish positive daily habits, maintain active streaks, and inspect consistency metrics.",
    problem: "Helps learners and professionals overcome inconsistency with visual habit heatmaps and accountability milestones.",
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage API", "Chart.js"],
    features: [
      "Dynamic consecutive streak counter with grace period detection algorithm",
      "GitHub-style annual and weekly consistency heatmaps visualizing habit completion rates",
      "Offline-first client-side data persistence with JSON export/import backup options",
      "Custom morning, afternoon, and evening routine grouping with responsive mobile design"
    ],
    image: "images/projects/habit-tracker.jpg",
    github: "https://github.com/Me-sachin123/habit-tracker",
    demo: "https://me-sachin123.github.io/habit-tracker",
    featured: true
  },
  {
    id: "budget-dashboard",
    name: "Budget Analysis Dashboard",
    category: "Analytics / Business Intelligence",
    desc: "Executive financial intelligence dashboard offering multidimensional budget-vs-actual variance tracking and automated KPI scorecards.",
    problem: "Replaces fragmented spreadsheets with automated, interactive visual reporting on cash flows and expenses.",
    tech: ["Microsoft Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    features: [
      "Automated Monthly Income vs. Expense variance calculations using complex DAX measures",
      "Interactive category breakdown donut visuals and cash flow trend line charts",
      "Slicers for fiscal quarters, departmental cost centers, and global expense thresholds",
      "Executive summary KPI scorecards showing Net Profit Margin and target variance %"
    ],
    image: "images/projects/budget-dashboard.jpg",
    github: "https://github.com/Me-sachin123/budget-analysis-dashboard",
    demo: "",
    featured: true
  }
];

const experience = [
  {
    role: "Java Full Stack Intern",
    company: "QSpiders",
    location: "Bengaluru, India",
    period: "2026",
    type: "Internship",
    bullets: [
      "Architected RESTful backend services using Spring Boot and Spring Data JPA, adhering to clean MVC architecture and SOLID design principles.",
      "Configured Spring Security with JWT (JSON Web Tokens) to implement stateless authentication and role-based authorization for multi-tier users.",
      "Designed normalized MySQL database schemas, wrote complex SQL queries, and implemented pagination to optimize retrieval speeds.",
      "Developed responsive frontend views using HTML5, CSS3, and JavaScript, validating full integration via Postman API collections."
    ]
  },
  {
    role: "Power BI Developer Intern",
    company: "Simdaa Technologies",
    location: "Bengaluru, India",
    period: "2023 - 2024",
    type: "Internship",
    bullets: [
      "Developed interactive business intelligence dashboards and executive reports using Microsoft Power BI, Power Query, and DAX.",
      "Engineered ETL pipelines to clean, normalize, and combine heterogeneous operational datasets from Excel, CSV, and relational databases.",
      "Collaborated with project mentors to translate corporate reporting requirements into intuitive visual dashboards and KPI trackers."
    ]
  }
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Basaveshwar Engineering College (Autonomous), Bagalkote",
    location: "Bagalkote,Karnataka",
    status: "Graduated",
    focus: "Specialization in Software Engineering, Relational Database Management Systems, and Object-Oriented Analysis & Design."
  }
];

const certifications = [
  {
    title: "Java Full Stack Development Internship",
    issuer: "QSpiders Bengaluru",
    year: "2026",
    badge: "View Certificate",
    link: "assets/certificates/Jspiders_Internship.pdf"
  },
  {
    title: "NPTEL-Leadership and Team Effectiveness",
    issuer: "Indian Institute of Technology Roorkee",
    year: "2026",
    badge: "View Certificate",
    link: "assets/certificates/NPTEl-Leadership and Team Effectiveness.pdf"
  },
  {
    title: "Exploring NoSQL with MongoDB (3-Day SDP)",
    issuer: "Springevening Pvt. Ltd. at Basaveshwar Engineering College, Bagalkot",
    year: "2025",
    badge: "View Certificate",
    link: "assets/certificates/Certificate-Spring Evening.pdf"
  }

];
