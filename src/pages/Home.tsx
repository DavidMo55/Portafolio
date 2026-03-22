import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
  const heroRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0'
      heroRef.current.style.transform = 'translateY(40px)'
      requestAnimationFrame(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
          heroRef.current.style.opacity = '1'
          heroRef.current.style.transform = 'translateY(0)'
        }
      })
    }

    if (introRef.current) {
      introRef.current.style.opacity = '0'
      introRef.current.style.transform = 'translateY(30px)'
      requestAnimationFrame(() => {
        if (introRef.current) {
          introRef.current.style.transition = 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
          introRef.current.style.opacity = '1'
          introRef.current.style.transform = 'translateY(0)'
        }
      })
    }

    if (cardsRef.current) {
      const items = cardsRef.current.querySelectorAll('.home-card')
      items.forEach((item, i) => {
        const el = item as HTMLElement
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        requestAnimationFrame(() => {
          el.style.transition = `opacity 0.6s ease-out ${0.5 + i * 0.15}s, transform 0.6s ease-out ${0.5 + i * 0.15}s`
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      })
    }
  }, [])

  return (
    <main>
      <section className="hero" ref={heroRef}>
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

      <section className="intro-section" ref={introRef}>
        <h2>Lo que hago</h2>
        <p>
          Desarrollo aplicaciones web completas, desde el diseño de interfaces hasta la
          arquitectura de APIs y servicios en la nube. Siempre buscando soluciones simples
          a problemas complejos.
        </p>
      </section>

      <section className="cards-section" ref={cardsRef}>
        {cards.map((card) => (
          <Link to={card.to} className="home-card" key={card.to}>
            
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <span className="card-arrow">&rarr;</span>
          </Link>
        ))}
      </section>
    </main>
  )
}
