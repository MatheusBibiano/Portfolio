import { Form } from "./Form/Form";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { Notifier } from "./Notifier/Notifier";

import { useNotifier } from "../../contexts/NotifierContext";
import { useOwner } from "../../contexts/OwnerContext";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

import styles from "./Contact.module.css";

export function Contact() {
  const { owner } = useOwner();
  const { visible } = useNotifier();

  const content = [
    <ContactInfo
      icon={<FiPhone />}
      title="Telefone"
      content={owner.contact.address.phoneNumber}
    />,
    <ContactInfo
      icon={<FiMail />}
      title="Email"
      content={owner.contact.address.email}
    />,
    <ContactInfo
      icon={<FiMapPin />}
      title="Endereço"
      content={`${owner.contact.address.city} - ${owner.contact.address.street}, ${owner.contact.address.number}`}
    />,
  ];

  const rows = content.map((current, index) => <li key={index}>{current}</li>);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contato</h2>
      <h3 className={styles.subtitle}>Entre em contanto</h3>
      <article>
        <address>
          <ul className={styles.contactInfo}>{rows}</ul>
        </address>

        <Form />
        {visible && <Notifier message={"Obrigado por entrar em contato!"} />}
      </article>
    </div>
  );
}
