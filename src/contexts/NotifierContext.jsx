import { useState, createContext, useContext } from "react";

const NotifierContext = createContext();

export function NotifierContextProvider({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <NotifierContext.Provider value={{ visible, setVisible }}>
      {children}
    </NotifierContext.Provider>
  );
}

export function useNotifier() {
  return useContext(NotifierContext);
}
