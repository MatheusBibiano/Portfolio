import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const themes = {
  light: [
    { name: "--primary", value: "#6450c7" },
    { name: "--font", value: "#1d2533" },
    { name: "--font-hover", value: "#fff" },
    { name: "--body-bg", value: "#fff" },
    { name: "--header-bg", value: "#ddd" },
    { name: "--header-shadow", value: "rgba(102, 102, 102, 0.3)" },
    { name: "--box-shadow", value: "rgba(221, 221, 221, 0.2)" },
  ],

  dark: [
    { name: "--primary", value: "#c9184a" },
    { name: "--font", value: "#fff" },
    { name: "--font-hover", value: "#fff" },
    { name: "--body-bg", value: "#1d2533" },
    { name: "--header-bg", value: "#131922" },
    { name: "--header-shadow", value: "rgba(102, 102, 102, 0.3)" },
    { name: "--box-shadow", value: "rgba(19, 25, 34, 0.2)" },
  ],
};

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const root = document.querySelector("html");

  if (theme === "light") {
    themes.light.map((current) =>
      root.style.setProperty(current.name, current.value)
    );
  } else if (theme === "dark") {
    themes.dark.map((current) =>
      root.style.setProperty(current.name, current.value)
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
