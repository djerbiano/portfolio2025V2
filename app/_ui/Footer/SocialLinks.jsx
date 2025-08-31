import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/saber-g-ab6251207",
    Icon: FaLinkedin,
    label: "Visiter le profil LinkedIn de Saber GHOUDI",
  },
  {
    href: "https://github.com/djerbiano",
    Icon: FaGithub,
    label: "Visiter le profil GitHub de Saber GHOUDI",
  },
];

export default function SocialLinks() {
  return (
    <div className={styles.socialLinks} role="list" aria-label="Liens vers les réseaux sociaux">
      {socialLinks.map(({ href, Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={styles.socialLink}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
