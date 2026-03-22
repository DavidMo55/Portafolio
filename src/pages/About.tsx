import './About.css'

const skillGroups = [
  {
    label: 'Frontend',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', alt: 'Angular' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', alt: 'Next.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg', alt: 'Astro' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg', alt: 'TailwindCSS' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg', alt: 'Bootstrap' },
    ],
  },
  {
    label: 'Backend',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg', alt: 'FastAPI' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg', alt: 'Django' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', alt: 'Java' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg', alt: 'Dart' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', alt: 'Flutter' },
    ],
  },
  {
    label: 'Bases de Datos',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg', alt: 'PostgreSQL' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg', alt: 'GitLab' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', alt: 'Vite' },
    ],
  },
  {
    label: 'IA & ML',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', alt: 'TensorFlow' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original-wordmark.svg', alt: 'Keras' },
    ],
  },
  {
    label: 'Herramientas',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', alt: 'Figma' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg', alt: 'XD' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', alt: 'VSCode' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg', alt: 'Visual Studio' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg', alt: 'Slack' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg', alt: 'Trello' },
    ],
  },
]

const experience = [
  {
    role: 'Practicas Profesionales',
    company: 'INDEMUN — Gobierno del Estado de Hidalgo',
    period: 'Ene 2025 – Jun 2025',
    items: [
      'Optimizacion de aplicaciones web con reduccion del 30% en tiempos de ejecucion',
      'Automatizacion de procesos y manejo de bases de datos SQL y MongoDB',
      'Despliegue con Docker para entornos robustos',
    ],
  },
  {
    role: 'Formacion Dual',
    company: 'Fundacion Axio',
    period: 'Sep 2024 – Jun 2025',
    items: [
      'Desarrollo de aplicaciones web y landing pages',
      'Diseno y prototipado de interfaces en Figma',
      'Investigacion e implementacion de nuevas tecnologias',
    ],
  },
  {
    role: 'Servicio Social',
    company: 'Universidad Politecnica de Pachuca',
    period: 'Ene 2024 – Jul 2024',
    items: [
      'Investigacion de tecnologias emergentes en IA y redes neuronales',
      'Desarrollo de prototipos experimentales',
    ],
  },
]

const education = [
  { school: 'Universidad Politecnica de Pachuca', degree: 'Ingenieria en Software', period: '2022 – 2025' },
  { school: 'CBTis No.59', degree: 'Tecnico en Programacion', period: '2019 – 2021' },
]

export default function About() {
  return (
    <main className="about">
      {/* Header */}
      <section className="about-header">
        <div className="about-header-badge">Sobre mi</div>
        <h1>Angel David Morales Cuenca</h1>
        <p className="about-tagline">Ingeniero en Software | Fullstack &amp; Cloud Developer</p>
      </section>

      {/* Perfil */}
      <section className="about-section">
        <h2>Perfil Profesional</h2>
        <div className="about-profile-grid">
          <div className="profile-card">
            <h3>Desarrollo Full-Stack</h3>
            <p>
              Creo soluciones end-to-end: desde interfaces modernas con React y Angular,
              hasta APIs escalables con Node.js, FastAPI y Django. Mi enfoque esta en
              escribir codigo limpio que resuelva problemas reales.
            </p>
          </div>
          <div className="profile-card">
            <h3>Cloud & DevOps</h3>
            <p>
              Experiencia con Google Cloud, AWS y Firebase. Uso Docker para asegurar
              entornos de despliegue consistentes y CI/CD para entregas continuas.
            </p>
          </div>
          <div className="profile-card">
            <h3>Automatizacion</h3>
            <p>
              Me apasiona optimizar procesos. En INDEMUN logre una reduccion del 30%
              en tiempos de ejecucion automatizando flujos de trabajo con Python y SQL.
            </p>
          </div>
          <div className="profile-card">
            <h3>Diseno & UX</h3>
            <p>
              Prototipo interfaces en Figma buscando experiencias fluidas e intuitivas.
              Creo que el buen software empieza por entender al usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="about-section">
        <h2>Experiencia Profesional</h2>
        <div className="timeline">
          {experience.map((exp) => (
            <div className="timeline-item" key={exp.role + exp.company}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-list">
                  {exp.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educacion */}
      <section className="about-section">
        <h2>Educacion</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div className="education-card" key={edu.school}>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <span>{edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="about-section skills-section">
        <h2>Lenguajes &amp; Herramientas</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h4>{group.label}</h4>
              <div className="skill-icons">
                {group.icons.map((icon) => (
                  <div className="skill-icon" key={icon.alt} title={icon.alt}>
                    <img src={icon.src} alt={icon.alt} />
                    <span>{icon.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
