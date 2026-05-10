import { useState } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const SCHOOL_IMG = '/School pictures/School pictures'

const categories = ['Tous', 'Événement', 'Réussite', 'International', 'Pédagogie']

const categoryColors = {
  'Événement': 'bg-primary-500',
  'Réussite': 'bg-secondary-500',
  'International': 'bg-accent-400',
  'Pédagogie': 'bg-pink-500',
}

const articles = [
  { date: '10 Aout 2026', category: 'Événement', title: 'Journée portes ouvertes le 10 Aout', excerpt: 'Découvrez notre campus, rencontrez nos enseignants et posez vos questions.', img: `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG` },
  { date: '08 Mars 2026', category: 'Réussite', title: 'Concours national de mathématiques', excerpt: 'Trois élèves de Terminale ont brillé dans cette compétition prestigieuse.', img: `${SCHOOL_IMG}/IMG_2855.jpg` },
  { date: '01 Mars 2026', category: 'International', title: 'Voyage scolaire à Londres pour collégiens et lycéens', excerpt: 'Une semaine culturelle au cœur de Londres.', img: `${SCHOOL_IMG}/97879aef9e4cc080a09850909c8cc08e.JPG` },
  { date: '20 Septembre 2026', category: 'Pédagogie', title: 'Lancement du programme STEAM en primaire', excerpt: 'Sciences, technologie, ingénierie, arts et mathématiques au programme.', img: `${SCHOOL_IMG}/7ddc45d0e792197d5c438ad71c14111f.JPG` },
  { date: '10 Février 2026', category: 'Événement', title: 'Concert de la chorale du lycée', excerpt: 'Une soirée musicale exceptionnelle ouverte aux familles.', img: `${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG` },
  { date: '01 Février 2026', category: 'Réussite', title: 'Notre équipe robotique qualifiée pour FLL', excerpt: 'Les élèves du club robotique se sont distingués lors des sélections régionales.', img: `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG` },
]

export default function News() {
  const [filter, setFilter] = useState('Tous')
  const filtered = filter === 'Tous' ? articles : articles.filter((a) => a.category === filter)

  return (
    <>
      <PageHeader
        title="Actualités"
        subtitle="Suivez la vie de notre école : événements, réussites et actualités pédagogiques."
        breadcrumbs={[{ label: 'Actualités' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  filter === c
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <article key={a.title} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="relative h-56 overflow-hidden">
                  <img src={a.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className={`absolute top-4 left-4 ${categoryColors[a.category]} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {a.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <Calendar size={12} /> {a.date}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <a href="#" className="text-primary-500 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Lire l'article <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
