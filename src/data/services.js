/**
 * services.js
 * -----------
 * Hardcoded data for the "Our Services" section of Discover Ed Events.
 * Each service object follows the shape:
 * { id, number, title, items: string[], psychologicalDimension, icon }
 */

export const services = [
  {
    id: 1,
    number: "01",
    title: "DISCOVERY EXPERIENCES",
    icon: "Mountain",
    items: [
      "Beaches",
      "Mountains",
      "Forests",
      "Deserts",
      "Snow",
      "Hiking and bivouacs",
    ],
    psychologicalDimension:
      "Break away from your routine, explore, marvel, and reconnect with nature.",
  },
  {
    id: 2,
    number: "02",
    title: "IMMERSIVE EXPERIENCES",
    icon: "Globe",
    items: [
      "Discovering Different Cities",
      "Immersive weekends",
      "Heritage and traditions",
      "Discovering people and cultures",
      "Themed trips",
    ],
    psychologicalDimension:
      "Open-mindedness, curiosity, learning, and decentering.",
  },
  {
    id: 3,
    number: "03",
    title: "THERAPEUTIC & WELLNESS EXPERIENCES",
    icon: "Leaf",
    items: [
      "Pranayama",
      "Forest therapy",
      "Art therapy",
      "Creative expression activities",
      "Self-reconnection experiences",
    ],
    psychologicalDimension:
      "Self-awareness, emotional expression, relaxation, and presence.",
  },
  {
    id: 4,
    number: "04",
    title: "GROUP CONNECTION SESSIONS",
    icon: "MessageCircle",
    items: [
      "Round Tables",
      "Discussion circles",
      "Themed meetups",
      "Discussions on psychological topics",
      "Conversations in cafés",
    ],
    psychologicalDimension:
      "Listening, sense of belonging, expression, and social connection.",
  },
  {
    id: 5,
    number: "05",
    title: "LEISURE & SOCIAL EXPERIENCES",
    icon: "Users",
    items: [
      "Cycling",
      "Cinema",
      "Theater",
      "Dinners",
      "Bowling",
      "Board games",
      "Werewolf",
      "Leisure activities",
    ],
    psychologicalDimension:
      "Enjoyment, spontaneity, social relationships, and shared memories.",
  },
  {
    id: 6,
    number: "06",
    title: "TEAM BUILDING & COLLECTIVE EXPERIENCES",
    icon: "Flag",
    items: [
      "Group Challenges",
      "Cooperation games",
      "Group activities",
      "Team cohesion",
      "Corporate experiences",
    ],
    psychologicalDimension:
      "Trust, communication, cooperation, and collective intelligence.",
  },
];

export default services;
