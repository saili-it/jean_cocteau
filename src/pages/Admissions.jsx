import { useState } from 'react'
import { FileText, ClipboardCheck, MessageCircle, CheckCircle2, Download, ChevronDown } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const steps = [
  { icon: FileText, title: 'Demande en ligne', desc: 'Remplissez notre formulaire de préinscription en quelques minutes.', color: 'primary' },
  { icon: MessageCircle, title: 'Entretien', desc: 'Rencontre avec notre équipe pédagogique et l\'élève.', color: 'secondary' },
  { icon: ClipboardCheck, title: 'Tests d\'admission', desc: 'Évaluation adaptée au niveau et à l\'âge de l\'enfant.', color: 'accent' },
  { icon: CheckCircle2, title: 'Confirmation', desc: 'Réponse sous 7 jours ouvrés et finalisation du dossier.', color: 'primary' },
]

const stepColors = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  accent: 'bg-accent-400',
}

const documents = [
  'Livret de famille (copie)',
  'Acte de naissance de l\'élève',
  'Bulletins scolaires des 2 dernières années',
  'Certificat médical récent',
  '4 photos d\'identité récentes',
  'Pièce d\'identité des parents',
  'Justificatif de domicile',
]

const fees = [
  { cycle: 'Maternelle', annual: '45 000 MAD', monthly: '4 500 MAD' },
  { cycle: 'Primaire', annual: '55 000 MAD', monthly: '5 500 MAD' },
  { cycle: 'Collège', annual: '65 000 MAD', monthly: '6 500 MAD' },
  { cycle: 'Lycée', annual: '75 000 MAD', monthly: '7 500 MAD' },
]

const faqs = [
  { q: 'Quand commencent les inscriptions ?', a: 'Les inscriptions ouvrent en janvier pour la rentrée de septembre suivante. Les places restantes sont attribuées au fil de l\'eau.' },
  { q: 'Y a-t-il une liste d\'attente ?', a: 'Oui, en cas de classes complètes, les candidats sont placés sur liste d\'attente et contactés dès qu\'une place se libère.' },
  { q: 'Proposez-vous des bourses ?', a: 'Nous proposons des bourses au mérite et des aides sociales étudiées au cas par cas. Contactez notre service admissions pour en savoir plus.' },
  { q: 'Faut-il être bilingue pour intégrer l\'école ?', a: 'Non. Nous accueillons les élèves de tous niveaux linguistiques et proposons un accompagnement adapté pour les non-francophones.' },
]

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="Rejoignez la communauté Jean Cocteau. Découvrez notre processus d'admission simple et transparent."
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Procédure</span>
            <h2 className="section-title mt-3">4 étapes pour <span className="text-gradient">rejoindre l'école</span></h2>
            <div className="gradient-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-white p-8 rounded-3xl shadow-md border-2 border-gray-100 hover:border-primary-200 hover:shadow-2xl transition">
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full ${stepColors[s.color]} text-white font-display font-extrabold text-xl flex items-center justify-center shadow-lg`}>
                  {i + 1}
                </div>
                <s.icon size={36} className={`text-${s.color === 'accent' ? 'accent-500' : `${s.color}-500`} mb-5`} />
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Fees */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Documents requis</h3>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
            <ul className="space-y-3 mb-8">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="text-secondary-500 shrink-0 mt-0.5" size={20} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="btn-outline inline-flex">
              <Download size={18} className="mr-2" /> Télécharger la brochure
            </a>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Frais de scolarité</h3>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 rounded-full" />
            <p className="text-gray-600 text-sm mb-6">Tarifs 2026-2027, hors frais d'inscription (3 000 MAD).</p>
            <div className="overflow-hidden rounded-2xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                  <tr>
                    <th className="text-left p-4 font-display">Cycle</th>
                    <th className="text-right p-4 font-display">Annuel</th>
                    <th className="text-right p-4 font-display">Mensuel</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={f.cycle} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-gray-900">{f.cycle}</td>
                      <td className="p-4 text-right text-gray-700">{f.annual}</td>
                      <td className="p-4 text-right text-gray-700">{f.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">* Bourses et facilités de paiement disponibles sur étude du dossier.</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">Formulaire</span>
            <h2 className="section-title mt-3">Demande de <span className="text-gradient">préinscription</span></h2>
            <div className="gradient-divider" />
            <p className="section-subtitle">Complétez ce formulaire — nous vous recontactons sous 48h.</p>
          </div>
          {submitted ? (
            <div className="bg-secondary-50 border-l-4 border-secondary-500 p-8 rounded-2xl text-center">
              <CheckCircle2 size={48} className="text-secondary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Demande envoyée !</h3>
              <p className="text-gray-700">Notre équipe admissions vous recontactera très prochainement.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl shadow-lg border-2 border-gray-100 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Prénom du parent *" name="parent-firstname" required />
                <Field label="Nom du parent *" name="parent-lastname" required />
                <Field label="Email *" name="email" type="email" required />
                <Field label="Téléphone *" name="phone" type="tel" required />
                <Field label="Prénom de l'élève *" name="child-firstname" required />
                <Field label="Date de naissance *" name="birthdate" type="date" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Cycle souhaité *</label>
                <select required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 bg-white transition">
                  <option value="">Sélectionner</option>
                  <option>Maternelle</option>
                  <option>Primaire</option>
                  <option>Collège</option>
                  <option>Lycée</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 bg-white transition" placeholder="Précisez vos questions ou attentes..." />
              </div>
              <button type="submit" className="btn-primary w-full">Envoyer ma demande</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-secondary-500 font-bold uppercase tracking-widest text-sm">FAQ</span>
            <h2 className="section-title mt-3">Questions fréquentes</h2>
            <div className="gradient-divider" />
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition"
                >
                  <span className="font-display font-bold text-gray-900 text-lg">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary-500 transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 bg-white transition"
      />
    </div>
  )
}
