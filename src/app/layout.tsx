import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-adnan.vercel.app"),
  title: "Adnan Hafidz Pelu, S.Par. | Portofolio Profesional",
  description: "Portofolio profesional Adnan Hafidz Pelu.",
  authors: [{ name: "Adnan Hafidz Pelu" }],
  keywords: [
    "Adnan Hafidz Pelu",
    "Portofolio",
    "Logistik",
    "Supply Chain",
    "Manajemen Transportasi",
    "ULBI",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Adnan Hafidz Pelu, S.Par. | Portofolio Profesional",
    description: "Portofolio profesional Adnan Hafidz Pelu.",
    type: "website",
    locale: "id_ID",
    url: "https://portfolio-zahran.vercel.app",
    images: [
      {
        url: "/images/pelu.webp",
        width: 800,
        height: 1000,
        alt: "Adnan Hafidz Pelu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Hafidz Pelu, S.Par. | Portofolio Profesional",
    description: "Portofolio profesional Adnan Hafidz Pelu.",
    images: ["/images/pelu.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground selection:bg-primary/20 selection:text-primary min-h-screen font-sans">
        {/* Skip Link untuk Aksesibilitas */}
        <a
          href="#konten-utama"
          className="focus:border-border focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:border-2 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:shadow-md focus:outline-none"
        >
          Lewati ke konten
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
