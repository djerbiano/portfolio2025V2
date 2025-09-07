"use client";
import styles from "./hero.module.css";
import ImgProfile from "./ImgProfile";
import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const container = useRef();
  const buttonRef = useRef();
  const imgContainer = useRef();

  useGSAP(
    () => {
      if (!container.current || !buttonRef.current || !imgContainer.current) return;

      gsap.set(container.current, { opacity: 1 });

      const textElements = container.current.querySelectorAll("p, h1, h2");
      const split = new SplitText(textElements, {
        type: "chars, words",
      });

      gsap.set(split.chars, { opacity: 0 });
      gsap.set(imgContainer.current, { visibility: "visible", opacity: 0 });

      const timeline = gsap.timeline();

      timeline.fromTo(
        split.chars,
        { y: 100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: { amount: 0.5, from: "random" },
          duration: 1,
        }
      );

      timeline.fromTo(buttonRef.current, { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 });

      timeline.fromTo(imgContainer.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=1");
    },
    { scope: container }
  );

  return (
    <section className={styles.heroContainer} id="hero" aria-labelledby="hero-heading">
      <ImgProfile animation={imgContainer} initialHidden />
      <div className={styles.heroTextContainer} ref={container}>
        <p>Bonjour ! </p>
        <h1 className={styles.heroTitle} id="hero-heading">
          Moi c&apos;est Saber.
        </h1>
        <h2 className={styles.heroTitle}>Développeur full-stack</h2>
        <p>Specialisé en Next.js et MERN Stack.</p>
        <a
          href="/cv.pdf"
          download="CV_Saber_GHOUDI.pdf"
          ref={buttonRef}
          className={styles.highlight}
          aria-label="Télécharger le CV de Saber GHOUDI"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}
