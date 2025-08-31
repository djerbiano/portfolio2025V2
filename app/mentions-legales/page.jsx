import Link from "next/link";
import styles from "./mentionsLegales.module.css";

export default function MentionsLegales() {
  return (
    <main className={styles.mentionsContent}>
      <article className={styles.mentionsContainer}>
        <h1 className={styles.title}>Mentions légales</h1>

        <section className={styles.mentionSection} aria-labelledby="editeur">
          <h2 id="editeur" className={styles.sectionTitle}>Éditeur du site</h2>
          <p>
            <strong>Portfolio étudiant de</strong> : GHOUDI Saber
            <br />
            <strong>Statut</strong> : Étudiant en développement web
            <br />
            <strong>Contact</strong> :{" "}
            <a
              href="mailto:saberghoudi2222@hotmail.fr"
              title="Envoyer un email à Saber"
              className={styles.link}
            >
              saberghoudi2222@hotmail.fr
            </a>
            <br />
            <strong>Adresse postale</strong> : Sur demande via email
          </p>
        </section>

        <section className={styles.mentionSection} aria-labelledby="hebergement">
          <h2 id="hebergement" className={styles.sectionTitle}>Hébergement</h2>
          <p>
            Ce portfolio est hébergé sur Vercel.
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Visiter vercel.com
            </a>
          </p>
        </section>

        <section className={styles.mentionSection} aria-labelledby="propriete">
          <h2 id="propriete" className={styles.sectionTitle}>Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu présent sur ce site (textes, images, logos, code, etc.)
            est, sauf mention contraire, la propriété exclusive de GHOUDI Saber.
            <br />
            Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication, même partielle, est strictement interdite sans l’accord écrit
            préalable de l’auteur.
          </p>
        </section>

        <section className={styles.mentionSection} aria-labelledby="confidentialite">
          <h2 id="confidentialite" className={styles.sectionTitle}>Confidentialité</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle sans consentement.
            <br />
            Les éventuelles données de contact sont utilisées uniquement pour répondre aux demandes.
          </p>
        </section>

        <section className={styles.mentionSection} aria-labelledby="cookies">
          <h2 id="cookies" className={styles.sectionTitle}>Cookies</h2>
          <p>
            Ce site ne dépose aucun cookie de suivi ou de publicité.
            <br />
            Il peut utiliser des cookies techniques strictement nécessaires à son bon
            fonctionnement (ex. : sécurité ou rendu visuel).
          </p>
        </section>

        <section className={styles.mentionSection} aria-labelledby="responsabilite">
          <h2 id="responsabilite" className={styles.sectionTitle}>Responsabilité</h2>
          <p>
            L’auteur du site ne peut être tenu responsable d’éventuels dysfonctionnements
            ou erreurs présentes sur le site.
            <br />
            L’accès peut être suspendu pour maintenance, mise à jour ou tout autre motif
            technique sans préavis.
          </p>
        </section>

        <div className={styles.backContainer}>
          <Link href="/" className={styles.backLink}>
            ← Retour au portfolio
          </Link>
        </div>
      </article>
    </main>
  );
}
