import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  metadataBase: new URL("https://joaquinherreralartigue.github.io"),
  title: {
    default: "Bruchou & Funes de Rioja | Liderazgo jurídico para escenarios de alta complejidad",
    template: "%s | Bruchou & Funes de Rioja",
  },
  description:
    "Estudio jurídico argentino especializado en asuntos de alta complejidad. Integramos conocimiento jurídico, visión de negocios y equipos multidisciplinarios.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    siteName: "Bruchou & Funes de Rioja",
  },
  alternates: {
    canonical: withBasePath("/"),
    languages: { es: withBasePath("/"), en: withBasePath("/en") },
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-surface-default text-text-primary antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
