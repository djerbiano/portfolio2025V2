"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseR } from "react-icons/cg";

const navItems = [
  { href: "/#hero", label: "ACCUEIL" },
  { href: "/#presentation", label: "PRÉSENTATION" },
  { href: "/#realisation", label: "RÉALISATION" },
  { href: "/#experience", label: "EXPÉRIENCE" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const menuIcon = isMenuOpen ? (
    <CgCloseR color="#ffffff" aria-hidden="true" />
  ) : (
    <RxHamburgerMenu color="#ffffff" aria-hidden="true" />
  );

  return (
    <>
      <button
        type="button"
        className={styles.hamburgerIcon}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
      >
        {menuIcon}
      </button>

      <header className={`${styles.header} ${isMenuOpen ? styles.openMenu : styles.closeMenu}`}>
        <nav id="main-navigation" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveLink(item.href);
              }}
              aria-label={`Aller à la section ${item.label}`}
              className={`${styles.navLink} ${activeLink === item.href ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
