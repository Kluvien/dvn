export interface Project {
  slug: string;
  title: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  memberSlug?: string;
  repository?: string;
}

export const projects: Project[] = [
  {
    slug: "first-jrpg",
    title: "FirstJRPG",
    category: "Game Development",
    status: "Prototype",
    description:
      "Mini JRPG yang dikembangkan menggunakan Unity dengan eksplorasi world map, interaksi NPC, dialog, cutscene, dan sistem pertarungan turn-based.",
    technologies: ["Unity", "C#", "Git", "Game Design"],
    highlights: [
      "Eksplorasi world map menggunakan keyboard.",
      "Interaksi dan percakapan dengan NPC.",
      "Cutscene yang mengarahkan pemain menuju pertarungan.",
      "Sistem pertarungan turn-based bergaya JRPG.",
      "Pilihan aksi Attack, Skill, Guard, dan Item.",
      "Sistem HP, MP, critical gauge, serta efek suara.",
    ],
    memberSlug: "devandra",
    repository: "https://github.com/Kluvien/FirstJRPG",
  },
];
