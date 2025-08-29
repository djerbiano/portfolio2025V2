import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Schibsted_Grotesk } from "next/font/google";
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400"] });
import ParticlesBackground from "./_ui/ParticlesBackground";
import Header from "./_ui/Header/Header";
import Footer from "./_ui/Footer/Footer";

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
      <body className={schibsted.className}>
        <ParticlesBackground />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
