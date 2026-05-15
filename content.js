/* Edit this file to customize your portfolio content. */

window.PORTFOLIO = {
  name: "OMAR HAMED MAHMOUD",
  title: "Fourth-Year Software Engineering Student",
  roleLine: "Software Engineer • Mobile / Web / AI",
  location: "Luxor, Egypt",

  
  repoBaseUrl: "https://github.com/omarzhamed/portfolio_test2.git",

  about: {
    headline: "I build practical apps and AI projects — with clean UX and solid engineering.",
    summary:
      "I’m a fourth-year Software Engineering student at the Arab Academy for Science, Technology and Maritime Transport (Luxor). I enjoy building end‑to‑end products across mobile, web, and AI — from Flutter apps with Firebase to React/Next.js experiences and machine-learning models with real datasets. I care about writing maintainable code, designing user-friendly flows, and turning ideas into shipped features. I’m currently focused on strengthening my full‑stack skills and building more AI-powered applications.",
    metaPills: [
      "Flutter + Firebase mobile apps",
      "React/Next.js + Node.js web apps",
      "ML/DL with medical imaging datasets",
    ],
  },

  cv: {
    path: "assets/cv.pdf",
    label: "Download CV",
  },

  email: "elkheer78@gmail.com",

  socials: [
    { label: "GitHub", url: "https://github.com/omarzhamed" },
    { label: "LinkedIn", url: "https://eg.linkedin.com/in/omar-hamed-2b4a9731b" },
  ],

  projects: [
    {
      name: "AI Lung Cancer Detection Model",
      description:
        "Built a computer-vision model to detect lung cancer from medical imaging datasets. Implemented preprocessing, augmentation, and model tuning to improve accuracy and robustness.",
      tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"],
      role: "Role: Machine Learning Developer",
      links: [
        { label: "Case Study", url: "gh:/tree/main/case-studies/ai-lung-cancer-detection" },
      ],
    },
    {
      name: "AI Life Management App",
      description:
        "AI-powered task manager with smart reminders, habit tracking, and personalized suggestions. Designed core flows and connected data storage/auth using Firebase.",
      tech: ["Flutter", "Firebase"],
      role: "Role: Mobile Developer",
      links: [
        { label: "Case Study", url: "gh:/tree/main/case-studies/ai-life-management-app" },
      ],
    },
    {
      name: "Clothing E-Commerce Website",
      description:
        "Modern e-commerce web app with product browsing, cart, and checkout flow. Implemented a responsive UI and integrated services with Firebase-backed data.",
      tech: ["React", "Next.js", "Node.js", "Firebase"],
      role: "Role: Web Developer",
      links: [
        { label: "Case Study", url: "gh:/tree/main/case-studies/clothing-ecommerce-website" },
      ],
    },
    {
      name: "Furniture Inventory Management Desktop App",
      description:
        "Desktop inventory management system for browsing products and managing stock. Built the UI in JavaFX and integrated a relational database for persistence.",
      tech: ["Java", "JavaFX", "MySQL", "SceneBuilder"],
      role: "Role: Java Developer",
      links: [
        { label: "Case Study", url: "gh:/tree/main/case-studies/furniture-inventory-desktop-app" },
      ],
    },
  ],

  skills: {
    Languages: ["Dart", "Python", "Java", "C++", "C", "PHP", "JavaScript", "HTML", "CSS", "C#", "SQL"],
    "Frameworks & Tools": [
      "Flutter",
      "React",
      "Next.js",
      "Node.js",
      "Firebase",
      "RESTful APIs",
      "JavaFX",
      "SceneBuilder",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
    Databases: ["MySQL", "Oracle SQL", "SQLite"],
    Other: ["Agile Methodologies", "OOP", "Data Analysis", "Design Patterns (Java)", "Excel"],
  },

  activities: [
    {
      title: "Student Developer",
      org: "Arab Academy for Science, Technology and Maritime Transport",
      dates: "Oct 2022 — Present",
      bullets: [
        "Delivered academic projects in mobile, web, and AI domains",
        "Collaborated in agile teams to build user-focused software",
      ],
    },
    {
      title: "Team Leader (2 years)",
      org: "Software project teams",
      dates: "2024 — 2026",
      bullets: [
        "Led teams to deliver successful group projects",
        "Coordinated tasks, timelines, and integration work",
      ],
    },
    {
      title: "Volunteer (4 years)",
      org: "Resala Charity Organization",
      dates: "2021 — Present",
      bullets: [
        "Participated in community outreach and support activities",
        "Contributed time consistently across multiple events",
      ],
    },
  ],
};
