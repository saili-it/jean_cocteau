import CyclePage from '../../components/CyclePage'

export default function Maternelle() {
  return (
    <CyclePage
      title="Maternelle"
      age="3 - 5 ans"
      intro="Un environnement chaleureux pour les premiers apprentissages."
      heroImage="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1600&q=80"
      sections={[
        {
          label: 'Présentation',
          title: 'Une école qui éveille la curiosité',
          text: 'La Maternelle Jean Cocteau accueille les enfants de 3 à 5 ans dans un environnement adapté à leur rythme et à leurs besoins. Notre approche pédagogique active favorise l\'éveil sensoriel, la sociabilisation et le plaisir d\'apprendre.',
          bullets: ['Petite, Moyenne et Grande Section', 'Petits effectifs (max 18 élèves)', 'Salles lumineuses et adaptées', 'Cours de récréation sécurisée'],
          img: 'https://images.unsplash.com/photo-1543322748-33df6d3db1bb?w=900&q=80',
        },
        {
          label: 'Méthode pédagogique',
          title: 'Une pédagogie active et bienveillante',
          text: 'Inspirée des méthodes Montessori et Reggio, notre pédagogie place l\'enfant au cœur de son apprentissage. Manipulation, exploration et jeu structuré sont les piliers de notre démarche.',
          bullets: ['Pédagogie Montessori', 'Apprentissage par le jeu', 'Ateliers en autonomie', 'Suivi individualisé'],
          img: 'https://images.unsplash.com/photo-1564429097439-e4ec0e391b96?w=900&q=80',
        },
        {
          label: 'Langues',
          title: 'Le bilinguisme dès la PS',
          text: 'Dès la Petite Section, les enfants sont immergés dans un environnement bilingue français-anglais. L\'arabe est introduit progressivement à partir de la Moyenne Section.',
          bullets: ['Français langue principale', 'Anglais quotidien', 'Initiation à l\'arabe', 'Comptines et rituels multilingues'],
          img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80',
        },
        {
          label: 'Activités',
          title: 'Activités motrices et artistiques',
          text: 'Le développement moteur et la créativité sont au centre de nos activités quotidiennes. Sport, arts plastiques, musique et expression corporelle rythment la semaine.',
          bullets: ['Psychomotricité', 'Arts plastiques', 'Éveil musical', 'Théâtre et expression'],
          img: 'https://images.unsplash.com/photo-1607968565043-36af90dde238?w=900&q=80',
        },
      ]}
      schedule={[
        { time: '08h00', activity: 'Accueil et activités d\'éveil libre' },
        { time: '09h00', activity: 'Rituels du matin & langage' },
        { time: '10h00', activity: 'Ateliers d\'apprentissage' },
        { time: '11h30', activity: 'Récréation' },
        { time: '12h00', activity: 'Déjeuner et temps calme' },
        { time: '14h00', activity: 'Activités artistiques ou motrices' },
        { time: '15h30', activity: 'Goûter et histoires' },
        { time: '16h30', activity: 'Sortie' },
      ]}
      gallery={[
        'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
        'https://images.unsplash.com/photo-1564429097439-e4ec0e391b96?w=600&q=80',
        'https://images.unsplash.com/photo-1543322748-33df6d3db1bb?w=600&q=80',
        'https://images.unsplash.com/photo-1607968565043-36af90dde238?w=600&q=80',
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
        'https://images.unsplash.com/photo-1597392582469-a697322d5c16?w=600&q=80',
      ]}
    />
  )
}
