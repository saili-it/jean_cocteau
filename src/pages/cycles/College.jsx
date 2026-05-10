import CyclePage from '../../components/CyclePage'

const SCHOOL_IMG = '/School pictures/School pictures'

export default function College() {
  return (
    <CyclePage
      title="Collège"
      age="11 - 14 ans"
      intro="Approfondir ses connaissances et gagner en autonomie."
      heroImage={`${SCHOOL_IMG}/591c94bb434fd2eadbb6247f006e0d12.JPG`}
      sections={[
        {
          label: 'Parcours académique',
          title: 'Un parcours exigeant et structuré',
          text: 'De la 1AC à la 3AC, les élèves développent leurs compétences académiques dans un environnement structuré et stimulant. Notre objectif est de les préparer efficacement au cycle du lycée tout en renforçant leur autonomie, leur esprit critique et leur ouverture internationale.',
          bullets: ['Programme pédagogique moderne', 'Enseignement multilingue', 'Préparation au cycle lycée', 'Développement personnel et orientation'],
          img: `${SCHOOL_IMG}/591c94bb434fd2eadbb6247f006e0d12.JPG`,
        },
        {
          label: 'Préparation examens',
          title: 'Accompagnement académique renforcé',
          text: 'Tout au long du cycle collège, les élèves bénéficient d\'un accompagnement pédagogique structuré visant à renforcer leurs acquis, développer leur méthodologie de travail et préparer leur réussite au cycle lycée.',
          bullets: ['Suivi pédagogique continu', 'Ateliers méthodologiques', 'Sessions de soutien et révision', 'Accompagnement individualisé'],
          img: `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG`,
        },
        {
          label: 'Vie au collège',
          title: 'Clubs et projets innovants',
          text: 'Le collège offre un environnement dynamique où les élèves participent à diverses activités éducatives, culturelles et sportives favorisant l\'épanouissement personnel, l\'esprit d\'équipe et la créativité.',
          bullets: ['Activités culturelles et artistiques', 'Clubs éducatifs', 'Activités sportives', 'Projets pédagogiques et événements scolaires'],
          img: `${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG`,
        },
        {
          label: 'Orientation',
          title: 'Orientation guidée et personnalisée',
          text: 'Notre cellule d\'orientation accompagne les élèves dès la 2AC dans la construction de leur projet personnel. Forums, stages, rencontres avec professionnels.',
          bullets: ['Conseillère d\'orientation dédiée', 'Forum des métiers', 'Stages en entreprise (3AC)', 'Tests d\'orientation'],
          img: `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG`,
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
        `${SCHOOL_IMG}/591c94bb434fd2eadbb6247f006e0d12.JPG`,
        `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG`,
        `${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG`,
        `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG`,
        `${SCHOOL_IMG}/7ddc45d0e792197d5c438ad71c14111f.JPG`,
        `${SCHOOL_IMG}/IMG_2870.jpg`,
      ]}
    />
  )
}
