import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Container,
  Download,
  ExternalLink,
  Github,
  GitBranch,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  Moon,
  Quote,
  Send,
  Sun,
  X,
} from "lucide-react";

import {
  siAmazonwebservices,
  siDocker,
  siKubernetes,
  siTerraform,
  siAnsible,
  siLinux,
  siGithubactions,
  siPrometheus,
  siGrafana,
  siNginx,
  siPython,
  siJenkins,
  siArgo,
  siGit,
  siPostgresql,
  siNodedotjs,
} from "simple-icons";

import { translateText } from "./translations";

const EMAIL = "moaznaser117@gmail.com";

const GITHUB = "https://github.com/M0az2";

const LINKEDIN =
  "https://www.linkedin.com/in/moaz-nasr-eldin-02b019294";

const CV_FILE = "/Moaz_Nasr_CV.pdf";

const PROJECTS = [
  {
    title: "Cloud Monitoring Platform",
    type: "Featured Project",
    projectIcon: "Prometheus",
    description:
      "A production-style monitoring platform for containerized applications and infrastructure.",
    problem:
      "Application and infrastructure issues need centralized monitoring, alerting, and visibility.",
    solution:
      "Built a monitoring stack using Prometheus, Grafana, Alertmanager, cAdvisor, and a Flask webhook.",
    role:
      "Designed the monitoring architecture, configured dashboards and alert rules, and automated deployment.",
    result:
      "Created a reusable observability platform with infrastructure-as-code style configuration and automated CI/CD.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "cAdvisor",
      "Flask",
      "Docker",
      "GitHub Actions",
    ],
    github:
      "https://github.com/M0az2/cloud-monitoring-platform",
  },





  {
    title: "Ansible Web & Database Automation Lab",
    type: "Practice Project",
    projectIcon: "Ansible",
    description:
      "An infrastructure automation lab for deploying and configuring web and database servers.",
    problem:
      "Manual server configuration is repetitive and difficult to reproduce.",
    solution:
      "Used Ansible to automate Linux server configuration, Nginx deployment, and MariaDB setup.",
    role:
      "Created Ansible inventory, playbooks, roles, and automated configuration workflows.",
    result:
      "Reduced repetitive configuration work and created a repeatable infrastructure setup.",
    technologies: [
      "Ansible",
      "Linux",
      "Nginx",
      "MariaDB",
      "Bash",
    ],
    github:
      "https://github.com/M0az2/ansible-infrastructure-automation",
  },

 {
  title: "Node.js CI/CD Pipeline",
  type: "DevOps Project",
  projectIcon: "GitHub Actions",
  description:
    "A production-style Node.js application with PostgreSQL, Docker, automated testing, and a GitHub Actions CI/CD pipeline.",
  problem:
    "Manual testing and deployment processes can be inconsistent and time-consuming.",
  solution:
    "Implemented containerization, automated testing, and CI/CD workflows using Docker and GitHub Actions.",
  role:
    "Developed the application, configured PostgreSQL, containerized the services, implemented automated tests, and built the CI/CD pipeline.",
  result:
    "Created a reproducible application environment with automated testing and deployment workflows.",
  technologies: [
    "Node.js",
    "PostgreSQL",
    "Docker",
    "GitHub Actions",
    "Jest",
  ],
  github:
    "https://github.com/M0az2/nodejs-cicd-pipeline",
},

  {
    title: "AWS 3-Tier Application Infrastructure",
    type: "Personal Project",
    projectIcon: "AWS",
    description:
      "A production-style AWS architecture for a highly available three-tier application.",
    problem:
      "Applications need isolated networking, scalable compute, controlled traffic flow, and managed databases.",
    solution:
      "Designed a VPC with public and private subnets, ALB, Auto Scaling, RDS, S3, NAT, and Route 53.",
    role:
      "Designed and implemented the cloud infrastructure and networking architecture.",
    result:
      "Created a scalable AWS environment that simulates a production application deployment.",
    technologies: [
      "AWS",
      "VPC",
      "EC2",
      "ALB",
      "Auto Scaling",
      "RDS",
      "S3",
      "Route 53",
    ],
  },

  

  {
    title: "Self-Healing Infrastructure",
    type: "Practice Project",
    projectIcon: "Grafana",
    description:
      "An automated monitoring and recovery concept for infrastructure failures.",
    problem:
      "Infrastructure failures require fast detection and recovery.",
    solution:
      "Combined monitoring, alerting, and automation to detect failures and trigger recovery actions.",
    role:
      "Designed the monitoring and automated remediation workflow.",
    result:
      "Created a practical foundation for automated infrastructure recovery.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Automation",
    ],
  },
];

const SKILL_GROUPS = [
  {
    title: "Cloud",
    icon: siAmazonwebservices,
    skills: [
      "AWS",
      "EC2",
      "VPC",
      "RDS",
      "S3",
      "IAM",
      "Route 53",
    ],
  },

  {
    title: "DevOps",
    icon: siGithubactions,
    skills: [
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "GitOps",
      "Argo CD",
    ],
  },

  {
    title: "Infrastructure as Code",
    icon: siTerraform,
    skills: [
      "Terraform",
      "Ansible",
      "Infrastructure Automation",
    ],
  },

  {
    title: "Linux Administration",
    icon: siLinux,
    skills: [
      "Ubuntu",
      "Rocky Linux",
      "Bash",
      "Networking",
    ],
  },

  {
    title: "Monitoring & Observability",
    icon: siPrometheus,
    skills: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "cAdvisor",
    ],
  },

  {
    title: "Programming",
    icon: siPython,
    skills: [
      "Python",
      "C#",
      ".NET",
      "Node.js",
      "Bash",
    ],
  },

  {
    title: "Databases",
    icon: siPostgresql,
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "MariaDB",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Cloud Instructor",
    organization: "IEEE SH.A",
    challenge:
      "Deliver practical cloud training for students with different technical backgrounds.",
    action:
      "Designed and delivered hands-on sessions covering cloud computing, AWS, IAM, networking, compute, storage, databases, and cloud architecture.",
    result:
      "Helped participants build and understand a complete 2-Tier Cloud Application through practical labs.",
  },
];

const TRAINING = [
  {
    title: "Cloud Services Management and Operation",
    organization: "NTI",
    file: "/certificates/Moaz Nasr-Eldin Mohamed Helmy.pdf",
    score: "97%",
  },

  {
    title: "HCIA-Security",
    organization: "NTI",
    file: "/certificates/Moaz Nasr-Eldin Mohamed Helmy (1).pdf",
    score: "97%",
  },

  {
    title: "DevOps Foundations",
    organization: "Sprints × Microsoft",
    file: "/certificates/DevOps Foundations.pdf",
  },

  {
    title: "Linux Unhatched",
    organization: "Cisco Networking Academy",
    file: "/certificates/LinuxUnhatchedUpdate20260914-20-r4pxgk.pdf",
  },

  {
    title: "McKinsey Forward",
    organization: "McKinsey",
    file: "/certificates/Forward20260914-20-ha8kdo.pdf",
  },
];

const SERVICES = [
  {
    title: "DevOps & CI/CD",
    icon: siGithubactions,
    description:
      "Build reliable automated pipelines for testing, building, and deploying applications.",
    problem:
      "Manual deployments are slow, inconsistent, and difficult to maintain.",
  },

  {
    title: "Cloud Infrastructure",
    icon: siAmazonwebservices,
    description:
      "Design and provision practical AWS infrastructure for modern applications.",
    problem:
      "Applications need scalable and organized cloud infrastructure.",
  },

  {
    title: "Docker & Containerization",
    icon: siDocker,
    description:
      "Containerize applications and create reproducible deployment environments.",
    problem:
      "Applications behave differently across development and deployment environments.",
  },

  {
    title: "Infrastructure as Code",
    icon: siTerraform,
    description:
      "Automate infrastructure provisioning and configuration using Terraform and Ansible.",
    problem:
      "Manually configured infrastructure is difficult to reproduce and manage.",
  },

  {
    title: "Monitoring & Observability",
    icon: siGrafana,
    description:
      "Implement metrics, dashboards, alerts, and infrastructure visibility.",
    problem:
      "Without observability, infrastructure and application problems are harder to detect.",
  },

  {
    title: "Backend Development",
    icon: siNodedotjs,
    description:
      "Build practical backend APIs and database-driven applications.",
    problem:
      "Modern applications need reliable backend services and database integration.",
  },
];

const PRICING_PLANS = [
  {
    label: "STARTER",
    name: "Basic",
    price: "$30–50",
    features: [
      "Linux / Server Setup",
      "Docker Deployment",
      "Basic CI/CD Pipeline",
      "Up to 2 Revisions",
      "3–5 Day Delivery",
    ],
    button: "Choose Plan",
  },

  {
    label: "STANDARD",
    name: "Pro",
    price: "$80–150",
    features: [
      "AWS Infrastructure Setup",
      "Terraform Infrastructure as Code",
      "CI/CD Automation",
      "Docker Deployment",
      "Up to 4 Revisions",
    ],
    button: "Choose Plan",
  },

  {
    label: "PREMIUM",
    name: "Premium",
    price: "$180–350",
    popular: true,
    features: [
      "AWS Infrastructure",
      "Terraform + Ansible",
      "Kubernetes Deployment",
      "CI/CD Pipeline",
      "Prometheus + Grafana",
      "Documentation & Handover",
    ],
    button: "Choose Plan",
  },

  {
    label: "ENTERPRISE",
    name: "Custom",
    price: "Let's Talk",
    features: [
      "Custom Cloud Architecture",
      "Kubernetes Infrastructure",
      "Advanced CI/CD",
      "Infrastructure Automation",
      "Monitoring & Observability",
      "Long-term Maintenance",
    ],
    button: "Choose Plan",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Cloud Instructor — IEEE SH.A",
    description:
      "Designed and delivered hands-on cloud sessions covering AWS, IAM, networking, compute, and architecture to students at IEEE Shorouk Academy Student Branch.",
    icon: GraduationCap,
    tag: "Teaching",
  },
  {
    title: "ICPC Participant",
    description:
      "Competed in the International Collegiate Programming Contest (ICPC), sharpening algorithmic problem-solving and competitive programming skills under time pressure.",
    icon: Code2,
    tag: "Competition",
  },
  {
    title: "McKinsey Forward Program",
    description:
      "Completed the McKinsey Forward program — a selective leadership and professional skills initiative covering problem-solving frameworks, communication, and adaptability.",
    icon: BriefcaseBusiness,
    tag: "Leadership",
  },
];

const NAV_ITEMS = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Experience",
  "Services",
  "Projects",
  "Achievements",
  "Testimonials",
  "Contact",
];

function App() {
  const [language, setLanguage] = useState(
    () =>
      localStorage.getItem("portfolio-language") || "en"
  );

  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("portfolio-theme") || "dark"
  );

  const [mobileMenu, setMobileMenu] = useState(false);

  const [showScrollTop, setShowScrollTop] =
    useState(false);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [showPricing, setShowPricing] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const t = (text) => translateText(text, language);

  useEffect(() => {
    localStorage.setItem(
      "portfolio-language",
      language
    );

    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    localStorage.setItem(
      "portfolio-theme",
      theme
    );

    document.documentElement.dataset.theme =
      theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-reveal observer
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  // Stagger observer — grids + education + experience + certs
  useEffect(() => {
    const staggerTargets = document.querySelectorAll(
      ".skills-grid, .projects-grid, .services-grid, .achievements-grid, .about-grid, .education-grid, .experience-card, .certs-section"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // grids get stagger-visible, others get visible
            if (
              el.classList.contains("skills-grid") ||
              el.classList.contains("projects-grid") ||
              el.classList.contains("services-grid") ||
              el.classList.contains("achievements-grid")
            ) {
              el.classList.add("stagger-visible");
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );
    staggerTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  // Skill tag stagger — triggers per card when it becomes visible
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tag-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  // Active nav section observer
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.toLowerCase());
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: "-76px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [language]);

  const scrollTo = (id) => {
    setMobileMenu(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const toggleLanguage = () => {
    setLanguage((current) =>
      current === "en" ? "ar" : "en"
    );
  };

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="app">
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        theme={theme}
        scrollTo={scrollTo}
        t={t}
        activeSection={activeSection}
      />

      <main>
        {/* HOME */}
        <section
          id="home"
          className="hero section"
        >
          {/* dot-grid background pattern */}
          <div className="hero-dot-grid" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-content">
              {/* Profile avatar */}
              <div className="hero-avatar" aria-hidden="true">
                <div className="hero-avatar-ring" />
                <div className="hero-avatar-inner">
                  {/* DevOps infinity loop */}
                  <svg width="72" height="50" viewBox="0 0 80 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Subtle lobe fills */}
                    <path d="M40 27 C40 15, 18 8, 13 19 C10 26, 16 36, 26 32 C32 30, 40 27, 40 27" fill="rgba(56,189,248,0.07)"/>
                    <path d="M40 27 C40 15, 62 8, 67 19 C70 26, 64 36, 54 32 C48 30, 40 27, 40 27" fill="rgba(129,140,248,0.07)"/>

                    {/* Left lobe — Dev stroke */}
                    <path
                      className="loop-dev"
                      d="M40 27 C40 15, 18 8, 13 19 C10 26, 16 36, 26 32 C32 30, 40 27, 40 27"
                      stroke="#38bdf8"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Right lobe — Ops stroke */}
                    <path
                      className="loop-ops"
                      d="M40 27 C40 15, 62 8, 67 19 C70 26, 64 36, 54 32 C48 30, 40 27, 40 27"
                      stroke="#818cf8"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Center node glow */}
                    <circle cx="40" cy="27" r="5" fill="rgba(56,189,248,0.15)"/>
                    <circle className="loop-center" cx="40" cy="27" r="3" fill="#38bdf8"/>

                    {/* Dev arrow — top of left lobe */}
                    <path d="M15 13 L18 10 L18 16" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    {/* Ops arrow — top of right lobe */}
                    <path d="M65 13 L62 10 L62 16" stroke="#818cf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                    {/* DEV label */}
                    <text x="20" y="29" fontFamily="'JetBrains Mono',monospace" fontSize="6" fontWeight="700" fill="#38bdf8" textAnchor="middle" letterSpacing="0.5">DEV</text>
                    {/* OPS label */}
                    <text x="60" y="29" fontFamily="'JetBrains Mono',monospace" fontSize="6" fontWeight="700" fill="#818cf8" textAnchor="middle" letterSpacing="0.5">OPS</text>
                  </svg>
                </div>
              </div>

              <h1>Moaz Nasr</h1>

              <h2>
                {t("DevOps & Cloud Engineer")}
              </h2>

              <p className="hero-description">
                {t(
                  "I build reliable cloud infrastructure, automate deployments, containerize applications, and create practical DevOps solutions."
                )}
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="primary-button"
                  onClick={() =>
                    scrollTo("projects")
                  }
                >
                  {t("View My Work")}
                  <ChevronRight size={17} />
                </button>

                <a
                  className="secondary-button cv-button"
                  href={CV_FILE}
                  download
                >
                  <Download size={17} />
                  {t("DOWNLOAD CV")}
                </a>

                <a
                  className="secondary-button"
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  {t("View GitHub")}
                </a>
              </div>

             
            </div>

            <div className="hero-visual">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>
                    devops@cloud:~
                  </span>
                </div>

                <TypewriterTerminal />
              </div>

              <div className="floating-card floating-card-one">
                <Cloud size={15} />
                AWS
              </div>

              <div className="floating-card floating-card-two">
                <Container size={15} />
                Docker
              </div>

              <div className="floating-card floating-card-three">
                <GitBranch size={15} />
                CI/CD
              </div>
            </div>
          </div>


        </section>

        {/* DEVOPS LOGOS STRIP */}
        <DevOpsLogosStrip />

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="ABOUT"
              title="About Me"
              description="Building practical cloud and DevOps solutions through hands-on engineering."
            />

            <div className="about-grid reveal">
              <article className="glass-card about-highlight">
                <div className="about-logo">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="19.5" stroke="var(--primary)" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.4"/>
                    <circle cx="21" cy="21" r="13" stroke="var(--primary)" strokeWidth="1" opacity="0.25"/>
                    <path d="M9 21 C9 15 13.5 12 17.5 16.5 L21 21 L24.5 25.5 C28.5 30 33 27 33 21 C33 15 28.5 12 24.5 16.5 L21 21 L17.5 25.5 C13.5 30 9 27 9 21Z" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <circle cx="21" cy="21" r="2.5" fill="var(--primary)"/>
                    <circle cx="12" cy="21" r="1.5" fill="var(--primary)" opacity="0.5"/>
                    <circle cx="30" cy="21" r="1.5" fill="var(--primary)" opacity="0.5"/>
                  </svg>
                </div>

                <h3>{t("Let's Build Something Reliable")}</h3>

                <p>
                  {t("I'm a Junior Cloud & DevOps Engineer who turns complex infrastructure into clean, automated, and maintainable systems. I design CI/CD pipelines, containerize applications, and provision cloud infrastructure that teams can actually rely on.")}
                </p>

                <div className="focus-list">
                  <span><CheckCircle2 size={15} />AWS Cloud Infrastructure</span>
                  <span><CheckCircle2 size={15} />Docker & Kubernetes</span>
                  <span><CheckCircle2 size={15} />Terraform & Ansible IaC</span>
                  <span><CheckCircle2 size={15} />CI/CD & Observability</span>
                </div>
              </article>

              <article className="glass-card">
                <div className="about-logo about-logo-sm">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="12" height="12" rx="3" stroke="var(--secondary)" strokeWidth="1.5" fill="none"/>
                    <rect x="20" y="4" width="12" height="12" rx="3" stroke="var(--primary)" strokeWidth="1.5" fill="none"/>
                    <rect x="4" y="20" width="12" height="12" rx="3" stroke="var(--primary)" strokeWidth="1.5" fill="none"/>
                    <rect x="20" y="20" width="12" height="12" rx="3" stroke="var(--secondary)" strokeWidth="1.5" fill="none"/>
                    <path d="M16 10 H20 M26 16 V20 M16 26 H20 M10 16 V20" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>

                <h3>{t("My Approach")}</h3>

                <p>{t("Every system I build follows four principles: automate the repetitive, make failures visible, keep deployments reproducible, and write documentation people actually read. I treat infrastructure as code and reliability as a feature.")}</p>

                <div className="approach-pillars">
                  <div className="pillar"><span>🔄</span> Automate</div>
                  <div className="pillar"><span>👁️</span> Observe</div>
                  <div className="pillar"><span>📦</span> Reproduce</div>
                  <div className="pillar"><span>📝</span> Document</div>
                </div>
              </article>
            </div>


          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="EDUCATION & CERTIFICATIONS"
              title="Education and continuous learning"
              description="Academic foundation supported by practical technical training."
            />

            <div className="education-grid">
              {/* Bachelor Card */}
              <article className="education-card">
                <div className="education-icon">
                  <GraduationCap size={22} />
                </div>
                <div className="education-content">
                  <span className="education-period">{t("2023 — 2027")}</span>
                  <h3>{t("Bachelor of Computers and Information")}</h3>
                  <p className="education-major">{t("Computer Science")}</p>
                  <p className="education-school">{t("El Shorouk Academy, Cairo, Egypt")}</p>
                  <div className="education-meta">
                    <span>{t("Grade: C+")}</span>
                    <span>{t("Cairo, Egypt")}</span>
                  </div>
                </div>
              </article>

              {/* DEPI Card */}
              <article className="education-card edu-depi-card">
                <div className="education-icon edu-depi-icon">
                  <svg width="34" height="23" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path className="loop-dev" d="M24 16 C24 9, 10 5, 7 12 C5 17, 10 23, 16 20 C20 18, 24 16, 24 16" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
                    <path className="loop-ops" d="M24 16 C24 9, 38 5, 41 12 C43 17, 38 23, 32 20 C28 18, 24 16, 24 16" stroke="#818cf8" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
                    <circle className="loop-center" cx="24" cy="16" r="2.2" fill="#38bdf8"/>
                    <path d="M9.5 8 L11.5 6 L11.5 10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M38.5 8 L36.5 6 L36.5 10" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <div className="education-content">
                  <div className="edu-period-row">
                    <span className="education-period">{t("July 2026 – Present")}</span>
                    <span className="focus-live-badge">
                      <span className="focus-live-dot" />
                      {t("Live")}
                    </span>
                  </div>
                  <h3>{t("DevOps Trainee — DEPI Round 5")}</h3>
                  <p className="education-major">{t("Digital Egypt Pioneers Initiative")}</p>
                  <p className="education-school">{t("Ministry of Communications & IT, Egypt")}</p>

                  <p className="depi-desc">
                    {t("An intensive government-backed program training the next generation of Egyptian DevOps engineers. I'm working hands-on with real infrastructure, building pipelines, automating deployments, and managing containerized systems from scratch — covering everything from Linux system administration to cloud-native orchestration.")}
                  </p>

                  <div className="depi-tools-wrap">
                    <DepiToolCards t={t} />
                  </div>

                  <div className="education-meta" style={{ marginTop: "16px" }}>
                    <span>Terraform</span>
                    <span>Ansible</span>
                    <span>Docker</span>
                    <span>Kubernetes</span>
                    <span>Jenkins</span>
                    <span>Linux</span>
                    <span>Git</span>
                    <span>AWS</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="SKILLS"
              title="Skills"
              description="Technical stack and soft skills that shape how I work and communicate."
            />

            <SkillsTabs t={t} />
          </div>
        </section>

        {/* TRAINING & EXPERIENCE */}
        <section
          id="experience"
          className="section"
        >
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="TRAINING & EXPERIENCE"
              title="Training & Experience"
              description="Practical training and hands-on experience built through continuous learning."
            />

            <div className="experience-list">
              {EXPERIENCE.map((item) => (
                <article
                  className="experience-card"
                  key={item.role}
                >
                  <div className="experience-header">
                    <div className="card-icon">
                      <BriefcaseBusiness size={21} />
                    </div>

                    <div>
                      <h3>
                        {t(item.role)}
                      </h3>

                      <p>
                        {t(item.organization)}
                      </p>
                    </div>
                  </div>

                  <div className="car-grid">
                    <div>
                      <span className="car-label">
                        {t("Challenge")}
                      </span>

                      <p>
                        {t(item.challenge)}
                      </p>
                    </div>

                    <div>
                      <span className="car-label">
                        {t("Action")}
                      </span>

                      <p>
                        {t(item.action)}
                      </p>
                    </div>

                    <div>
                      <span className="car-label">
                        {t("Result")}
                      </span>

                      <p>
                        {t(item.result)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

            </div>

            {/* Certificates — always visible */}
            <div className="certs-section reveal">
              <div className="certs-section-header">
                <span className="certs-section-label">{t("CERTIFICATES & COURSES")}</span>
              </div>

              <div className="cert-visual-grid">
                {TRAINING.map((item) => (
                  <article className="cert-visual-card" key={item.title}>
                    {/* PDF preview embed */}
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-preview-wrap"
                      aria-label={`Open ${item.title}`}
                    >
                      <object
                        data={`${item.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                        type="application/pdf"
                        className="cert-pdf-embed"
                        aria-label={item.title}
                      >
                        {/* Fallback if PDF can't render */}
                        <div className="cert-pdf-fallback">
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect x="6" y="4" width="20" height="28" rx="3" stroke="var(--primary)" strokeWidth="1.6"/>
                            <path d="M6 10h20M11 16h6M11 20h10M11 24h8" stroke="var(--primary)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
                            <rect x="20" y="2" width="10" height="10" rx="2" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.4"/>
                            <path d="M22 7h6M22 9.5h4" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
                          </svg>
                          <span>{t("View Certificate")}</span>
                        </div>
                      </object>
                      <div className="cert-preview-overlay">
                        <ExternalLink size={18} />
                        <span>{t("Open")}</span>
                      </div>
                    </a>
                    <div className="cert-visual-info">
                      <span className="cert-org">{item.organization}</span>
                      <h3 className="cert-title">{t(item.title)}</h3>
                      {item.score && <span className="cert-score">{item.score}</span>}
                    </div>
                  </article>
                ))}

                {/* Experience card */}
                <article className="cert-visual-card cert-exp-card">
                  <div className="cert-exp-visual">
                    <div className="cert-exp-icon">
                      <BriefcaseBusiness size={28} />
                    </div>
                    <div className="cert-exp-lines">
                      <div /><div /><div /><div />
                    </div>
                  </div>
                  <div className="cert-visual-info">
                    <span className="cert-org">IEEE SH.A</span>
                    <h3 className="cert-title">{t("Cloud Instructor")}</h3>
                    <span className="cert-exp-badge">
                      <CheckCircle2 size={12} />
                      {t("Verified Experience")}
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="SERVICES"
              title="What I Can Help With"
              description="Practical services for modern applications and cloud environments."
            />

            <div className="services-grid">
              {SERVICES.map((service) => {
                return (
                  <article
                    className="service-card"
                    key={service.title}
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                  >
                    <div className="card-icon si-card-icon" style={{ color: `#${service.icon.hex}`, borderColor: `#${service.icon.hex}33`, background: `#${service.icon.hex}14` }}>
                      <SimpleIcon icon={service.icon} size={21} />
                    </div>

                    <h3>
                      {t(service.title)}
                    </h3>

                    <p>
                      {t(service.description)}
                    </p>

                    <div className="service-problem">
                      <span>
                        {t("Problem")}
                      </span>

                      <p>
                        {t(service.problem)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pricing-toggle-wrapper">
              <button
                type="button"
                className="pricing-toggle"
                onClick={() =>
                  setShowPricing(
                    (value) => !value
                  )
                }
              >
                {showPricing
                  ? t("HIDE PRICING PLANS")
                  : t("VIEW PRICING PLANS")}
                <span className={`pricing-toggle-arrow ${showPricing ? "open" : ""}`}>▾</span>
              </button>
            </div>

            {showPricing && (
              <section className="pricing-section">
                <SectionHeading
                  t={t}
                  eyebrow="PRICING"
                  title="Pricing Plans"
                  description="Flexible plans tailored to your project's scope and budget."
                />

                <div className="pricing-grid">
                  {PRICING_PLANS.map((plan) => (
                    <article
                      className={`pricing-card ${plan.popular ? "featured" : ""}`}
                      key={plan.label}
                    >
                      {plan.popular && (
                        <div className="popular-badge">{t("MOST POPULAR")}</div>
                      )}

                      <div className="pricing-top">
                        <div className="pricing-label">{t(plan.label)}</div>
                        <h3>{t(plan.name)}</h3>
                        <div className="pricing-price">{plan.price}</div>
                      </div>

                      <ul className="pricing-features">
                        {plan.features.map((feature) => (
                          <li key={feature}>
                            <CheckCircle2 size={13} />
                            {t(feature)}
                          </li>
                        ))}
                      </ul>

                      <div className="pricing-cta">
                        <button
                          type="button"
                          className={`pricing-button ${plan.popular ? "pricing-button-featured" : ""}`}
                          onClick={() => scrollTo("contact")}
                        >
                          {t(plan.button)}
                          <ChevronRight size={15} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="PROJECTS"
              title="Selected Projects"
              description="Practical projects covering cloud infrastructure, DevOps automation, Kubernetes, monitoring, and application deployment."
            />

            <div className="projects-grid reveal">
              {PROJECTS.map((project) => {
                const logo = DEVOPS_LOGOS.find(
                  (l) => l.name === project.projectIcon
                );
                return (
                  <article
                    className="project-card"
                    key={project.title}
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                  >
                    <div className="project-top">
                      <span className="project-type">
                        {t(project.type)}
                      </span>

                      <div
                        className="project-icon"
                        style={
                          logo
                            ? { color: logo.color, borderColor: logo.color + "44", background: logo.color + "16" }
                            : undefined
                        }
                        title={project.projectIcon || ""}
                      >
                        {logo ? (
                          <span className="project-logo-svg">
                            <SimpleIcon icon={logo.icon} size={20} />
                          </span>
                        ) : (
                          <MonitorCog size={18} />
                        )}
                      </div>
                    </div>

                    <h3>
                      {t(project.title)}
                    </h3>

                    <p>
                      {t(project.description)}
                    </p>

                    <div className="skill-tags project-tags">
                      {project.technologies
                        .slice(0, 5)
                        .map((technology) => (
                          <span
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}
                    </div>

                    <div className="project-actions">
                      <button
                        type="button"
                        className="text-button"
                        onClick={() =>
                          setSelectedProject(
                            project
                          )
                        }
                      >
                        {t(
                          "View Case Study"
                        )}

                        <ChevronRight
                          size={15}
                        />
                      </button>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-button"
                          aria-label="GitHub"
                        >
                          <Github size={16} />
                        </a>
                      ) : (
                        <span className="no-repo-badge" title={t("No public repository")}>
                          {t("No Repo")}
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section
          id="achievements"
          className="section"
        >
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="ACHIEVEMENTS"
              title="Practical Achievements"
              description="Practical achievements built through learning, teaching, and hands-on engineering work."
            />

            <div className="achievements-grid">
              {ACHIEVEMENTS.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="achievement-card"
                    key={item.title}
                  >
                    <div className="achievement-top">
                      <div className="card-icon">
                        <Icon size={21} />
                      </div>
                      {item.tag && (
                        <span className="achievement-tag">{item.tag}</span>
                      )}
                    </div>

                    <h3>{t(item.title)}</h3>

                    <p>{t(item.description)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="section"
        >
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="TESTIMONIALS"
              title="What People Say"
              description="Feedback and recommendations from colleagues, instructors, and collaborators."
            />
            <TestimonialsCarousel t={t} />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="CONTACT"
              title="Let's Work Together"
              description="Have a project, internship opportunity, or technical collaboration in mind?"
            />

            <div className="contact-wrap reveal">
              <ContactForm t={t} />

              <div className="contact-cards-row">
                <a href={`mailto:${EMAIL}`} className="contact-card-mini">
                  <div className="ccm-icon"><Mail size={17} /></div>
                  <span className="ccm-label">Email</span>
                  <p className="ccm-value">{EMAIL}</p>
                </a>

                <a href={GITHUB} target="_blank" rel="noreferrer" className="contact-card-mini">
                  <div className="ccm-icon"><Github size={17} /></div>
                  <span className="ccm-label">GitHub</span>
                  <p className="ccm-value">github.com/M0az2</p>
                </a>

                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="contact-card-mini">
                  <div className="ccm-icon"><Linkedin size={17} /></div>
                  <span className="ccm-label">LinkedIn</span>
                  <p className="ccm-value">linkedin.com/in/moaz-nasr-eldin</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>
              Moaz Nasr
            </strong>

            <p>
              {t(
                "DevOps & Cloud Engineer focused on reliable infrastructure, automation, and cloud technologies."
              )}
            </p>
          </div>

          <div className="footer-socials">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Moaz Nasr
            </span>

            <span>
              {t("Built with React & Vite")}
            </span>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
          t={t}
        />
      )}
    </div>
  );
}

function Navbar({
  mobileMenu,
  setMobileMenu,
  toggleLanguage,
  toggleTheme,
  theme,
  scrollTo,
  t,
  activeSection,
}) {
  const navRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileMenu) return;
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [mobileMenu, setMobileMenu]);

  return (
    <header className="navbar" ref={navRef}>
      <div className="container navbar-inner">
        <button
          type="button"
          className="brand"
          onClick={() => {
            scrollTo("home");
            setMobileMenu(false);
          }}
          aria-label="Go to home"
        >
          <span className="brand-mark">
            <svg width="52" height="36" viewBox="0 0 80 54" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M40 27 C40 15, 18 8, 13 19 C10 26, 16 36, 26 32 C32 30, 40 27, 40 27" fill="rgba(56,189,248,0.06)"/>
              <path d="M40 27 C40 15, 62 8, 67 19 C70 26, 64 36, 54 32 C48 30, 40 27, 40 27" fill="rgba(129,140,248,0.06)"/>
              <path className="loop-dev" d="M40 27 C40 15, 18 8, 13 19 C10 26, 16 36, 26 32 C32 30, 40 27, 40 27" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              <path className="loop-ops" d="M40 27 C40 15, 62 8, 67 19 C70 26, 64 36, 54 32 C48 30, 40 27, 40 27" stroke="#818cf8" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              <circle cx="40" cy="27" r="4.5" fill="rgba(56,189,248,0.12)"/>
              <circle className="loop-center" cx="40" cy="27" r="2.8" fill="#38bdf8"/>
              <path d="M15 13 L18 10 L18 16" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M65 13 L62 10 L62 16" stroke="#818cf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </span>

          <span className="brand-name">
            Moaz Nasr
          </span>
        </button>

        <nav
          className={`nav-links ${
            mobileMenu ? "open" : ""
          }`}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item}
              className={`nav-link ${
                activeSection === item.toLowerCase() ? "active" : ""
              }`}
              onClick={() => {
                scrollTo(
                  item.toLowerCase()
                );
                setMobileMenu(false);
              }}
            >
              {t(item)}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          {/* Task 4: language button styled as pill to match icon buttons */}
          <button
            type="button"
            className="icon-button lang-pill-button"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            <span className="lang-pill-text">{t("AR")}</span>
          </button>

          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label="Change theme"
          >
            {theme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMobileMenu(
                (value) => !value
              )
            }
            aria-label={
              mobileMenu
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

const TESTIMONIALS = [
  {
    name: "Ahmed Samy",
    role: "Senior DevOps Engineer",
    company: "Vodafone Egypt",
    avatar: "AS",
    color: "#38bdf8",
    text: "Moaz has a strong grasp of cloud infrastructure fundamentals. His ability to design and deploy multi-tier AWS architectures with proper IAM, networking, and security configurations impressed everyone in our session.",
  },
  {
    name: "Sara El-Masry",
    role: "Cloud Instructor",
    company: "IEEE SH.A",
    avatar: "SM",
    color: "#818cf8",
    text: "One of the most dedicated students I've had. Moaz goes beyond the material — he actually builds things, breaks them, and figures out why. His Docker and CI/CD pipelines were production-quality for a junior engineer.",
  },
  {
    name: "Omar Khaled",
    role: "Backend Engineer",
    company: "Instabug",
    avatar: "OK",
    color: "#34d399",
    text: "We collaborated on a containerization project and Moaz's understanding of Docker networking and compose setups saved us hours of debugging. Very methodical and clear communicator.",
  },
  {
    name: "Nour Ashraf",
    role: "Solutions Architect",
    company: "Amazon Web Services",
    avatar: "NA",
    color: "#f59e0b",
    text: "Moaz demonstrated exceptional understanding of AWS core services during our workshop. His questions showed deep thinking about cost optimization and high availability — rare qualities at his level.",
  },
  {
    name: "Karim Mansour",
    role: "SRE Lead",
    company: "Careem",
    avatar: "KM",
    color: "#ec4899",
    text: "His monitoring setup using Prometheus and Grafana was well thought out. Alert thresholds, dashboards, and runbooks — all documented cleanly. Moaz understands observability as a practice, not just a tool.",
  },
  {
    name: "Dina Fouad",
    role: "DevOps Team Lead",
    company: "Fawry",
    avatar: "DF",
    color: "#06b6d4",
    text: "The Ansible playbooks Moaz wrote during the DEPI program were modular, idempotent, and well-structured. He understands infrastructure as code — not just syntax but the philosophy behind it.",
  },
  {
    name: "Youssef Tarek",
    role: "Platform Engineer",
    company: "Breadfast",
    avatar: "YT",
    color: "#a78bfa",
    text: "Reviewing his GitHub was genuinely impressive. Multi-stage Dockerfiles, GitHub Actions pipelines with Trivy scanning, proper .dockerignore — shows he cares about security and best practices from day one.",
  },
  {
    name: "Mona Helmy",
    role: "Tech Lead",
    company: "Bosta",
    avatar: "MH",
    color: "#fb923c",
    text: "Moaz joined our team as an intern and immediately contributed. He set up a complete local development environment with docker-compose, wrote clear documentation, and kept the team updated. A pleasure to work with.",
  },
];

/* =========================
   SimpleIcon helper component (Task 2)
========================= */

function SimpleIcon({ icon, size = 24, color }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || `#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

/* =========================
   DEVOPS_LOGOS — official simple-icons (Task 3)
========================= */

const DEVOPS_LOGOS = [
  { name: "AWS",            color: `#${siAmazonwebservices.hex}`, icon: siAmazonwebservices },
  { name: "Docker",         color: `#${siDocker.hex}`,            icon: siDocker },
  { name: "Kubernetes",     color: `#${siKubernetes.hex}`,        icon: siKubernetes },
  { name: "Terraform",      color: `#${siTerraform.hex}`,         icon: siTerraform },
  { name: "Ansible",        color: `#${siAnsible.hex}`,           icon: siAnsible },
  { name: "Linux",          color: `#${siLinux.hex}`,             icon: siLinux },
  { name: "GitHub Actions", color: `#${siGithubactions.hex}`,     icon: siGithubactions },
  { name: "Prometheus",     color: `#${siPrometheus.hex}`,        icon: siPrometheus },
  { name: "Grafana",        color: `#${siGrafana.hex}`,           icon: siGrafana },
  { name: "Nginx",          color: `#${siNginx.hex}`,             icon: siNginx },
  { name: "Python",         color: `#${siPython.hex}`,            icon: siPython },
  { name: "Jenkins",        color: `#${siJenkins.hex}`,           icon: siJenkins },
  { name: "Argo CD",        color: `#${siArgo.hex}`,              icon: siArgo },
  { name: "Git",            color: `#${siGit.hex}`,               icon: siGit },
];

function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <div
      className="testimonials-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonials-track">
        {TESTIMONIALS.map((item, i) => {
          const offset = ((i - active + total) % total);
          const pos = offset <= total / 2 ? offset : offset - total;
          const isActive = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;
          return (
            <div
              key={i}
              className={`testimonial-card ${isActive ? "tc-active" : ""} ${isAdjacent ? "tc-adjacent" : ""}`}
              style={{
                transform: `translateX(${pos * 110}%) scale(${isActive ? 1 : 0.88})`,
                opacity: isActive ? 1 : isAdjacent ? 0.45 : 0,
                zIndex: isActive ? 3 : isAdjacent ? 2 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
              onClick={() => !isActive && setActive(i)}
            >
              <div className="tc-quote-icon">
                <Quote size={20} />
              </div>
              <p className="tc-text">"{item.text}"</p>
              <div className="tc-author">
                <div
                  className="tc-avatar"
                  style={{ background: item.color + "22", color: item.color, border: `2px solid ${item.color}44` }}
                >
                  {item.avatar}
                </div>
                <div>
                  <strong className="tc-name">{item.name}</strong>
                  <span className="tc-role">{item.role} · {item.company}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="tc-controls">
        <button className="tc-btn" onClick={prev} aria-label="Previous">‹</button>
        <div className="tc-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`tc-dot ${i === active ? "tc-dot-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
        <button className="tc-btn" onClick={next} aria-label="Next">›</button>
      </div>
    </div>
  );
}

function DevOpsLogosStrip() {
  const doubled = [...DEVOPS_LOGOS, ...DEVOPS_LOGOS];
  return (
    <div className="logos-strip">
      <div className="logos-track">
        {doubled.map((logo, i) => (
          <div key={i} className="logo-pill">
            <span className="logo-svg-icon">
              <SimpleIcon icon={logo.icon} size={22} />
            </span>
            <span className="logo-name">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SOFT_SKILLS = [
  { icon: "🤝", label: "Team Collaboration", desc: "Work effectively in cross-functional teams" },
  { icon: "🧠", label: "Problem Solving",    desc: "Break complex issues into clear solutions" },
  { icon: "💬", label: "Communication",      desc: "Explain technical concepts to any audience" },
  { icon: "⏱️", label: "Time Management",    desc: "Deliver on time under pressure" },
  { icon: "🔍", label: "Attention to Detail", desc: "Catch issues before they reach production" },
  { icon: "📚", label: "Continuous Learning", desc: "Always upskilling in a fast-moving field" },
];

function SkillsTabs({ t }) {
  const [activeTab, setActiveTab] = useState("technical");
  return (
    <div className="skills-tabs">
      <div className="skills-tab-bar">
        <button
          className={`skills-tab-btn ${activeTab === "technical" ? "active" : ""}`}
          onClick={() => setActiveTab("technical")}
        >
          <Code2 size={15} />
          {t("Technical Skills")}
        </button>
        <button
          className={`skills-tab-btn ${activeTab === "soft" ? "active" : ""}`}
          onClick={() => setActiveTab("soft")}
        >
          <span>🤝</span>
          {t("Soft Skills")}
        </button>
      </div>

      {activeTab === "technical" && (
        <div className="skills-grid tab-panel-enter reveal visible">
          {SKILL_GROUPS.map((group) => {
            return (
              <article className="skill-card" key={group.title}>
                <div className="card-icon si-card-icon" style={{ color: `#${group.icon.hex}`, borderColor: `#${group.icon.hex}33`, background: `#${group.icon.hex}14` }}>
                  <SimpleIcon icon={group.icon} size={21} />
                </div>
                <h3>{t(group.title)}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {activeTab === "soft" && (
        <div className="soft-skills-grid tab-panel-enter">
          {SOFT_SKILLS.map((s) => (
            <div key={s.label} className="soft-skill-card">
              <span className="soft-icon">{s.icon}</span>
              <strong>{t(s.label)}</strong>
              <p>{t(s.desc)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  t,
}) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">
        {t(eyebrow)}
      </span>

      <h2>{t(title)}</h2>

      <p>{t(description)}</p>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  t,
}) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <article className="modal-content project-modal">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <span className="project-type">
          {t(project.type)}
        </span>

        <h2>
          {t(project.title)}
        </h2>

        <p className="modal-description">
          {t(project.description)}
        </p>

        <div className="modal-grid">
          <ModalBlock
            title="Problem"
            text={project.problem}
            t={t}
          />

          <ModalBlock
            title="Solution"
            text={project.solution}
            t={t}
          />

          <ModalBlock
            title="My Role"
            text={project.role}
            t={t}
          />

          <ModalBlock
            title="Result"
            text={project.result}
            t={t}
          />
        </div>

        <div className="modal-technologies">
          <span className="car-label">
            {t("Technologies")}
          </span>

          <div className="skill-tags">
            {project.technologies.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        {project.github && (
          <div className="modal-github">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              <Github size={17} />
              {t("View on GitHub")}
            </a>
          </div>
        )}
      </article>
    </div>
  );
}

function ModalBlock({
  title,
  text,
  t,
}) {
  return (
    <div className="modal-block">
      <span className="car-label">
        {t(title)}
      </span>

      <p>{t(text)}</p>
    </div>
  );
}

/* =========================
   Card tilt utility
========================= */

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const rotateX = ((y - cy) / cy) * -6;
  const rotateY = ((x - cx) / cx) * 6;
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
}

function resetTilt(e) {
  e.currentTarget.style.transform = "";
}

/* =========================
   Contact Form — Formspree
========================= */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moejwyqg";

function ContactForm({ t }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = new FormData(event.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          json?.errors?.map((e) => e.message).join(", ") ||
            t("Something went wrong. Please try again.")
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(t("Network error. Please check your connection."));
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form form-success">
        <div className="form-success-icon">
          <CheckCircle2 size={38} />
        </div>
        <h3>{t("Message sent!")}</h3>
        <p>{t("Thanks for reaching out — I'll get back to you soon.")}</p>
        <button
          type="button"
          className="secondary-button"
          onClick={() => setStatus("idle")}
        >
          {t("Send another message")}
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-row">
        <label>
          <span>{t("Name")}</span>
          <input
            name="name"
            required
            disabled={status === "loading"}
            placeholder={t("Your name")}
          />
        </label>

        <label>
          <span>{t("Email")}</span>
          <input
            type="email"
            name="email"
            required
            disabled={status === "loading"}
            placeholder={t("Your email")}
          />
        </label>
      </div>

      <label>
        <span>{t("Message")}</span>
        <textarea
          name="message"
          required
          disabled={status === "loading"}
          placeholder={t("Tell me about your project...")}
        />
      </label>

      {status === "error" && (
        <p className="form-error-msg" role="alert">
          ⚠ {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="primary-button"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <span className="form-spinner" aria-hidden="true" />
            {t("Sending...")}
          </>
        ) : (
          <>
            {t("Send Message")}
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

/* =========================
   Typewriter Terminal (Task 2)
========================= */

const TERMINAL_LINES = [
  { text: "$ whoami", class: "terminal-green", delay: 0 },
  { text: "moaz-nasr", class: "", delay: 320 },
  { text: "", class: "", delay: 500 },
  { text: "$ role", class: "terminal-green", delay: 700 },
  { text: "DevOps & Cloud Engineer", class: "", delay: 1020 },
  { text: "", class: "", delay: 1200 },
  { text: "$ skills", class: "terminal-green", delay: 1400 },
  { text: "AWS · Docker · Kubernetes", class: "terminal-blue", delay: 1720 },
  { text: "Terraform · Ansible · CI/CD", class: "terminal-blue", delay: 2050 },
  { text: "Linux · Monitoring · GitOps", class: "terminal-blue", delay: 2370 },
  { text: "", class: "", delay: 2600 },
  { text: "$ status", class: "terminal-green", delay: 2800 },
  { text: "building reliable systems...", class: "", delay: 3120 },
];

// Each entry in displayLines: { text: string, class: string, typing: boolean }
function TypewriterTerminal() {
  const [displayLines, setDisplayLines] = useState([]);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    let cancelled = false;

    function typeChars(lineIdx, charIdx, afterDone) {
      const line = TERMINAL_LINES[lineIdx];
      if (charIdx > line.text.length || cancelled) {
        if (!cancelled) afterDone();
        return;
      }
      const partial = line.text.slice(0, charIdx);
      setDisplayLines((prev) => {
        const next = [...prev];
        next[lineIdx] = { text: partial, class: line.class, typing: charIdx < line.text.length };
        return next;
      });
      setTimeout(() => {
        typeChars(lineIdx, charIdx + 1, afterDone);
      }, 26);
    }

    function scheduleLine(idx) {
      if (idx >= TERMINAL_LINES.length || cancelled) return;
      const line = TERMINAL_LINES[idx];
      const baseDelay = idx === 0 ? line.delay : line.delay - TERMINAL_LINES[idx - 1].delay;
      setTimeout(() => {
        if (cancelled) return;
        if (line.text === "") {
          setDisplayLines((prev) => {
            const next = [...prev];
            next[idx] = { text: "", class: "", typing: false };
            return next;
          });
          scheduleLine(idx + 1);
        } else {
          typeChars(idx, 0, () => scheduleLine(idx + 1));
        }
      }, baseDelay);
    }

    scheduleLine(0);

    return () => {
      cancelled = true;
      mountedRef.current = false;
    };
  }, []);

  return (
    <div className="terminal-body">
      {displayLines.map((line, i) => {
        if (line === undefined) return null;
        if (line.text === "" && !line.typing) {
          return <p key={i}>&nbsp;</p>;
        }
        return (
          <p key={i}>
            {line.class ? (
              <span className={line.class}>
                {line.text}
                {line.typing && <span className="tw-cursor">▋</span>}
              </span>
            ) : (
              <>
                {line.text}
                {line.typing && <span className="tw-cursor">▋</span>}
              </>
            )}
          </p>
        );
      })}
    </div>
  );
}

/* =========================
   DEPI Tool Cards — collapsible (Tasks 7+8)
========================= */

const DEPI_TOOLS_DATA = [
  {
    name: "Jenkins",
    logoName: "Jenkins",
    desc: "Building and managing CI/CD pipelines — automating build, test, and deployment stages so code reaches production reliably without manual intervention.",
  },
  {
    name: "Ansible",
    logoName: "Ansible",
    desc: "Writing playbooks to automate server configuration and application deployment across multiple machines — ensuring every environment is identical and reproducible.",
  },
  {
    name: "Linux",
    logoName: "Linux",
    desc: "Deep-diving into Linux system administration — file permissions, process management, networking, shell scripting, and service configuration on Ubuntu and CentOS.",
  },
  {
    name: "Docker",
    logoName: "Docker",
    desc: "Containerizing applications using Dockerfiles and multi-stage builds — packaging services with all their dependencies so they run identically in dev, staging, and production.",
  },
  {
    name: "Kubernetes",
    logoName: "Kubernetes",
    desc: "Orchestrating containerized workloads with Kubernetes — managing pods, deployments, services, and ingress controllers to ensure high availability and seamless scaling.",
  },
  {
    name: "Git",
    logoName: "Git",
    desc: "Managing source code with Git — branching strategies, pull requests, merge workflows, and using GitOps principles to keep infrastructure changes version-controlled and auditable.",
  },
];

function DepiToolCards({ t }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="depi-tools-collapsible">
      <button
        type="button"
        className="depi-tools-toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span>{expanded ? t("Hide Tools") : t("Show Tool Details")}</span>
        <span className={`depi-toggle-arrow ${expanded ? "expanded" : ""}`}>▾</span>
      </button>

      {expanded && (
        <div className="depi-tools">
          {DEPI_TOOLS_DATA.map((tool) => {
            const logo = DEVOPS_LOGOS.find((l) => l.name === tool.logoName);
            return (
              <div key={tool.name} className="depi-tool-card">
                <div className="depi-tool-header">
                  {logo ? (
                    <span
                      className="depi-tool-icon"
                      style={{ color: logo.color }}
                    >
                      <SimpleIcon icon={logo.icon} size={20} />
                    </span>
                  ) : null}
                  <strong
                    className="depi-tool-name"
                    style={{ color: logo?.color }}
                  >
                    {tool.name}
                  </strong>
                </div>
                <p className="depi-tool-desc">{t(tool.desc)}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;