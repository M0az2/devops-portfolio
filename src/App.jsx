import { useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Container,
  Database,
  Download,
  ExternalLink,
  Github,
  GitBranch,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  MonitorCog,
  Quote,
  Send,
  Server,
  Sun,
  Terminal,
  X,
} from "lucide-react";

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
    icon: Cloud,
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
    icon: GitBranch,
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
    icon: Server,
    skills: [
      "Terraform",
      "Ansible",
      "Infrastructure Automation",
    ],
  },

  {
    title: "Linux Administration",
    icon: Terminal,
    skills: [
      "Ubuntu",
      "Rocky Linux",
      "Bash",
      "Networking",
    ],
  },

  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "cAdvisor",
    ],
  },

  {
    title: "Programming",
    icon: Code2,
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
    icon: Database,
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
      "Helped participants build and understand a complete 3-Tier Cloud Application through practical labs.",
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
    icon: GitBranch,
    description:
      "Build reliable automated pipelines for testing, building, and deploying applications.",
    problem:
      "Manual deployments are slow, inconsistent, and difficult to maintain.",
  },

  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    description:
      "Design and provision practical AWS infrastructure for modern applications.",
    problem:
      "Applications need scalable and organized cloud infrastructure.",
  },

  {
    title: "Docker & Containerization",
    icon: Container,
    description:
      "Containerize applications and create reproducible deployment environments.",
    problem:
      "Applications behave differently across development and deployment environments.",
  },

  {
    title: "Infrastructure as Code",
    icon: Server,
    description:
      "Automate infrastructure provisioning and configuration using Terraform and Ansible.",
    problem:
      "Manually configured infrastructure is difficult to reproduce and manage.",
  },

  {
    title: "Monitoring & Observability",
    icon: MonitorCog,
    description:
      "Implement metrics, dashboards, alerts, and infrastructure visibility.",
    problem:
      "Without observability, infrastructure and application problems are harder to detect.",
  },

  {
    title: "Backend Development",
    icon: Code2,
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
    title: "Cloud Instructor",
    description:
      "Delivered practical cloud sessions and hands-on labs through IEEE Shorouk Academy Student Branch.",
    icon: GraduationCap,
  },

  {
    title: "Hands-on Cloud Projects",
    description:
      "Built practical AWS infrastructure projects covering networking, compute, storage, databases, and deployment.",
    icon: Cloud,
  },

  {
    title: "DevOps Project Portfolio",
    description:
      "Built projects covering Docker, Kubernetes, CI/CD, Infrastructure as Code, monitoring, and automation.",
    icon: Terminal,
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

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [showPricing, setShowPricing] =
    useState(false);

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
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

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
      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        theme={theme}
        scrollTo={scrollTo}
        t={t}
      />

      <main>
        {/* HOME */}
        <section
          id="home"
          className="hero section"
        >
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                {t("WELCOME TO MY WORLD")}
              </span>

              <p className="hero-intro">
                {t("HELLO, I'M")}
              </p>

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

                <div className="terminal-body">
                  <p>
                    <span className="terminal-green">
                      $ whoami
                    </span>
                  </p>

                  <p>moaz-nasr</p>

                  <p>&nbsp;</p>

                  <p>
                    <span className="terminal-green">
                      $ role
                    </span>
                  </p>

                  <p>
                    DevOps & Cloud Engineer
                  </p>

                  <p>&nbsp;</p>

                  <p>
                    <span className="terminal-green">
                      $ skills
                    </span>
                  </p>

                  <p className="terminal-blue">
                    AWS · Docker · Kubernetes
                  </p>

                  <p className="terminal-blue">
                    Terraform · Ansible · CI/CD
                  </p>

                  <p className="terminal-blue">
                    Linux · Monitoring
                  </p>

                  <p>&nbsp;</p>

                  <p>
                    <span className="terminal-green">
                      $ status
                    </span>
                  </p>

                  <p>
                    building reliable systems...
                  </p>
                </div>
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

          <button
            type="button"
            className="scroll-indicator"
            onClick={() => scrollTo("about")}
          >
            {t("Scroll to explore")}
            <ArrowDown size={14} />
          </button>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="ABOUT"
              title="About Me"
              description="Building practical cloud and DevOps solutions through hands-on engineering."
            />

            <div className="about-grid">
              <article className="glass-card about-highlight">
                <div className="card-icon">
                  <Terminal size={21} />
                </div>

                <h3>
                  {t(
                    "Let's Build Something Reliable"
                  )}
                </h3>

                <p>
                  {t(
                    "I'm a Junior Cloud & DevOps Engineer focused on cloud infrastructure, automation, containerization, CI/CD, and reliable application deployment."
                  )}
                </p>

                <div className="focus-list">
                  <span>
                    <CheckCircle2 size={16} />
                    AWS infrastructure
                  </span>

                  <span>
                    <CheckCircle2 size={16} />
                    Docker & Kubernetes
                  </span>

                  <span>
                    <CheckCircle2 size={16} />
                    Terraform & Ansible
                  </span>

                  <span>
                    <CheckCircle2 size={16} />
                    CI/CD & Monitoring
                  </span>
                </div>
              </article>

              <article className="glass-card">
                <div className="card-icon">
                  <Code2 size={21} />
                </div>

                <h3>
                  {t("My Approach")}
                </h3>

                <p>
                  {t(
                    "I focus on practical solutions that are automated, reproducible, observable, and easy to maintain."
                  )}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="container">
            <SectionHeading
              t={t}
              eyebrow="EDUCATION"
              title="Education and continuous learning"
              description="Academic foundation supported by practical technical training."
            />

            <div className="education-grid">
              <article className="education-card">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>

                <div className="education-content">
                  <span className="education-period">
                    {t("2023 — 2027")}
                  </span>

                  <h3>
                    {t(
                      "Bachelor of Computers and Information"
                    )}
                  </h3>

                  <p className="education-major">
                    {t("Computer Science")}
                  </p>

                  <p className="education-school">
                    {t(
                      "El Shorouk Academy, Cairo, Egypt"
                    )}
                  </p>

                  <div className="education-meta">
                    <span>
                      {t("Grade: C+")}
                    </span>

                    <span>
                      {t("Cairo, Egypt")}
                    </span>
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
              title="Technical Skills"
              description="Tools and technologies I use across cloud infrastructure and DevOps projects."
            />

            <div className="skills-grid">
              {SKILL_GROUPS.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    className="skill-card"
                    key={group.title}
                  >
                    <div className="card-icon">
                      <Icon size={21} />
                    </div>

                    <h3>
                      {t(group.title)}
                    </h3>

                    <div className="skill-tags">
                      {group.skills.map(
                        (skill) => (
                          <span key={skill}>
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
            

<div className="learning-box">
  <div>
    <span className="card-eyebrow">
      {t("CURRENT FOCUS")}
    </span>

    <h3>{t("DevOps Trainee")}</h3>

    <p>
      {t("Digital Egypt Pioneers Initiative (DEPI) — Round 5")}
    </p>

    <span className="focus-date">
      {t("July 2026 – Present")}
    </span>

    <div className="focus-details">
      <div>
        <strong>{t("CHALLENGE")}</strong>
        <p>
          {t(
            "Developing practical DevOps skills by working with real-world infrastructure, deployment, and automation scenarios."
          )}
        </p>
      </div>

      <div>
        <strong>{t("ACTION")}</strong>
        <p>
          {t(
            "Automating infrastructure with Terraform and Ansible, containerizing applications with Docker and Kubernetes, and creating CI/CD pipelines with Jenkins and Git."
          )}
        </p>
      </div>

      <div>
        <strong>{t("RESULT")}</strong>
        <p>
          {t(
            "Gaining hands-on experience in infrastructure automation, Kubernetes, networking, security, and reliable application deployment through practical projects and labs."
          )}
        </p>
      </div>
    </div>

    <div className="focus-technologies">
      <span>Terraform</span>
      <span>Ansible</span>
      <span>Docker</span>
      <span>Kubernetes</span>
      <span>Jenkins</span>
      <span>Git</span>
      <span>AWS</span>
    </div>
  </div>

</div>
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

              <div className="training-grid">
                {TRAINING.map((item) => (
                  <article
                    className="training-card"
                    key={item.title}
                  >
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="training-preview"
                    >
                      <iframe
                        src={`${item.file}#page=1&toolbar=0&navpanes=0`}
                        title={item.title}
                      />
                    </a>

                    <div className="training-info">
                      <span className="card-eyebrow">
                        {item.organization}
                      </span>

                      <h3>
                        {t(item.title)}
                      </h3>

                      {item.score && (
                        <span className="training-score">
                          {item.score}
                        </span>
                      )}

                      <a
                        href={item.file}
                        target="_blank"
                        rel="noreferrer"
                        className="text-button"
                      >
                        {t(
                          "View Certificate"
                        )}
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </article>
                ))}

                <article className="training-card instructor-card">
                  <div className="training-placeholder">
                    <BriefcaseBusiness size={30} />

                    <span>
                      {t("Experience")}
                    </span>
                  </div>

                  <div className="training-info">
                    <span className="card-eyebrow">
                      IEEE SH.A
                    </span>

                    <h3>
                      {t("Cloud Instructor")}
                    </h3>

                    <p>
                      {t(
                        "Practical cloud training and hands-on labs."
                      )}
                    </p>
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
                const Icon = service.icon;

                return (
                  <article
                    className="service-card"
                    key={service.title}
                  >
                    <div className="card-icon">
                      <Icon size={21} />
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
                      className={`pricing-card ${
                        plan.popular
                          ? "featured"
                          : ""
                      }`}
                      key={plan.label}
                    >
                      {plan.popular && (
                        <div className="popular-badge">
                          {t("MOST POPULAR")}
                        </div>
                      )}

                      <div className="pricing-label">
                        {t(plan.label)}
                      </div>

                      <h3>
                        {t(plan.name)}
                      </h3>

                      <div className="pricing-price">
                        {plan.price}
                      </div>

                      <div className="pricing-features-wrapper">
                        <ul className="pricing-features">
                          {plan.features.map(
                            (feature) => (
                              <li key={feature}>
                                {t(feature)}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <button
                        type="button"
                        className="pricing-button"
                        onClick={() =>
                          scrollTo("contact")
                        }
                      >
                        {t(plan.button)}
                      </button>
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

            <div className="projects-grid">
              {PROJECTS.map((project) => (
                <article
                  className="project-card"
                  key={project.title}
                >
                  <div className="project-top">
                    <span className="project-type">
                      {t(project.type)}
                    </span>

                    <div className="project-icon">
                      <MonitorCog size={18} />
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

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-button"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
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
                    <div className="card-icon">
                      <Icon size={21} />
                    </div>

                    <h3>
                      {t(item.title)}
                    </h3>

                    <p>
                      {t(item.description)}
                    </p>
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
              description="Professional feedback from future collaborations will appear here."
            />

            <div className="testimonial-placeholder">
              <div className="card-icon">
                <Quote size={21} />
              </div>

              <h3>
                {t(
                  "Testimonials Coming Soon"
                )}
              </h3>

              <p>
                {t(
                  "As I complete more professional collaborations, this section will showcase real feedback and recommendations."
                )}
              </p>
            </div>
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

            <div className="contact-grid">
              <div className="contact-info">
                <a
                  href={`mailto:${EMAIL}`}
                  className="contact-card"
                >
                  <div className="card-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>Email</span>

                    <strong>
                      {EMAIL}
                    </strong>
                  </div>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <div className="card-icon">
                    <Github size={19} />
                  </div>

                  <div>
                    <span>GitHub</span>

                    <strong>
                      M0az2
                    </strong>
                  </div>
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <div className="card-icon">
                    <Linkedin size={19} />
                  </div>

                  <div>
                    <span>LinkedIn</span>

                    <strong>
                      Moaz Nasr-Eldin
                    </strong>
                  </div>
                </a>
              </div>

              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault();

                  const form =
                    new FormData(
                      event.currentTarget
                    );

                  const name =
                    form.get("name");

                  const email =
                    form.get("email");

                  const message =
                    form.get("message");

                  const subject =
                    encodeURIComponent(
                      `Portfolio Contact from ${name}`
                    );

                  const body =
                    encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\n\n${message}`
                    );

                  window.location.href =
                    `mailto:${EMAIL}?subject=${subject}&body=${body}`;
                }}
              >
                <div className="form-row">
                  <label>
                    <span>
                      {t("Name")}
                    </span>

                    <input
                      name="name"
                      required
                      placeholder={t(
                        "Your name"
                      )}
                    />
                  </label>

                  <label>
                    <span>
                      {t("Email")}
                    </span>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t(
                        "Your email"
                      )}
                    />
                  </label>
                </div>

                <label>
                  <span>
                    {t("Message")}
                  </span>

                  <textarea
                    name="message"
                    required
                    placeholder={t(
                      "Tell me about your project..."
                    )}
                  />
                </label>

                <button
                  type="submit"
                  className="primary-button"
                >
                  {t("Send Message")}
                  <Send size={16} />
                </button>
              </form>
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
}) {
  return (
    <header className="navbar">
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
            MN
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
              className="nav-link"
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
          <button
            type="button"
            className="icon-button language-button"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            {t("AR")}
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

function SectionHeading({
  eyebrow,
  title,
  description,
  t,
}) {
  return (
    <div className="section-heading">
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
      <article className="project-modal">
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

export default App;