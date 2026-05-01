import { Link } from 'react-router-dom'
import { Clock, ArrowRight, Check } from 'lucide-react'
import PageHeader from './PageHeader'
import CTASection from './CTASection'

export default function CyclePage({
  title,
  age,
  intro,
  heroImage,
  sections = [],
  schedule = [],
  gallery = [],
}) {
  return (
    <>
      <PageHeader
        title={title}
        subtitle={`${age} • ${intro}`}
        breadcrumbs={[{ label: 'Cycles scolaires', to: '/cycles' }, { label: title }]}
        image={heroImage}
      />

      {sections.map((s, i) => (
        <section key={s.title} className={i % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gradient-to-b from-gray-50 to-white'}>
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <img src={s.img} alt={s.title} className="rounded-3xl shadow-xl" />
            </div>
            <div>
              <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">{s.label || 'Pédagogie'}</span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 mt-3 mb-4">{s.title}</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
              <p className="text-gray-700 leading-relaxed mb-6">{s.text}</p>
              {s.bullets && (
                <ul className="space-y-3">
                  {s.bullets.map((b, idx) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className={`w-7 h-7 rounded-full ${idx % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'} flex items-center justify-center shrink-0 mt-0.5 shadow-md`}>
                        <Check size={14} className="text-white" />
                      </span>
                      <span className="text-gray-800">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {schedule.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-600 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <Clock size={32} className="text-accent-300 mx-auto mb-4" />
              <h2 className="text-4xl font-display font-extrabold mb-3">Une journée type</h2>
              <div className="w-20 h-1.5 bg-accent-300 mx-auto rounded-full" />
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {schedule.map((s) => (
                <div key={s.time} className="flex items-center gap-6 bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/20 hover:border-accent-300 hover:bg-white/15 transition">
                  <div className="text-accent-300 font-display font-extrabold text-xl min-w-[100px]">{s.time}</div>
                  <div className="text-white/95">{s.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Galerie</span>
              <h2 className="text-4xl font-display font-extrabold text-gray-900 mt-3">Moments de vie</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((g, i) => (
                <div key={i} className="overflow-hidden rounded-2xl group aspect-square shadow-md hover:shadow-xl transition">
                  <img src={g} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/galerie" className="btn-outline">
                Voir toute la galerie <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
