import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe, Phone, Mail } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  {
    label: 'Cycles scolaires',
    to: '/cycles',
    children: [
      { to: '/cycles/maternelle', label: 'Maternelle' },
      { to: '/cycles/primaire', label: 'Primaire' },
      { to: '/cycles/college', label: 'Collège' },
      { to: '/cycles/lycee', label: 'Lycée' },
    ],
  },
  { to: '/admissions', label: 'Admissions' },
  { to: '/vie-scolaire', label: 'Vie scolaire' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [lang, setLang] = useState('FR')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs hidden md:block">
        <div className="container-custom flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+212500000000" className="flex items-center gap-1.5 hover:text-accent-300 transition">
              <Phone size={12} /> +212 5 00 00 00 00
            </a>
            <a href="mailto:contact@jeancocteau-school.com" className="flex items-center gap-1.5 hover:text-accent-300 transition">
              <Mail size={12} /> contact@jeancocteau-school.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admissions" className="hover:text-accent-300 transition">Préinscription en ligne</Link>
            <Link to="/carrieres" className="hover:text-accent-300 transition">Carrières</Link>
            <button
              onClick={() => setLang(lang === 'FR' ? 'EN' : lang === 'EN' ? 'AR' : 'FR')}
              className="flex items-center gap-1 hover:text-accent-300 transition"
            >
              <Globe size={12} /> {lang}
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="container-custom flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="Jean Cocteau International School"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-sm font-semibold transition rounded-lg ${
                        isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                      }`
                    }
                  >
                    {item.label} <ChevronDown size={14} />
                  </NavLink>
                  {openDropdown && (
                    <div className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-2 min-w-[220px] border-t-4 border-primary-500 overflow-hidden">
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          className={({ isActive }) =>
                            `block px-5 py-2.5 text-sm font-medium hover:bg-primary-50 hover:text-primary-600 transition ${
                              isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                            }`
                          }
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold transition rounded-lg ${
                      isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/admissions" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm">
              Inscription
            </Link>
            <button
              className="lg:hidden text-gray-900 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <nav className="container-custom py-4 flex flex-col">
              {navItems.map((item) => (
                <div key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-2 text-base font-semibold border-b border-gray-100 ${
                        isActive ? 'text-primary-500' : 'text-gray-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="pl-4 border-b border-gray-100">
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-gray-700 hover:text-primary-500"
                        >
                          — {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/admissions"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Inscription
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
