import ProjectCard from "../_ui/reusable animation for projects/ProjectCard";

export default function Ecommerce() {
  return (
    <div>
      <ProjectCard
        backgroundImage="/Ecommerce/Ecommerce.jpg"
        title="Application E-commerce full stack avec un dashboard admin"
        subtitle="Compétences développées: CRUD avec Next.js et Vercel Blob Storage"
        projectLink="https://shopping-digital.vercel.app"
        techStack={[
          {
            src: "/Ecommerce/images.png",
            alt: "nextjs",
            title: "Next.js",
            link: "https://nextjs.org",
          },
          {
            src: "/Ecommerce/jwt.png",
            alt: "jsonwebtoken",
            title: "JWT",
            link: "https://www.jwt.io",
          },
          {
            src: "/Ecommerce/mongodb.png",
            alt: "mongodb",
            title: "MongoDB",
            link: "https://www.mongodb.com",
          },
          {
            src: "/Ecommerce/sharp.svg",
            alt: "sharp",
            title: "Sharp",
            link: "https://sharp.pixelplumbing.com",
          },
        ]}
      />
    </div>
  );
}
