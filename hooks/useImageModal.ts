import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useImages = (images: string[]) => {
  const { query, asPath, push, pathname } = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const closeModal = () => {
    const path = asPath.split("/images")[0];
    push(`${path}`);
    setIsModalOpen(false);
  };

  const openModal = (image_index: number) => {
    setIsModalOpen(true);
    setImageToShow(images[image_index]);

    push(
      {
        pathname: `${pathname}`,
        href: `${asPath}`,
        query: { image: image_index, name: query.name },
      },
      {
        pathname: `${asPath}/images/${image_index}`,
      }
    );
  };

  useEffect(() => {
    if (query.image) {
      setIsModalOpen(true);
      setImageToShow(images[Number(query.image)]);
    } else {
      setIsModalOpen(false);
    }
  }, [query.image, images]);

  return {
    modalOpen: isModalOpen,
    imageToShow,
    openModal,
    closeModal,
  };
};
