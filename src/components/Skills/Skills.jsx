import { useOwner } from "../../contexts/OwnerContext";

import { ListViewer } from "./ListViewer/ListViewer";

import { BsBraces } from "react-icons/bs";
import { BiServer } from "react-icons/bi";

import styles from "./Skills.module.css";

export function Skills() {
  const { owner } = useOwner();

  const frontend_skills = owner.skills.frontend.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));

  const backend_skills = owner.skills.backend.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Habilidades</h1>
      <h2 className={styles.subtitle}>Meu nível técnico</h2>

      <article className={styles.viewerContainer}>
        <ListViewer
          data={{
            icon: <BsBraces />,
            title: "Frontend developer",
            desc: owner.skills.frontExperience,
            list: frontend_skills,
          }}
        />

        <hr className={styles.divisor} />

        <ListViewer
          data={{
            icon: <BiServer />,
            title: "Backend developer",
            desc: owner.skills.backExperience,
            list: backend_skills,
          }}
        />
      </article>
    </div>
  );
}
