import { BsEye } from "react-icons/bs";

import { useOwner } from "../../contexts/OwnerContext";

import styles from "./About.module.css";

export function About() {
  const { owner } = useOwner();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sobre Mim</h2>
      <h3 className={styles.subtitle}>Minha introdução</h3>
      <p className={styles.description}>{owner.about.description}</p>
      <ul className={styles.info}>
        <li>
          <span>{owner.about.experience}</span>
          <p>Anos de Experiência</p>
        </li>
        <li>
          <span>{owner.about.projects}</span>
          <p>Projetos Completos</p>
        </li>
      </ul>
      <a
        href={owner.about.links.curriculum}
        target="_blank"
        rel="noreferrer"
        className={styles.downloadCV + " primaryButton"}
      >
        Visualizar CV <BsEye className={styles.downloadIcon} />
      </a>
    </div>
  );
}
