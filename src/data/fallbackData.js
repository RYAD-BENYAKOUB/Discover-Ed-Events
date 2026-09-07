/**
 * fallbackData.js
 * ---------------
 * Local placeholder experience data.
 * Used when Google Sheets fetch fails or hasn't been configured yet.
 * Each experience has: id, title, date, location, description, images[].
 */

const fallbackExperiences = [
  {
    id: 1,
    title: 'Randonnée au Djurdjura',
    date: '15 Mars 2025',
    location: 'Tikjda, Bouira',
    description:
      'Une magnifique randonnée à travers les sommets enneigés du Djurdjura. ' +
      'Nous avons traversé des forêts de cèdres centenaires et atteint le pic ' +
      'Lalla Khedidja avec une vue panoramique à couper le souffle.',
    images: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 2,
    title: 'Excursion à Tipaza',
    date: '28 Avril 2025',
    location: 'Tipaza',
    description:
      'Découverte des ruines romaines de Tipaza, classées au patrimoine mondial de l\'UNESCO. ' +
      'Une journée entre histoire antique et paysages côtiers méditerranéens inoubliables.',
    images: [
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 3,
    title: 'Trekking à Chréa',
    date: '10 Juin 2025',
    location: 'Parc National de Chréa, Blida',
    description:
      'Exploration du parc national de Chréa avec ses forêts luxuriantes et ses sentiers ' +
      'de randonnée. Un parcours idéal pour les débutants comme pour les marcheurs confirmés.',
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 4,
    title: 'Découverte du Sahara',
    date: '22 Septembre 2025',
    location: 'Timimoun, Adrar',
    description:
      'Un voyage inoubliable au cœur du Sahara algérien. Nuit sous les étoiles, ' +
      'balade à dos de chameau et visite des ksour traditionnels de Timimoun, ' +
      'la ville rouge aux mille couleurs.',
    images: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 5,
    title: 'Les Gorges de Tighza',
    date: '5 Novembre 2025',
    location: 'Béjaïa',
    description:
      'Randonnée spectaculaire à travers les gorges de Tighza. ' +
      'Des falaises vertigineuses, des cascades cristallines et une nature sauvage ' +
      'préservée — un véritable trésor caché de la Kabylie.',
    images: [
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 6,
    title: 'Côte Turquoise de Jijel',
    date: '18 Décembre 2025',
    location: 'Jijel',
    description:
      'Excursion le long de la côte turquoise de Jijel. Grottes marines, criques ' +
      'secrètes et eaux cristallines — un paradis méditerranéen à quelques heures d\'Alger.',
    images: [
      'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 7,
    title: 'Ascension du Mont Tahat',
    date: '8 Janvier 2026',
    location: 'Hoggar, Tamanrasset',
    description:
      'L\'ascension du plus haut sommet de l\'Algérie, le Mont Tahat à 2 908 m. ' +
      'Un défi physique récompensé par des panoramas lunaires et un lever de soleil ' +
      'sur le plateau du Hoggar.',
    images: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 8,
    title: 'Oasis de Ghardaïa',
    date: '20 Février 2026',
    location: 'Ghardaïa, M\'zab',
    description:
      'Visite de la vallée du M\'zab et de ses cinq cités fortifiées, classées au ' +
      'patrimoine mondial. Architecture unique, marchés colorés et hospitalité ' +
      'mozabite incomparable.',
    images: [
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    ],
  },
];

export default fallbackExperiences;
