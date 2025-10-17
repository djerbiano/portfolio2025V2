import Link from "next/link";
import styles from "./footer.module.css";
import SocialLinks from "./SocialLinks";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinksContainer}>
        <SocialLinks />
      </div>

      <Link href="/mentions-legales" className={styles.legalLink} aria-label="Lire les mentions légales">
        Mentions Légales
      </Link>

      <p className={styles.copyright}>&copy; {currentYear} Saber GHOUDI. Tous droits réservés.</p>
    </footer>
  );
}
