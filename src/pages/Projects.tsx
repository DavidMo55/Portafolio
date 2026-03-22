import './Projects.css'

export default function Projects() {
  return (
    <main>
      <h1>Proyectos Destacados</h1>
      <div className="projects-container">
        <section className="project-card">
          <div className="project-info">
            <h2>Landing Page Fundacion Axio</h2>
            <p>Desarrolle el sitio para Fundación Axio, una ONG mexicana enfocada en educación y valores.
              Implementé diseño responsivo, navegación intuitiva y recursos digitales para fortalecer su impacto social.</p>
            <a href="https://fundacionaxio.org/" className="btn-visit" target="_blank" rel="noreferrer">Visitar Sitio</a>
          </div>
          <div className="project-image-container">
            <img src="/p5.png" alt="Vista del proyecto 1 en desktop y móvil" className="desktop-image" />
          </div>
        </section>

        <section className="project-card reverse">
          <div className="project-image-container">
            <img src="/p4.png" alt="Vista del proyecto 2 en desktop y móvil" className="desktop-image" />
          </div>
          <div className="project-info">
            <h2>Landing Page IotechLabs</h2>
            <p>Desarrolle el sitio web de IoTech Labs, empresa especializada en soluciones tecnológicas personalizadas.
              El proyecto destaca por su enfoque moderno, navegación clara y presentación
              profesional de servicios orientados a innovación, seguridad y asesoría continua</p>
            <a href="https://iotechlabs.com/" className="btn-visit" target="_blank" rel="noreferrer">Visitar Sitio</a>
          </div>
        </section>

        <section className="project-card">
          <div className="project-info">
            <h2>SA-92 Fundación Axio</h2>
            <p>Desarrollé la interfaz del cuestionario SA-92, una herramienta digital para evaluar
              la cultura organizacional en ética e integridad. El diseño prioriza la usabilidad,
              anonimato y claridad en la navegación para facilitar la recolección de datos estadísticos</p>
            <a href="https://fundacionaxio.org/quiz" className="btn-visit" target="_blank" rel="noreferrer">Visitar Sitio</a>
          </div>
          <div className="project-image-container">
            <img src="/p3.png" alt="Vista del proyecto 3 en desktop y móvil" className="desktop-image" />
          </div>
        </section>

        <section className="project-card reverse">
          <div className="project-image-container">
            <img src="/p2.png" alt="Vista del proyecto 4 en desktop y móvil" className="desktop-image" />
          </div>
          <div className="project-info">
            <h2>INDEMUN</h2>
            <p>Desarrollé el sitio web del Instituto para el Desarrollo Municipal de Hidalgo, enfocado en fortalecer
              la gestión pública local. Implementé una arquitectura clara, automatizaciónes, diseño responsivo y módulos informativos
              para facilitar el acceso a recursos, convocatorias y herramientas de planeación municipal.</p>
            <a href="http://sigeh.hidalgo.gob.mx/indemun/" className="btn-visit" target="_blank" rel="noreferrer">Visitar Sitio</a>
          </div>
        </section>

        <section className="project-card">
          <div className="project-info">
            <h2>MiPortafolio</h2>
            <p>Diseñé y desarrollé mi portafolio como Fullstack Developer, destacando proyectos, certificaciones y habilidades técnicas. El sitio refleja mi enfoque creativo, pasión por el desarrollo y compromiso con soluciones útiles y funcionales</p>
            <a href="https://portafolio-damo.web.app/" className="btn-visit" target="_blank" rel="noreferrer">Visitar Sitio</a>
          </div>
          <div className="project-image-container">
            <img src="/p1.png" alt="Vista del proyecto 5 en desktop y móvil" className="desktop-image" />
          </div>
        </section>
      </div>
    </main>
  )
}
