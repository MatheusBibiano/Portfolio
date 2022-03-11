import { useNotifier } from "../../../contexts/NotifierContext";

import styles from "./Notifier.module.css";

import { IoCloseCircleOutline } from "react-icons/io5";

export function Notifier({ message }) {
  const { setVisible } = useNotifier();

  return (
    <div className={styles.container}>
      <span>{message}</span>
      <button
        className={styles.closeButton}
        title="Fechar"
        onClick={() => setVisible(false)}
      >
        <IoCloseCircleOutline />
      </button>
    </div>
  );
}
