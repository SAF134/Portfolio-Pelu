import { PROFILE_DATA } from "@/data/profile";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-border bg-card text-muted-foreground border-t-2 py-8 text-center text-sm">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <p>
          © {currentYear} {PROFILE_DATA.name}. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
}
