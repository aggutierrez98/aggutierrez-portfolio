import Head from "next/head";
import { useContactForm } from "../hooks/useContactForm";
import { ContactForm } from "../components/ContactForm";
import styles from "../styles/pages/contact.module.css";
import { CustomModal } from "../components/CustomModal";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { Loading } from "../components/Loading";

const Contact = () => {
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
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch with aggutierrez" />
      </Head>
      <main className={styles.contactContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Get in touch sending me an email or contacting by one of my social
            media accounts
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
      </main>

      <Loading loading={loading} />
    </>
  );
};

export default Contact;
