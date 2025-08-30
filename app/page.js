import styles from "./page.module.css";
import AboutMe from "./_ui/AboutMe/AboutMe";
import Experience from "./_ui/Experience/Experience";
import Hero from "./_ui/Hero/Hero";
import Projects from "./_ui/Projects/Projects";
import School from "./_ui/School/School";
import Contact from "./_ui/Contact/Contact";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <School />
      <Contact />
    </main>
  );
}
