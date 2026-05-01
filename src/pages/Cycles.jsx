import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Trophy } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const cycles = [
  {
    title: 'Maternelle',
    age: '3 - 5 ans',
    icon: Sparkles,
    color: 'pink',
    desc: 'Un environnement sécurisant pour les premiers pas dans l\'apprentissage. Éveil sensoriel, créativité, motricité, langages.',
    bullets: ['Pédagogie active', 'Bilingue dès la PS', 'Petits effectifs', 'Activités artistiques'],
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80',
    to: '/cycles/maternelle',
  },
  {
    title: 'Primaire',
    age: '6 - 10 ans',
    icon: BookOpen,
    color: 'primary',
    desc: 'Acquisition des fondamentaux dans un cadre stimulant. Lecture, mathématiques, sciences, langues et culture.',
    bullets: ['Programme français', 'Anglais quotidien', 'Sciences expérimentales', 'Activités sportives'],
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80',
    to: '/cycles/primaire',
  },
  {
    title: 'Collège',
    age: '11 - 14 ans',
    icon: GraduationCap,
    color: 'secondary',
    desc: 'Approfondissement et autonomie. Développement de l\'esprit critique, projets pluridisciplinaires et orientation.',
    bullets: ['Préparation Brevet', 'Sections internationales', 'Projets innovants', 'Orientation guidée'],
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80',
    to: '/cycles/college',
  },
  {
    title: 'Lycée',
    age: '15 - 18 ans',
    icon: Trophy,
    color: 'accent',
    desc: 'Préparation au Bac et à l\'enseignement supérieur. Spécialités, orientation et accompagnement personnalisé.',
    bullets: ['Bac français', 'Bac international', 'Préparation universitaire', 'Mentorat'],
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80',
    to: '/cycles/lycee',
  },
]

const ageBadgeColor = {
  pink: 'bg-pink-500',
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  accent: 'bg-accent-400',
}

const iconColor = {
  pink: 'bg-pink-100 text-pink-500',
  primary: 'bg-primary-100 text-primary-500',
  secondary: 'bg-secondary-100 text-secondary-600',
  accent: 'bg-accent-100 text-accent-600',
}

const bulletColor = {
  pink: 'bg-pink-500',
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  accent: 'bg-accent-400',
}

export default function Cycles() {
  return (
    <>
      <PageHeader
        title="Nos cycles scolaires"
        subtitle="De la maternelle au lycée, un parcours cohérent et exigeant pensé pour chaque âge."
        breadcrumbs={[{ label: 'Cycles scolaires' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-custom space-y-24">
          {cycles.map((c, i) => (
            <div key={c.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>:first-child]:order-2' : ''}`}>
              <div className="relative">
                <img src={c.img} alt={c.title} className="rounded-3xl shadow-2xl" />
                <div className={`absolute -bottom-6 -right-6 ${ageBadgeColor[c.color]} text-white px-6 py-4 rounded-2xl shadow-xl`}>
                  <div className="font-display font-extrabold text-2xl">{c.age}</div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${iconColor[c.color]} flex items-center justify-center`}>
                    <c.icon size={26} />
                  </div>
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Cycle</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-4">{c.title}</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{c.desc}</p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-gray-800">
                      <span className={`w-2 h-2 rounded-full ${bulletColor[c.color]}`} /> {b}
                    </li>
                  ))}
                </ul>
                <Link to={c.to} className="btn-primary">
                  Découvrir le cycle <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
