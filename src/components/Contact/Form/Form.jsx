import { useState } from "react";
import { supabaseClient } from "../../../services/supabase";
import { useNotifier } from "../../../contexts/NotifierContext";

import { IoSend } from "react-icons/io5";

import styles from "./Form.module.css";

export function Form() {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const { setVisible } = useNotifier();

  function getDate() {
    var date = new Date();
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function validateInput(data) {
    const valid_data = data.map((current) => (current ? current : false));
    const unvalid_value = valid_data.find((item) => item === false);

    if (unvalid_value === undefined) return true;
    else return false;
  }

  async function sendFormData(data) {
    await supabaseClient.from("contact").insert([data]);
  }

  return (
    <form className={styles.contactForm}>
      <fieldset>
        <div className={styles.inputContainer}>
          <label htmlFor="author" className={styles.Label}>
            Nome
          </label>
          <input
            type="text"
            id="author"
            className={styles.Input}
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            maxLength="50"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.Label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.Input}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            maxLength="100"
            required
          />
        </div>
      </fieldset>

      <div className={styles.inputContainer}>
        <label htmlFor="subject" className={styles.Label}>
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          className={styles.Input}
          value={subject}
          onChange={(event) => {
            setSubject(event.target.value);
          }}
          maxLength="100"
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="message" className={styles.Label}>
          Mensagem
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          rows="3"
          maxLength="300"
          title="Preencha este campo."
          className={styles.Input + " " + styles.TextArea}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={styles.submitButton + " primaryButton"}
        onClick={(event) => {
          event.preventDefault();

          setAuthor(author.trim());
          setEmail(email.trim());
          setSubject(subject.trim());
          setMessage(message.trim());
          setDate(getDate().trim());
          
          let inputList = [author, email, subject, message, date];
          let isValid = validateInput(inputList);
          
          if (isValid) {
            sendFormData({author, email, subject, message, date});
            
            setVisible(true);
            
            setAuthor("");
            setEmail("");
            setSubject("");
            setMessage("");
            setDate("");
          }
        }}
      >
        Enviar <IoSend className={styles.submitIcon} />
      </button>
    </form>
  );
}
