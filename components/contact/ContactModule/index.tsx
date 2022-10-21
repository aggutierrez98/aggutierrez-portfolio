import { CustomModal, ContactForm, Loading } from "components";
import { useContactForm } from "hooks";
import styles from "./styles.module.css";
import {
  IoIosCheckmarkCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { MdLocationPin, MdMail, MdPhoneAndroid } from "react-icons/md";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { sectionVariant, sectionItemVariant } from "../../layout/variants";

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
    <section id="contact" className={styles.contact}>
      <LazyMotion features={domAnimation}>
        <m.div
          className={styles.contactModule}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
        >
          <m.h2 tabIndex={0} variants={sectionItemVariant}>
            Get in touch!
          </m.h2>
          <div className={styles.firstContainer}>
            <m.h3 className={styles.title} variants={sectionItemVariant}>
              Contact me through an email or by any of my social media accounts
            </m.h3>
            <div className={styles.infoContainer}>
              <m.div variants={sectionItemVariant}>
                <MdPhoneAndroid />
                <h4>Call me on</h4>
                <p>+5401167059660</p>
              </m.div>
              <m.div variants={sectionItemVariant}>
                <MdMail />
                <h4>Email me at</h4>
                <p>agustinguti123@gmail.com</p>
              </m.div>
              <m.div variants={sectionItemVariant}>
                <MdLocationPin />
                <h4>Find me at</h4>
                <p>Buenos Aires, Argentina</p>
              </m.div>
            </div>
          </div>
          <div className={styles.contactContainer}>
            <m.div
              className={styles.textContainer}
              variants={sectionItemVariant}
            >
              <h3>You can send me a message here</h3>
              <div className={styles.imageContainer}>
                <Image
                  src={
                    "https://res.cloudinary.com/aggutierrez/image/upload/v1664806129/Portfolio/send-email-art-image.png"
                  }
                  width={265}
                  height={265}
                  alt="send-email"
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

            <Loading loading={loading} />
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
};
