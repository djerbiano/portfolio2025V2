"use client";
import Image from "next/image";
import styles from "./animationOneProject.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ backgroundImage, title, subtitle, projectLink, techStack = [] }) {
  const containerRef = useRef();
  const imageRef = useRef();
  const textContentRef = useRef();
  const buttonRef = useRef();
  const techStackRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.3 },
        { opacity: 1, scale: 1, duration: 1.8, ease: "power4.out" }
      )
        .fromTo(
          textContentRef.current,
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "expo.out" },
          "-=1.0"
        )
        .fromTo(
          buttonRef.current,
          { y: -80, scale: 1, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
          },
          "-=0.5"
        )
        .fromTo(
          techStackRef.current.querySelectorAll(`.${styles.techItem}`),
          { y: 40, opacity: 0, rotation: -10 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "back.out(2)",
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  const openLink = (link) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank", "noreferrer");
    }
  };

  return (
    <article className={styles.containerOneProject} ref={containerRef}>
      <div className={styles.imageContainer}>
        <Image ref={imageRef} src={backgroundImage} alt={`${title}-image background`} fill priority className={styles.projectImage} />
        {/*start overlay pour mobile */}
        <div className={styles.mobileOverlay}>
          <h1 className={styles.mobileTitle}>{title}</h1>
          <p className={styles.mobileSubtitle}>{subtitle}</p>

          <button
            ref={buttonRef}
            type="button"
            className={styles.projectButtonMobile}
            onClick={() => openLink(projectLink)}
            aria-label={`Voir le projet ${title}`}
          >
            Voir le projet
          </button>

          <p className={styles.mobileStack}>Stack utilisée : {techStack.map((tech) => tech.title).join(", ")}</p>
        </div>
        {/* end overlay pour mobile */}
        <div className={styles.contentTextContainer} ref={textContentRef}>
          <h1 className={styles.contentDescription}>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className={styles.contentBtn}>
          <button
            ref={buttonRef}
            type="button"
            className={styles.projectButton}
            onClick={() => openLink(projectLink)}
            aria-label={`Voir le projet ${title}`}
          >
            Voir le projet
          </button>

          <div className={styles.techStack} ref={techStackRef}>
            {techStack.map((tech) => (
              <Image
                key={`${tech.alt}-${tech.title}`}
                className={styles.techItem}
                aria-label={tech.alt}
                title={tech.title}
                src={tech.src}
                alt={tech.alt}
                width={70}
                height={70}
                onClick={() => openLink(tech.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
