import React, { ChangeEvent, FormEvent } from "react";
import styles from "./styles.module.css";
import { SendButton } from "./SendButton";
import { MdMail, MdChat, MdPerson } from "react-icons/md";
import { m } from "framer-motion";
import { sectionItemVariant } from "../../layout/variants";

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
    <m.form
      variants={sectionItemVariant}
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
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          className={styles.input}
          onChange={onChange}
        />
        <MdPerson className={styles.icon} />

        <label className={styles.label}>Name</label>
      </div>
      <div
        className={`${styles.formGroup} ${
          errorFields.email ? styles.groupError : ""
        }`}
      >
        <input
          type="email"
          aria-describedby="emailHelp"
          name="email"
          placeholder="email"
          value={email}
          className={styles.input}
          onChange={onChange}
        />
        <MdMail className={styles.icon} />
        <label className={styles.label}>Email</label>
      </div>

      <div
        className={`${styles.formGroup} ${
          errorFields.message ? styles.groupError : ""
        }`}
      >
        <textarea
          name="message"
          placeholder="message"
          value={message}
          className={styles.textarea}
          onChange={onChange}
          rows={6}
        />
        <MdChat className={styles.textareaIcon} />
        <label className={styles.label}>Message</label>
      </div>
      <SendButton />
    </m.form>
  );
};
