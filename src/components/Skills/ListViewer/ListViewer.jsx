import { useState } from "react";
import { nanoid } from "nanoid";

import { IoIosArrowDown } from "react-icons/io";

import styles from "./ListViewer.module.css";

export function ListViewer({ data }) {
  const [visible, setVisible] = useState(false);
  let iconID = nanoid();
  let listID = nanoid();
  
  iconID = iconID.replace(/[0-9]/g, "");
  listID = listID.replace(/[0-9]/g, "");

  function showOrHideList() {
    const arrowIcon = document.querySelector(`#${iconID}`);
    const viewerList = document.querySelector(`#${listID}`);

    if (visible) {
      viewerList.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
      setVisible(false);
    } else {
      viewerList.style.display = "flex";
      arrowIcon.style.transform = "rotate(-180deg)";
      setVisible(true);
    }
  }

  return (
    <section className={styles.viewer}>
      <button className={styles.viewerHeader} onClick={showOrHideList}>
        {data.icon}
        <div className={styles.viewerHead}>
          <span className={styles.viewerTitle}>{data.title}</span>
          <p className={styles.viewerDesc}>{data.desc}</p>
        </div>
        <IoIosArrowDown className={styles.arrowIcon} id={iconID} />
      </button>
      <ul className={styles.listSkills} id={listID}>
        {data.list}
      </ul>
    </section>
  );
}
