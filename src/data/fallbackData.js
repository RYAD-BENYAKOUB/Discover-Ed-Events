/**
 * fallbackData.js
 * ---------------
 * Local experience data for Discover Ed Events portfolio.
 * Photos sourced from the /PIC folder, matched to their corresponding
 * events using the Portfolio Fr.pdf reference (pages 25–39).
 * Each experience has: id, title, category, date, location, description, images[].
 */

const fallbackExperiences = [
  {
    id: 1,
    title: 'Workshop',
    category: 'Events',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Atelier culturel mettant en valeur le patrimoine vestimentaire algérien. ' +
      'Les participantes ont présenté des tenues traditionnelles lors d\'une soirée ' +
      'conviviale autour du thé et de la culture.',
    images: [
      '/PIC/img-005.jpg',
      '/PIC/img-006.jpg',
      '/PIC/img-007.jpg',
      '/PIC/img-008.jpg',
    ],
  },
  {
    id: 2,
    title: 'Official Delegations',
    category: 'Events',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Accueil et accompagnement de délégations officielles dans le cadre de conférences ' +
      'sur le tourisme et l\'artisanat. Tables rondes et échanges autour du développement ' +
      'touristique en Algérie.',
    images: [
      '/PIC/img-020.jpg',
      '/PIC/img-021.jpg',
      '/PIC/img-022.jpg',
    ],
  },
  {
    id: 3,
    title: 'The Nigerian Delegation',
    category: 'Guided Tours',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Accueil et accompagnement de la délégation nigériane. Visite guidée de la ville ' +
      'd\'Oran, découverte des sites historiques et échanges culturels entre les membres ' +
      'de la délégation africaine.',
    images: [
      '/PIC/img-024.jpg',
      '/PIC/img-025.jpg',
      '/PIC/img-026.jpg',
    ],
  },
  {
    id: 4,
    title: 'Live To Ride Dz',
    category: 'Events',
    date: 'Mai 2023',
    location: 'Algeria',
    description:
      'Événement moto « Live To Ride Dz » rassemblant des passionnés de moto de toute ' +
      'l\'Algérie et au-delà. Un rassemblement fraternel autour de la passion du deux-roues ' +
      'avec des participants venus de Libye.',
    images: [
      '/PIC/img-027.jpg',
      '/PIC/img-028.jpg',
      '/PIC/img-029.jpg',
    ],
  },
  {
    id: 5,
    title: 'Supervision of University Clubs',
    category: 'Events',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Encadrement et supervision des clubs universitaires. Participation aux événements ' +
      'culturels nationaux avec remise de certificats et présentation des projets étudiants ' +
      'comme « Future Vision ».',
    images: [
      '/PIC/img-030.jpg',
      '/PIC/img-031.jpg',
      '/PIC/img-032.jpg',
    ],
  },
  {
    id: 6,
    title: 'Training',
    category: 'Training',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Sessions de formation pour les membres de l\'équipe et les volontaires. ' +
      'Apprentissage des techniques d\'organisation événementielle, prise de notes, ' +
      'et développement des compétences en tourisme.',
    images: [
      '/PIC/img-033.jpg',
      '/PIC/img-034.jpg',
      '/PIC/img-035.jpg',
      '/PIC/img-036.jpg',
    ],
  },
  {
    id: 7,
    title: 'Television Appearance',
    category: 'Events',
    date: '2023',
    location: 'Algeria',
    description:
      'Passage télévisé de Yasmine Fellahi, chargée de l\'information au sein de ' +
      'la startup, pour promouvoir le tourisme algérien et présenter les activités ' +
      'de Discover Ed Events sur les médias nationaux.',
    images: [
      '/PIC/img-037.png',
    ],
  },
  {
    id: 8,
    title: 'The Arab Games 2023',
    category: 'Events',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Participation à l\'organisation des Jeux Arabes 2023 à Oran. ' +
      'Accueil des délégations sportives internationales, coordination logistique ' +
      'et encadrement des activités culturelles parallèles.',
    images: [
      '/PIC/img-038.png',
      '/PIC/img-039.png',
      '/PIC/img-040.jpg',
    ],
  },
  {
    id: 9,
    title: 'Camp Family Sonelgaz',
    category: 'Events',
    date: 'Été 2023',
    location: 'Oran, Algeria',
    description:
      'Camp d\'été organisé pour les familles Sonelgaz. Ateliers créatifs pour enfants, ' +
      'activités en plein air, spectacles musicaux et moments de partage en famille ' +
      'dans un cadre convivial.',
    images: [
      '/PIC/img-012.png',
      '/PIC/img-013.png',
      '/PIC/img-015.jpg',
      '/PIC/img-041.jpg',
    ],
  },
  {
    id: 10,
    title: 'World Championship of Raffa and Petanque 2023',
    category: 'Events',
    date: 'Septembre 2023',
    location: 'Oran, Algeria',
    description:
      'Couverture du Championnat du Monde de Raffa et Pétanque U19 (Filles & Garçons) ' +
      'tenu à Oran du 15 au 25 septembre 2023. Coordination et soutien logistique ' +
      'de l\'événement sportif international.',
    images: [
      '/PIC/img-043.jpg',
      '/PIC/img-042.jpg',
    ],
  },
  {
    id: 11,
    title: 'High Council for Youth',
    category: 'Guided Tours',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Organisation de visites guidées pour les membres du Conseil Supérieur de la ' +
      'Jeunesse. Découverte des sites historiques et patrimoniaux d\'Oran avec des ' +
      'groupes de jeunes de différentes wilayas.',
    images: [
      '/PIC/img-044.jpg',
      '/PIC/img-045.jpg',
      '/PIC/img-046.jpg',
      '/PIC/img-047.jpg',
    ],
  },
  {
    id: 12,
    title: 'Arab Meeting on Youth Creations and Inventions',
    category: 'Events',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Rencontre arabe sur les créations et inventions de la jeunesse. ' +
      'Visites culturelles, échanges entre jeunes créateurs de différents pays arabes ' +
      'et découverte du patrimoine architectural d\'Oran.',
    images: [
      '/PIC/img-048.jpg',
      '/PIC/img-049.jpg',
      '/PIC/img-050.jpg',
    ],
  },
  {
    id: 13,
    title: 'Forum on Scale and Security in Africa',
    category: 'Events',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Forum sur l\'échelle et la sécurité en Afrique. Accueil de délégations ' +
      'internationales africaines, visites des sites panoramiques d\'Oran et ' +
      'accompagnement des participants tout au long de l\'événement.',
    images: [
      '/PIC/img-051.jpg',
      '/PIC/img-052.jpg',
      '/PIC/img-053.jpg',
      '/PIC/img-061.jpg',
    ],
  },
  {
    id: 14,
    title: 'SNS Expo',
    category: 'Events',
    date: '2024',
    location: 'Oran, Algeria',
    description:
      'Participation au salon SNS (Sport, Nutrition, Santé). Couverture média ' +
      'de l\'événement, rencontres avec les exposants et les athlètes, ' +
      'et documentation des conférences et démonstrations culinaires.',
    images: [
      '/PIC/img-054.jpg',
      '/PIC/img-055.jpg',
      '/PIC/img-056.jpg',
      '/PIC/img-057.jpg',
      '/PIC/img-058.jpg',
    ],
  },
  {
    id: 15,
    title: 'Ministry of Fisheries and Aquaculture',
    category: 'Events',
    date: '2023',
    location: 'Oran, Algeria',
    description:
      'Visite organisée pour les responsables du Ministère de la Pêche et de ' +
      'l\'Aquaculture. Découverte des infrastructures sportives et des sites ' +
      'panoramiques surplombant la baie d\'Oran.',
    images: [
      '/PIC/img-059.jpg',
    ],
  },
];

export default fallbackExperiences;
