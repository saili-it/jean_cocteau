import { Link } from 'react-router-dom'
import {
  ArrowRight, Award, BookOpen, Globe, Heart, Users,
  Trophy, Calendar, ChevronRight, Star, Quote, Play,
  GraduationCap, Sparkles, Languages, Music
} from 'lucide-react'
import CTASection from '../components/CTASection'

const SCHOOL_IMG = '/School pictures/School pictures'
const WA_IMG = '/School pictures'

const cycles = [
  {
    title: 'Maternelle',
    age: '3 - 5 ans',
    icon: Sparkles,
    gradient: 'from-pink-400 to-pink-500',
    accent: 'bg-pink-100 text-pink-600',
    desc: 'Éveil, créativité et premières découvertes dans un environnement bienveillant.',
    to: '/cycles/maternelle',
    img: `${WA_IMG}/WhatsApp Image 2026-05-10 at 22.07.51 (1).jpeg`,
  },
  {
    title: 'Primaire',
    age: '6 - 10 ans',
    icon: BookOpen,
    gradient: 'from-primary-400 to-primary-500',
    accent: 'bg-primary-100 text-primary-600',
    desc: 'Apprentissages fondamentaux et ouverture sur le monde et les langues.',
    to: '/cycles/primaire',
    img: `${WA_IMG}/WhatsApp Image 2026-05-10 at 22.07.52.jpeg`,
  },
  {
    title: 'Collège',
    age: '11 - 14 ans',
    icon: GraduationCap,
    gradient: 'from-secondary-400 to-secondary-500',
    accent: 'bg-secondary-100 text-secondary-700',
    desc: 'Approfondissement des connaissances et développement de l\'autonomie.',
    to: '/cycles/college',
    img: `${WA_IMG}/WhatsApp Image 2026-05-10 at 22.07.58 (1).jpeg`,
  },
  {
    title: 'Lycée',
    age: '15 - 18 ans',
    icon: Trophy,
    gradient: 'from-accent-300 to-accent-500',
    accent: 'bg-accent-100 text-accent-700',
    desc: 'Préparation au Bac et orientation vers les meilleures universités.',
    to: '/cycles/lycee',
    img: `${WA_IMG}/WhatsApp Image 2026-05-10 at 22.24.05.jpeg`,
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
  { value: '1700+', label: 'Élèves', color: 'text-primary-500' },
  { value: '150+', label: 'Enseignants experts', color: 'text-secondary-500' },
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
    img: `${WA_IMG}/WhatsApp Image 2026-05-10 at 22.08.10 (2).jpeg`,
  },
  {
    date: '08 Mars 2026',
    category: 'Réussite',
    color: 'bg-secondary-500',
    title: 'Nos élèves médaillés au concours national',
    excerpt: 'Trois élèves de Terminale ont brillé au concours national de mathématiques.',
    img: `${WA_IMG}/WhatsApp Image 2026-05-10 at 22.33.20.jpeg`,
  },
  {
    date: '01 Mars 2026',
    category: 'International',
    color: 'bg-accent-400',
    title: 'Voyage scolaire à Londres pour les 3AC',
    excerpt: 'Une semaine culturelle au cœur de la capitale française.',
    img: `${WA_IMG}/WhatsApp Image 2026-05-10 at 22.35.58.jpeg`,
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
      <section className="relative bg-primary-50 overflow-hidden">
        {/* Decorative ribbons on far edges */}
        <svg className="absolute left-0 top-0 h-full w-24 md:w-32 text-secondary-400/60 pointer-events-none" viewBox="0 0 100 600" preserveAspectRatio="none" fill="none">
          <path d="M20 0 C 80 150, -20 300, 60 450, 30 550, 50 600" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
          <path d="M60 0 C 0 150, 80 300, 20 450, 50 550, 30 600" stroke="#33c5f0" strokeOpacity="0.7" strokeWidth="14" strokeLinecap="round" />
        </svg>
        <svg className="absolute right-0 top-0 h-full w-24 md:w-32 text-secondary-400/60 pointer-events-none" viewBox="0 0 100 600" preserveAspectRatio="none" fill="none">
          <path d="M80 0 C 20 150, 120 300, 40 450, 70 550, 50 600" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
          <path d="M40 0 C 100 150, 20 300, 80 450, 50 550, 70 600" stroke="#33c5f0" strokeOpacity="0.7" strokeWidth="14" strokeLinecap="round" />
        </svg>

        {/* Vertical social icons */}
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 flex-col gap-2">
          <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-md bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:scale-110 transition">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-md bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white flex items-center justify-center shadow-md hover:scale-110 transition">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-md bg-[#FF0000] text-white flex items-center justify-center shadow-md hover:scale-110 transition">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-md bg-[#0A66C2] text-white flex items-center justify-center shadow-md hover:scale-110 transition">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6 0h3.8v1.6h.05A4.16 4.16 0 0 1 16.6 9.2c4.06 0 4.8 2.67 4.8 6.14V21h-4v-4.96c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21H9V9.5Z"/></svg>
          </a>
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: stacked cycle titles + CTA */}
            <div className="text-center lg:text-left">
              <h1 className="font-display font-extrabold leading-[0.95] tracking-tight space-y-2 md:space-y-3">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-900">MATERNELLE</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-300">PRIMAIRE</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-600">COLLÈGE</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-secondary-500">LYCÉE</span>
              </h1>
              <div className="mt-10">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-display font-bold uppercase tracking-wide px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition"
                >
                  Inscriptions ouvertes <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right: cutout photo with blob shapes behind */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] aspect-square">
                {/* Green blob */}
                <div className="absolute inset-0 bg-secondary-400 -rotate-6 animate-blob" style={{ borderRadius: '42% 58% 55% 45% / 50% 45% 55% 50%' }} />
                {/* Blue blob */}
                <div className="absolute inset-2 sm:inset-4 bg-primary-300 rotate-3 animate-blob" style={{ borderRadius: '55% 45% 60% 40% / 45% 55% 45% 55%', animationDelay: '2s' }} />
                {/* Photo */}
                <img
                  src={`${WA_IMG}/WhatsApp Image 2026-05-10 at 22.07.37 (3).jpeg`}
                  alt="Élève souriant de Jean Cocteau"
                  className="absolute inset-0 w-full h-full object-cover rounded-[42%_58%_55%_45%/50%_45%_55%_50%] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10">
          <div className="container-custom">
            <div className="bg-white shadow-2xl rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 -mb-12 relative">
              {stats.map((s) => (
                <div key={s.label} className="text-center py-6 px-4">
                  <div className={`text-3xl lg:text-4xl font-display font-extrabold ${s.color}`}>{s.value}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-12" />
      </section>

      {/* Welcome / Présentation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-100/40 rounded-full blur-3xl" />

        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <img
              src={`${WA_IMG}/WhatsApp Image 2026-05-10 at 22.07.58 (1).jpeg`}
              alt="Campus"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-accent-300 to-accent-500 text-gray-900 p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-display font-extrabold">10+</div>
              <div className="text-sm font-semibold">Années d'excellence</div>
            </div>
            <div className="absolute -top-8 -left-8 bg-white p-5 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border-2 border-primary-100">
              <Award className="text-secondary-500" size={28} />
              <div>
                <div className="text-xs text-gray-500">Certifié</div>
                <div className="font-display font-bold text-gray-900">Cambridge</div>
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
              Depuis plus de 10 ans, Jean Cocteau International School accompagne les familles
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
