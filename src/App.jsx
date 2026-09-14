import { useState, useEffect } from "react";
import { Github, ExternalLink, Mail, Linkedin, Menu, X, ArrowUp, Cloud, GitBranch, Activity, Server, Network } from "lucide-react";

const PROJECTS = [
  {
    name: "Cloud Monitoring Platform",
    desc: "Grafana provisioning-as-code, 9 Prometheus alert rules, Flask webhook receiver, cAdvisor for container metrics, full GitHub Actions CI/CD.",
    tags: ["Prometheus", "Grafana", "Flask", "Docker", "GitHub Actions"],
    href: "https://github.com/M0az2/cloud-monitoring-platform",
  },
  {
    name: "Ansible Infrastructure Automation",
    desc: "Multi-server automation with Ansible: Nginx web server + MariaDB database deployment, Jinja2 templates, group variables, and full infrastructure-as-code.",
    tags: ["Ansible", "Nginx", "MariaDB", "Jinja2", "Linux"],
    href: "https://github.com/M0az2/ansible-infrastructure-automation",
  },
  {
    name: "Terraform AWS VPC & EC2 Modules",
    desc: "Reusable, modular AWS infrastructure with Terraform — dual VPC environments with EC2, public/private subnets, NAT Gateway, and security groups.",
    tags: ["Terraform", "AWS", "VPC", "EC2", "IaC"],
    href: "https://github.com/M0az2/terraform-aws-vpc-ec2-modules",
  },
  {
    name: "Node.js CI/CD Pipeline",
    desc: "Production-ready Node.js + Express app with full GitHub Actions CI/CD, Docker containerization, Docker Compose, PostgreSQL backend, and Jest testing.",
    tags: ["Node.js", "Docker", "GitHub Actions", "PostgreSQL", "Jest"],
    href: "https://github.com/M0az2/nodejs-cicd-pipeline",
  },
];

const SKILLS = [
  { label: "DevOps & Automation", icon: GitBranch, desc: "Building automated pipelines and infrastructure-as-code to ensure reliable, repeatable deployments across environments.", items: ["Docker", "CI/CD Pipelines", "GitHub Actions", "Bash Scripting", "Git", "Automated Deployment", "Service Monitoring"] },
  { label: "Cloud", icon: Cloud, desc: "Designing and deploying multi-tier cloud architectures on AWS with containerized workloads and proper network segmentation.", items: ["AWS (EC2, S3, VPC, IAM, CloudFront)", "3-Tier Architecture", "Containerization"] },
  { label: "Operating Systems", icon: Server, desc: "Administering Linux and Windows Server environments for application hosting, virtualization, and infrastructure management.", items: ["Ubuntu", "Linux", "Windows Server", "Hyper-V", "VMware"] },
  { label: "Networking", icon: Network, desc: "Configuring enterprise network infrastructure including routing protocols, security policies, and access control.", items: ["DNS/DHCP", "VLANs", "ACLs", "Firewall Configuration", "VPN", "OSPF", "EIGRP"] },
  { label: "Soft Skills", icon: Activity, desc: "Applying analytical thinking, collaborating effectively in teams, and adapting quickly to new technologies.", items: ["Team Collaboration", "Problem Solving", "Time Management", "Technical Communication", "Adaptability"] },
];

const EXPERIENCE = [
  { role: "Cloud Services Training Program", org: "National Telecommunications Institute (NTI)", date: "Jul. 2025 – Sep. 2025 · Score: 97%", cert: "/certificates/Moaz Nasr-Eldin Mohamed Helmy.pdf", bullets: ["Built and deployed a 3-tier cloud architecture on AWS using EC2, S3, VPC, CloudFront, and IAM.", "Containerized workloads with Docker within VMware-backed lab environments.", "Set up Ubuntu Linux servers and wrote Bash scripts to automate environment setup."] },
  { role: "HCIA-Security Certification Training", org: "NTI — Huawei Authorized Curriculum", date: "Aug. 2025 – Sep. 2025 · Score: 97%", cert: "/certificates/Moaz Nasr-Eldin Mohamed Helmy (1).pdf", bullets: ["Configured firewalls, VPN tunnels, and intrusion detection systems.", "Applied network security policies and risk management frameworks across simulated enterprise environments."] },
  { role: "DevOps Foundations", org: "Sprints × Microsoft Summer Camp", date: "Jul. 2025 – Aug. 2025", cert: "/certificates/DevOps Foundations.pdf", bullets: ["Practiced CI/CD workflows using Git and GitHub Actions.", "Applied Continuous Integration, Continuous Delivery, and service monitoring within collaborative team sprints."] },
  { role: "Volunteer Cloud Instructor", org: "IEEE Shorouk Academy Student Branch", date: "Academic Year", bullets: ["Delivered cloud fundamentals sessions to fellow engineering students, covering cloud architecture and DevOps practices."] },
  { role: "Linux Unhatched", org: "Cisco Networking Academy", date: "Jul. 2025", cert: "/certificates/LinuxUnhatchedUpdate20260914-20-r4pxgk.pdf", bullets: ["Completed Linux CLI operations, file management, and system administration fundamentals."] },
  { role: "McKinsey Forward", org: "McKinsey.org", date: "Jul. 2025", cert: "/certificates/Forward20260914-20-ha8kdo.pdf", bullets: ["Developed practical skills in McKinsey's problem-solving approach, effective communication, and a foundational digital toolkit for the future of work."] },
  { role: "CCNA — Routing, Switching & Network Security", org: "Self-Study, Cisco Official Curriculum & Packet Tracer Labs", date: "", bullets: ["Configured Cisco routers and switches via CLI.", "Implemented OSPF, EIGRP, VLAN segmentation, ACLs, and subnetting across simulated enterprise networks."] },
];

const SERVICES = [
  { icon: GitBranch, title: "CI/CD Pipeline Design", desc: "Automated build, test, and deployment pipelines using GitHub Actions, Docker, and cloud-native tools.", tags: ["GitHub Actions", "Docker", "Bash"] },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS infrastructure design with VPC networking, EC2 deployment, IAM security, and containerized workloads.", tags: ["AWS", "Terraform", "Docker"] },
  { icon: Activity, title: "Monitoring & Observability", desc: "Full-stack monitoring with Prometheus, Grafana dashboards, and automated alerting for production systems.", tags: ["Prometheus", "Grafana", "Alertmanager"] },
];

const STATUS_ITEMS = [
  { name: "kubernetes", st: "running" },
  { name: "terraform", st: "running" },
  { name: "prometheus", st: "running" },
  { name: "argocd", st: "synced" },
  { name: "grafana", st: "running" },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const CMD = "$ ssh moaz@devops.local";
  const [typed, setTyped] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= CMD.length) { setTyped(CMD.slice(0, i)); i++; }
      else { clearInterval(t); setTimeout(() => setConnected(true), 400); }
    }, 52);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    setTimeout(() => document.querySelectorAll('.fade-section').forEach(el => observer.observe(el)), 100);

    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    return () => { clearInterval(t); observer.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="app">

      {/* ─── Navbar ─── */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">moaz<span className="logo-accent">.dev</span></a>
          <div className="nav-links">
            {navLinks.map(l => (
              <a key={l.id} href={`#${l.id}`} className="nav-link">{l.label}</a>
            ))}
          </div>
          <div className="nav-actions">
            <a href="https://github.com/M0az2" target="_blank" rel="noreferrer" className="btn btn-sm">
              <Github size={14} /> GitHub
            </a>
            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setIsMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}

      <main>
        {/* ─── Hero ─── */}
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="hero-container">
            <div className="hero-content">
              <span className="welcome-badge">WELCOME TO MY WORLD</span>
              <h2 className="greeting">Hi, I'm</h2>
              <h1 className="hero-name">Moaz Nasr-Eldin</h1>
              <h2 className="hero-title-animated">
                {"DevOps & Cloud Engineer".split("").map((ch, i) => (
                  <span key={i} className="title-letter" style={{ animationDelay: `${i * 0.05}s` }}>
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </h2>
              <p className="hero-summary">
                Third-year Computer Science student at El-Shorouk Academy. Cloud Instructor at IEEE Shorouk Branch. Building CI/CD pipelines, cloud infrastructure, and containerized deployments on AWS.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">My Portfolio</a>
                <a href="https://github.com/M0az2" target="_blank" rel="noreferrer" className="btn btn-outline">
                  View GitHub <ExternalLink size={14} />
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/M0az2" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/moaz-nasr-eldin-02b019294" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>
            <div className="hero-terminal">
              <div className="terminal">
                <div className="terminal-bar">
                  <div className="terminal-dots">
                    {["#FF5F57","#FEBC2E","#28C840"].map(c => (
                      <span key={c} style={{ background: c }} className="dot" />
                    ))}
                  </div>
                  <span className="terminal-title">terminal</span>
                  <div style={{ width: 42 }} />
                </div>
                <div className="terminal-body">
                  <div><span className="t-muted">{typed}</span>{!connected && <span className="t-cursor" />}</div>
                  {connected && <div className="t-ok">✓ Connection established. Welcome.</div>}
                  {connected && (
                    <div className="t-status">
                      {STATUS_ITEMS.map(({ name, st }) => (
                        <div key={name} className="t-row">
                          <span className="t-dot" />
                          <span className="t-name">{name}</span>
                          <span className="t-st">{st}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── About ─── */}
        <section id="about" className="section fade-section">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <div className="section-line" />
            </div>
            <div className="about-card glass-card">
              <div className="about-icon"><Server size={28} /></div>
              <div className="about-text">
                <h3 className="about-subtitle">Driven by Automation & Infrastructure</h3>
                <p>I'm Moaz, a passionate DevOps & Cloud Engineer focused on building scalable infrastructure using AWS, Docker, and CI/CD pipelines. I have hands-on experience with Terraform, Ansible, Prometheus monitoring, and GitHub Actions automation.</p>
                <p style={{marginTop: 12}}>Completed two government-certified training programs scoring 97%, gaining practical experience with cloud architecture, Linux administration, and network security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Education ─── */}
        <section id="education" className="section fade-section">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">Education</h2>
              <div className="section-line" />
            </div>
            <div className="edu-card glass-card">
              <div className="edu-content">
                <h3 className="edu-degree">Bachelor of Science in Computer Science</h3>
                <p className="edu-university">El-Shorouk Academy, Cairo, Egypt</p>
                <div className="edu-details">
                  <span className="edu-detail">📅 Sep 2023 — Jun 2027</span>
                  <span className="edu-detail">⭐ Grade: C+</span>
                  <span className="edu-detail">📍 Cairo, Egypt</span>
                </div>
                <p className="edu-extra">Volunteer Cloud Instructor, IEEE Shrouk Academy Student Branch — delivered cloud fundamentals sessions to fellow students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section id="skills" className="section fade-section">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">Technical Skills</h2>
              <div className="section-line" />
            </div>
            <div className="skills-grid">
              {SKILLS.map(({ label, icon: Icon, desc, items }) => (
                <div key={label} className="skill-card glass-card">
                  <div className="skill-header">
                    <div className="skill-icon-wrap"><Icon size={20} /></div>
                    <h3 className="skill-label">{label}</h3>
                  </div>
                  <p className="skill-desc">{desc}</p>
                  <div className="skill-tags">
                    {items.map(t => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Experience ─── */}
        <section id="experience" className="section fade-section">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">Training & Experience</h2>
              <div className="section-line" />
            </div>
            <div className="timeline">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="timeline-item glass-card">
                  <div className="timeline-dot" />
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <h4 className="exp-company">{exp.org}</h4>
                    </div>
                    {exp.date && <span className="exp-date">{exp.date}</span>}
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  {exp.cert && (
                    <a href={exp.cert} target="_blank" rel="noreferrer" className="btn-cert">
                      <ExternalLink size={14} /> View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Services ─── */}
        <section id="services" className="section fade-section">
          <div className="section-inner">
            <div className="section-header">
              <span className="services-label">WHAT I OFFER</span>
              <h2 className="section-title">My Services</h2>
              <p className="services-subtitle">Practical solutions with clean infrastructure, scalable automation, and reliable delivery.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <div key={i} className="service-card glass-card">
                  <div className="service-icon-wrap"><s.icon size={24} /></div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <div className="service-tags">
                    {s.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section id="projects" className="section fade-section">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">Featured Projects</h2>
              <div className="section-line" />
            </div>
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
                <div key={i} className="project-card glass-card">
                  <div className="project-content">
                    <span className="project-pill">PROJECT {String(i + 1).padStart(2, '0')}</span>
                    <h3 className="project-name">{p.name}</h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tech">
                      {p.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <a href={p.href} target="_blank" rel="noreferrer" className="project-link">
                      <Github size={16} /> View Repository <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="section fade-section">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">Let's Connect</h2>
              <div className="section-line" />
              <p className="services-subtitle">Open to opportunities, collaborations, or just a friendly chat.</p>
            </div>
            <div className="contact-grid">
              {[
                { icon: Mail, label: "Email", value: "moaznaser117@gmail.com", href: "mailto:moaznaser117@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "moaz-nasr-eldin", href: "https://www.linkedin.com/in/moaz-nasr-eldin-02b019294" },
                { icon: Github, label: "GitHub", value: "M0az2", href: "https://github.com/M0az2" },
              ].map(c => (
                <a key={c.label} href={c.href} target={c.label !== "Email" ? "_blank" : undefined} rel="noreferrer" className="contact-card glass-card">
                  <c.icon size={24} className="contact-icon" />
                  <div>
                    <p className="contact-label">{c.label}</p>
                    <p className="contact-value">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-logo">moaz<span className="logo-accent">.dev</span></span>
            <span className="footer-copy">© {new Date().getFullYear()} · Cairo, Egypt</span>
          </div>
          <div className="footer-links">
            <a href="mailto:moaznaser117@gmail.com" aria-label="Email"><Mail size={16} /></a>
            <a href="https://www.linkedin.com/in/moaz-nasr-eldin-02b019294" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://github.com/M0az2" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          </div>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`scroll-top ${showScrollTop ? 'show' : ''}`} aria-label="Scroll to top">
        <ArrowUp size={18} />
      </button>

      <style>{`
/* ══════════════════════ RESET & BASE ══════════════════════ */
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{overflow-x:hidden}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-thumb{background:#1e3a5f;border-radius:8px}
::-webkit-scrollbar-track{background:transparent}
ul{list-style:none}

.app{
  background:#020617;
  color:#e2e8f0;
  min-height:100vh;
  font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:15px;
  line-height:1.65;
}

/* ── Glass Card ── */
.glass-card{
  background:rgba(255,255,255,0.03);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:16px;
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  transition:all .3s cubic-bezier(.25,.8,.25,1);
}
.glass-card:hover{
  background:rgba(255,255,255,0.06);
  border-color:rgba(59,130,246,0.3);
  transform:translateY(-4px);
  box-shadow:0 10px 30px -10px rgba(59,130,246,0.15);
}

/* ── Buttons ── */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:12px 28px;border-radius:50px;font-weight:600;font-size:0.95rem;
  cursor:pointer;transition:all .3s;border:2px solid transparent;text-decoration:none;
}
.btn-primary{
  background:linear-gradient(135deg,#60a5fa,#1e3a8a);
  color:#fff;box-shadow:0 4px 15px rgba(59,130,246,0.4);
}
.btn-primary:hover{box-shadow:0 6px 25px rgba(59,130,246,0.6);transform:translateY(-2px)}
.btn-outline{
  background:transparent;border-color:#3b82f6;color:#3b82f6;
}
.btn-outline:hover{background:rgba(59,130,246,0.1);color:#fff}
.btn-sm{
  padding:7px 16px;border-radius:8px;font-size:13px;font-weight:500;
  background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);
  color:#e2e8f0;text-decoration:none;
}
.btn-sm:hover{background:rgba(59,130,246,0.15);border-color:rgba(59,130,246,0.4)}

/* ── Fade animation ── */
.fade-section{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}
.fade-section.is-visible{opacity:1;transform:none}

/* ══════════════════════ NAVBAR ══════════════════════ */
.navbar{
  position:fixed;top:0;left:0;right:0;z-index:50;
  background:rgba(2,6,23,0.85);
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(255,255,255,0.05);
}
.nav-container{
  max-width:1200px;margin:0 auto;padding:0 48px;height:64px;
  display:flex;align-items:center;justify-content:space-between;
}
.logo{
  font-family:'Inter',sans-serif;font-size:18px;font-weight:800;
  color:#f8fafc;text-decoration:none;letter-spacing:-0.5px;
}
.logo-accent{color:#3b82f6}
.nav-links{display:flex;gap:28px;align-items:center}
.nav-link{
  color:#94a3b8;text-decoration:none;font-size:14px;font-weight:500;
  transition:color .2s;position:relative;
}
.nav-link:hover{color:#f8fafc}
.nav-link:hover::after{
  content:"";position:absolute;bottom:-4px;left:0;right:0;height:2px;
  background:#3b82f6;border-radius:1px;
}
.nav-actions{display:flex;align-items:center;gap:12px}
.mobile-toggle{display:none;background:none;border:none;color:#e2e8f0;cursor:pointer}
.mobile-menu{
  position:fixed;top:64px;left:0;right:0;z-index:40;
  background:rgba(2,6,23,0.95);backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(255,255,255,0.05);
  padding:16px 24px;display:flex;flex-direction:column;gap:12px;
}
.mobile-menu a{color:#e2e8f0;text-decoration:none;font-size:16px;font-weight:500;padding:8px 0}

/* ══════════════════════ HERO ══════════════════════ */
.hero{
  position:relative;overflow:hidden;padding-top:64px;
  min-height:100vh;display:flex;align-items:center;
}
.hero-bg{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse 60% 50% at 10% 50%, rgba(59,130,246,0.08) 0%, transparent 60%),
    radial-gradient(ellipse 40% 60% at 80% 20%, rgba(30,58,138,0.06) 0%, transparent 50%);
  pointer-events:none;
}
.hero-container{
  position:relative;z-index:1;
  max-width:1200px;margin:0 auto;padding:60px 48px;width:100%;
  display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;
}
.hero-content{display:flex;flex-direction:column}
.welcome-badge{
  display:inline-block;font-size:11px;font-weight:700;letter-spacing:0.15em;
  color:#60a5fa;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.15);
  padding:6px 16px;border-radius:20px;margin-bottom:24px;width:fit-content;
}
.greeting{font-size:20px;color:#94a3b8;font-weight:400;margin-bottom:4px}
.hero-name{
  font-size:clamp(40px,5vw,64px);font-weight:800;line-height:1;letter-spacing:-2px;
  color:#f8fafc;margin-bottom:12px;
}
.hero-title-animated{
  font-size:clamp(20px,3vw,28px);font-weight:700;margin-bottom:20px;
  display:flex;flex-wrap:wrap;
}
.title-letter{
  display:inline-block;
  background:linear-gradient(90deg,#3b82f6,#1e3a8a,#60a5fa,#3b82f6);
  background-size:200% auto;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;
  animation:gradientFlow 4s linear infinite, letterPop .4s ease both;
}
@keyframes gradientFlow{0%{background-position:0% center}100%{background-position:200% center}}
@keyframes letterPop{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.hero-summary{font-size:15px;color:#64748b;line-height:1.8;max-width:480px;margin-bottom:28px}
.hero-buttons{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}
.social-links{display:flex;gap:16px}
.social-links a{
  color:#64748b;transition:all .2s;
  width:40px;height:40px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);
}
.social-links a:hover{color:#3b82f6;border-color:rgba(59,130,246,0.3);background:rgba(59,130,246,0.08)}

/* ── Terminal ── */
.hero-terminal{display:flex;align-items:center;justify-content:center}
.terminal{
  background:#0f172a;border:1px solid rgba(255,255,255,0.06);
  border-radius:16px;overflow:hidden;width:100%;
  box-shadow:0 20px 60px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.03);
}
.terminal-bar{
  background:rgba(255,255,255,0.03);padding:10px 16px;
  display:flex;align-items:center;justify-content:space-between;
  border-bottom:1px solid rgba(255,255,255,0.04);
}
.terminal-dots{display:flex;gap:6px}
.dot{width:10px;height:10px;border-radius:50%;display:block}
.terminal-title{font-family:'JetBrains Mono',monospace;font-size:11px;color:#475569}
.terminal-body{
  font-family:'JetBrains Mono',monospace;font-size:13px;
  padding:20px;min-height:180px;
}
.t-muted{color:#64748b}
.t-cursor{display:inline-block;width:8px;height:16px;background:#3b82f6;margin-left:2px;vertical-align:text-bottom;animation:blink 1s step-end infinite}
.t-ok{color:#34d399;margin-top:10px;animation:fadeIn .4s ease}
.t-status{margin-top:14px;display:flex;flex-direction:column;gap:6px}
.t-row{display:flex;align-items:center;gap:8px;color:#64748b}
.t-dot{width:5px;height:5px;border-radius:50%;background:#34d399;flex-shrink:0}
.t-name{min-width:90px}
.t-st{color:#334155;font-size:11px}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}

/* ══════════════════════ SECTIONS ══════════════════════ */
.section{padding:100px 0}
.section-inner{max-width:1200px;margin:0 auto;padding:0 48px}
.section-header{text-align:center;margin-bottom:48px}
.section-title{
  font-size:32px;font-weight:800;color:#f8fafc;letter-spacing:-0.5px;margin-bottom:12px;
}
.section-line{
  width:60px;height:3px;margin:0 auto;border-radius:2px;
  background:linear-gradient(90deg,#60a5fa,#1e3a8a);
  animation:linePulse 2s ease-in-out infinite;
}
@keyframes linePulse{0%,100%{width:60px;opacity:1}50%{width:80px;opacity:.7}}

/* ── About ── */
.about-card{padding:40px;display:flex;gap:28px;align-items:flex-start}
.about-icon{
  width:56px;height:56px;border-radius:14px;flex-shrink:0;
  background:rgba(59,130,246,0.1);color:#60a5fa;
  display:flex;align-items:center;justify-content:center;
}
.about-subtitle{font-size:18px;font-weight:700;color:#f8fafc;margin-bottom:12px}
.about-text p{font-size:15px;color:#94a3b8;line-height:1.8}

/* ── Education ── */
.edu-card{padding:36px}
.edu-degree{font-size:20px;font-weight:700;color:#f8fafc;margin-bottom:6px}
.edu-university{font-size:15px;color:#60a5fa;margin-bottom:16px}
.edu-details{display:flex;flex-wrap:wrap;gap:16px;margin-bottom:16px}
.edu-detail{font-size:13px;color:#94a3b8}
.edu-extra{font-size:14px;color:#64748b;font-style:italic;border-top:1px solid rgba(255,255,255,0.06);padding-top:16px;margin-top:8px}

/* ── Skills ── */
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}
.skill-card{padding:28px}
.skill-header{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.skill-icon-wrap{
  width:42px;height:42px;border-radius:12px;
  background:rgba(59,130,246,0.1);color:#60a5fa;
  display:flex;align-items:center;justify-content:center;
}
.skill-label{font-size:16px;font-weight:700;color:#f8fafc}
.skill-desc{font-size:13px;color:#94a3b8;line-height:1.7;margin-bottom:16px}
.skill-tags{display:flex;flex-wrap:wrap;gap:6px}
.skill-tag{
  font-size:12px;font-weight:500;color:#60a5fa;
  background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.18);
  padding:4px 12px;border-radius:6px;transition:all .2s;
}
.skill-tag:hover{background:rgba(59,130,246,0.15);border-color:rgba(59,130,246,0.35)}

/* ── Experience Timeline ── */
.timeline{position:relative;padding-left:32px}
.timeline::before{
  content:"";position:absolute;left:11px;top:0;bottom:0;width:2px;
  background:linear-gradient(180deg,#3b82f6,rgba(59,130,246,0.1));
}
.timeline-item{
  position:relative;padding:28px;margin-bottom:20px;
  margin-left:12px;
}
.timeline-dot{
  position:absolute;left:-33px;top:32px;
  width:12px;height:12px;border-radius:50%;
  background:#3b82f6;border:3px solid #020617;
  box-shadow:0 0 0 3px rgba(59,130,246,0.3);
}
.exp-header{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:14px;flex-wrap:wrap}
.exp-role{font-size:17px;font-weight:700;color:#f8fafc;margin-bottom:4px}
.exp-company{font-size:14px;color:#60a5fa;font-weight:500}
.exp-date{
  font-family:'JetBrains Mono',monospace;font-size:12px;
  color:#94a3b8;white-space:nowrap;flex-shrink:0;
  background:rgba(59,130,246,0.06);padding:4px 12px;border-radius:6px;
}
.exp-bullets{padding-left:18px;list-style:disc}
.exp-bullets li{font-size:14px;color:#94a3b8;line-height:1.8;margin-bottom:4px}
.exp-bullets li::marker{color:#3b82f6}
.btn-cert{
  display:inline-flex;align-items:center;gap:8px;margin-top:14px;
  font-size:13px;font-weight:600;color:#60a5fa;text-decoration:none;
  background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);
  padding:8px 18px;border-radius:8px;transition:all .25s;width:fit-content;
}
.btn-cert:hover{background:rgba(59,130,246,0.15);border-color:rgba(59,130,246,0.4);transform:translateY(-1px)}

/* ── Services ── */
.services-label{
  font-size:12px;font-weight:700;letter-spacing:0.15em;
  color:#60a5fa;display:block;margin-bottom:8px;
}
.services-subtitle{font-size:15px;color:#64748b;max-width:500px;margin:12px auto 0}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.service-card{padding:32px;text-align:center}
.service-icon-wrap{
  width:56px;height:56px;border-radius:14px;margin:0 auto 20px;
  background:rgba(59,130,246,0.1);color:#60a5fa;
  display:flex;align-items:center;justify-content:center;
}
.service-title{font-size:17px;font-weight:700;color:#f8fafc;margin-bottom:10px}
.service-desc{font-size:13px;color:#94a3b8;line-height:1.7;margin-bottom:16px}
.service-tags{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.service-tags span{
  font-size:12px;color:#60a5fa;
  background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.18);
  padding:4px 12px;border-radius:6px;
}

/* ── Projects ── */
.projects-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.project-card{overflow:hidden;position:relative}
.project-card::before{
  content:"";position:absolute;top:0;left:0;right:0;height:3px;
  background:linear-gradient(90deg,transparent,#3b82f6,transparent);
  opacity:0;transition:opacity .3s;
}
.project-card:hover::before{opacity:1}
.project-content{padding:28px;display:flex;flex-direction:column;height:100%}
.project-pill{
  font-size:11px;font-weight:700;letter-spacing:0.1em;
  color:#60a5fa;background:rgba(59,130,246,0.08);
  padding:4px 12px;border-radius:12px;width:fit-content;margin-bottom:14px;
}
.project-name{font-size:18px;font-weight:700;color:#f8fafc;margin-bottom:10px;letter-spacing:-0.3px}
.project-desc{font-size:13px;color:#94a3b8;line-height:1.75;margin-bottom:18px;flex-grow:1}
.project-tech{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px}
.project-tech span{
  font-size:12px;color:#60a5fa;
  background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.18);
  padding:4px 12px;border-radius:6px;
}
.project-link{
  display:inline-flex;align-items:center;gap:8px;
  font-size:14px;font-weight:600;color:#3b82f6;text-decoration:none;
  transition:all .2s;
}
.project-link:hover{color:#60a5fa;gap:12px}

/* ── Contact ── */
.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.contact-card{
  padding:28px;text-decoration:none;color:inherit;
  display:flex;align-items:center;gap:16px;
}
.contact-icon{color:#64748b;transition:color .3s;flex-shrink:0}
.contact-card:hover .contact-icon{color:#3b82f6}
.contact-label{font-size:15px;font-weight:600;color:#f8fafc;margin-bottom:4px}
.contact-value{font-size:13px;color:#94a3b8}

/* ══════════════════════ FOOTER ══════════════════════ */
.footer{border-top:1px solid rgba(255,255,255,0.04);padding:28px 0}
.footer-inner{
  max-width:1200px;margin:0 auto;padding:0 48px;
  display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;
}
.footer-logo{font-size:16px;font-weight:800;color:#f8fafc;margin-right:16px}
.footer-copy{font-size:12px;color:#475569}
.footer-links{display:flex;gap:16px}
.footer-links a{color:#475569;transition:color .2s}
.footer-links a:hover{color:#3b82f6}

/* ── Scroll Top ── */
.scroll-top{
  position:fixed;bottom:28px;right:28px;
  width:44px;height:44px;border-radius:50%;
  background:linear-gradient(135deg,#60a5fa,#1e3a8a);
  border:none;color:#fff;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  opacity:0;visibility:hidden;transition:all .3s;z-index:100;
  box-shadow:0 4px 16px rgba(59,130,246,0.3);
}
.scroll-top.show{opacity:1;visibility:visible}
.scroll-top:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(59,130,246,0.5)}

/* ══════════════════════ RESPONSIVE ══════════════════════ */
@media(max-width:1024px){
  .hero-container{grid-template-columns:1fr;gap:40px}
  .hero-terminal{max-width:500px}
  .nav-container,.section-inner,.footer-inner{padding-left:32px;padding-right:32px}
  .services-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .nav-links{display:none!important}
  .btn-sm{display:none!important}
  .mobile-toggle{display:block!important}
  .hero-container{padding:40px 20px}
  .projects-grid{grid-template-columns:1fr}
  .services-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .about-card{flex-direction:column}
  .exp-header{flex-direction:column}
  .nav-container,.section-inner,.footer-inner{padding-left:20px;padding-right:20px}
  .section{padding:60px 0}
  .skills-grid{grid-template-columns:1fr}
}
@media(max-width:480px){
  .nav-container,.section-inner,.footer-inner{padding-left:16px;padding-right:16px}
  .hero-name{font-size:clamp(32px,10vw,48px)!important}
  .section{padding:48px 0}
  .hero-buttons{flex-direction:column}
  .hero-buttons .btn{width:100%;justify-content:center}
  .timeline{padding-left:24px}
  .timeline-item{margin-left:8px;padding:20px}
  .timeline-dot{left:-25px}
}
      `}</style>
    </div>
  );
}
