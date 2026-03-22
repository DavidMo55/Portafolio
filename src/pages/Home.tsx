import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // fadeInUp for hero
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

    // fadeIn for second section
    if (secondRef.current) {
      secondRef.current.style.opacity = '0'
      requestAnimationFrame(() => {
        if (secondRef.current) {
          secondRef.current.style.transition = 'opacity 1.2s ease-in'
          secondRef.current.style.opacity = '1'
        }
      })
    }

    // stagger for cards
    if (thirdRef.current) {
      const items = thirdRef.current.querySelectorAll('li')
      items.forEach((item, i) => {
        const el = item as HTMLElement
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        requestAnimationFrame(() => {
          el.style.transition = `opacity 0.6s ease-out ${i * 0.2}s, transform 0.6s ease-out ${i * 0.2}s`
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      })
    }
  }, [])

  return (
    <main>
      <div className="hero-section" ref={heroRef}>
        <h1>Ingeniero en Software. Fullstack Developer<br /> y Más</h1>
      </div>

      <div className="segunda-seccion" ref={secondRef}>
        <p>
          Hola, soy David! <br />
          Soy desarrollador de software y me encanta construir cosas útiles con
          código. Me gusta la fotografia y la música. Me gustan los retos, aprender
          cosas nuevas y hacer que las ideas se vuelvan realidad.
        </p>
        <Link to="/about">Más sobre mí:</Link>
      </div>

      <div className="tercera-seccion" ref={thirdRef}>
        <ul className="tarjetas-navegacion">
          <li>
            <Link to="/certifications">Certificaciones</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
