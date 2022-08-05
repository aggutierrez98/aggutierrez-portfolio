import { FormEvent, useContext, useRef, useState } from "react";
import { useForm } from "./useForm";
import { sendEmail } from "../helpers/sendEmail";
import { ToastContext } from "../context/ToastContext";

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
  const { newToast } = useContext(ToastContext);

  const [success, setSuccess] = useState(false);
  const [errorFields, setErrorFields] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    messages: [""],
  });

  const sendEmailHandler = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    setLoading(true);
    const { messages, title, success, fields } = await sendEmail(
      formRef,
      formData
    );
    if (success) {
      setSuccess(success);
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
    }

    setLoading(false);

    setErrorFields((prevFields) => {
      Object.keys(prevFields).forEach((key) => {
        if (!fields?.includes(key)) {
          prevFields[key as "email" | "name" | "message"] = false;
        } else {
          prevFields[key as "email" | "name" | "message"] = true;
        }
      });

      return prevFields;
    });

    if (success) return newToast("Email sent successfully", "Success");
    openModal({ title, messages });
  };

  const openModal = ({
    title,
    messages,
  }: {
    title: string;
    messages: string[];
  }) => {
    setModalVisible(true);
    setModalData({
      title,
      messages,
    });
  };

  const closeModal = () => setModalVisible(false);

  return {
    name,
    email,
    message,
    formData,
    errorFields,
    success,
    loading,
    onChange,
    sendEmailHandler,
    formRef,
    modalVisible,
    closeModal,
    modalData,
  };
};
