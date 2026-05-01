import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-1">Restez informés</h3>
            <p className="text-white/90 text-sm">Recevez les actualités et événements de l'école directement dans votre boîte mail.</p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-400 border-2 border-transparent focus:border-accent-300 focus:outline-none"
            />
            <button type="submit" className="btn-accent !py-3">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="container-custom py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="bg-white p-3 rounded-2xl inline-block mb-4">
            <img src="/logo.png" alt="Jean Cocteau International School" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Une école d'excellence offrant une éducation internationale, multilingue et bienveillante, de la maternelle au lycée.
          </p>
          <div className="flex gap-2">
            {[
              { Icon: Facebook, color: 'hover:bg-primary-500' },
              { Icon: Instagram, color: 'hover:bg-secondary-500' },
              { Icon: Linkedin, color: 'hover:bg-primary-500' },
              { Icon: Youtube, color: 'hover:bg-secondary-500' },
            ].map(({ Icon, color }, i) => (
              <a key={i} href="#" className={`w-9 h-9 rounded-full bg-gray-800 ${color} flex items-center justify-center transition`}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-4">
            <span className="border-b-2 border-accent-300 pb-2">Navigation</span>
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ['/', 'Accueil'],
              ['/a-propos', 'À propos'],
              ['/cycles', 'Cycles scolaires'],
              ['/admissions', 'Admissions'],
              ['/vie-scolaire', 'Vie scolaire'],
              ['/galerie', 'Galerie'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-accent-300 transition flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent-300" /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-4">
            <span className="border-b-2 border-accent-300 pb-2">Ressources</span>
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ['/faq', 'FAQ'],
              ['/actualites', 'Actualités'],
              ['/carrieres', 'Carrières'],
              ['/admissions', 'Préinscription'],
              ['/contact', 'Demander une visite'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-accent-300 transition flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent-300" /> {label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#" className="text-gray-400 hover:text-accent-300 transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent-300" /> Brochure (PDF)
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-4">
            <span className="border-b-2 border-accent-300 pb-2">Contact</span>
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-accent-300 shrink-0 mt-0.5" />
              <span>Avenue de l'Excellence<br />Casablanca, Maroc</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-accent-300 shrink-0 mt-0.5" />
              <a href="tel:+212500000000" className="hover:text-accent-300">+212 5 00 00 00 00</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-accent-300 shrink-0 mt-0.5" />
              <a href="mailto:contact@jeancocteau-school.com" className="hover:text-accent-300 break-all">contact@jeancocteau-school.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Jean Cocteau International School. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent-300">Mentions légales</a>
            <a href="#" className="hover:text-accent-300">Politique de confidentialité</a>
            <a href="#" className="hover:text-accent-300">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
