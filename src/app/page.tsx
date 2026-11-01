import { Footer } from "@/components/layout/footer";
import { ProfileSection } from "@/components/sections/profile";
import { EducationSection } from "@/components/sections/education";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { OrganizationsSection } from "@/components/sections/organizations";
import { ProjectsSection } from "@/components/sections/projects";
import { CertificatesSection } from "@/components/sections/certificates";

export default function HomePage() {
  return (
    <main
      id="konten-utama"
      className="flex min-h-screen flex-col pb-24 md:pt-16 md:pb-16"
    >
      {/* 1. Section Profil */}
      <ProfileSection />

      {/* 2. Section Pendidikan */}
      <EducationSection />

      {/* 3. Section Keahlian */}
      <SkillsSection />

      {/* 4. Section Pengalaman */}
      <ExperienceSection />

      {/* 5. Section Organisasi */}
      <OrganizationsSection />

      {/* 6. Section Proyek */}
      <ProjectsSection />

      {/* 7. Section Sertifikat */}
      <CertificatesSection />

      <Footer />
    </main>
  );
}
