import CyclePage from '../../components/CyclePage'

export default function Lycee() {
  return (
    <CyclePage
      title="Lycée"
      age="15 - 18 ans"
      intro="Préparer le Bac et les portes des meilleures universités."
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
      sections={[
        {
          label: 'Filières',
          title: 'Filières et spécialités',
          text: 'Notre lycée propose la voie générale du Bac français avec un large choix de spécialités. Le Bac International (IB) est également disponible pour les élèves visant les universités étrangères.',
          bullets: ['Bac général français', 'Bac International (IB)', '12 spécialités au choix', 'Options européennes'],
          img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80',
        },
        {
          label: 'Préparation Bac',
          title: 'Une préparation au Bac d\'excellence',
          text: 'Avec 98% de réussite et 70% de mentions, notre lycée se classe parmi les meilleurs de la région. Bacs blancs, soutien personnalisé, stages intensifs et préparation au Grand Oral.',
          bullets: ['98% de réussite au Bac', '70% avec mention', 'Stages intensifs vacances', 'Préparation Grand Oral'],
          img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=80',
        },
        {
          label: 'Orientation',
          title: 'Orientation universitaire mondiale',
          text: 'Notre cellule d\'orientation post-bac accompagne chaque élève dans son projet : Parcoursup, universités étrangères (UCAS, Studielink, US Common App), classes préparatoires.',
          bullets: ['Conseiller d\'orientation post-bac', 'Aide Parcoursup et UCAS', 'Préparation aux écoles US', 'Salons et forums'],
          img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80',
        },
        {
          label: 'Excellence',
          title: 'Résultats et excellence',
          text: 'Nos anciens élèves intègrent les meilleures universités : Sciences Po, HEC, Polytechnique, Sorbonne, McGill, Oxford, Imperial College, NYU... Une excellence reconnue.',
          bullets: ['Top universités françaises', 'Universités européennes', 'Universités nord-américaines', 'Réseau d\'anciens élèves'],
          img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80',
        },
      ]}
      schedule={[
        { time: '08h00', activity: 'Cours principaux' },
        { time: '10h00', activity: 'Récréation' },
        { time: '10h15', activity: 'Spécialités' },
        { time: '12h15', activity: 'Déjeuner' },
        { time: '13h30', activity: 'Cours et TP' },
        { time: '16h00', activity: 'Étude dirigée' },
        { time: '17h00', activity: 'Soutien ou activités' },
        { time: '18h00', activity: 'Sortie' },
      ]}
      gallery={[
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
        'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80',
        'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80',
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
        'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=600&q=80',
      ]}
    />
  )
}
