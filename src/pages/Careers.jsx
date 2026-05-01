import { Briefcase, MapPin, Clock, ArrowRight, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const jobs = [
  { title: 'Enseignant(e) de mathématiques - Lycée', type: 'CDI', location: 'Casablanca', dept: 'Lycée', desc: 'Enseignement des mathématiques en classes de Seconde, Première et Terminale.' },
  { title: 'Professeur(e) des écoles - Primaire', type: 'CDI', location: 'Casablanca', dept: 'Primaire', desc: 'Prise en charge d\'une classe de CE2. Pédagogie active et bienveillante.' },
  { title: 'Enseignant(e) d\'anglais - Collège', type: 'CDI', location: 'Casablanca', dept: 'Collège', desc: 'Enseignement de l\'anglais en sections internationales.' },
  { title: 'Animateur(trice) périscolaire', type: 'CDD', location: 'Casablanca', dept: 'Vie scolaire', desc: 'Animation des activités parascolaires (arts, sport, sciences).' },
  { title: 'Conseiller(e) pédagogique', type: 'CDI', location: 'Casablanca', dept: 'Direction', desc: 'Accompagnement pédagogique des enseignants et coordination.' },
]

export default function Careers() {
  return (
    <>
      <PageHeader
        title="Carrières"
        subtitle="Rejoignez une équipe passionnée au service de l'éducation et contribuez à l'excellence."
        breadcrumbs={[{ label: 'Carrières' }]}
      />

      {/* Pourquoi nous */}
      <section className="py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Travailler avec nous</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mt-3 mb-6">
              Faites partie de <span className="text-gradient">l'aventure</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Travailler à Jean Cocteau International School, c'est rejoindre une communauté
              d'enseignants et de professionnels passionnés, dans un cadre stimulant et bienveillant.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                { text: 'Formation continue et accompagnement', color: 'primary' },
                { text: 'Salaires attractifs et avantages', color: 'secondary' },
                { text: 'Cadre de travail moderne', color: 'accent' },
                { text: 'Évolution professionnelle', color: 'primary' },
                { text: 'Esprit d\'équipe et collaboration', color: 'secondary' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full bg-${item.color === 'accent' ? 'accent-400' : `${item.color}-500`}`} />
                  <span className="text-gray-800 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80" alt="Équipe" className="rounded-3xl shadow-2xl" />
        </div>
      </section>

      {/* Offres */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary-500 font-bold uppercase tracking-widest text-sm">Offres en cours</span>
            <h2 className="section-title mt-3">{jobs.length} offres disponibles</h2>
            <div className="gradient-divider" />
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((j) => (
              <div key={j.title} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition group cursor-pointer border-2 border-gray-100 hover:border-primary-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-bold">{j.dept}</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 font-bold">{j.type}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition">{j.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{j.desc}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {j.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> Temps plein</span>
                      <span className="flex items-center gap-1"><Briefcase size={12} /> {j.type}</span>
                    </div>
                  </div>
                  <button className="btn-primary whitespace-nowrap !py-2.5">
                    Postuler <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-2xl text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Send size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 mb-4">
            Candidature <span className="text-gradient">spontanée</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 mb-8">
            Vous ne trouvez pas l'offre qui vous correspond ? Envoyez-nous votre candidature spontanée.
          </p>
          <a href="mailto:rh@jeancocteau-school.com" className="btn-primary">
            Envoyer mon CV <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  )
}
