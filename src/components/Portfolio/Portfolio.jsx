import { Slider } from "./Slider/Slider";
import { useOwner } from "../../contexts/OwnerContext";

import styles from "./Portfolio.module.css";

export function Portfolio() {
  const { owner } = useOwner();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfólio</h1>
      <h2 className={styles.subtitle}>Meus projetos</h2>
      <Slider items={owner.portfolio.projects} />
    </div>
  );
}
