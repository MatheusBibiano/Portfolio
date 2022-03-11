import { Link } from "react-router-dom";

import { useOwner } from "../../contexts/OwnerContext";

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

import styles from "./Home.module.css";

export function Home() {
  const { owner } = useOwner();

  return (
    <div className={styles.container}>
      <ul className={styles.socialMediaList}>
        <li className={styles.socialLinkContainer}>
          <a
            href={owner.home.links.linkedIn}
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.socialIcons} title="Linkedin" />
          </a>
        </li>
        <li className={styles.socialLinkContainer}>
          <a
            href={owner.home.links.gitHub}
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.socialIcons} title="Github" />
          </a>
        </li>
      </ul>
      <div className={styles.presentationContainer}>
        <h1 className={styles.presentTitle}>{owner.home.name}</h1>
        <div className={styles.subtitleContainer}>
          <h2 className={styles.presentSubtitle}>Desenvolvedor frontend</h2>
          <FaCode className={styles.subtitleIcon} />
        </div>
        <p className={styles.presentDesc}>{owner.home.profile}</p>
        <Link to="/contact" className={styles.contactmeButton + " primaryButton"}>
          Entre em contato
        </Link>
      </div>
      <img src={owner.home.image} className={styles.ownerImg} alt="imagem do dono" />
    </div>
  );
}
