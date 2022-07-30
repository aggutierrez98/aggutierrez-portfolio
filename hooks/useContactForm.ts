import { FormEvent, useRef, useState } from "react";
import { useForm } from "./useForm";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const {
    email,
    message,
    name,
    form: formData,
    onChange,
    setFormValues,
  } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
  });

  const sendEmail = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          openModal(
            "Mail sent succesfully!",
            "Mail was sent to Agustin Gutierrez, soon he will be in touch"
          );
        },
        (error) => {
          openModal(
            "Error sending mail!",
            "Something went wrong, please try again"
          );
        }
      );
  };

  const openModal = (title: string, message: string) => {
    setModalVisible(true);
    setModalData({
      title,
      message,
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return {
    name,
    email,
    message,
    onChange,
    sendEmail,
    formRef,
    modalVisible,
    closeModal,
    modalData,
  };
};
