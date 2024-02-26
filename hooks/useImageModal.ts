import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  images_data: {
    main_image: string;
    folder?: string;
    count?: number;
    image_url?: string;
  };
}

export const useImages = ({
  images_data: { image_url, count, folder },
}: Props) => {
  const { query, asPath, push, pathname, back } = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const closeModal = () => {
    back();
    setIsModalOpen(false);
  };

  const openModal = (image_index: number) => {
    push(
      {
        pathname: `${pathname}`,
        href: `${asPath}`,
        query: { image: image_index, name: query.name },
      },
      {
        pathname: `${asPath}images/${image_index}`,
      }
    );
  };

  useEffect(() => {
    if (count) {
      setImages(() => {
        return Array.from(
          { length: count },
          (_, i) => `${folder}/${i + 1}.jpg`
        );
      });
    } else {
      setImages(() => (image_url ? [image_url] : []));
    }
    return () => {};
  }, [image_url, count, folder]);

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
    images,
  };
};
