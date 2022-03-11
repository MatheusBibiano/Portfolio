import { FiCalendar } from "react-icons/fi";

import styles from "./Event.module.css";

export function Event(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.content.title}</h2>
      <span className={styles.location}>{props.content.location}</span>
      <span className={styles.dateContainer}>
        <FiCalendar className={styles.calendarIcon} />
        {props.content.date}
      </span>
    </div>
  );
}
