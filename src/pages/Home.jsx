import { Link } from 'react-router-dom'
import {
  ArrowRight, Award, BookOpen, Globe, Heart, Users,
  Trophy, Calendar, ChevronRight, Star, Quote, Play,
  GraduationCap, Sparkles, Languages, Music
} from 'lucide-react'
import CTASection from '../components/CTASection'

const cycles = [
  {
    title: 'Maternelle',
    age: '3 - 5 ans',
    icon: Sparkles,
    gradient: 'from-pink-400 to-pink-500',
    accent: 'bg-pink-100 text-pink-600',
    desc: 'Éveil, créativité et premières découvertes dans un environnement bienveillant.',
    to: '/cycles/maternelle',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
  },
  {
    title: 'Primaire',
    age: '6 - 10 ans',
    icon: BookOpen,
    gradient: 'from-primary-400 to-primary-500',
    accent: 'bg-primary-100 text-primary-600',
    desc: 'Apprentissages fondamentaux et ouverture sur le monde et les langues.',
    to: '/cycles/primaire',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  },
  {
    title: 'Collège',
    age: '11 - 14 ans',
    icon: GraduationCap,
    gradient: 'from-secondary-400 to-secondary-500',
    accent: 'bg-secondary-100 text-secondary-700',
    desc: 'Approfondissement des connaissances et développement de l\'autonomie.',
    to: '/cycles/college',
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
  },
  {
    title: 'Lycée',
    age: '15 - 18 ans',
    icon: Trophy,
    gradient: 'from-accent-300 to-accent-500',
    accent: 'bg-accent-100 text-accent-700',
    desc: 'Préparation au Bac et orientation vers les meilleures universités.',
    to: '/cycles/lycee',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  },
]

const features = [
  { icon: Globe, title: 'Approche internationale', desc: 'Une éducation ouverte sur le monde, multiculturelle et multilingue.', color: 'primary' },
  { icon: Languages, title: 'Trilinguisme', desc: 'Français, anglais et arabe enseignés dès le plus jeune âge.', color: 'secondary' },
  { icon: Award, title: 'Excellence académique', desc: '98% de réussite au Baccalauréat, dont 70% avec mention.', color: 'accent' },
  { icon: Heart, title: 'Bienveillance', desc: 'Un suivi personnalisé et un cadre épanouissant pour chaque enfant.', color: 'primary' },
  { icon: Users, title: 'Petits effectifs', desc: 'Classes à effectifs réduits pour un encadrement de qualité.', color: 'secondary' },
  { icon: Music, title: 'Activités riches', desc: 'Plus de 30 clubs et activités extrascolaires proposés.', color: 'accent' },
]

const stats = [
  { value: '1500+', label: 'Élèves', color: 'text-primary-500' },
  { value: '120+', label: 'Enseignants experts', color: 'text-secondary-500' },
  { value: '98%', label: 'Réussite au Bac', color: 'text-accent-500' },
  { value: '3', label: 'Langues principales', color: 'text-primary-500' },
]

const news = [
  {
    date: '15 Mars 2026',
    category: 'Événement',
    color: 'bg-primary-500',
    title: 'Journée portes ouvertes le 12 avril',
    excerpt: 'Découvrez notre campus, rencontrez nos enseignants et posez toutes vos questions.',
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
  },
  {
    date: '08 Mars 2026',
    category: 'Réussite',
    color: 'bg-secondary-500',
    title: 'Nos élèves médaillés au concours national',
    excerpt: 'Trois élèves de Terminale ont brillé au concours national de mathématiques.',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
  },
  {
    date: '01 Mars 2026',
    category: 'International',
    color: 'bg-accent-400',
    title: 'Voyage scolaire à Paris pour les 3ème',
    excerpt: 'Une semaine culturelle au cœur de la capitale française.',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
  },
]

const testimonials = [
  {
    name: 'Sarah El Idrissi',
    role: 'Parent d\'élève',
    text: 'Le cadre éducatif et l\'attention portée à chaque enfant sont remarquables. Notre fille s\'épanouit pleinement.',
    rating: 5,
  },
  {
    name: 'Karim Benali',
    role: 'Ancien élève, Promo 2022',
    text: 'Jean Cocteau m\'a donné les outils pour réussir mes études supérieures à l\'étranger. Une école d\'exception.',
    rating: 5,
  },
  {
    name: 'Amina Tazi',
    role: 'Parent d\'élève',
    text: 'Une équipe pédagogique à l\'écoute, des infrastructures modernes et des valeurs solides. Je recommande vivement.',
    rating: 5,
  },
]

const colorMap = {
  primary: 'bg-primary-100 text-primary-500 group-hover:bg-primary-500 group-hover:text-white',
  secondary: 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-500 group-hover:text-white',
  accent: 'bg-accent-100 text-accent-600 group-hover:bg-accent-400 group-hover:text-gray-900',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(14,143,187,0.92) 0%, rgba(90,151,40,0.75) 60%, rgba(14,143,187,0.6) 100%), url(https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1920&q=80)',
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob" />

        <div className="container-custom relative z-10 text-white py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-300/30 border border-accent-300/50 rounded-full text-accent-100 text-sm mb-6 backdrop-blur">
              <Sparkles size={14} /> Inscriptions ouvertes pour 2026 - 2027
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6 drop-shadow-2xl">
              L'excellence éducative,<br />
              <span className="text-accent-300">pour vos enfants</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed">
              Jean Cocteau International School offre une éducation premium, multilingue et bienveillante,
              de la maternelle au lycée, préparant chaque élève à devenir un citoyen du monde accompli.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-accent">
                Inscription en ligne <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-white">
                <Calendar size={18} className="mr-2" /> Visiter le campus
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold hover:text-accent-300 transition group">
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mr-2 group-hover:bg-accent-300 group-hover:text-gray-900 transition">
                  <Play size={14} className="ml-0.5" />
                </span>
                Voir la vidéo
              </button>
            </div>
          </div>
        </div>

        {/* Floating stat card */}
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
          <div className="container-custom">
            <div className="bg-white/95 backdrop-blur shadow-2xl rounded-t-3xl grid grid-cols-4 divide-x divide-gray-100">
              {stats.map((s) => (
                <div key={s.label} className="text-center py-6 px-4">
                  <div className={`text-3xl lg:text-4xl font-display font-extrabold ${s.color}`}>{s.value}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Présentation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-100/40 rounded-full blur-3xl" />

        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80"
              alt="Campus"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-accent-300 to-accent-500 text-gray-900 p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-display font-extrabold">25+</div>
              <div className="text-sm font-semibold">Années d'excellence</div>
            </div>
            <div className="absolute -top-8 -left-8 bg-white p-5 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border-2 border-primary-100">
              <Award className="text-secondary-500" size={28} />
              <div>
                <div className="text-xs text-gray-500">Certifié</div>
                <div className="font-display font-bold text-gray-900">AEFE</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Bienvenue</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mt-3 mb-6">
              Une école pensée pour <span className="text-gradient">révéler chaque enfant</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Depuis plus de 25 ans, Jean Cocteau International School accompagne les familles
              dans l'éducation de leurs enfants. Notre pédagogie allie rigueur académique,
              ouverture culturelle et bienveillance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre campus moderne, nos enseignants passionnés et notre projet pédagogique
              unique offrent à chaque élève les conditions idéales pour s'épanouir et réussir.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { text: 'Programme international', color: 'primary' },
                { text: 'Petits effectifs', color: 'secondary' },
                { text: 'Suivi personnalisé', color: 'primary' },
                { text: 'Activités enrichissantes', color: 'secondary' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full bg-${item.color}-500 flex items-center justify-center shrink-0 shadow-md`}>
                    <ChevronRight size={14} className="text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <Link to="/a-propos" className="btn-primary">
              Découvrir l'école <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cycles */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Notre offre</span>
            <h2 className="section-title mt-3">Nos <span className="text-gradient">cycles scolaires</span></h2>
            <div className="gradient-divider" />
            <p className="section-subtitle">
              Un parcours complet, cohérent et exigeant, de la première rentrée aux portes de l'université.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cycles.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-70 group-hover:opacity-50 transition`} />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <c.icon size={22} className="text-gray-900" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs uppercase tracking-wider opacity-90 font-semibold">{c.age}</div>
                    <div className="text-2xl font-display font-extrabold">{c.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{c.desc}</p>
                  <span className="text-primary-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary-500 font-bold uppercase tracking-widest text-sm">Nos atouts</span>
            <h2 className="section-title mt-3">Pourquoi choisir <span className="text-gradient">Jean Cocteau</span></h2>
            <div className="gradient-divider" />
            <p className="section-subtitle">
              Six raisons qui font de notre école un choix d'exception pour votre enfant.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${colorMap[f.color]} flex items-center justify-center mb-5 transition`}>
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Actualités</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mt-3">
                Ce qui se passe <span className="text-gradient">à l'école</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mt-4 rounded-full" />
            </div>
            <Link to="/actualites" className="btn-outline whitespace-nowrap">
              Toutes les actualités <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((n) => (
              <article key={n.title} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="relative h-56 overflow-hidden">
                  <img src={n.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className={`absolute top-4 left-4 ${n.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {n.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <Calendar size={12} /> {n.date}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition">{n.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{n.excerpt}</p>
                  <Link to="/actualites" className="text-primary-500 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Lire l'article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary-500 font-bold uppercase tracking-widest text-sm">Témoignages</span>
            <h2 className="section-title mt-3">Ce qu'ils disent <span className="text-gradient">de nous</span></h2>
            <div className="gradient-divider" />
            <p className="section-subtitle">
              Parents et anciens élèves partagent leur expérience à Jean Cocteau.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={t.name} className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:shadow-xl transition">
                <Quote className="absolute top-6 right-6 text-primary-200" size={40} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={18} className="fill-accent-300 text-accent-300" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${i % 2 === 0 ? 'from-primary-400 to-primary-600' : 'from-secondary-400 to-secondary-600'} flex items-center justify-center text-white font-display font-bold shadow-lg`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
