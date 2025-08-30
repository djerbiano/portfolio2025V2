import AboutMe from "./_ui/AboutMe/AboutMe";
import Experience from "./_ui/Experience/Experience";
import Hero from "./_ui/Hero/Hero";
import Projects from "./_ui/Projects/Projects";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
    </main>
  );
}
