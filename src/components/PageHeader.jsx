import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHeader({ title, subtitle, breadcrumbs = [], image }) {
  return (
    <section
      className="relative text-white py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: image
          ? `linear-gradient(rgba(14,143,187,0.85), rgba(90,151,40,0.85)), url(${image})`
          : 'linear-gradient(135deg, #22b8e6 0%, #7cc242 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 text-center">
        <nav className="flex items-center justify-center gap-2 text-sm mb-4 text-white/90">
          <Link to="/" className="flex items-center gap-1 hover:text-accent-300">
            <Home size={14} /> Accueil
          </Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight size={14} />
              {b.to ? (
                <Link to={b.to} className="hover:text-accent-300">{b.label}</Link>
              ) : (
                <span className="text-accent-300 font-semibold">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 drop-shadow-lg">{title}</h1>
        <div className="w-24 h-1.5 bg-accent-300 mx-auto mb-6 rounded-full" />
        {subtitle && <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
