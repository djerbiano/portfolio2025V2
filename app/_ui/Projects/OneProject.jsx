"use client";
import styles from "./oneProject.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OneProject({ src, alt, link }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(link);
    }
  };

  return (
    <div
      className={styles.project}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`Voir le projet: ${alt}`}
    >
      <Image className={styles.projectImage} src={src} alt={alt} width={800} height={800} priority />
    </div>
  );
}
