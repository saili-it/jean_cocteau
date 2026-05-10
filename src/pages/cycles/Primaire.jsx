import CyclePage from '../../components/CyclePage'

const SCHOOL_IMG = '/School pictures/School pictures'

export default function Primaire() {
  return (
    <CyclePage
      title="Primaire"
      age="6 - 10 ans"
      intro="L'âge des fondamentaux et de la curiosité du monde."
      heroImage={`${SCHOOL_IMG}/4f7ac21ba46d3e1cd623264946728653.JPG`}
      sections={[
        {
          label: 'Programme',
          title: 'Le programme français enrichi',
          text: 'Notre primaire suit le programme français, enrichi par des spécificités propres à notre école : ouverture internationale, sciences expérimentales et arts. Du CP au CM2, chaque élève bénéficie d\'un suivi personnalisé.',
          bullets: ['Programme officiel français', 'Du CP au CM2', '24h hebdomadaires + ateliers', 'Évaluations bienveillantes'],
          img: `${SCHOOL_IMG}/4f7ac21ba46d3e1cd623264946728653.JPG`,
        },
        {
          label: 'Langues',
          title: 'Un enseignement multilingue',
          text: 'Dès le primaire, les élèves bénéficient d\'un enseignement renforcé en français, en anglais et en arabe afin de développer des compétences linguistiques solides dans un environnement international.',
          bullets: ['Français langue d\'enseignement', 'Anglais renforcé', 'Arabe langue vivante', 'Préparation aux certifications Cambridge'],
          img: `${SCHOOL_IMG}/7ddc45d0e792197d5c438ad71c14111f.JPG`,
        },
        {
          label: 'Activités',
          title: 'Activités parascolaires riches',
          text: 'Plus de 20 activités parascolaires sont proposées : sport, arts, sciences, robotique, musique, théâtre... Pour cultiver la passion de chaque élève.',
          bullets: ['Sports collectifs et individuels', 'Robotique et coding', 'Théâtre et arts visuels', 'Échecs et jeux logiques'],
          img: `${SCHOOL_IMG}/97879aef9e4cc080a09850909c8cc08e.JPG`,
        },
        {
          label: 'Suivi',
          title: 'Accompagnement personnalisé',
          text: 'Chaque élève bénéficie d\'un suivi individualisé. Ateliers de soutien, aide aux devoirs et entretiens réguliers avec les familles garantissent une scolarité réussie.',
          bullets: ['Aide aux devoirs encadrée', 'Soutien personnalisé', 'Entretiens parents trimestriels', 'Cellule psy-pédagogique'],
          img: `${SCHOOL_IMG}/IMG_2855.jpg`,
        },
      ]}
      schedule={[
        { time: '08h00', activity: 'Accueil' },
        { time: '08h30', activity: 'Cours principaux' },
        { time: '10h30', activity: 'Cours' },
        { time: '11h15', activity: 'Récréation' },
        { time: '12h30', activity: 'Cours' },
        { time: '13h30', activity: 'Récréation' },
        { time: '15h30', activity: 'Cours' },
        { time: '16h00', activity: 'Cours' },
        { time: '16h30', activity: 'Sortie' },
      ]}
      gallery={[
        `${SCHOOL_IMG}/4f7ac21ba46d3e1cd623264946728653.JPG`,
        `${SCHOOL_IMG}/7ddc45d0e792197d5c438ad71c14111f.JPG`,
        `${SCHOOL_IMG}/97879aef9e4cc080a09850909c8cc08e.JPG`,
        `${SCHOOL_IMG}/IMG_2855.jpg`,
        `${SCHOOL_IMG}/591c94bb434fd2eadbb6247f006e0d12.JPG`,
        `${SCHOOL_IMG}/IMG_2870.jpg`,
      ]}
    />
  )
}
