import { Music, Trophy, Palette, Bus, Utensils, Shield, Users, Cog } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const SCHOOL_IMG = '/School pictures/School pictures'

const clubs = [
  { icon: Music, name: 'Musique', desc: 'Chorale, orchestre, piano, guitare et percussions.', color: 'primary' },
  { icon: Palette, name: 'Arts plastiques', desc: 'Peinture, sculpture, photographie et arts numériques.', color: 'secondary' },
  { icon: Trophy, name: 'Sports', desc: 'Football, basket, natation, tennis, échecs, judo.', color: 'accent' },
  { icon: Users, name: 'Théâtre', desc: 'Atelier théâtre français, anglais et arabe.', color: 'secondary' },
  { icon: Cog, name: 'Robotique', desc: 'Programmation, électronique et compétitions FLL.', color: 'accent' },
]

const clubColors = {
  primary: 'bg-primary-100 text-primary-500 group-hover:bg-primary-500 group-hover:text-white',
  secondary: 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-500 group-hover:text-white',
  accent: 'bg-accent-100 text-accent-600 group-hover:bg-accent-400 group-hover:text-gray-900',
}

const events = [
  { date: '12 Avril', title: 'Journée portes ouvertes', img: `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG` },
  { date: '25 Mai', title: 'Gala annuel des arts', img: `${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG` },
  { date: '10 Juin', title: 'Tournoi sportif inter-classes', img: `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG` },
  { date: '20 Juin', title: 'Cérémonie de fin d\'année', img: `${SCHOOL_IMG}/IMG_2870.jpg` },
]

const services = [
  { icon: Utensils, title: 'Cantine', desc: 'Cuisine maison, équilibrée préparée chaque jour sur place. Menus variés.', gradient: 'from-primary-500 to-primary-600' },
  { icon: Bus, title: 'Transport scolaire', desc: 'Service de bus dans toutes les zones de la ville. Accompagnateurs à bord, horaires fiables.', gradient: 'from-secondary-500 to-secondary-600' },
  { icon: Shield, title: 'Sécurité', desc: 'Campus surveillé 24/7, contrôle d\'accès, vidéosurveillance, infirmière sur place et plan d\'urgence.', gradient: 'from-accent-300 to-accent-500' },
]

export default function SchoolLife() {
  return (
    <>
      <PageHeader
        title="Vie scolaire"
        subtitle="Une école qui ne se limite pas aux salles de classe : clubs, événements, sport, arts et bien plus."
        breadcrumbs={[{ label: 'Vie scolaire' }]}
        image={`${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG`}
      />

      {/* Clubs */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Activités</span>
            <h2 className="section-title mt-3">Plus de <span className="text-gradient">30 clubs et activités</span></h2>
            <div className="gradient-divider" />
            <p className="section-subtitle">Sport, arts, sciences, langues : chaque élève trouve sa passion.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c) => (
              <div key={c.name} className="p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition group">
                <div className={`w-14 h-14 rounded-2xl ${clubColors[c.color]} flex items-center justify-center mb-5 transition`}>
                  <c.icon size={26} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-gray-900">{c.name}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary-500 font-bold uppercase tracking-widest text-sm">Calendrier</span>
            <h2 className="section-title mt-3">Événements à venir</h2>
            <div className="gradient-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((e) => (
              <div key={e.title} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition group">
                <div className="h-48 overflow-hidden">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-primary-500 font-bold text-sm mb-2">{e.date}</div>
                  <h3 className="text-lg font-display font-bold text-gray-900">{e.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Services</span>
            <h2 className="section-title mt-3">Au quotidien <span className="text-gradient">à l'école</span></h2>
            <div className="gradient-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="text-center p-10 rounded-3xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <s.icon size={32} className={s.title === 'Sécurité' ? 'text-gray-900' : 'text-white'} />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Arts banner */}
      <section className="py-24 bg-gradient-to-br from-primary-500 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container-custom grid md:grid-cols-2 gap-10 relative z-10">
          <div className="relative h-80 rounded-3xl overflow-hidden group shadow-2xl">
            <img src={`${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG`} alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Trophy size={32} className="text-accent-300 mb-2" />
              <h3 className="text-3xl font-display font-extrabold">Sports</h3>
              <p className="text-white/90">15 disciplines, 8 équipes inter-écoles</p>
            </div>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden group shadow-2xl">
            <img src={`${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG`} alt="Arts" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Palette size={32} className="text-accent-300 mb-2" />
              <h3 className="text-3xl font-display font-extrabold">Arts & culture</h3>
              <p className="text-white/90">Théâtre, musique, peinture et plus</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
