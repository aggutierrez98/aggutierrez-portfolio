import { useState, useContext } from "react";
import copy from "copy-text-to-clipboard";
import { ToastContext } from "../context/ToastContext";

export const useCopyToClipboard = () => {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState<boolean>(false);
  const { newToast } = useContext(ToastContext);

  const copyToClipboard = (text: string, options?: any) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
    newToast("Copied to clipboard", "Success");
  };

  return { copyToClipboard, success, value };
};
