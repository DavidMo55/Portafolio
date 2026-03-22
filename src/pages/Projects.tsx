import { useScrollAnimate } from '../hooks/useScrollAnimate'
import './Projects.css'

const projects = [
  {
    title: 'Landing Page Fundacion Axio',
    description:
      'Desarrolle el sitio para Fundacion Axio, una ONG mexicana enfocada en educacion y valores. Implemente diseno responsivo, navegacion intuitiva y recursos digitales para fortalecer su impacto social.',
    url: 'https://fundacionaxio.org/',
    img: '/p5.png',
    tags: ['React', 'CSS', 'Responsive', 'Firebase'],
  },
  {
    title: 'Landing Page IoTechLabs',
    description:
      'Desarrolle el sitio web de IoTech Labs, empresa especializada en soluciones tecnologicas personalizadas. El proyecto destaca por su enfoque moderno, navegacion clara y presentacion profesional de servicios.',
    url: 'https://iotechlabs.com/',
    img: '/p4.png',
    tags: ['Astro', 'TailwindCSS', 'Responsive'],
  },
  {
    title: 'SA-92 Fundacion Axio',
    description:
      'Desarrolle la interfaz del cuestionario SA-92, una herramienta digital para evaluar la cultura organizacional en etica e integridad. El diseno prioriza la usabilidad, anonimato y claridad en la navegacion.',
    url: 'https://fundacionaxio.org/quiz',
    img: '/p3.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Figma'],
  },
  {
    title: 'INDEMUN',
    description:
      'Desarrolle el sitio web del Instituto para el Desarrollo Municipal de Hidalgo. Implemente arquitectura clara, automatizaciones, diseno responsivo y modulos informativos para facilitar el acceso a recursos.',
    url: 'http://sigeh.hidalgo.gob.mx/indemun/',
    img: '/p2.png',
    tags: ['JavaScript', 'SQL', 'Docker', 'Python'],
  },
  {
    title: 'MiPortafolio',
    description:
      'Disene y desarrolle mi portafolio como Fullstack Developer, destacando proyectos, certificaciones y habilidades tecnicas. El sitio refleja mi enfoque creativo y compromiso con soluciones funcionales.',
    url: 'https://portafolio-damo.web.app/',
    img: '/p1.png',
    tags: ['React', 'TypeScript', 'Vite', 'Firebase'],
  },
  {
    title: 'Romi: Sistema de Gestión de Tareas',
    description:
      'Herramienta de gestión de flujos de trabajo inspirada en metodologías ágiles, optimizada para latencia mínima. Backend asíncrono con FastAPI, frontend ultra rápido con Astro y modelado de estados de tareas para seguimiento en tiempo real.',
    url: 'https://romiai.info/',
    img: '/brevemente.png',
    tags: ['FastAPI', 'Astro', 'PostgreSQL', 'Python'],
  },
  {
    title: 'Majestic: Plataforma Administrativa Enterprise',
    description:
      'Sistema de gestión integral para la administración de activos y usuarios, priorizando seguridad y escalabilidad. Arquitectura basada en componentes reutilizables, sistema RBAC avanzado y optimización de consultas SQL para grandes volúmenes de datos.',
    url: 'https://mestockexterno.com/login',
    img: '/majestic.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'RBAC'],
  },
  {
    title: 'Romi-Sepomex: Inteligencia Geográfica',
    description:
      'Microservicio especializado en normalización y validación de datos postales de México. Automatización de direcciones con la base de datos oficial de SEPOMEX, algoritmos de búsqueda eficiente y sistema de limpieza de datos geográficos.',
    url: 'https://romisepomex-e6fca9badrcneabt.canadacentral-01.azurewebsites.net/docs',
    img: '/romisepo.png',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'SEPOMEX'],
  },
]

export default function Projects() {
  const containerRef = useScrollAnimate<HTMLElement>()

  return (
    <main ref={containerRef}>
      <h1 className="projects-title anim">Proyectos Destacados</h1>
      <div className="projects-container">
        {projects.map((project, i) => (
          <section
            className={`project-card anim ${i % 2 !== 0 ? 'reverse anim-right' : 'anim-left'}`}
            key={project.title}
          >
            <div className="project-info">
              <span className="project-number">{String(i + 1).padStart(2, '0')}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.url} className="btn-visit" target="_blank" rel="noreferrer">
                Visitar Sitio &rarr;
              </a>
            </div>
            <div className="project-image-container">
              <img src={project.img} alt={`Vista de ${project.title}`} className="desktop-image" />
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
