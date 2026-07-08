export const personal = {
  name: "Merin Johny",
  title: "AI Engineer",
  roles: ["AI Engineer", "Machine Learning Engineer", "Deep Learning Specialist", "Software Developer"],
  location: "Ernakulam, Kerala",
  email: "merinjmaippan@gmail.com",
  linkedin: "https://linkedin.com/in/merin-johny",
  github: "https://github.com/merinjohny",
  heroSummary:
    "Hello! I'm Merin Johny, a Computer Science and Engineering graduate specializing in Artificial Intelligence, with a strong passion for building intelligent, user-focused software solutions. I enjoy combining software development, machine learning, and problem-solving to create applications that address real-world challenges.",
  aboutSummary:
    `My experience includes developing AI-powered applications, full-stack web projects, and data-driven solutions using technologies such as Python, Java, JavaScript, TensorFlow, PyTorch, SQL, HTML, CSS, and modern development frameworks. I am passionate about continuously learning emerging technologies, writing clean and maintainable code, and collaborating effectively within teams to deliver impactful solutions.

I am particularly interested in Artificial Intelligence, Machine Learning, Generative AI, Full-Stack Development, and Software Engineering. I enjoy taking projects from concept to deployment, always striving to create scalable, efficient, and intuitive applications.`,
  photo: "/merin_johny_photo.jpeg",
  resumePDF: "/Merin_Johny_AI_Engr_I.pdf",
};

export const stats = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Certifications", value: 7, suffix: "+" },
  { label: "CGPA", value: 9.27, suffix: "" },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering (Artificial Intelligence)",
    institution: "Adi Shankara Institute of Engineering and Technology",
    location: "Kalady",
    duration: "2022 – 2026",
    cgpa: "9.27",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Data Structures & Algorithms",
      "Computer Vision",
      "Natural Language Processing",
      "Database Systems",
      "Software Engineering",
    ],
    achievements: ["CGPA 9.27 / 10", "Best Outgoing Student – AI & DS Department"],
  },
  {
    degree: "Higher Secondary",
    field: "Science",
    institution: "Mar Augustine's HSS",
    location: "Thuravoor",
    duration: "2022",
    cgpa: "98.5%",
    coursework: ["Mathematics", "Physics", "Chemistry"],
    achievements: ["98.5% aggregate"],
  },
];

export const experience = [
  {
    company: "GP3 Cloud Innovations",
    position: "AI-QC Tool Developer",
    type: "Contract",
    duration: "Jan 2026 – Mar 2026",
    location: "Remote",
    description:
      "Developed an AI-powered Quality Control tool to automate before/after comparison of fiber and coax network maps, reducing analysis time from several hours to under 30 minutes per map.",
    responsibilities: [
      "Developed AI algorithms to automate manual comparison of fiber and coax network maps",
      "Tiled large maps, annotated symbols, and trained a YOLO model for symbol recognition",
      "Integrated EasyOCR for text extraction from new maps",
      "Trained an AI model to detect map changes, generate callouts, and perform calculations",
      "Built and deployed the pipeline using FastAPI and Docker",
      "Held weekly client discussions and documentation reviews",
    ],
    technologies: ["Python", "YOLO", "EasyOCR", "FastAPI", "Docker", "Computer Vision"],
    achievements: ["Reduced analysis time from hours to under 30 minutes per map"],
  },
  {
    company: "Jorim Technology Solutions Pvt Ltd",
    position: "AI & Web App Intern",
    type: "Internship",
    duration: "May 2025 – Jul 2025",
    location: "Chennai",
    description:
      "Built Student Helper Hub, a Flask-based AI application with REST APIs, NLP features, and structured SQL data models.",
    responsibilities: [
      "Built Student Helper Hub using Flask with REST APIs and NLP features",
      "Structured SQL data models for production-ready solution",
      "Automated testing and model performance tuning",
      "Identified bottlenecks and collaborated in an agile development environment",
      "Used Agile/Scrum methodology to deliver production-ready solutions",
    ],
    technologies: ["Python", "Flask", "NLP", "SQL", "REST APIs", "Agile/Scrum"],
    achievements: ["Delivered production-ready AI application within internship period"],
  },
];

export const projects = [
  {
    title: "VirtuTeach",
    subtitle: "AI-Based Personalized Learning Platform",
    description:
      "An AI-native full-stack learning platform integrating LLMs, LangChain-based RAG pipelines, and Agentic AI workflows for context-aware, autonomous multi-step reasoning.",
    problem:
      "Traditional learning platforms lack personalization and cannot adapt to individual student needs in real-time.",
    solution:
      "Built an AI-native platform that uses RAG pipelines and Agentic AI to provide context-aware, personalized learning experiences powered by LLMs.",
    features: [
      "LangChain-based RAG pipelines",
      "Agentic AI workflows with multi-step reasoning",
      "FAISS vector database for semantic search",
      "LLM fine-tuning with LoRA",
      "Document processing and vector search",
      "Iterative evaluation pipelines",
    ],
    technologies: ["Python", "Flask", "LangChain", "Gemini API", "FAISS", "LoRA", "React"],
    category: ["AI", "Machine Learning", "Full Stack"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/MerinJohnymaippan/VirtuTeach",
    demo: null,
    outcome: "Context-aware personalized learning with autonomous multi-step reasoning",
  },
  {
    title: "DriverGuard",
    subtitle: "Real-Time Driver Monitoring System",
    description:
      "A real-time AI-powered Driver Monitoring System using Python, OpenCV, and YOLO for drowsiness and distraction detection with production-ready reliability.",
    problem:
      "Driver drowsiness and distraction cause thousands of accidents annually, with no affordable real-time detection solution.",
    solution:
      "Built a computer vision system that monitors driver behavior in real-time, detecting drowsiness and distraction using YOLO and OpenCV.",
    features: [
      "Real-time drowsiness detection",
      "Distraction monitoring",
      "YOLO-based object detection",
      "PyTorch model training & optimization",
      "Git-based version control",
      "Production-ready reliability",
    ],
    technologies: ["Python", "OpenCV", "YOLO", "PyTorch", "Computer Vision", "Git"],
    category: ["AI", "Deep Learning", "Computer Vision"],
    image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/MerinJohnymaippan/-DriverGuard-SleepDetection",
    demo: null,
    outcome: "Presented at ICIMRBE 2025 International Conference",
  },
  {
    title: "VocalPen",
    subtitle: "AI-Powered Document Audio Generator",
    description:
      "An end-to-end AI-powered application integrating image preprocessing, OCR, audio generation, and REST API integration for scalable data processing workflows.",
    problem: "Reading large documents is time-consuming; people need an accessible way to consume written content.",
    solution:
      "Built a pipeline that extracts text from images/documents using OCR and converts them to high-quality audio output.",
    features: [
      "Image preprocessing pipeline",
      "OCR text extraction",
      "AI audio generation",
      "REST API integration",
      "Scalable data processing",
      "Automated testing",
    ],
    technologies: ["Python", "OCR", "REST APIs", "Audio Processing", "Flask"],
    category: ["AI", "Full Stack"],
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/MerinJohnymaippan/VocalPen",
    demo: null,
    outcome: "Prize Winner – Innovative Project at college fest",
  },
  {
    title: "Student Helper Hub",
    subtitle: "AI-Powered Student Productivity App",
    description:
      "A Flask-based AI application with REST APIs, NLP features, and structured SQL data models to assist students with productivity and learning.",
    problem: "Students lack a unified platform that integrates AI tools for academic productivity.",
    solution:
      "Built a modular Flask application with NLP features and AI integrations to help students manage their academic workload.",
    features: [
      "NLP-based question answering",
      "REST API architecture",
      "Structured SQL data models",
      "Automated testing",
      "Modular architecture",
    ],
    technologies: ["Python", "Flask", "NLP", "SQL", "REST APIs"],
    category: ["AI", "Full Stack", "Web Development"],
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/MerinJohnymaippan/student-helper-hub",
    demo: null,
    outcome: "Production-ready AI app delivered during internship",
  },
  {
    title: "SpendWise",
    subtitle: "Personal Expense Tracker",
    description:
      "A fast, responsive personal expense tracker with a Vanilla JS frontend and Flask backend. Features smart auto-categorization, advanced filtering, dark/light mode, and SQLite database integration.",
    problem: "People struggle to track spending habits without a simple, intuitive tool that categorizes and visualizes expenses.",
    solution:
      "Built a responsive expense tracker with smart auto-categorization (keyword-based), a dashboard with category breakdowns, and advanced filtering — backed by Flask and SQLite with localStorage fallback.",
    features: [
      "Dashboard with stat cards and category breakdowns",
      "Smart auto-categorization via keyword matching",
      "Add, edit, and delete expenses",
      "Advanced filtering (search, category, date range)",
      "Dark/Light mode with session persistence",
      "Flask backend with SQLite database integration",
      "localStorage fallback for frontend-only mode",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Flask", "Python", "SQLite"],
    category: ["Web Development", "Full Stack"],
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/MerinJohnymaippan/Expense-Tracker",
    demo: null,
    outcome: "Fully functional expense tracker with dual storage (SQLite + localStorage)",
  },
];

export const skills = {
  "AI & Machine Learning": [
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "Computer Vision" },
    { name: "NLP / Transformers" },
    { name: "Generative AI / LLMs" },
    { name: "RAG & Agentic AI" },
    { name: "Model Fine-tuning (LoRA)" },
    { name: "Prompt Engineering" },
  ],
  "Programming Languages": [
    { name: "Python" },
    { name: "JavaScript" },
    { name: "SQL" },
    { name: "Java" },
    { name: "C" },
    { name: "HTML / CSS" },
  ],
  "Frameworks & Libraries": [
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "LangChain / LlamaIndex" },
    { name: "Scikit-learn" },
    { name: "FastAPI / Flask" },
    { name: "OpenCV / YOLO" },
    { name: "Pandas / NumPy" },
    { name: "React" },
  ],
  "Software Engineering": [
    { name: "Data Structures & Algorithms" },
    { name: "Object-Oriented Programming" },
    { name: "REST API Design" },
    { name: "Database Design" },
    { name: "Version Control (Git)" },
    { name: "Agile / Scrum" },
    { name: "Testing & Debugging" },
    { name: "System Design" },
  ],
  "Cloud & DevOps": [
    { name: "AWS" },
    { name: "Docker" },
    { name: "Git / GitHub" },
    { name: "CI/CD" },
    { name: "PostgreSQL / MySQL" },
    { name: "MongoDB / Redis" },
    { name: "FAISS / Vector Databases" },
  ],
  "Soft Skills": [
    { name: "Problem Solving" },
    { name: "Analytical Thinking" },
    { name: "Communication" },
    { name: "Teamwork & Collaboration" },
    { name: "Quick Learning" },
    { name: "Attention to Detail" },
  ],
};

export const certifications = [
  {
    title: "Foundations of AI and ML",
    organization: "Microsoft",
    date: "Jul 2025",
    icon: "M",
    color: "#00A4EF",
    credentialUrl: "#",
  },
  {
    title: "Modeling Data in Power BI",
    organization: "Microsoft",
    date: "Jun 2025",
    icon: "M",
    color: "#00A4EF",
    credentialUrl: "#",
  },
  {
    title: "Cloud Technical Essentials",
    organization: "AWS",
    date: "Jun 2025",
    icon: "A",
    color: "#FF9900",
    credentialUrl: "#",
  },
  {
    title: "Deep Learning (NPTEL)",
    organization: "IIT Ropar",
    date: "Oct 2025",
    icon: "I",
    color: "#2563EB",
    credentialUrl: "#",
  },
  {
    title: "Data Analytics Essentials",
    organization: "IBM",
    date: "Mar 2025",
    icon: "I",
    color: "#054ADA",
    credentialUrl: "#",
  },
  {
    title: "Regression Analysis",
    organization: "Infosys",
    date: "Oct 2024",
    icon: "I",
    color: "#1E88E5",
    credentialUrl: "#",
  },
  {
    title: "Python",
    organization: "Coursera",
    date: "Jun 2024",
    icon: "C",
    color: "#0056D2",
    credentialUrl: "#",
  },
];

export const achievements = [
  {
    title: "Best Outgoing Student",
    description: "Department of AI & Data Science (2026)",
    category: "Award",
    icon: "trophy",
  },
  {
    title: "Prize Winner – VocalPen",
    description: "Innovative Project award at college technical fest",
    category: "Award",
    icon: "award",
  },
  {
    title: "10 SGPA in 8th Semester",
    description: "Achieved a perfect 10 SGPA in the final semester",
    category: "Academic",
    icon: "star",
  },
  {
    title: "Presented DriverGuard at ICIMRBE 2025",
    description: "International Conference on Innovations in Mechanical, Robotics, Computing, and Biomedical Engineering, Adi Shankara Institute, April 2025",
    category: "Research",
    icon: "mic",
  },
  {
    title: "TinkerHack Women's Hackathon",
    description: "Participated in national-level women's hackathon",
    category: "Hackathon",
    icon: "zap",
  },
  {
    title: "Newsletter Head",
    description: "Managed department newsletter content and coordination",
    category: "Leadership",
    icon: "users",
  },
  {
    title: "Technical Fest Coordinator",
    description: "Coordinator – Project Expo, Prayag Technical Fest & Brahma National Fest",
    category: "Leadership",
    icon: "star",
  },
  {
    title: "Placement Cell Student Coordinator",
    description: "Assisted in campus placement activities and coordination",
    category: "Leadership",
    icon: "users",
  },
];

