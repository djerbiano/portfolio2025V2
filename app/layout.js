import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ParticlesBackground from "./_ui/ParticlesBackground";

export const metadata = {
  title: "GHOUDI Saber | Portfolio",
  description:
    "Portfolio de GHOUDI Saber, développeur web basé à Brest, spécialisé en MERN Stack, Java et Spring Boot. Découvrez ses projets, compétences et parcours professionnel.",
  robots: "all",
  keywords: ["portfolio", "GHOUDI Saber", "développeur web", "MERN Stack", "Java", "Spring Boot", "Brest"],
  authors: [{ name: "GHOUDI Saber" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ParticlesBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
