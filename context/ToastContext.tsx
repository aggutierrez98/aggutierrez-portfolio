import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { createContext, ReactElement, useState, useCallback } from "react";

interface ContextProps {
  toastList: Toast[];
  newToast: (message: string, typeToast: "Success" | "Info") => void;
  deleteToast: (id: number) => void;
  setToastList: React.Dispatch<React.SetStateAction<Toast[]>>;
}

export type Toast = {
  id: number;
  title?: string;
  description?: string;
  icon?: JSX.Element;
};

export const ToastContext = createContext({} as ContextProps);

const TypeToast = [
  { title: "Success", backgroundColor: "#5cb85c", icon: <CheckCircleIcon /> },
  {
    title: "Info",
    backgroundColor: "#5bc0de",
    icon: <ExclamationCircleIcon />,
  },
];

export const ToastProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [toastList, setToastList] = useState<Toast[]>([]);

  const newToast = (message: string, typeToast: "Success" | "Info") => {
    let re = TypeToast.find((t) => t.title === typeToast);
    const id = Math.floor(Math.random() * 101 + 1);
    let design = { id: id, description: message };
    let leToast = { ...re, ...design };
    setToastList((prevToastList) => [...prevToastList, leToast]);
  };

  const deleteToast = useCallback((id: number) => {
    setToastList((prevToastList) =>
      prevToastList.filter((toast) => toast.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toastList,
        setToastList,
        newToast,
        deleteToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
