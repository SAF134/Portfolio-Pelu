import { Language, NavigationItem } from "@/types";

export const NAVIGATION_ITEMS: Record<Language, NavigationItem[]> = {
  id: [
    {
      id: "profil",
      label: "Profil",
      iconName: "User",
    },
    {
      id: "pendidikan",
      label: "Pendidikan",
      iconName: "GraduationCap",
    },
    {
      id: "keahlian",
      label: "Keahlian",
      iconName: "Wrench",
    },
    {
      id: "pengalaman",
      label: "Pengalaman",
      iconName: "Briefcase",
    },
    {
      id: "organisasi",
      label: "Organisasi",
      iconName: "Users",
    },
    {
      id: "proyek",
      label: "Proyek",
      iconName: "FolderKanban",
    },
    {
      id: "sertifikat",
      label: "Sertifikat",
      iconName: "Award",
    },
  ],
  en: [
    {
      id: "profil",
      label: "Profile",
      iconName: "User",
    },
    {
      id: "pendidikan",
      label: "Education",
      iconName: "GraduationCap",
    },
    {
      id: "keahlian",
      label: "Skills",
      iconName: "Wrench",
    },
    {
      id: "pengalaman",
      label: "Experience",
      iconName: "Briefcase",
    },
    {
      id: "organisasi",
      label: "Organizations",
      iconName: "Users",
    },
    {
      id: "proyek",
      label: "Projects",
      iconName: "FolderKanban",
    },
    {
      id: "sertifikat",
      label: "Certificates",
      iconName: "Award",
    },
  ],
};
