import { RefObject, useEffect } from "react";

export const useOutsideAndEscapeKeyAlerter = (
  ref: RefObject<HTMLElement>,
  closeModal: () => void,
  buttonRef?: RefObject<HTMLButtonElement>
) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      event = event || window.event;
      if (event.code === "Escape") closeModal();
    };

    const handleClickOutside = (event: MouseEvent) => {
      // console.log({
      //   eventTarget: event.target,
      //   buttonRef: buttonRef?.current,
      // });
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        event.target !== buttonRef?.current
      )
        closeModal();
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [ref, buttonRef, closeModal]);
};
