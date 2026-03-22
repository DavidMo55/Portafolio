import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="logo">MiPortafolio</Link>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/certifications">Certificaciones</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/Cocoyanami" target="_blank" rel="noreferrer"><img src="/github.png" alt="Github" className="icono1" /></a>
          <a href="mailto:angeldavidmc20001@gmail.com" target="_blank" rel="noreferrer"><img src="/gmail.png" alt="Gmail" className="icono" /></a>
          <a href="https://www.linkedin.com/in/moralesdavidcoco/" target="_blank" rel="noreferrer"><img src="/ind.png" alt="Linkedin" className="icono" /></a>
          <a href="https://wa.me/527751339753" target="_blank" rel="noreferrer"><img src="/whatsapp--v2.png" alt="WhatsApp" className="icono4" /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 11/09/2025 MiPortafolio by David Morales — Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
