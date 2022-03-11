import { ThemeContextProvider } from "./contexts/ThemeContext";
import { OwnerContextProvider } from "./contexts/OwnerContext";

import { Router } from "./router";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div className={styles.App}>
      <OwnerContextProvider>
        <ThemeContextProvider>
          <Router />
        </ThemeContextProvider>
      </OwnerContextProvider>
    </div>
  );
}
