import { Award, BookOpen, Heart, Target, Users, Eye, Compass, Building2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const SCHOOL_IMG = '/School pictures/School pictures'

const values = [
  { icon: Heart, title: 'Bienveillance', desc: 'Un cadre rassurant où chaque élève se sent écouté, respecté et soutenu.', color: 'primary' },
  { icon: Award, title: 'Excellence', desc: 'Une exigence académique élevée, sans jamais sacrifier l\'épanouissement.', color: 'secondary' },
  { icon: Compass, title: 'Ouverture', desc: 'Un esprit international, multiculturel et tourné vers le monde.', color: 'accent' },
  { icon: Users, title: 'Communauté', desc: 'Une école-famille où parents, élèves et enseignants avancent ensemble.', color: 'primary' },
]

const team = [
  { name: 'Mme. Mériame Bouirig', role: 'Directrice Générale', img: `${SCHOOL_IMG}/IMG_2339.jpg` },
  { name: 'M. Smail Sarab', role: 'Responsable Primaire', img: `${SCHOOL_IMG}/4f7ac21ba46d3e1cd623264946728653.JPG` },
  { name: 'Mme. Wafaa Khalfi', role: 'Responsable Maternelle', img: `${SCHOOL_IMG}/0cf0007c031bed1200c44af205da4e1e_kid.JPG` },
  { name: 'M. Driss Elgraini', role: 'Responsable Collège & Lycée', img: `${SCHOOL_IMG}/591c94bb434fd2eadbb6247f006e0d12.JPG` },
]

const partners = ['Cambridge']

const colorMap = {
  primary: 'bg-primary-100 text-primary-500',
  secondary: 'bg-secondary-100 text-secondary-600',
  accent: 'bg-accent-100 text-accent-600',
}

export default function About() {
  return (
    <>
      <PageHeader
        title="À propos de nous"
        subtitle="Une école d'exception, une histoire d'engagement et de passion pour l'éducation."
        breadcrumbs={[{ label: 'À propos' }]}
      />

      {/* Histoire */}
      <section className="py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Notre histoire</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mt-3 mb-6">
              10 ans d'<span className="text-gradient">excellence éducative</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Fondée en 2019 par un groupe d'éducateurs visionnaires, Jean Cocteau International School
              est née d'une ambition : offrir une éducation de très haut niveau, alliant rigueur académique
              et ouverture sur le monde.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              De ses premières classes maternelles à son lycée d'aujourd'hui, l'école n'a cessé de grandir,
              s'enrichissant de partenariats prestigieux, d'enseignants passionnés et d'infrastructures modernes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aujourd'hui, plus de 1 700 élèves construisent leur avenir chaque jour.
            </p>
          </div>
          <div className="relative">
            <img src={`${SCHOOL_IMG}/IMG_2870.jpg`} alt="Campus" className="rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-display font-extrabold text-accent-300">2019</div>
              <div className="text-sm">Année de fondation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: 'Notre vision', text: 'Éveiller des esprits curieux et responsables, prêts à construire l\'avenir avec créativité et confiance, tout en cultivant un fort attachement aux valeurs de leur société.', color: 'from-primary-500 to-primary-600' },
            { icon: Target, title: 'Notre mission', text: 'Offrir à chaque élève une éducation d\'excellence, multilingue et bienveillante, qui développe pleinement son potentiel académique, humain et culturel.', color: 'from-secondary-500 to-secondary-600' },
          ].map((b) => (
            <div key={b.title} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">
              <div className={`w-16 h-16 bg-gradient-to-br ${b.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <b.icon size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-display font-extrabold text-gray-900 mb-4">{b.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Nos valeurs</span>
            <h2 className="section-title mt-3">Les piliers de <span className="text-gradient">notre identité</span></h2>
            <div className="gradient-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-8 rounded-3xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${colorMap[v.color]} flex items-center justify-center mb-5`}>
                  <v.icon size={26} />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mot de la direction */}
      <section className="py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container-custom grid lg:grid-cols-3 gap-12 items-center relative z-10">
          <div className="lg:col-span-1">
            <img src={`${SCHOOL_IMG}/IMG_2339.jpg`} alt="Direction" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="lg:col-span-2">
            <span className="text-accent-300 font-bold uppercase tracking-widest text-sm">Mot de la direction</span>
            <h2 className="text-4xl font-display font-extrabold mt-3 mb-6">"Chaque enfant porte en lui une étoile à révéler."</h2>
            <p className="text-white/95 leading-relaxed mb-4">
              Diriger Jean Cocteau International School est un honneur et une responsabilité que je porte avec humilité.
              Notre engagement quotidien est d'offrir à chaque enfant les conditions de son épanouissement :
              un cadre exigeant mais bienveillant, des enseignants passionnés et un projet pédagogique solide.
            </p>
            <p className="text-white/95 leading-relaxed mb-6">
              Bienvenue dans une école où l'apprentissage devient passion, où la curiosité devient compétence,
              et où chaque élève trouve sa voie.
            </p>
            <div>
              <div className="font-display font-bold text-xl">Mme. Mériame Bouirig</div>
              <div className="text-accent-300">Directrice Générale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary-500 font-bold uppercase tracking-widest text-sm">Notre équipe</span>
            <h2 className="section-title mt-3">Une direction <span className="text-gradient">d'expérience</span></h2>
            <div className="gradient-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="group text-center">
                <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[3/4] shadow-lg">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent opacity-60 group-hover:opacity-80 transition" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg">{m.name}</h3>
                <p className="text-primary-500 text-sm font-semibold">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus / Infrastructures */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Notre campus</span>
            <h2 className="section-title mt-3">Des infrastructures <span className="text-gradient">d'exception</span></h2>
            <div className="gradient-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Salles modernes', desc: '60 salles équipées de tableaux interactifs et matériel pédagogique de pointe.', img: `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG` },
              { title: 'Centre sportif', desc: 'Gymnase, terrains, piscine et espaces dédiés au sport et au bien-être.', img: `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG` },
              { title: 'Laboratoires & arts', desc: 'Laboratoires sciences, salles de musique, arts plastiques et théâtre.', img: `${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG` },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="h-56 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <Building2 size={24} className="text-primary-500 mb-3" />
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-8">Certifications et partenariats</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <div key={p} className="text-2xl md:text-3xl font-display font-bold text-gray-300 hover:text-primary-500 transition cursor-pointer">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
