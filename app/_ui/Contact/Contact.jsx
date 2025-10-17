"use client";
import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const fieldErrors = {};

        Object.entries(data.details?.properties || {}).forEach(([field, fieldData]) => {
          if (fieldData.errors?.[0]) fieldErrors[field] = fieldData.errors[0];
        });
        setErrors(fieldErrors);
        setSuccess(false);
        return;
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur d'envoi:", err);
      setErrors({ submit: "Erreur de connexion. Veuillez réessayer." });
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactContainer} id="contact" aria-labelledby="contact-heading">
      <h2 className={styles.title} id="contact-heading">
        CONTACT
      </h2>
      <p className={styles.subtitle}>Envoyez-moi un message !</p>

      <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
        <div className={styles.contactAreaDesigneRight} aria-hidden="true"></div>
        <div className={styles.contactAreaDesigneLeft} aria-hidden="true"></div>

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.visuallyHidden}>
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p id="name-error" className={styles.formTextError}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.visuallyHidden}>
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p id="email-error" className={styles.formTextError}>
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.visuallyHidden}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
          {errors.message && (
            <p id="message-error" className={styles.formTextError}>
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {success && <p className={styles.formSuccess}>Message envoyé avec succès ✅</p>}

        {errors.submit && <p className={styles.formTextError}>{errors.submit}</p>}

        {success === false && !errors.submit && (
          <p className={styles.formTextError}>Erreur lors de l'envoi. Veuillez réessayer. ❌</p>
        )}
      </form>
    </section>
  );
}
