const portfolioData = {
  personalInfo: {
    name: "Vanshika Jain",
    title: "Data Analyst & MERN Stack Developer",
    github: "https://github.com/Vanshika0411",
    linkedin: "https://www.linkedin.com/in/vanshika-jain-71b45b2b3/",
    graduation: "2026",
    cgpa: "9.05",
    specialization: "Data Analyst & MERN Stack Developer",
    taglines: [
      "Transforming Data into Actionable Insights",
      "Building Intelligent Web Applications with MERN",
      "Discovering Patterns in Complex Data",
      "Empowering Decisions with Analytics",
      "Bridging Data Science and Full-Stack Development",
      "From Raw Data to Scalable Web Solutions",
    ],
  },
  skills: {
    programming: ["Python", "JavaScript", "SQL"],
    dataScience: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "OpenCV",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebooks",
    ],
    webTechnologies: ["ReactJS", "Node.js", "Django", "Flask", "Docker"],
    tools: [
      "Git/Github",
      "Jupyter Notebook",
      "VS Code",
      "PowerBI",
      "MySQL",
      "MongoDB",
      "Figma",
    ],
  },
  projects: [
    {
      id: 1,
      title: "Vibely",
      description:
        "Vibely is a full-stack MERN social media application where users can connect, share posts, follow others, and interact through likes, comments, and notifications. It provides a modern responsive UI with real-time updates, authentication, and image upload support.",
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
      category: "Web Development",
      demoLink: "https://vibely-gilt.vercel.app/",
      githubLink: "https://github.com/Vanshika0411/Vibely",
      showDemo: true,
      features: [
        "User authentication with JWT (login/register/logout)",
        "Create, edit and delete posts with image upload",
        "Like and comment system for posts",
        "Follow/unfollow users and personalized feed",
        "Real-time notifications and responsive design",
      ],
    },

    {
      id: 2,
      title: "Salary Prediction Model",
      description:
        "Developed a machine learning model to predict salaries based on skills, experience, and education using regression algorithms. Achieved high accuracy with optimized feature engineering and hyperparameter tuning.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      category: "Data Science",
      demoLink: null,
      githubLink: "https://github.com/Vanshika0411/EMPLOYEE-SALARY-PREDICTION",
      showDemo: false,
      features: [
        "Data preprocessing",
        "Regression models",
        "Feature engineering",
        "Model evaluation",
        "Visualization of predictions",
      ],
    },
    {
      id: 3,
      title: "ArtifyAI",
      description:
        "AI-powered platform that transforms text prompts into unique pieces of digital art using generative models. Features include multiple style options, high-resolution exports, and a modern responsive UI.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "OpenAI API / Stable Diffusion",
      ],
      category: "Web Development",
      demoLink: null,
      githubLink: "https://github.com/Vanshika0411/ArtifyAI",
      showDemo: false,
      features: [
        "Text-to-image generation",
        "Multiple art styles",
        "High-quality image export",
        "User-friendly interface",
        "Responsive design",
      ],
    },
    {
      id: 4,
      title: "ATM Transactions Analysis Dashboard",
      description:
        "A fully interactive Power BI dashboard built to analyze and visualize ATM operations across multiple states. Provides real-time insights for smarter financial decision-making, covering cost analysis, performance KPIs, transaction trends, and state-wise performance metrics.",
      technologies: [
        "Power BI",
        "Data Visualization",
        "KPI Analysis",
        "Financial Analytics",
      ],
      category: "Data Analytics / Dashboard",
      demoLink:
        "https://www.linkedin.com/posts/vanshika-jain-71b45b2b3_dataanalytics-atminsights-dashboarddesign-activity-7351927262809640961-x8pP/",
      githubLink: "https://github.com/Vanshika0411/ATM-Transactions-Analysis-Dashboard",
      showDemo: true,
      features: [
        "Cost Analysis by month",
        "Key Performance KPIs",
        "Revenue & Transactions trends",
        "State-wise performance metrics",
        "ATM distribution insights",
        "Interactive UI with Overview & Details",
      ],
    },

    {
      id: 5,
      title: "Student Management System",
      description:
        "A desktop application built with Python Tkinter and MySQL that allows managing student records efficiently. Users can add, update, search, delete and display student information with a connected database.",
      technologies: ["Python", "Tkinter", "MySQL", "Pandas"],
      category: "Data Science",
      demoLink: null,
      githubLink: "https://github.com/Vanshika0411/STUDENT-MANAGEMENT-SYSTEM",
      showDemo: false,
      features: [
        "Add student records (ID, Name, Mobile, Email, DOB, etc.)",
        "Search students by ID, Name, Mobile, Email, Gender",
        "Update or delete student details",
        "Display all students in TreeView with scroll",
        "MySQL database with auto table creation",
      ],
    },
    {
      id: 6,
      title: "ResuMagic",
      description:
        "Web application that generates ATS-friendly resumes by analyzing user-provided details and formatting them into professional templates with export options.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
      category: "Web Development",
      demoLink: null,
      githubLink: "https://github.com/Vanshika0411/ResuMagic",
      showDemo: false,
      features: [
        "Resume template generation",
        "ATS-optimization",
        "User authentication",
        "PDF export",
        "Modern UI/UX",
      ],
    },
  ],

  experience: [
    {
      title: "Artificial Intelligence & Machine Learning Intern (Remote)",
      organization: "Edunet Foundation",
      period: "18 June 2025 - 30 July 2025",
      description:
        "Worked on AI/ML projects including data preprocessing, model training, and evaluation for real-world datasets, applying supervised and unsupervised learning techniques.",
      achievements: [
        "Performed data analysis and preprocessing using Python",
        "Built and deployed predictive ML models",
        "Created dashboards and visualizations with Power BI & Matplotlib",
        "Enhanced accuracy of classification models through hyperparameter tuning",
      ],
    },
    {
      title: "Data Science Intern (Remote)",
      organization: "CODE ALPHA",
      period: "10 June 2025 - 10 July 2025",
      description:
        "Worked on mini data science projects to implement supervised and unsupervised algorithms, with emphasis on data-driven insights.",
      achievements: [
        "Implemented regression and classification models",
        "Performed feature engineering and evaluation",
        "Worked on clustering and recommendation systems",
        "Improved model performance with parameter tuning",
      ],
    },
    {
      title: "Web Development Intern (Remote)",
      organization: "ApexPlanet Software Pvt. Ltd.",
      period: "01 June 2025 - 16 July 2025",
      description:
        "Contributed to front-end and back-end web development tasks, ensuring responsive design and functional database operations.",
      achievements: [
        "Developed responsive web pages using HTML, CSS, and JavaScript",
        "Managed database operations with MySQL",
        "Worked within an Agile/Scrum environment",
        "Collaborated with senior developers on live projects",
      ],
    },
    {
      title: "Computer Club Student Coordinator",
      organization: "College Computer Club",
      period: "15 August 2024 - 15 September 2025",
      description:
        "Led technical initiatives, organized educational workshops, and mentored students in programming, data science, and emerging technologies.",
      achievements: [
        "Organized and delivered technical workshops",
        "Provided mentorship in data science and coding",
        "Planned and executed technical events",
        "Contributed to curriculum design for peer learning",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      specialization: "Data Science and Big Data Analytics",
      period: "Expected Graduation - 2026",
      cgpa: "9.05",
      status: "3rd Year Student",
      institution: "College Name",
      achievements: [
        "Consistent academic excellence with 9.05 CGPA",
        "Specialization in emerging data science technologies",
        "Active participation in technical events and competitions",
        "Research and project work in machine learning",
      ],
    },
  ],
  certifications: [
    {
      name: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "April 2025",
      // "credentialId": "Course Certificate",
      link: "https://coursera.org/share/1fadd3c708a26d3db374da4c458395ee",
    },
    {
      name: "The Full Stack",
      issuer: "Meta",
      date: "May 2025",
      // "credentialId": "6AJ6MM8B6MQZ",
      link: "https://coursera.org/share/a7d46c6340dd21f1443f0a887eb0bf35",
    },
    {
      name: " Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "June 2025",
      // "credentialId": "7P0UVCEJD57L",
      link: "https://www.theforage.com/simulations/deloitte-au/data-analytics-s5zy",
    },
    {
      name: "Data Analysis and Visualization with Power BI",
      issuer: "Microsoft",
      date: "April 2025",
      // "credentialId": "UOMIQ9I274GC",
      link: "https://coursera.org/share/a2bdb7a3dcfad3ddd999a9757f47f55b",
    },
    {
      name: "Generative AI Learning Plan for Model Builders",
      issuer: "AWS",
      date: "June 2025",
      // "credentialId": "C8Z3QNZ4THG6",
      link: "https://skillbuilder.aws/learning-plan/BB4UWE24NX/generative-ai-learning-plan-for-model-builders/1DUA79ANG5",
    },
    {
      name: " Fundamentals of UI/UX Design",
      issuer: "Microsoft",
      date: "May 2025",
      // "credentialId": "7P0UVCEJD57L",
      link: "https://coursera.org/share/029d75ab919d3000652460ca25ec3f17",
    },
  ],

  research: [
    {
      title:
        "Classification of ADHD disorder using the CNN and RNN-based hybrid deep learning model",
      conference:
        "Innovative Computing & Communication in The Field of Life Sciences, Agriculture and Technology",
      institution: "Chaudhary Charan Singh University, Meerut, Uttar Pradesh",
      venue: "Sir Chhotu Ram Institute of Engineering and Technology",
      date: "February 7-9, 2025",
      authors: "Saurav Singh and 2 co-authors",
      page: "Page 509",
      pdfLink:
        "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/public/pdf/2025/02/Conference%20Proceedings%20(Vol%20I%20&%20II).pdf",
      description:
        "Published research paper focusing on advanced hybrid deep learning approaches combining Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) for accurate ADHD disorder classification.",
      type: "International Conference Publication",
    },
  ],
};

// Global variables
let currentFilter = "all";
let typingAnimationRunning = false;
let scrollIndicatorVisible = true;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing purple-themed portfolio...");
  initializeApp();
});

function initializeApp() {
  console.log("Starting purple portfolio initialization...");

  try {
    // Show loading overlay
    showLoading();

    // Initialize all components
    initializeNavigation();
    renderSkills();
    renderProjects();
    renderResearch();
    renderExperience();
    renderEducation();
    renderCertifications();
    initializeContactForm();
    initializeScrollEffects();
    initializeIntersectionObserver();
    initializeInteractiveElements();

    // Start animations after initialization
    setTimeout(() => {
      initializeTypingAnimation();
    }, 500);

    // Hide loading overlay
    setTimeout(() => {
      hideLoading();
      console.log("Purple portfolio initialization complete");
    }, 1000);
  } catch (error) {
    console.error("Error during app initialization:", error);
    hideLoading();
  }
}

function showLoading() {
  const loadingOverlay = document.getElementById("loading-overlay");
  if (loadingOverlay) {
    loadingOverlay.classList.remove("hidden");
  }
}

function hideLoading() {
  const loadingOverlay = document.getElementById("loading-overlay");
  if (loadingOverlay) {
    loadingOverlay.classList.add("hidden");
  }
}

// Enhanced navigation functionality
function initializeNavigation() {
  console.log("Initializing enhanced navigation...");

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Prevent body scroll when menu is open
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Enhanced smooth scroll navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Calculate offset for fixed navbar
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update active link
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

  // Hero button scroll functionality
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetId = button.getAttribute("data-scroll");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Enhanced typing animation
function initializeTypingAnimation() {
  console.log("Starting purple-themed typing animation...");

  const typingElement = document.querySelector(".typing-text");
  const heroTagline = document.querySelector(".hero-tagline");

  if (!typingElement || typingAnimationRunning) return;

  // Ensure the container has proper width
  if (heroTagline) {
    heroTagline.style.minWidth = "100%";
    heroTagline.style.display = "flex";
    heroTagline.style.justifyContent = "center";
    heroTagline.style.alignItems = "center";
  }

  typingAnimationRunning = true;
  const taglines = portfolioData.personalInfo.taglines;
  let currentTaglineIndex = 0;

  function typeText(text) {
    return new Promise((resolve) => {
      typingElement.textContent = "";
      let i = 0;

      const typeInterval = setInterval(() => {
        if (i < text.length) {
          typingElement.textContent += text[i];
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            deleteText().then(resolve);
          }, 2500);
        }
      }, 100);
    });
  }

  function deleteText() {
    return new Promise((resolve) => {
      const currentText = typingElement.textContent;
      let i = currentText.length;

      const deleteInterval = setInterval(() => {
        if (i > 0) {
          typingElement.textContent = currentText.substring(0, i - 1);
          i--;
        } else {
          clearInterval(deleteInterval);
          setTimeout(resolve, 500);
        }
      }, 50);
    });
  }

  async function startTypingLoop() {
    while (typingAnimationRunning) {
      await typeText(taglines[currentTaglineIndex]);
      currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }

  startTypingLoop();
}

// Enhanced scroll effects
function initializeScrollEffects() {
  console.log("Initializing enhanced scroll effects...");

  let ticking = false;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateActiveNavLink();
        updateNavbarBlur(navbar);
        handleScrollIndicator();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Enhanced navbar blur effect
function updateNavbarBlur(navbar) {
  if (!navbar) return;

  const scrolled = window.pageYOffset > 50;

  if (scrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Improved scroll indicator behavior
function handleScrollIndicator() {
  const scrollIndicator = document.getElementById("scroll-indicator");
  if (!scrollIndicator) return;

  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 100 && scrollIndicatorVisible) {
    scrollIndicator.style.opacity = "0";
    scrollIndicator.style.pointerEvents = "none";
    scrollIndicatorVisible = false;
  } else if (scrollPosition < 50 && !scrollIndicatorVisible) {
    scrollIndicator.style.opacity = "1";
    scrollIndicator.style.pointerEvents = "all";
    scrollIndicatorVisible = true;
  }
}

function updateScrollProgress() {
  const scrollProgress = document.querySelector(".scroll-progress");
  if (!scrollProgress) return;

  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = scrollPercent + "%";
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollPos = window.pageYOffset + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Skills rendering with enhanced animations
function renderSkills() {
  console.log("Rendering enhanced skills...");

  renderSkillCategory("programming-skills", portfolioData.skills.programming);
  renderSkillCategory("datascience-skills", portfolioData.skills.dataScience);
  renderSkillCategory("webdev-skills", portfolioData.skills.webTechnologies);
  renderSkillCategory("tools-skills", portfolioData.skills.tools);
}

function renderSkillCategory(containerId, skills) {
  const container = document.getElementById(containerId);
  if (!container || !skills) return;

  container.innerHTML = skills
    .map(
      (skill, index) =>
        `<span class="skill-item" style="animation-delay: ${
          index * 100
        }ms">${skill}</span>`
    )
    .join("");
}

// Enhanced projects rendering
function renderProjects() {
  console.log("Rendering projects with enhanced interactions...");

  const projectsGrid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!projectsGrid) return;

  // Render all projects with enhanced interactivity
  projectsGrid.innerHTML = portfolioData.projects
    .map(
      (project, index) => `
        <div class="project-card interactive-card" data-category="${
          project.category
        }" style="animation-delay: ${index * 200}ms">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${project.features
                          .map((feature) => `<li>${feature}</li>`)
                          .join("")}
                    </ul>
                </div>
                <div class="project-links">
                    ${
                      project.showDemo
                        ? `
                        <a href="${project.demoLink}" class="project-link project-link--primary interactive-link" target="_blank">
                            <span>Live Demo</span>
                        </a>
                    `
                        : ""
                    }
                    <a href="${
                      project.githubLink
                    }" class="project-link project-link--secondary interactive-link" target="_blank">
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Enhanced filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button with smooth animation
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      // Filter projects with enhanced animation
      filterProjectsSmooth(filter);
    });
  });
}

function filterProjectsSmooth(filter) {
  const projectCards = document.querySelectorAll(".project-card");

  // Smooth hide animation
  projectCards.forEach((card) => {
    card.style.transition = "all 0.3s ease";
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.95)";
  });

  // Show filtered cards with staggered animation
  setTimeout(() => {
    let delay = 0;
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        setTimeout(() => {
          card.classList.remove("hidden");
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
        }, delay);
        delay += 150;
      } else {
        card.classList.add("hidden");
      }
    });
  }, 200);
}

// Research section
function renderResearch() {
  console.log("Rendering research section...");

  const researchGrid = document.getElementById("research-grid");
  if (!researchGrid) return;

  researchGrid.innerHTML = portfolioData.research
    .map(
      (research, index) => `
        <div class="research-card interactive-card" style="animation-delay: ${
          index * 200
        }ms">
            <div class="research-icon"></div>
            <h3 class="research-title">${research.title}</h3>
            <div class="research-conference">${research.conference}</div>
            <div class="research-institution">${research.institution}</div>
            <div class="research-date">${research.date}</div>
            <p class="research-description">${research.description}</p>
            <div class="research-details">
                <div class="research-detail">
                    <div class="research-detail-label">Authors</div>
                    <div class="research-detail-value">${research.authors}</div>
                </div>
                <div class="research-detail">
                    <div class="research-detail-label">Page</div>
                    <div class="research-detail-value">${research.page}</div>
                </div>
                <div class="research-detail">
                    <div class="research-detail-label">Type</div>
                    <div class="research-detail-value">${research.type}</div>
                </div>
            </div>
            <a href="${
              research.pdfLink
            }" class="research-pdf-link interactive-link" target="_blank">
                📄 View Full Conference Proceedings
            </a>
        </div>
    `
    )
    .join("");
}

// Enhanced Experience section
function renderExperience() {
  console.log("Rendering experience section...");

  const experienceGrid = document.getElementById("experience-grid");
  if (!experienceGrid) return;

  experienceGrid.innerHTML = portfolioData.experience
    .map(
      (exp, index) => `
        <div class="experience-card interactive-card" style="animation-delay: ${
          index * 300
        }ms">
            <h3 class="experience-title">${exp.title}</h3>
            <div class="experience-org">${exp.organization}</div>
            <div class="experience-period">${exp.period}</div>
            <p class="experience-description">${exp.description}</p>
            <ul class="experience-achievements">
                ${exp.achievements
                  .map((achievement) => `<li>${achievement}</li>`)
                  .join("")}
            </ul>
        </div>
    `
    )
    .join("");
}

// Enhanced Education section
function renderEducation() {
  console.log("Rendering education section...");

  const educationGrid = document.getElementById("education-grid");
  if (!educationGrid) return;

  educationGrid.innerHTML = portfolioData.education
    .map(
      (edu, index) => `
        <div class="education-card interactive-card" style="animation-delay: ${
          index * 300
        }ms">
            <div class="education-icon"></div>
            <h3 class="education-degree">${edu.degree}</h3>
            <div class="education-specialization">${edu.specialization}</div>
            <div class="education-period">${edu.period}</div>
            <div class="education-cgpa">CGPA: ${edu.cgpa}</div>
            <ul class="education-achievements">
                ${edu.achievements
                  .map((achievement) => `<li>${achievement}</li>`)
                  .join("")}
            </ul>
        </div>
    `
    )
    .join("");
}

// Enhanced certifications rendering
function renderCertifications() {
  console.log("Rendering certifications...");

  const certificationsGrid = document.getElementById("certifications-grid");
  if (!certificationsGrid) return;

  certificationsGrid.innerHTML = portfolioData.certifications
    .map(
      (cert, index) => `
        <div class="certification-card interactive-card" style="animation-delay: ${
          index * 200
        }ms">
            <div class="cert-icon"></div>
            <h3 class="cert-name">${cert.name}</h3>
            <div class="cert-issuer">${cert.issuer}</div>
            <div class="cert-date">${cert.date}</div>
            <a href="${
              cert.link
            }" class="cert-link interactive-link" target="_blank">
                <span>View Certificate</span>
            </a>
        </div>
    `
    )
    .join("");
}

// Enhanced interactive elements
function initializeInteractiveElements() {
  console.log("Initializing enhanced interactive elements...");

  // Add hover effects to all interactive cards
  const interactiveCards = document.querySelectorAll(".interactive-card");
  interactiveCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add enhanced button interactions
  const interactiveButtons = document.querySelectorAll(".interactive-btn");
  interactiveButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-2px) scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add enhanced link interactions
  const interactiveLinks = document.querySelectorAll(".interactive-link");
  interactiveLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
    });
  });
}

// Enhanced contact form functionality
function initializeContactForm() {
  console.log("Initializing enhanced contact form...");

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);

    // Real-time validation with enhanced feedback
    const inputs = contactForm.querySelectorAll(".form-control");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => clearFieldError(input));

      // Enhanced focus effects
      input.addEventListener("focus", () => {
        const formGroup = input.closest(".form-group");
        formGroup.classList.add("focused");
        input.style.transform = "translateY(-2px)";
      });

      input.addEventListener("blur", () => {
        const formGroup = input.closest(".form-group");
        formGroup.classList.remove("focused");
        input.style.transform = "translateY(0)";
      });
    });
  }
}

function validateField(field) {
  const formGroup = field.closest(".form-group");
  const errorElement = formGroup.querySelector(".form-error");
  let isValid = true;
  let errorMessage = "";

  formGroup.classList.remove("error", "success");

  if (field.hasAttribute("required") && !field.value.trim()) {
    isValid = false;
    errorMessage = `${getFieldLabel(field)} is required`;
  } else if (field.value.trim()) {
    if (field.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
    }

    if (field.name === "name" && field.value.trim().length < 2) {
      isValid = false;
      errorMessage = "Name must be at least 2 characters long";
    }

    if (field.name === "message" && field.value.trim().length < 10) {
      isValid = false;
      errorMessage = "Message must be at least 10 characters long";
    }
  }

  if (isValid && field.value.trim()) {
    formGroup.classList.add("success");
    if (errorElement) errorElement.textContent = "";
  } else if (!isValid) {
    formGroup.classList.add("error");
    if (errorElement) errorElement.textContent = errorMessage;
  }

  return isValid;
}

function getFieldLabel(field) {
  const label = field.closest(".form-group").querySelector("label");
  return label ? label.textContent.replace("*", "").trim() : field.name;
}

function clearFieldError(field) {
  const formGroup = field.closest(".form-group");
  formGroup.classList.remove("error");
  const errorElement = formGroup.querySelector(".form-error");
  if (errorElement) errorElement.textContent = "";
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Form submitted");

  const formFields = e.target.querySelectorAll(".form-control");
  let isFormValid = true;

  formFields.forEach((field) => {
    const formGroup = field.closest(".form-group");
    formGroup.classList.remove("error", "success");
  });

  formFields.forEach((field) => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    showNotification("Please fix the errors above before submitting", "error");
    const firstErrorField = document.querySelector(
      ".form-group.error .form-control"
    );
    if (firstErrorField) {
      firstErrorField.focus();
    }
    return;
  }

  const submitBtn = e.target.querySelector("#submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  submitBtn.classList.add("loading");

  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");

    e.target.reset();
    formFields.forEach((field) => {
      const formGroup = field.closest(".form-group");
      formGroup.classList.remove("success", "error", "focused");
      field.style.transform = "translateY(0)";
    });

    showNotification(
      "Message sent successfully! I'll get back to you soon.",
      "success"
    );
  }, 2000);
}

// Enhanced intersection observer for animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");

        if (entry.target.classList.contains("skill-category")) {
          animateSkillItems(entry.target);
        } else if (
          entry.target.classList.contains("experience-card") ||
          entry.target.classList.contains("education-card")
        ) {
          entry.target.classList.add("slide-in-left");
        } else if (entry.target.classList.contains("project-card")) {
          entry.target.classList.add("slide-in-right");
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToObserve = document.querySelectorAll(`
        .skill-category, 
        .project-card, 
        .experience-card,
        .education-card,
        .certification-card, 
        .research-card,
        .article-card,
        .about-text,
        .about-visual,
        .contact-info,
        .contact-form
    `);

  elementsToObserve.forEach((el) => {
    observer.observe(el);
  });
}

function animateSkillItems(skillCategory) {
  const skillItems = skillCategory.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0) scale(1)";
    }, index * 100);
  });
}

// Enhanced notification system
function showNotification(message, type = "success") {
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => {
    removeNotification(notification);
  });

  const notification = document.createElement("div");
  notification.className = `notification notification--${type}`;

  let icon = "";
  switch (type) {
    case "success":
      icon = "✓";
      break;
    case "error":
      icon = "✗";
      break;
    case "info":
      icon = "ℹ";
      break;
    default:
      icon = "✓";
  }

  notification.innerHTML = `
        <span class="notification-icon">${icon}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;

  if (!document.querySelector("#notification-styles")) {
    const styles = document.createElement("style");
    styles.id = "notification-styles";
    styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--surface-card);
                border: 1px solid rgba(var(--primary-rgb), 0.2);
                border-radius: 12px;
                padding: 16px 20px;
                box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
                backdrop-filter: blur(10px);
                z-index: 2000;
                display: flex;
                align-items: center;
                gap: 12px;
                max-width: 400px;
                min-width: 300px;
                transform: translateX(120%);
                transition: all 0.3s ease;
            }
            .notification--success {
                border-left: 4px solid #10b981;
            }
            .notification--error {
                border-left: 4px solid #dc2626;
            }
            .notification--info {
                border-left: 4px solid var(--primary-color);
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 12px;
            }
            .notification--success .notification-icon {
                background: rgba(16, 185, 129, 0.2);
                color: #10b981;
            }
            .notification--error .notification-icon {
                background: rgba(220, 38, 38, 0.2);
                color: #dc2626;
            }
            .notification--info .notification-icon {
                background: rgba(var(--primary-rgb), 0.2);
                color: var(--primary-color);
            }
            .notification-message {
                flex: 1;
                color: var(--text-primary);
                font-size: 14px;
                line-height: 1.5;
            }
            .notification-close {
                background: none;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                font-size: 18px;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 6px;
                transition: all 0.2s ease;
            }
            .notification-close:hover {
                background: rgba(var(--primary-rgb), 0.1);
                color: var(--text-primary);
            }
        `;
    document.head.appendChild(styles);
  }

  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add("show"), 100);

  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => removeNotification(notification));

  setTimeout(() => removeNotification(notification), 5000);
}

function removeNotification(notification) {
  if (!notification.parentNode) return;

  notification.classList.remove("show");
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// Window resize handler
window.addEventListener("resize", () => {
  console.log("Window resized, adjusting layout...");
});

// Performance monitoring
window.addEventListener("load", () => {
  console.log("Purple portfolio loaded successfully");
  const loadTime = performance.now();
  console.log(`Load time: ${Math.round(loadTime)}ms`);

  setTimeout(() => {
    console.log("All systems operational - purple portfolio ready!");
  }, 2000);
});
