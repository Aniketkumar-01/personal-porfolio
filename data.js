const portfolioData = {
  personalInfo: {
    name: "Aniket Kumar",
    handle: "@aniketkumar",
    tagline: "B.Tech CSE Student · Machine Learning & Cloud",
    role: "ML & Software Developer",
    location: "Ranchi, Jharkhand, India",
    coordinates: "23.3441° N, 85.3096° E",
    timezone: "Asia/Kolkata",
    utcOffset: "+05:30",
    phone: "+91 9153804578",
    email: "aniketkr2101@gmail.com",
    linkedin: "https://linkedin.com/in/aniketkumar001",
    github: "https://github.com/Aniketkumar-01",
    resume: "Aniket_Kumar_Resume.pdf",
    status: "Available for internships & full-time roles",
    statusAvailable: true,
    about: "I am a dedicated Computer Science student specializing in Data Science and Cloud Computing. Passionate about machine learning, web development, and solving real-world problems through clean code and scalable architecture."
  },
  education: [
    {
      institution: "Sarala Birla University",
      location: "Ranchi, Jharkhand",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      specialization: "Data Science & Cloud Computing (DSCC)",
      duration: "Aug 2023 – Present",
      cgpa: "8.02 / 10",
      highlights: [
        "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Machine Learning Foundations, Cloud Infrastructure.",
        "Maintained consistent academic distinction across semesters with 8.02 CGPA."
      ]
    }
  ],
  experience: [
    {
      role: "Machine Learning Intern",
      company: "IIIT Ranchi",
      location: "Ranchi, India",
      duration: "May 2026 – July 2026",
      type: "Internship",
      link: "https://colab.research.google.com/drive/1hpX3fsm4CEysk9i_4PBCJ2h5ZaahkWe6",
      image: "assets/heart_disease_banner.svg?v=2",
      description: [
        "Built and benchmarked 5 classification algorithms (Random Forest, Logistic Regression, SVM, XGBoost, Neural Network) for clinical heart disease risk prediction.",
        "Achieved 90.2% accuracy, 96.4% recall, and 0.959 AUC with the optimized Random Forest ensemble, significantly minimizing false negative rates.",
        "Executed end-to-end data preprocessing, feature selection, outlier handling, and cross-validated hyperparameter tuning.",
        "Authored comprehensive technical documentation and evaluation reports for review by senior research faculty and mentors."
      ],
      skills: ["Python", "Scikit-Learn", "Machine Learning", "Hyperparameter Tuning", "Random Forest", "Research"]
    }
  ],
  projects: [
    {
      id: "solar-rooftop-analyzer",
      title: "Solar Rooftop Analyzer",
      category: "Full-Stack & Geospatial ML",
      featured: true,
      year: "2026",
      link: "https://solar-rooftop-analyzer.streamlit.app/",
      github: "https://github.com/Aniketkumar-01/Solar-Rooftop-Analyzer-",
      image: "assets/solar_rooftop_banner.svg",
      summary: "Interactive geospatial satellite application enabling property owners to trace rooftops and estimate solar energy yield, CO₂ offset, and cost savings.",
      description: [
        "Developed an interactive web application that allows users to trace building rooftops directly on high-resolution satellite imagery.",
        "Integrated Folium satellite mapping, ArcGIS geocoding, and NASA POWER solar irradiance REST APIs for accurate location-specific yield estimation.",
        "Implemented robust data cleaning and calculation pipelines for uploaded user energy consumption CSVs, generating payback period estimates."
      ],
      techStack: ["Python", "Streamlit", "Pandas", "Folium", "NASA POWER API", "ArcGIS"]
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction App",
      category: "Healthcare AI & Streamlit",
      featured: true,
      year: "2026",
      link: "https://heart-disease-prediction-ml-algos.streamlit.app/",
      github: "https://github.com/Aniketkumar-01",
      image: "assets/heart_disease_banner_1.svg",
      summary: "End-to-end diagnostic clinical web application evaluating patient cardiovascular metrics with 90.2% accuracy in real-time.",
      description: [
        "Constructed and deployed a predictive machine learning web application powered by a trained Random Forest model (90.2% accuracy, 0.959 AUC).",
        "Designed an intuitive clinical input form allowing practitioners and patients to submit vital parameters (cholesterol, resting BP, ECG, thalach).",
        "Visualized probability scores, feature contribution metrics, and risk tier recommendations with instant interactive feedback."
      ],
      techStack: ["Python", "Streamlit", "Scikit-learn", "Random Forest", "Data Preprocessing"]
    }
  ],
  skills: {
    languages: [
      { name: "Python", icon: "assets/python.png", level: "Primary" },
      { name: "JavaScript (ES6+)", icon: "assets/js.png", level: "Intermediate" },
      { name: "HTML5", icon: "assets/html.png", level: "Advanced" },
      { name: "CSS3", icon: "assets/css.png", level: "Advanced" },
      { name: "SQL", icon: "assets/database.png", level: "Intermediate" }
    ],
    machineLearning: [
      { name: "Scikit-Learn", icon: "assets/python.png" },
      { name: "Pandas & NumPy", icon: "assets/python.png" },
      { name: "Random Forest & SVM", icon: null },
      { name: "Model Evaluation & AUC-ROC", icon: null },
      { name: "Feature Engineering", icon: null },
      { name: "Hyperparameter Tuning", icon: null }
    ],
    frameworksAndTools: [
      { name: "Streamlit", icon: "assets/Streamlit.png" },
      { name: "Git & GitHub", icon: "assets/github.png" },
      { name: "REST APIs", icon: null },
      { name: "Google Colab", icon: null },
      { name: "VS Code", icon: null }
    ],
    csFundamentals: [
      { name: "Data Structures & Algorithms" },
      { name: "Database Management Systems (DBMS)" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Cloud Computing Fundamentals" }
    ]
  },
  certifications: [
    {
      title: "Data Analytics with AI Internship",
      issuer: "AICTE | IBM SkillsBuild | BharatCares",
      date: "2026",
      credentialUrl: "https://www.skillsbuild.org/",
      skillsLearned: ["Data Analytics", "AI Foundations", "IBM Cloud", "Python for Data Science"]
    }
  ]
};
