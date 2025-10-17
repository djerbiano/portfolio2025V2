import ProjectCard from "../_ui/reusable animation for projects/ProjectCard";

export default function Kasa() {
  return (
    <div>
      <ProjectCard
        backgroundImage="/ToReact/ToReact.jpg"
        title="Refonte du site Kasa – Application front-end React"
        subtitle="Compétences développées: développement des composants React et intégration responsive des maquettes Figma"
        projectLink="https://kasa-lemon-seven.vercel.app"
        techStack={[
          {
            src: "/ToReact/react.png",
            alt: "react",
            title: "React",
            link: "https://fr.react.dev",
          },
          {
            src: "/ToReact/sass.png",
            alt: "sass",
            title: "Sass",
            link: "https://sass-lang.com",
          },
        ]}
      />
    </div>
  );
}
