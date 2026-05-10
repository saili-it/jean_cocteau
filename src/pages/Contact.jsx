import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2, Facebook, Instagram, Linkedin } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const info = [
  { icon: MapPin, title: 'Adresse', lines: ['Sidi Moumen, Attacharouk', 'Casablanca, 20100, Maroc'], gradient: 'from-primary-500 to-primary-600' },
  { icon: Phone, title: 'Téléphone', lines: ['+212 522-728868', '+212 669-717478'], gradient: 'from-secondary-500 to-secondary-600' },
  { icon: Mail, title: 'Email', lines: ['gsjeancocteau@gmail.com'], gradient: 'from-accent-300 to-accent-500' },
  { icon: Clock, title: 'Horaires', lines: ['Lun - Ven : 8h - 18h', 'Sam : 9h - 12h'], gradient: 'from-pink-400 to-pink-500' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader
        title="Contactez-nous"
        subtitle="Une question ? Une demande de visite ? Notre équipe est à votre écoute."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {info.map((i) => (
            <div key={i.title} className="bg-white p-8 rounded-3xl text-center border-2 border-gray-100 hover:shadow-xl transition">
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${i.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                <i.icon size={24} className={i.title === 'Email' ? 'text-gray-900' : 'text-white'} />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{i.title}</h3>
              {i.lines.map((l) => (
                <p key={l} className="text-gray-600 text-sm break-words">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="container-custom grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">
              Envoyez-nous <span className="text-gradient">un message</span>
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
            <p className="text-gray-600 mb-8">Nous vous répondons généralement sous 24h ouvrées.</p>

            {submitted ? (
              <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 rounded-2xl">
                <CheckCircle2 size={32} className="text-secondary-500 mb-2" />
                <h3 className="text-xl font-display font-bold text-gray-900 mb-1">Message envoyé !</h3>
                <p className="text-gray-700">Nous vous recontacterons très prochainement.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Nom *" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 transition" />
                  <input required type="email" placeholder="Email *" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 transition" />
                </div>
                <input placeholder="Téléphone" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 transition" />
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 bg-white transition">
                  <option value="">Objet de la demande</option>
                  <option>Inscription</option>
                  <option>Visite du campus</option>
                  <option>Information générale</option>
                  <option>Carrières</option>
                  <option>Autre</option>
                </select>
                <textarea required rows="5" placeholder="Votre message *" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 transition" />
                <button type="submit" className="btn-primary w-full">Envoyer le message</button>
              </form>
            )}

            <div className="flex items-center gap-3 mt-8">
              <span className="text-sm text-gray-600 font-semibold">Suivez-nous :</span>
              {[
                { Icon: Facebook, hover: 'hover:bg-primary-500', href: 'https://www.facebook.com/share/1RtAHzqLxd/?mibextid=wwXIfr' },
                { Icon: Instagram, hover: 'hover:bg-secondary-500', href: 'https://www.instagram.com/jeancocteau_international?igsh=bTJieWU1aGJoa3g1' },
                { Icon: Linkedin, hover: 'hover:bg-primary-500', href: '#' },
              ].map(({ Icon, hover, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-full bg-gray-100 ${hover} hover:text-white text-gray-700 flex items-center justify-center transition`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">
              Nous <span className="text-gradient">trouver</span>
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
            <div className="rounded-3xl overflow-hidden shadow-xl h-[460px] border-2 border-gray-100">
              <iframe
                title="Carte"
                src="https://www.google.com/maps?q=Jean+Cocteau+international+school,Casablanca&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
