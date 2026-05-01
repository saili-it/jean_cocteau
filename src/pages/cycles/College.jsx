import CyclePage from '../../components/CyclePage'

export default function College() {
  return (
    <CyclePage
      title="Collège"
      age="11 - 14 ans"
      intro="Approfondir ses connaissances et gagner en autonomie."
      heroImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80"
      sections={[
        {
          label: 'Parcours académique',
          title: 'Un parcours exigeant et structuré',
          text: 'De la 6ème à la 3ème, nos élèves suivent le programme français, enrichi de sections internationales. Notre objectif : préparer chaque élève au Brevet et à un lycée d\'excellence.',
          bullets: ['Programme français complet', 'Sections internationales', 'Brevet en fin de 3ème', 'Cycle d\'orientation'],
          img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80',
        },
        {
          label: 'Préparation examens',
          title: 'Préparation rigoureuse au Brevet',
          text: 'En 3ème, un dispositif spécifique de préparation au Brevet est mis en place : brevets blancs, ateliers méthodologiques et révisions ciblées.',
          bullets: ['3 brevets blancs annuels', 'Ateliers méthodologiques', 'Stages de révisions vacances', 'Suivi individualisé'],
          img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
        },
        {
          label: 'Vie au collège',
          title: 'Clubs et projets innovants',
          text: 'Le collège est un lieu d\'apprentissage et de découvertes. Plus de 25 clubs et projets pluridisciplinaires permettent à chaque élève de développer ses talents.',
          bullets: ['Club média et journal', 'Mini-entreprise', 'MUN (Model UN)', 'Robotique et programmation'],
          img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80',
        },
        {
          label: 'Orientation',
          title: 'Orientation guidée et personnalisée',
          text: 'Notre cellule d\'orientation accompagne les élèves dès la 4ème dans la construction de leur projet personnel. Forums, stages, rencontres avec professionnels.',
          bullets: ['Conseillère d\'orientation dédiée', 'Forum des métiers', 'Stages en entreprise (3ème)', 'Tests d\'orientation'],
          img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
        },
      ]}
      schedule={[
        { time: '08h00', activity: 'Cours' },
        { time: '10h00', activity: 'Récréation' },
        { time: '10h15', activity: 'Cours' },
        { time: '12h15', activity: 'Déjeuner' },
        { time: '13h45', activity: 'Cours et travaux pratiques' },
        { time: '16h00', activity: 'Étude ou activités' },
        { time: '17h30', activity: 'Sortie' },
      ]}
      gallery={[
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
        'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
      ]}
    />
  )
}
