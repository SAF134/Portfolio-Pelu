import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
        404 - Halaman Tidak <span className="text-primary">Ditemukan.</span>
      </h1>
      <p className="text-muted-foreground mt-4 text-sm md:text-base">
        Halaman yang Anda tuju tidak tersedia.
      </p>
      <div className="mt-6">
        <Button render={<Link href="/" />}>Kembali ke Beranda</Button>
      </div>
    </main>
  );
}
