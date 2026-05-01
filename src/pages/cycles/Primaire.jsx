import CyclePage from '../../components/CyclePage'

export default function Primaire() {
  return (
    <CyclePage
      title="Primaire"
      age="6 - 10 ans"
      intro="L'âge des fondamentaux et de la curiosité du monde."
      heroImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
      sections={[
        {
          label: 'Programme',
          title: 'Le programme français enrichi',
          text: 'Notre primaire suit le programme officiel français, enrichi par des spécificités propres à notre école : ouverture internationale, sciences expérimentales et arts. Du CP au CM2, chaque élève bénéficie d\'un suivi personnalisé.',
          bullets: ['Programme officiel français', 'Du CP au CM2', '24h hebdomadaires + ateliers', 'Évaluations bienveillantes'],
          img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=80',
        },
        {
          label: 'Langues',
          title: 'Trois langues enseignées',
          text: 'Dès le CP, les élèves bénéficient d\'un enseignement renforcé en anglais (5h/semaine) et d\'un apprentissage de l\'arabe. À partir du CM1, l\'espagnol est proposé en option.',
          bullets: ['Anglais renforcé (5h/sem.)', 'Arabe langue vivante', 'Espagnol en option (CM1)', 'Certifications Cambridge'],
          img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80',
        },
        {
          label: 'Activités',
          title: 'Activités parascolaires riches',
          text: 'Plus de 20 activités parascolaires sont proposées : sport, arts, sciences, robotique, musique, théâtre... Pour cultiver la passion de chaque élève.',
          bullets: ['Sports collectifs et individuels', 'Robotique et coding', 'Théâtre et arts visuels', 'Échecs et jeux logiques'],
          img: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=900&q=80',
        },
        {
          label: 'Suivi',
          title: 'Accompagnement personnalisé',
          text: 'Chaque élève bénéficie d\'un suivi individualisé. Ateliers de soutien, aide aux devoirs et entretiens réguliers avec les familles garantissent une scolarité réussie.',
          bullets: ['Aide aux devoirs encadrée', 'Soutien personnalisé', 'Entretiens parents trimestriels', 'Cellule psy-pédagogique'],
          img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80',
        },
      ]}
      schedule={[
        { time: '08h00', activity: 'Accueil' },
        { time: '08h15', activity: 'Cours principaux (français, mathématiques)' },
        { time: '10h15', activity: 'Récréation' },
        { time: '10h30', activity: 'Anglais ou sciences' },
        { time: '12h00', activity: 'Déjeuner' },
        { time: '13h30', activity: 'Cours et ateliers' },
        { time: '15h30', activity: 'Récréation' },
        { time: '16h00', activity: 'Activités parascolaires' },
        { time: '17h00', activity: 'Sortie' },
      ]}
      gallery={[
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
        'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=600&q=80',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      ]}
    />
  )
}
