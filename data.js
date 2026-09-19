const portfolioData = {
  personalInfo: {
    name: "Aniket Kumar",
    tagline: "B.Tech Computer Science & Engineering Student",
    location: "Ranchi, Jharkhand, India",
    phone: "+91 9153804578",
    email: "aniketkr2101@gmail.com",
    linkedin: "https://linkedin.com/in/aniketkumar001",
    github: "https://github.com/Aniketkumar-01",
    about: "I am a dedicated Computer Science student specializing in Data Science and Cloud Computing. Passionate about machine learning, web development, and solving real-world problems through code."
  },
  education: [
    {
      institution: "Sarala Birla University, Ranchi",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      duration: "Aug 2023 – Present",
      cgpa: "8.02 / 10"
    }
  ],
  experience: [
    {
      role: "Machine Learning Intern",
      company: "IIIT Ranchi",
      duration: "May 2026 – July 2026",
      link: "https://colab.research.google.com/drive/1hpX3fsm4CEysk9i_4PBCJ2h5ZaahkWe6",
      image: "assets/heart_disease_banner.svg?v=2",
      description: [
        "Built and evaluated 5 classification algorithms (Random Forest, Logistic Regression, SVM, XGBoost, Neural Network) for heart disease prediction; the top model, Random Forest, achieved 90.2% accuracy, 96.4% recall, and 0.959 AUC.",
        "Applied data preprocessing, feature selection, and hyperparameter tuning to improve model accuracy and reduce false negatives in disease classification.",
        "Authored detailed technical reports documenting methodology, model performance, and evaluation metrics for review by mentors and peers.",
        "Collaborated with mentors and peers to iteratively refine the model pipeline and validate results against baseline benchmarks."
      ]
    }
  ],
  projects: [
    {
      title: "Solar Rooftop Analyzer",
      link: "https://solar-rooftop-analyzer.streamlit.app/",
      github: "https://github.com/Aniketkumar-01/Solar-Rooftop-Analyzer-",
      image: "assets/solar_rooftop_banner.svg",
      techStack: ["Python", "Streamlit", "Pandas", "REST APIs (NASA POWER, ArcGIS, Nominatim)"],
      description: [
        "Developed a Streamlit web app enabling users to trace rooftops on satellite imagery to estimate solar generation and cost savings.",
        "Integrated Folium maps, ArcGIS geocoding, and the NASA POWER API with a robust data cleaning pipeline for user-uploaded CSVs."
      ]
    },
    {
      title: "Heart Disease Prediction App",
      description: [
        "Built and evaluated 5 classification algorithms for heart disease prediction, with the top Random Forest model achieving 90.2% accuracy and 0.959 AUC.",
        "Designed and deployed a fully interactive web interface using Streamlit, allowing users to input clinical parameters for real-time risk assessment."
      ],
      techStack: ["Python", "Streamlit", "Random Forest", "Scikit-learn"],
      link: "https://heart-disease-prediction-ml-algos.streamlit.app/",
      github: "#",
      image: "assets/heart_disease_banner_1.svg"
    }
  ],
  skills: {
    primary: ["Python"],
    coreCS: ["Data Structures & Algorithms", "DBMS"],
    web: ["JavaScript", "HTML", "CSS"],
    tools: ["Streamlit", "Git & GitHub"]
  },
  certifications: [
    {
      title: "Data Analytics with AI Internship",
      issuer: "AICTE | IBM SkillsBuild | BharatCares",
      date: "2026",
      link: "#"
    }
  ]
};
