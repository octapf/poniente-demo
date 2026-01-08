import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMock } from "@/lib/siteMock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteMock.brand.name} (Demo)`,
    template: `%s — ${siteMock.brand.name} (Demo)`,
  },
  description:
    "Sitio de muestra para PONIENTE, Bar de Playa: secciones, estilos, galería y ubicación.",
  applicationName: "PONIENTE (Demo)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
