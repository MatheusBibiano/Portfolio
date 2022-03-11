import { nanoid } from "nanoid";

import { Event } from "./Event/Event";
import { Point } from "./Point/Point";
import { Line } from "./Line/Line";
import { Space } from "./Space/Space";

import styles from "./TimeLine.module.css";

export function TimeLine(props) {
  function organizeEvent(events, isPair) {
    // Organiza os eventos de forma alternada na time-line.
    var listEvents = [];

    if (isPair) {
      listEvents = events.map((current, index) =>
        index % 2 === 0 ? (
          <Event content={current} key={index} />
        ) : (
          <Space key={index} />
        )
      );
      return listEvents;
    } else {
      listEvents = events.map((current, index) =>
        index % 2 === 0 ? (
          <Space key={index} />
        ) : (
          <Event content={current} key={index} />
        )
      );
      return listEvents;
    }
  }

  function organizePointLines(events) {
    // Organiza as linhas e pontos na time-line.
    var pointLines = [];
    var lastIndex = events.length - 1;

    for(let i = 0; i < events.length; i++) {
      if(i === lastIndex) {
        pointLines.push(<Point key={nanoid()}/>);

      } else {
        pointLines.push(<Point key={nanoid()}/>);
        pointLines.push(<Line key={nanoid()}/>);
      }
    }

    return pointLines;
  }

  return (
    <ul className={styles.container}>
      <li className={styles.columnLeft}>{organizeEvent(props.events, true)}</li>
      <li className={styles.centralColumn}>
        {organizePointLines(props.events)}
      </li>
      <li className={styles.columnRight}>{organizeEvent(props.events, false)}</li>
    </ul>
  );
}
