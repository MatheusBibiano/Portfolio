import { useState } from "react";
import { TimeLine } from "./TimeLine/TimeLine";
import { CertificateGrid } from "./CertificateGrid/CertificateGrid";
import { useOwner } from "../../contexts/OwnerContext";

import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi";

import styles from "./Qualification.module.css";

export function Qualification() {
  const [defaultTimeLine, setDefaultTimeLine] = useState(true);
  const { owner } = useOwner();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qualificações</h1>
      <h2 className={styles.subtitle}>Minha jornada</h2>

      <div className={styles.timeLineContainer}>
        <header className={styles.timeLineHeader}>
          <button
            className={defaultTimeLine ? styles.optionsActive : styles.options}
            onClick={() => setDefaultTimeLine(true)}
          >
            <IoSchoolOutline className={styles.optionsIcon} />
            Educação
          </button>
          <button
            className={!defaultTimeLine ? styles.optionsActive : styles.options}
            onClick={() => setDefaultTimeLine(false)}
          >
            <HiOutlineBriefcase
              className={styles.optionsIcon}
              style={{ fontSize: "2.6rem"}}
            />
            Trabalho
          </button>
        </header>

        {defaultTimeLine ? (
          <TimeLine
            events={owner.qualification.education}
          />
        ) : (
          <TimeLine
            events={owner.qualification.work}
          />
        )}
      </div>

      <div className={styles.gridContainer}>
        <h2 className={styles.title} style={{fontSize: "3rem"}}>
          Certificados
        </h2>
        <h3 className={styles.subtitle} style={{fontSize: "1.4rem"}}>
          Minhas certificações
        </h3>

        <CertificateGrid certificates={owner.qualification.certificates}/>
      </div>
    </div>
  );
}
