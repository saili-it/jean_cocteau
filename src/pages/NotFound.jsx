import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container-custom text-center">
        <div className="text-9xl font-display font-extrabold text-gradient mb-4">404</div>
        <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-4">Page introuvable</h1>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full" />
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary">
          <Home size={18} className="mr-2" /> Retour à l'accueil
        </Link>
      </div>
    </section>
  )
}
