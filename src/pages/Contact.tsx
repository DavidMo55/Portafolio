import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contactame</h2>

        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
        </div>

        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div>
            <h3>Teléfono</h3>
            <a href="tel:+527751339753" target="_blank" rel="noreferrer">+52 7751339753</a>
          </div>
        </div>

        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h3>Correo electrónico</h3>
            <a href="mailto:angeldavidmc20001@gmail.com" target="_blank" rel="noreferrer">
              angeldavidmc20001@gmail.com
            </a>
          </div>
        </div>

        <div className="iconos-container">
          <a href="https://github.com/Cocoyanami" target="_blank" rel="noreferrer">
            <img src="/github1.png" alt="Github" className="icono" />
          </a>
          <a href="https://www.linkedin.com/in/moralesdavidcoco/" target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="Linkedin" className="icono" />
          </a>
          <a href="https://wa.me/527751339753" target="_blank" rel="noreferrer">
            <img src="/whts.png" alt="Whatsapp" className="icono" />
          </a>
        </div>
      </div>
    </div>
  )
}
