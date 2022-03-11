import styles from "./Item.module.css";

export function Item(props) {
  return (
    <div className={styles.container}>
      <img
        src={props.item.image}
        className={styles.itemImage}
        alt="Foto do projeto"
      />
      <div className={styles.itemContent}>
        <h2 className={styles.title}>{props.item.title}</h2>
        <p className={styles.desc}>{props.item.desc}</p>
        <a
          href={props.item.link}
          className={styles.linkButton + " primaryButton"}
          target="_blank"
          rel="noreferrer"
        >
          Ver no Github
        </a>
      </div>
    </div>
  );
}
