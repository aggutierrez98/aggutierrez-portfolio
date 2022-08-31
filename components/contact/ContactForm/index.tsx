import React, { ChangeEvent, FormEvent } from "react";
import styles from "./styles.module.css";
import { SendButton } from "./SendButton";
import { MdSubject, MdMail, MdChat, MdPerson } from "react-icons/md";

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
      <div
        className={`${styles.formGroup} ${
          errorFields.name ? styles.groupError : ""
        }`}
      >
        <MdPerson className={styles.icon} />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          className={styles.input}
          onChange={onChange}
        />
        <label className={styles.label}>Name</label>
      </div>
      <div
        className={`${styles.formGroup} ${
          errorFields.email ? styles.groupError : ""
        }`}
      >
        <MdMail className={styles.icon} />
        <input
          aria-invalid="true"
          type="email"
          aria-describedby="emailHelp"
          name="email"
          placeholder="email"
          value={email}
          className={styles.input}
          onChange={onChange}
        />
        <label className={styles.label}>Email</label>
      </div>

      <div
        className={`${styles.formGroup} ${
          errorFields.message ? styles.groupError : ""
        }`}
      >
        <MdChat className={styles.textareaIcon} />
        <textarea
          name="message"
          placeholder="message"
          value={message}
          className={styles.textarea}
          onChange={onChange}
          rows={6}
        />
        <label className={styles.label}>Message</label>
      </div>
      <SendButton />
    </form>
  );
};
