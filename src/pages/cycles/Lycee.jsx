import CyclePage from '../../components/CyclePage'

const SCHOOL_IMG = '/School pictures/School pictures'

export default function Lycee() {
  return (
    <CyclePage
      title="Lycée"
      age="15 - 18 ans"
      intro="Préparer le Bac et les portes des meilleures universités."
      heroImage={`${SCHOOL_IMG}/IMG_2855.jpg`}
      sections={[
        {
          label: 'Filières',
          title: 'Filières et spécialités',
          text: 'De la Tronc Commun jusqu\'à la 2ème année du Baccalauréat, notre lycée accompagne les élèves dans un parcours académique structuré favorisant l\'excellence, l\'autonomie et la préparation aux études supérieures.',
          bullets: ['Bac général français', 'Bac International (IB)', 'Accompagnement et orientation', 'Préparation aux études supérieures'],
          img: `${SCHOOL_IMG}/IMG_2855.jpg`,
        },
        {
          label: 'Préparation Bac',
          title: 'Une préparation au Bac d\'excellence',
          text: 'Avec 98% de réussite et 70% de mentions, notre lycée se classe parmi les meilleurs de la région. Bacs blancs, soutien personnalisé, stages intensifs et préparation au Grand Oral.',
          bullets: ['98% de réussite au Bac', '70% avec mention', 'Stages intensifs vacances', 'Préparation Grand Oral'],
          img: `${SCHOOL_IMG}/IMG_2870.jpg`,
        },
        {
          label: 'Orientation',
          title: 'Orientation universitaire mondiale',
          text: 'Notre cellule d\'orientation post-bac accompagne chaque élève dans son projet des conseils d\'orientation et un accompagnement vers les études supérieures.',
          bullets: ['Conseiller d\'orientation post-bac', 'Préparation aux écoles supérieures', 'Suivi personnalisé des élèves', 'Salons et forums'],
          img: `${SCHOOL_IMG}/IMG_2339.jpg`,
        },
        {
          label: 'Excellence',
          title: 'Résultats et excellence',
          text: 'Nos anciens élèves poursuivent leurs études dans plusieurs établissements d\'enseignement supérieur reconnus au Maroc et à l\'international. Notre objectif est d\'accompagner chaque élève vers la réussite académique et professionnelle.',
          bullets: ['Top universités françaises', 'Universités européennes', 'Universités nationales', 'Réseau d\'anciens élèves'],
          img: `${SCHOOL_IMG}/97879aef9e4cc080a09850909c8cc08e.JPG`,
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
        `${SCHOOL_IMG}/IMG_2855.jpg`,
        `${SCHOOL_IMG}/IMG_2870.jpg`,
        `${SCHOOL_IMG}/IMG_2339.jpg`,
        `${SCHOOL_IMG}/97879aef9e4cc080a09850909c8cc08e.JPG`,
        `${SCHOOL_IMG}/591c94bb434fd2eadbb6247f006e0d12.JPG`,
        `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG`,
      ]}
    />
  )
}
