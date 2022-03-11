import { BiError } from "react-icons/bi";

import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.container}>
      <BiError className={styles.icon} />
      <span className={styles.errorMessage}>Página não encontrada</span>
    </div>
  );
}
