"use client";
import styles from "./experience.module.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

export default function Experience() {
  const observerProps = {
    triggerOnce: false,
  };

  //style communs
  const timelineStyles = {
    content: {
      background: "rgb(0, 0, 0)",
      color: "#ffffff",
      boxShadow: "rgba(255, 255, 255, 0.22) 0px 1px 20px 6px",
      border: "1px solid rgb(255, 255, 255)",
    },
    arrow: {
      borderRight: "7px solid rgb(255, 255, 255)",
    },
    icon: {
      background: "rgb(0, 0, 0)",
    },
  };

  // data
  const experiences = [
    {
      date: "2008 (1 mois)",
      icon: "school",
      title: "Stage - Technicien en maintenance informatique",
      subtitle: "Djerba, Tunisie",
      description: "Maintenance hardware / software",
    },
    {
      date: "2008 (1 mois)",
      icon: "school",
      title: "Stage - Technicien en maintenance informatique",
      subtitle: "Djerba, Tunisie",
      description: "Maintenance hardware / software",
    },
    {
      date: "2008 - 2010",
      icon: "work",
      title: "Technicien en maintenance et réseau informatique",
      subtitle: "Djerba, Tunisie",
      description: "Maintenance hardware/software, assemblage PC, gestion de réseau, vente et support client",
    },
    {
      date: "2011 (6 mois)",
      icon: "work",
      title: "Peintre en bâtiment",
      subtitle: "Djerba, Tunisie",
      description: "Préparation des surfaces et travaux de peinture",
    },
    {
      date: "2012",
      icon: "work",
      title: "Photographe hôtelier",
      subtitle: "Djerba, Tunisie",
      description: "Séance de Shooting, Retouche photo",
    },
    {
      date: "2013",
      icon: "school",
      title: "Stage - Agent de sécurité",
      subtitle: "Brest, France",
      description: "Accueil de public, surveillance du site et gestion des conflits",
    },
    {
      date: "2014 - 2015",
      icon: "work",
      title: "Agent de prévention et sécurité (SST, Palpation de sécurité)",
      subtitle: "Brest, France",
      description: "Accueil de public, surveillance du site et gestion des conflits",
    },
    {
      date: "2015 - 2017",
      icon: "work",
      title: "Agent de Service de Sécurité Incendie et d’Assistance à Personnes",
      subtitle: "Brest, France",
      description:
        "Assurer la sécurité des personnes et la sécurité incendie des biens, Sensibiliser les employés, Intervenir face à un début d’incendie, Alerter, évacuer le public et accueillir les secours en cas de problème",
    },
    {
      date: "2017 - 2024",
      icon: "work",
      title: "Chef d’équipe de service de sécurité incendie",
      subtitle: "Brest, France",
      description:
        "Encadrer et former l’équipe de sécurité, Diriger le poste de sécurité lors des sinistres, Accompagnement de la commission de sécurité",
    },
  ];

  const getIconElement = (iconType) => {
    switch (iconType) {
      case "school":
        return <MdSchool color="#c54abd" aria-hidden="true" />;
      case "work":
        return <MdWork color="#35cadc" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.containerExperience} id="experience" aria-labelledby="experience-heading">
      <h2 className={styles.title} id="experience-heading" tabIndex={0}>
        Expérience
      </h2>
      <VerticalTimeline className={styles.verticalTimeline}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={`${exp.date}-${exp.title}-${index}`}
            className="vertical-timeline-element--work"
            contentStyle={timelineStyles.content}
            contentArrowStyle={timelineStyles.arrow}
            date={exp.date}
            iconStyle={timelineStyles.icon}
            icon={getIconElement(exp.icon)}
            intersectionObserverProps={observerProps}
            aria-label={`Expérience: ${exp.title} à ${exp.subtitle}`}
          >
            <h3 className="vertical-timeline-element-title" tabIndex={0}>
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" tabIndex={0}>
              {exp.subtitle}
            </h4>
            <p tabIndex={0}>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "linear-gradient(90deg, #1bd6e0 0%, #e62fb8 100%)" }}
          icon={<FaRegStar color="#ffffff" aria-hidden="true" />}
          contentStyle={{ display: "none" }}
          intersectionObserverProps={observerProps}
        />
      </VerticalTimeline>
    </section>
  );
}
