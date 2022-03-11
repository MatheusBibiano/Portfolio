import styles from "./ContactInfo.module.css";

export function ContactInfo({ icon, title, content }) {
  return (
    <div className={styles.container}>
      {icon}
      <div className={styles.infoContainer}>
        <span>{title}</span>
        <p>{content}</p>
      </div>
    </div>
  );
}
