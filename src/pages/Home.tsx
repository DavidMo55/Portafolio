import { Link } from 'react-router-dom'
import { useScrollAnimate } from '../hooks/useScrollAnimate'
import './Home.css'

const cards = [
  {
    to: '/certifications',
    title: 'Certificaciones',
    desc: 'Cursos y badges en Cloud, Python, DevOps y más.',
  },
  {
    to: '/projects',
    title: 'Proyectos',
    desc: 'Sitios web, apps y soluciones que he construido.',
  },
  {
    to: '/contact',
    title: 'Contacto',
    desc: 'Hablemos sobre tu próximo proyecto.',
  },
]

export default function Home() {
  const containerRef = useScrollAnimate<HTMLElement>()

  return (
    <main ref={containerRef}>
      <section className="hero anim">
        <p className="hero-greeting">Hola, soy David</p>
        <h1 className="hero-title">
          Ingeniero en Software.<br />
          <span className="hero-highlight">Fullstack Developer</span> y Más.
        </h1>
        <p className="hero-subtitle">
          Me encanta construir cosas útiles con código. Me gustan los retos,
          aprender cosas nuevas y hacer que las ideas se vuelvan realidad.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="hero-btn primary">Sobre mí</Link>
          <Link to="/contact" className="hero-btn secondary">Contacto</Link>
        </div>
      </section>

      <section className="intro-section anim">
        <h2>Lo que hago</h2>
        <p>
          Desarrollo aplicaciones web completas, desde el diseño de interfaces hasta la
          arquitectura de APIs y servicios en la nube. Siempre buscando soluciones simples
          a problemas complejos.
        </p>
      </section>

      <section className="cards-section">
        {cards.map((card, i) => (
          <Link to={card.to} className={`home-card anim anim-d${i + 1}`} key={card.to}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <span className="card-arrow">&rarr;</span>
          </Link>
        ))}
      </section>
    </main>
  )
}
