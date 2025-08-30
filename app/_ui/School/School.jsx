import styles from "./school.module.css";
import { Fade } from "react-awesome-reveal";

export default function School() {
  //data
  const formations = [
    {
      date: "2008",
      title: "Technicien en maintenance informatique",
      subtitle: "Djerba, Tunisie",
    },
    {
      date: "2013",
      title: "Agent de prévention et sécurité",
      subtitle: "Brest, France",
    },
    {
      date: "2014",
      title: "Agent de service de sécurité incendie",
      subtitle: "Brest, France",
    },
    {
      date: "2017",
      title: "Chef d’équipe de service de sécurité incendie",
      subtitle: "Brest, France",
    },
    {
      date: "2025",
      title: "Développeur Fullstack JavaScript",
      subtitle: "Brest, France",
    },
  ];

  return (
    <section className={styles.containerEtudes} aria-labelledby="studies-heading">
      <h2 className={styles.title} id="studies-heading">
        <span className={styles.emojiEtudes} aria-hidden="true">
          🎓
        </span>
        ÉTUDES
      </h2>
      <div className={styles.wrapperCards}>
        <Fade direction="left" cascade damping={0.2}>
          {formations.map((form) => (
            <article
              key={`${form.date}-${form.title}`}
              className={styles.cardFormation}
              tabIndex={0}
              aria-label={`Formation: ${form.title} à ${form.subtitle} en ${form.date}`}
            >
              <span className={styles.cardDate}>{form.date}</span>
              <h3 className={styles.cardTitle}>{form.title}</h3>
              <p className={styles.cardSubtitle}>{form.subtitle}</p>
            </article>
          ))}
        </Fade>
      </div>
    </section>
  );
}
