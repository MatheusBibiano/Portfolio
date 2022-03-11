import { useState } from "react";
import { Item } from "./Item/Item";
import { Space } from "./Space/Space";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./Slider.module.css";

export function Slider(props) {
  const [currentItem, setCurrentItem] = useState(0);
  let countItems = props.items.length;

  var items = props.items.map((item, index) => {
    return currentItem === index && <Item item={item} key={index} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {currentItem > 0 ? (
          <button className={styles.controlButton}>
            <IoIosArrowBack
              className={styles.controlIcon}
              onClick={() => setCurrentItem(currentItem - 1)}
            />
          </button>
        ) : (
          <Space />
        )}

        <ul className={styles.listItems}>{items}</ul>

        {currentItem < countItems - 1 ? (
          <button className={styles.controlButton}>
            <IoIosArrowForward
              className={styles.controlIcon}
              onClick={() => setCurrentItem(currentItem + 1)}
            />
          </button>
        ) : (
          <Space />
        )}
      </div>
    </div>
  );
}
