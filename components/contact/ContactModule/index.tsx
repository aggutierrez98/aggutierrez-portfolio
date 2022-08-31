import React from "react";
import { CustomModal, ContactForm, Loading } from "components";
import { useContactForm } from "hooks";
import styles from "./styles.module.css";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { MdLocationPin, MdMail, MdPhoneAndroid } from "react-icons/md";
import Image from "next/image";

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
    <div className={styles.contactModule} id="contact">
      <h2>Get in touch!</h2>
      <div className={styles.firstContainer}>
        <h3 className={styles.title}>
          Contact me through an email or by any of my social media accounts
        </h3>
        <div className={styles.infoContainer}>
          <div>
            <MdPhoneAndroid />
            <h4>Call me on</h4>
            <p>+5401167059660</p>
          </div>
          <div>
            <MdMail />
            <h4>Email me at</h4>
            <p>agustinguti123@gmail.com</p>
          </div>
          <div>
            <MdLocationPin />
            <h4>Find me at</h4>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.textContainer}>
          <h3>You can send me a message here</h3>
          <div className={styles.imageContainer}>
            <Image
              src={"/assets/send-email.png"}
              width={265}
              height={265}
              alt="send-email"
            />
          </div>
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
    </div>
  );
};
