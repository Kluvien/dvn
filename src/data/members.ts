export interface Member {
  slug: string;
  name: string;
  displayName: string;
  role: string;
  description: string;
  skills: string[];
  image?: string;
  socialLinks?: {
    label: string;
    href: string;
  }[];
  projectSlugs?: string[];
  github?: string;
  twitter?: string;
}

export const members: Member[] = [
  {
    slug: "devandra",
    name: "Devandra Albansyah Azhar",
    displayName: "Devandra",
    role: "Web & Game Developer",
    description:
      "Mahasiswa Informatika yang berfokus pada pengembangan website, game, dan pengalaman digital melalui proyek yang fungsional dan terstruktur.",
    skills: [
      "Laravel",
      "Astro",
      "TypeScript",
      "Unity",
      "Git",
      "UI Development",
    ],
    github: "https://github.com/Kluvien",
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/Kluvien",
      },
    ],
    projectSlugs: ["first-jrpg"],
  },
  {
    slug: "ookadomo",
    name: "Jovita Najwa Khumaira",
    displayName: "Ookadomo",
    role: "Digital Artist",
    description:
      "Seniman digital yang berfokus pada ilustrasi dan terus mengembangkan gaya visualnya melalui berbagai karya personal.",
    skills: ["Digital Illustration", "Character Drawing", "Sketching"],
  },
];
