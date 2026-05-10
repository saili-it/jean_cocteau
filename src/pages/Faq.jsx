import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const groups = [
  {
    title: 'Inscriptions',
    color: 'primary',
    questions: [
      { q: 'Quand commencent les inscriptions ?', a: 'Les inscriptions ouvrent en janvier pour la rentrée de septembre. Les places restantes sont attribuées au fil de l\'eau.' },
      { q: 'À partir de quel âge accueillez-vous les enfants ?', a: 'Nous accueillons les enfants à partir de 3 ans en Petite Section de Maternelle, jusqu\'à la Terminale.' },
      { q: 'Y a-t-il des tests d\'admission ?', a: 'Oui, des tests adaptés au niveau et à l\'âge sont organisés pour évaluer le niveau scolaire et linguistique de l\'élève.' },
    ],
  },
  {
    title: 'Pédagogie',
    color: 'secondary',
    questions: [
      { q: 'Quelles sont les langues enseignées ?', a: 'Le français est notre langue principale. L\'anglais est enseigné quotidiennement dès la maternelle et l\'arabe à partir du primaire. L\'espagnol est proposé en option au collège et au lycée.' },
      { q: 'Suivez-vous le programme français ?', a: 'Oui, notre établissement suit le programme officiel de l\'Éducation Nationale française, enrichi de spécificités internationales.' },
      { q: 'Quel est l\'effectif moyen par classe ?', a: 'Nos classes accueillent en moyenne 18 élèves en maternelle, 22 en primaire, 24 au collège et au lycée.' },
    ],
  },
  {
    title: 'Vie scolaire',
    color: 'accent',
    questions: [
      { q: 'Y a-t-il un service de cantine ?', a: 'Oui, notre cantine propose une cuisine équilibrée préparée sur place chaque jour, avec options végétariennes et halal.' },
      { q: 'Proposez-vous un transport scolaire ?', a: 'Oui, des bus scolaires desservent toutes les zones de la ville, avec accompagnateurs et suivi GPS.' },
      { q: 'Quelles activités parascolaires proposez-vous ?', a: 'Plus de 30 clubs et activités : sport, arts, sciences, robotique, musique, théâtre, échecs, MUN...' },
    ],
  },
  {
    title: 'Frais & paiement',
    color: 'primary',
    questions: [
      { q: 'Quels sont les frais de scolarité ?', a: 'Les frais varient selon le cycle, de 12 000 MAD/an en maternelle à 18 000 MAD/an au lycée. Tous les détails sur la page Admissions.' },
      { q: 'Proposez-vous des bourses ?', a: 'Oui, nous proposons des bourses au mérite et des aides sociales étudiées au cas par cas.' },
      { q: 'Quelles sont les modalités de paiement ?', a: 'Paiement annuel, trimestriel ou mensuel possible. Facilités de paiement disponibles sur étude.' },
    ],
  },
]

const iconColors = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  accent: 'text-accent-500',
}

export default function Faq() {
  const [open, setOpen] = useState({ 0: 0 })

  const toggle = (gi, qi) => {
    setOpen((prev) => ({ ...prev, [gi]: prev[gi] === qi ? null : qi }))
  }

  return (
    <>
      <PageHeader
        title="Foire aux questions"
        subtitle="Toutes les réponses aux questions les plus fréquentes des familles."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          {groups.map((g, gi) => (
            <div key={g.title} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className={iconColors[g.color]} size={24} />
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900">{g.title}</h2>
              </div>
              <div className="space-y-3">
                {g.questions.map((item, qi) => (
                  <div key={qi} className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-primary-200 transition">
                    <button
                      onClick={() => toggle(gi, qi)}
                      className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition"
                    >
                      <span className="font-display font-bold text-gray-900">{item.q}</span>
                      <ChevronDown
                        size={20}
                        className={`text-primary-500 transition-transform shrink-0 ${open[gi] === qi ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {open[gi] === qi && (
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed">{item.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
