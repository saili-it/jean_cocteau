import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-300 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob" />
      </div>
      <div className="container-custom relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Donnez à votre enfant <span className="text-accent-300">l'avenir qu'il mérite</span>
        </h2>
        <div className="w-24 h-1.5 bg-accent-300 mx-auto mb-6 rounded-full" />
        <p className="text-lg text-white/95 max-w-2xl mx-auto mb-10">
          Réservez une visite de notre campus ou commencez le processus d'inscription dès aujourd'hui.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-accent">
            <Calendar size={18} className="mr-2" /> Demander une visite
          </Link>
          <Link to="/admissions" className="btn-white">
            Inscription <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
