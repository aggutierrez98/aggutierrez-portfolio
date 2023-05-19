import { sendForm } from "@emailjs/browser";
import { RefObject } from "react";
interface Params {
  name: string;
  email: string;
  message: string;
}

export const validateEmailData = ({ name, email, message }: Params) => {
  let errors = [];

  if (name.length <= 6 || name.length >= 20) {
    errors.push({
      message:
        "Name must have at least 6 characters and less than 20 characters",
      field: "name",
    });
  }

  if (email.length <= 6 || email.length >= 30) {
    errors.push({
      message:
        "Email must have at least 6 characters and less than 20 characters",
      field: "email",
    });
  }

  if (message.length <= 6 || message.length >= 200) {
    errors.push({
      message:
        "Message must have at least 6 characters and less than 200 characters",
      field: "message",
    });
  }

  return errors;
};

export const sendEmail = async (
  formRef: RefObject<HTMLFormElement>,
  formData: {
    name: string;
    email: string;
    message: string;
  }
) => {
  const errors = validateEmailData(formData);
  if (errors.length > 0) {
    return {
      title: "Error in params:",
      messages: errors.map((error) => error.message),
      fields: errors.map((error) => error.field),
      success: false,
    };
  }

  try {
    await sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    return {
      title: "Mail sent successfully!",
      messages: [
        "Mail was sent to Agustin Gutierrez, soon he will be in touch",
      ],
      success: true,
    };
  } catch (error) {
    return {
      title: "Error sending mail!",
      messages: ["Something went wrong, please try again"],
      fields: [],
      success: false,
    };
  }
};
