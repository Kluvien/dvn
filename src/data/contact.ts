export interface ContactMethod {
  label: string;
  href: string;
  note: string;
}

export const contactMethods: ContactMethod[] = [
  {
    label: "General collaboration",
    href: "https://github.com/Kluvien",
    note: "Channel yang saat ini tersedia untuk diskusi awal dan koordinasi proyek.",
  },
  {
    label: "Web / Game development",
    href: "https://github.com/Kluvien",
    note: "Cocok untuk pertanyaan terkait Astro, TypeScript, Unity, atau proyek teknis lain.",
  },
  {
    label: "Digital Art",
    href: "https://github.com/Kluvien",
    note: "Gunakan channel yang sama untuk diskusi karya visual dan kolaborasi kreatif.",
  },
];
