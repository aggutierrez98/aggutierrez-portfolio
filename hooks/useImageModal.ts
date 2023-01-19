import { useState } from "react";

export const useImageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (image_url: string) => {
    setIsModalOpen(true);
    setImageToShow(image_url);
  };

  return {
    modalOpen: isModalOpen,
    imageToShow,
    openModal,
    closeModal,
  };
};
