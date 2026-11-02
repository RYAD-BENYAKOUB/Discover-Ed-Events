/**
 * fallbackData.js
 * ---------------
 * Local experience data for Discover Ed Events portfolio.
 * Photos sourced from the /PIC-webp folder, matched to their corresponding
 * events using the Portfolio Fr.pdf reference (pages 25–39).
 * Each experience has: id, title, category, date, location, description, images[].
 */

const fallbackExperiences = [
  {
    id: 1,
    title: "Workshop",
    category: "Events",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Atelier culturel mettant en valeur le patrimoine vestimentaire algérien. " +
      "Les participantes ont présenté des tenues traditionnelles lors d'une soirée " +
      "conviviale autour du thé et de la culture.",
    images: [
      "/PIC-webp/img-005.webp",
      "/PIC-webp/img-006.webp",
      "/PIC-webp/img-007.webp",
      "/PIC-webp/img-008.webp",
    ],
  },
  {
    id: 2,
    title: "Official Delegations",
    category: "Events",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Accueil et accompagnement de délégations officielles dans le cadre de conférences " +
      "sur le tourisme et l'artisanat. Tables rondes et échanges autour du développement " +
      "touristique en Algérie.",
    images: [
      "/PIC-webp/img-020.webp",
      "/PIC-webp/img-021.webp",
      "/PIC-webp/img-022.webp",
    ],
  },
  {
    id: 3,
    title: "The Nigerian Delegation",
    category: "Guided Tours",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Accueil et accompagnement de la délégation nigériane. Visite guidée de la ville " +
      "d'Oran, découverte des sites historiques et échanges culturels entre les membres " +
      "de la délégation africaine.",
    images: [
      "/PIC-webp/img-024.webp",
      "/PIC-webp/img-025.webp",
      "/PIC-webp/img-026.webp",
    ],
  },
  {
    id: 4,
    title: "Live To Ride Dz",
    category: "Events",
    date: "Mai 2023",
    location: "Algeria",
    description:
      "Événement moto « Live To Ride Dz » rassemblant des passionnés de moto de toute " +
      "l'Algérie et au-delà. Un rassemblement fraternel autour de la passion du deux-roues " +
      "avec des participants venus de Libye.",
    images: [
      "/PIC-webp/img-027.webp",
      "/PIC-webp/img-028.webp",
      "/PIC-webp/img-029.webp",
    ],
  },
  {
    id: 5,
    title: "Supervision of University Clubs",
    category: "Events",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Encadrement et supervision des clubs universitaires. Participation aux événements " +
      "culturels nationaux avec remise de certificats et présentation des projets étudiants " +
      "comme « Future Vision ».",
    images: [
      "/PIC-webp/img-030.webp",
      "/PIC-webp/img-031.webp",
      "/PIC-webp/img-032.webp",
    ],
  },
  {
    id: 6,
    title: "Training",
    category: "Training",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Sessions de formation pour les membres de l'équipe et les volontaires. " +
      "Apprentissage des techniques d'organisation événementielle, prise de notes, " +
      "et développement des compétences en tourisme.",
    images: [
      "/PIC-webp/img-033.webp",
      "/PIC-webp/img-034.webp",
      "/PIC-webp/img-035.webp",
      "/PIC-webp/img-036.webp",
    ],
  },
  {
    id: 7,
    title: "Television Appearance",
    category: "Events",
    date: "2023",
    location: "Algeria",
    description:
      "Passage télévisé de Yasmine Fellahi, chargée de l'information au sein de " +
      "la startup, pour promouvoir le tourisme algérien et présenter les activités " +
      "de Discover Ed Events sur les médias nationaux.",
    images: ["/PIC-webp/img-037.webp"],
  },
  {
    id: 8,
    title: "The Arab Games 2023",
    category: "Events",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Participation à l'organisation des Jeux Arabes 2023 à Oran. " +
      "Accueil des délégations sportives internationales, coordination logistique " +
      "et encadrement des activités culturelles parallèles.",
    images: [
      "/PIC-webp/img-038.webp",
      "/PIC-webp/img-039.webp",
      "/PIC-webp/img-040.webp",
    ],
  },
  {
    id: 9,
    title: "Camp Family Sonelgaz",
    category: "Events",
    date: "Été 2023",
    location: "Oran, Algeria",
    description:
      "Camp d'été organisé pour les familles Sonelgaz. Ateliers créatifs pour enfants, " +
      "activités en plein air, spectacles musicaux et moments de partage en famille " +
      "dans un cadre convivial.",
    images: [
      "/PIC-webp/img-012.webp",
      "/PIC-webp/img-013.webp",
      "/PIC-webp/img-015.webp",
      "/PIC-webp/img-041.webp",
    ],
  },
  {
    id: 10,
    title: "World Championship of Raffa and Petanque 2023",
    category: "Events",
    date: "Septembre 2023",
    location: "Oran, Algeria",
    description:
      "Couverture du Championnat du Monde de Raffa et Pétanque U19 (Filles & Garçons) " +
      "tenu à Oran du 15 au 25 septembre 2023. Coordination et soutien logistique " +
      "de l'événement sportif international.",
    images: ["/PIC-webp/img-043.webp", "/PIC-webp/img-042.webp"],
  },
  {
    id: 11,
    title: "High Council for Youth",
    category: "Guided Tours",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Organisation de visites guidées pour les membres du Conseil Supérieur de la " +
      "Jeunesse. Découverte des sites historiques et patrimoniaux d'Oran avec des " +
      "groupes de jeunes de différentes wilayas.",
    images: [
      "/PIC-webp/img-044.webp",
      "/PIC-webp/img-045.webp",
      "/PIC-webp/img-046.webp",
      "/PIC-webp/img-047.webp",
    ],
  },
  {
    id: 12,
    title: "Arab Meeting on Youth Creations and Inventions",
    category: "Events",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Rencontre arabe sur les créations et inventions de la jeunesse. " +
      "Visites culturelles, échanges entre jeunes créateurs de différents pays arabes " +
      "et découverte du patrimoine architectural d'Oran.",
    images: [
      "/PIC-webp/img-048.webp",
      "/PIC-webp/img-049.webp",
      "/PIC-webp/img-050.webp",
    ],
  },
  {
    id: 13,
    title: "Forum on Scale and Security in Africa",
    category: "Events",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Forum sur l'échelle et la sécurité en Afrique. Accueil de délégations " +
      "internationales africaines, visites des sites panoramiques d'Oran et " +
      "accompagnement des participants tout au long de l'événement.",
    images: [
      "/PIC-webp/img-051.webp",
      "/PIC-webp/img-052.webp",
      "/PIC-webp/img-053.webp",
      "/PIC-webp/img-061.webp",
    ],
  },
  {
    id: 14,
    title: "SNS Expo",
    category: "Events",
    date: "2024",
    location: "Oran, Algeria",
    description:
      "Participation au salon SNS (Sport, Nutrition, Santé). Couverture média " +
      "de l'événement, rencontres avec les exposants et les athlètes, " +
      "et documentation des conférences et démonstrations culinaires.",
    images: [
      "/PIC-webp/img-054.webp",
      "/PIC-webp/img-055.webp",
      "/PIC-webp/img-056.webp",
      "/PIC-webp/img-057.webp",
      "/PIC-webp/img-058.webp",
    ],
  },
  {
    id: 15,
    title: "Ministry of Fisheries and Aquaculture",
    category: "Events",
    date: "2023",
    location: "Oran, Algeria",
    description:
      "Visite organisée pour les responsables du Ministère de la Pêche et de " +
      "l'Aquaculture. Découverte des infrastructures sportives et des sites " +
      "panoramiques surplombant la baie d'Oran.",
    images: ["/PIC-webp/img-059.webp"],
  },
];

export default fallbackExperiences;
