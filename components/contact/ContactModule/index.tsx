import { CustomModal, ContactForm, Loading } from "components";
import { useContactForm } from "hooks";
import styles from "./styles.module.css";
import {
  IoIosCheckmarkCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { MdMail, MdPhoneAndroid } from "react-icons/md";
import Image from "next/image";
import { m } from "framer-motion";
import { sectionVariant, sectionItemVariant } from "components/layout/variants";
import { Contact as ContactInterface } from "interfaces";

interface Props {
  data: ContactInterface;
}

export const ContactModule = ({ data }: Props) => {
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

  const { title, description1, description2, suboptions, image, alt } = data;

  return (
    <section id="contact" className={styles.contact}>
      <m.div
        className={styles.contactModule}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
      >
        <m.h2 tabIndex={0} variants={sectionItemVariant}>
          {title}
        </m.h2>
        <div className={styles.firstContainer}>
          <m.h3 className={styles.title} variants={sectionItemVariant}>
            {description1}
          </m.h3>
          <div className={styles.infoContainer}>
            <m.div variants={sectionItemVariant}>
              <MdPhoneAndroid />
              <h4>{suboptions.phone.title}</h4>
              <p>{suboptions.phone.value}</p>
            </m.div>
            <m.div variants={sectionItemVariant}>
              <MdMail />
              <h4>{suboptions.email.title}</h4>
              <p>
                <a
                  href={suboptions.email.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {suboptions.email.value}
                </a>
              </p>
            </m.div>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <m.div className={styles.textContainer} variants={sectionItemVariant}>
            <h3>{description2}</h3>
            <div className={styles.imageContainer}>
              <Image
                src={data.image}
                width={265}
                height={265}
                alt={`${alt}-example`}
              />
            </div>
          </m.div>
          <ContactForm
            errorFields={errorFields}
            formData={formData}
            formRef={formRef}
            onChange={onChange}
            sendEmail={sendEmailHandler}
          />
          <CustomModal onClose={closeModal} visible={modalVisible}>
            <div className={styles.modalContainer}>
              {success ? (
                <IoIosCheckmarkCircleOutline />
              ) : (
                <IoMdInformationCircleOutline />
              )}
              <h2>{modalData.title}</h2>
              <ul>
                {modalData.messages.map((message) => (
                  <li key={message}>{message}</li>
                ))}
              </ul>
            </div>
          </CustomModal>

          <Loading isLoading={loading} />
        </div>
      </m.div>
    </section>
  );
};
