import { Contact } from "../components/Contact/Contact";
import { NotifierContextProvider } from "../contexts/NotifierContext";

export function ContactPage() {
  return (
    <NotifierContextProvider>
      <Contact />
    </NotifierContextProvider>
  );
}
