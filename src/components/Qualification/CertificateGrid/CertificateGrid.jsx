import { Card } from "./Card/Card";

import styles from "./CertificateGrid.module.css";

export function CertificateGrid(props) {
  const cards_list = props.certificates.map((current, index) => (
    <Card file={current} key={index} />
  ));

  return <article className={styles.container}>{cards_list}</article>;
}
