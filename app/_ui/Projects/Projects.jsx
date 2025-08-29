import { Fade } from "react-awesome-reveal";
import styles from "./projects.module.css";
import OneProject from "./OneProject";

const projectsData = [
  {
    src: "/Ecommerce/full1.jpg",
    alt: "Projet E-commerce full stack - Application complète de vente en ligne",
    link: "/Ecommerce",
  },
  {
    src: "/ToReact/figmaToReact.jpg", 
    alt: "Projet Migration .NET vers React - Modernisation d'application legacy",
    link: "/Kasa",
  },
];

export default function Projects() {
  return (
    <section 
      className={styles.projectsContainer} 
      id="realisation"
      aria-labelledby="projects-heading"
    >
      <h2 className={styles.title} id="projects-heading">
        RÉALISATIONS
      </h2>
      <div className={styles.projects}>
        <Fade direction="top" cascade damping={0.4}>
          {projectsData.map((project) => (
            <OneProject 
              key={project.link} 
              src={project.src} 
              alt={project.alt} 
              link={project.link} 
            />
          ))}
        </Fade>
      </div>
    </section>
  );
}