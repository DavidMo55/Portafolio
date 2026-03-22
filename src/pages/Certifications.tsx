import { useScrollAnimate } from '../hooks/useScrollAnimate'
import './Certifications.css'

interface Cert {
  img: string
  title: string
  provider: string
  url: string
}

interface Category {
  name: string
  certs: Cert[]
}

const categories: Category[] = [
  {
    name: 'Python',
    certs: [
      { img: '/6.png', title: 'Python Profesional', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/caea5893-88f9-4ed6-9b8c-648b2990ff43' },
      { img: '/11.png', title: 'Intermediate Python', provider: 'DataCamp', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/01781e3d3ba4a0c671ce49f5545ff59c8d8b6ad1' },
      { img: '/12.png', title: 'APIs in Python', provider: 'DataCamp', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/db26151fcef5fcbba150e26dc5f60a88d0bc97c9' },
      { img: '/14.png', title: 'POO en Python', provider: 'DataCamp', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/5e29f837b1c288a0bd6ad079382a2bf1fa695fbd' },
      { img: '/16.png', title: 'Efficient Python Code', provider: 'DataCamp', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/db115496060edac7f4979cceedcadff8d3838bfa' },
      { img: '/27.png', title: 'Python para novatos', provider: 'Udemy', url: 'https://www.udemy.com/certificate/UC-493400ef-f086-4ea9-b310-383b41df4b35/' },
      { img: '/29.png', title: 'MongoDB Python Developer', provider: 'MongoDB', url: 'https://learn.mongodb.com/c/F3PVCZ0QQ6GyqxXDx5R8sQ' },
    ],
  },
  {
    name: 'Ciencia de Datos & IA',
    certs: [
      { img: '/5.png', title: 'Ciencia de Datos', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/d1e4a339-922a-4928-8c33-7df27b074324' },
      { img: '/13.png', title: 'Data Science in Python', provider: 'DataCamp', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ef4ca37a51ce38e6bd6c47f55f7867c1d4f97422' },
      { img: '/15.png', title: 'Understanding AI', provider: 'DataCamp', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/cebc2717f9d398ea1f2ae15a715592e3fb318fa1' },
      { img: '/17.png', title: 'Prompt Engineering', provider: 'DataCamp', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0513ef2af5b8f1cf771ee5760a3fbbfde9ebff05' },
      { img: '/1.png', title: 'Curador de Datos', provider: 'Capacítate para el Empleo', url: 'https://capacitateparaelempleo.org/verifica/5018bb38-7cf9-4d45-9529-8c125b35aa3a/9249751d-8dc7-460c-9da7-902f201291d8' },
      { img: '/30.png', title: 'Tecnologías Emergentes', provider: 'Emtech', url: 'https://emtechdigital2024.thinkific.com/certificates/cuxqb1n9fd' },
    ],
  },
  {
    name: 'Cloud',
    certs: [
      { img: '/20.png', title: 'Cloud Computing Fundamentals', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/5987748?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/24.png', title: 'Cloud Essentials', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/6236140?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/19.png', title: 'Create and Manage Cloud Resources', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/5987748?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/22.png', title: 'Infrastructure in Google Cloud', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/6200991?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/18.png', title: 'Build and Secure Networks', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/6205914?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/23.png', title: 'Networking', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/6199621?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/21.png', title: 'Data, ML, and AI', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/6203052?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/25.png', title: 'Foundational Data, ML, and AI Tasks', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/6206431?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/26.png', title: 'Foundational Infrastructure Tasks', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/2bf89cfb-a62d-403b-aaa0-a83f3cb01a07/badges/6204958?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
      { img: '/28.png', title: 'AWS Educate: Cloud 101', provider: 'Amazon Web Services', url: 'https://www.credly.com/badges/5b56285e-133f-49fe-b106-12a0db13862c/linked_in_profile' },
    ],
  },
  {
    name: 'DevOps & Herramientas',
    certs: [
      { img: '/3.png', title: 'Curso Profesional de Docker', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/bf91419c-968e-40bc-a450-8306e39142da' },
      { img: '/4.png', title: 'Curso a fondo de GitHub', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/73c59f25-cdb0-4f98-af08-f15d05cf35f4' },
      { img: '/8.png', title: 'Git Profesional', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/2007b93d-9229-48bb-bbb8-8b566d02e6ca' },
      { img: '/10.png', title: 'DevOps: Bases y Conceptos', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/26c113ad-3677-4526-a7d3-ec1e8c389bab' },
    ],
  },
  {
    name: 'Desarrollo Web & UX',
    certs: [
      { img: '/31.png', title: 'Técnico en Integridad Web', provider: 'Capacítate para el Empleo', url: 'https://capacitateparaelempleo.org/verifica/5018bb38-7cf9-4d45-9529-8c125b35aa3a/024413ac-bd5f-48a0-96b4-3adddaa5aac9' },
      { img: '/capacitate_empleo_badge1.png', title: 'Asistente Web', provider: 'Capacítate para el Empleo', url: 'https://capacitateparaelempleo.org/verifica/5018bb38-7cf9-4d45-9529-8c125b35aa3a/e7bd8b1f-e5bb-41b8-bfa7-52362ed99e27' },
      { img: '/capacitate_empleo_badge.png', title: 'Diseñador UX', provider: 'Inttelmex IT', url: 'https://capacitateparaelempleo.org/verifica/5018bb38-7cf9-4d45-9529-8c125b35aa3a/fc0d9350-c00c-46e3-a4fe-3c3e7faf239f' },
      { img: '/2.png', title: 'Tester', provider: 'Capacítate para el Empleo', url: 'https://capacitateparaelempleo.org/verifica/5018bb38-7cf9-4d45-9529-8c125b35aa3a/8e246d75-cc5c-4386-933c-15a20d32ea91' },
    ],
  },
  {
    name: 'Programación',
    certs: [
      { img: '/9.png', title: 'JavaScript Profesional', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/eb3a7bf3-2b63-43b8-ba16-45196b758f2a' },
      { img: '/7.png', title: 'Curso de C++ Profesional', provider: 'Código Facilito', url: 'https://codigofacilito.com/certificates/71196180-5cf4-4356-aaf1-0dc11509ce73' },
    ],
  },
]

export default function Certifications() {
  const containerRef = useScrollAnimate<HTMLElement>()

  return (
    <main ref={containerRef}>
      <h1 className="titulo anim">Certificaciones</h1>
      {categories.map((cat) => (
        <section className="categoria-section anim" key={cat.name}>
          <h2 className="categoria-titulo">{cat.name}</h2>
          <div className="certificados-grid">
            {cat.certs.map((cert, i) => (
              <div className={`certificado-card anim anim-scale anim-d${Math.min(i + 1, 8)}`} key={i}>
                <img src={cert.img} alt={`Insignia de ${cert.title}`} />
                <div className="card-content">
                  <h3>{cert.title}</h3>
                  <p>{cert.provider}</p>
                  <div className="card-actions">
                    <a href={cert.url} target="_blank" rel="noreferrer" className="btn btn-primary">Ver</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
