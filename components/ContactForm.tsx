import React, { ChangeEvent, FormEvent } from "react";
import styles from "../styles/components/ContactForm.module.css";
import { UserIcon, MailIcon, ChatAltIcon } from "@heroicons/react/solid";

interface Props {
  formRef: React.RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLElement>) => void;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  formData: {
    name: string;
    message: string;
    email: string;
  };
  errorFields: {
    name: boolean;
    message: boolean;
    email: boolean;
  };
}

export const ContactForm = ({
  formData: { email, message, name },
  onChange,
  formRef,
  sendEmail,
  errorFields,
}: Props) => {
  return (
    <form
      ref={formRef}
      id="contact-form"
      onSubmit={sendEmail}
      method="POST"
      className={styles.formContainer}
    >
      <h3 className={styles.formTitle}>Send me a message</h3>
      <div
        className={`${styles.formGroup} ${
          errorFields.name ? styles.groupError : ""
        }`}
      >
        <UserIcon className={styles.icon} />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          className={styles.input}
          onChange={onChange}
        />
      </div>
      <div
        className={`${styles.formGroup} ${
          errorFields.email ? styles.groupError : ""
        }`}
      >
        <MailIcon className={styles.icon} />
        <input
          type="email"
          placeholder="Email address"
          aria-describedby="emailHelp"
          name="email"
          value={email}
          className={styles.input}
          onChange={onChange}
        />
      </div>
      <div
        className={`${styles.formGroup} ${
          errorFields.message ? styles.groupError : ""
        }`}
      >
        <ChatAltIcon className={styles.textareaIcon} />
        <textarea
          placeholder="Message"
          name="message"
          value={message}
          className={styles.textarea}
          onChange={onChange}
          rows={6}
        />
      </div>
      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
};
