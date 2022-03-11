import styles from "./Card.module.css";

export function Card(props) {
  const source = `./img/certificates/${props.file}`;

  return (
    <section className={styles.card}>
      <img src={source} alt="Certificado" />
    </section>
  );
}
