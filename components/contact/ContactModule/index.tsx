import React from "react";
import { CustomModal, ContactForm, Loading } from "components";
import { useContactForm } from "hooks";
import styles from "./styles.module.css";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";

export const ContactModule = () => {
  const {
    formData,
    success,
    loading,
    errorFields,
    modalVisible,
    sendEmailHandler,
    formRef,
    onChange,
    modalData,
    closeModal,
  } = useContactForm();

  return (
    <div className={styles.contactContainer} id="contact">
      <h1>Contact</h1>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Contact me through an email or by any of my social media accounts
        </h1>
      </div>
      <ContactForm
        errorFields={errorFields}
        formData={formData}
        formRef={formRef}
        onChange={onChange}
        sendEmail={sendEmailHandler}
      />
      <CustomModal onClose={closeModal} visible={modalVisible}>
        <div className={styles.modalContainer}>
          {success ? <CheckCircleIcon /> : <ExclamationCircleIcon />}
          <h2>{modalData.title}</h2>
          <ul>
            {modalData.messages.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      </CustomModal>

      <Loading loading={loading} />
    </div>
  );
};
