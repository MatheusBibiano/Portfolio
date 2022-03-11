import { NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

import { FiSun, FiMoon } from "react-icons/fi";

import styles from "./Navbar.module.css";

export function Navbar() {
  const links = [
    { content: "Início", path: "/" },
    { content: "Sobre", path: "/about" },
    { content: "Habilidades", path: "/skills" },
    { content: "Qualificações", path: "/qualification" },
    { content: "Portfólio", path: "/portfolio" },
    { content: "Contato", path: "/contact" },
  ];

  const { theme, setTheme } = useTheme();

  const nav_links = links.map((link, index) => {
    return (
      <li key={index}>
        {index === 0 ? (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? styles.navLink + " " + styles.navLinkActive
                : styles.navLink
            }
            end
          >
            {link.content}
          </NavLink>
        ) : (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? styles.navLink + " " + styles.navLinkActive
                : styles.navLink
            }
          >
            {link.content}
          </NavLink>
        )}
      </li>
    );
  });

  return (
    <nav className={styles.container}>
      <ul className={styles.navLinksContainer}>
        {nav_links}
        <button
          className={styles.themeButton}
          title="Mudar tema"
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
      </ul>
    </nav>
  );
}
