import { Link } from "react-router-dom";

import { Navbar } from "../Navbar/Navbar";
import { useOwner } from "../../contexts/OwnerContext";

import styles from "./Header.module.css";

export function Header() {
  const { owner } = useOwner();

  return (
    <header className={styles.container}>
      <Link to="/" className={styles.logo} title="Início">
        {owner.header.logo}
      </Link>
      <Navbar />
    </header>
  );
}
