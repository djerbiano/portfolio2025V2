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
    "Portfolio de GHOUDI Saber, développeur web basé à Brest, spécialisé en MERN Stack Next JS. Découvrez ses projets, compétences et parcours professionnel.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "portfolio",
    "GHOUDI Saber",
    "développeur web",
    "MERN Stack",
    "Next JS",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Gsap",
    "Brest",
  ],
  authors: [{ name: "GHOUDI Saber", url: "https://ghoudisaber.vercel.app" }],

  openGraph: {
    title: "Portfolio de GHOUDI Saber",
    description:
      "Découvrez les projets et compétences de GHOUDI Saber, développeur web spécialisé en MERN Stack et Next.js.",
    url: "https://ghoudisaber.vercel.app",
    siteName: "Portfolio de GHOUDI Saber",
    images: [
      {
        url: "https://ghoudisaber.vercel.app/og-image.png",
        width: 1600,
        height: 896,
        alt: "Aperçu du portfolio de GHOUDI Saber",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio de GHOUDI Saber",
    description:
      "Découvrez les projets et compétences de GHOUDI Saber, développeur web spécialisé en MERN Stack et Next.js.",
    images: ["https://ghoudisaber.vercel.app/og-image.png"],
  },
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
