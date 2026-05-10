import CyclePage from '../../components/CyclePage'

const SCHOOL_IMG = '/School pictures/School pictures'

export default function Maternelle() {
  return (
    <CyclePage
      title="Maternelle"
      age="3 - 5 ans"
      intro="Un environnement chaleureux pour les premiers apprentissages."
      heroImage={`${SCHOOL_IMG}/0cf0007c031bed1200c44af205da4e1e_kid.JPG`}
      sections={[
        {
          label: 'Présentation',
          title: 'Une école qui éveille la curiosité',
          text: 'La Maternelle Jean Cocteau accueille les enfants de 3 à 5 ans dans un environnement adapté à leur rythme et à leurs besoins. Notre approche pédagogique active favorise l\'éveil sensoriel, la sociabilisation et le plaisir d\'apprendre.',
          bullets: ['Petite, Moyenne et Grande Section', 'Petits effectifs (max 18 élèves)', 'Salles lumineuses et adaptées', 'Cours de récréation sécurisée'],
          img: `${SCHOOL_IMG}/0cf0007c031bed1200c44af205da4e1e_kid.JPG`,
        },
        {
          label: 'Méthode pédagogique',
          title: 'Une pédagogie active et bienveillante',
          text: 'Inspirée des méthodes Montessori et Reggio, notre pédagogie place l\'enfant au cœur de son apprentissage. Manipulation, exploration et jeu structuré sont les piliers de notre démarche.',
          bullets: ['Pédagogie Montessori', 'Apprentissage par le jeu', 'Ateliers en autonomie', 'Suivi individualisé'],
          img: `${SCHOOL_IMG}/10430f4a-f614-4a81-a06c-84b35cc6052f.JPG`,
        },
        {
          label: 'Langues',
          title: 'Le bilinguisme dès la PS',
          text: 'Dès la Petite Section, les enfants sont immergés dans un environnement bilingue français-anglais. L\'arabe est introduit progressivement à partir de la Moyenne Section.',
          bullets: ['Français langue principale', 'Anglais quotidien', 'Initiation à l\'arabe', 'Comptines et rituels multilingues'],
          img: `${SCHOOL_IMG}/acba1ade9df557f417091a198dbdb127.JPG`,
        },
        {
          label: 'Activités',
          title: 'Activités motrices et artistiques',
          text: 'Le développement moteur et la créativité sont au centre de nos activités quotidiennes. Sport, arts plastiques, musique et expression corporelle rythment la semaine.',
          bullets: ['Psychomotricité', 'Arts plastiques', 'Éveil musical', 'Théâtre et expression'],
          img: `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG`,
        },
      ]}
      schedule={[
        { time: '08h30', activity: 'Accueil et activités d\'éveil libre' },
        { time: '09h30', activity: 'Rituels du matin & langage' },
        { time: '10h00', activity: 'Ateliers d\'apprentissage' },
        { time: '10h30', activity: 'Récréation' },
        { time: '11h00', activity: 'Déjeuner et temps calme' },
        { time: '13h00', activity: 'Activités artistiques ou motrices' },
        { time: '14h30', activity: 'Goûter et histoires' },
        { time: '16h15', activity: 'Sortie' },
      ]}
      gallery={[
        `${SCHOOL_IMG}/0cf0007c031bed1200c44af205da4e1e_kid.JPG`,
        `${SCHOOL_IMG}/10430f4a-f614-4a81-a06c-84b35cc6052f.JPG`,
        `${SCHOOL_IMG}/acba1ade9df557f417091a198dbdb127.JPG`,
        `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG`,
        `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG`,
        `${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG`,
      ]}
    />
  )
}
