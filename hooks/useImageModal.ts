import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  images_data:
    | {
        folder: string;
        count: number;
      }
    | undefined;
  image_url: string | undefined;
}

export const useImages = ({ image_url, images_data }: Props) => {
  const { query, asPath, push, pathname } = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const closeModal = () => {
    const path = asPath.split("/images")[0];
    push(path);
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
    setIsModalOpen(true);
    setImageToShow(images[image_index]);
  };

  useEffect(() => {
    if (images_data) {
      setImages(() => {
        return Array.from(
          { length: images_data.count },
          (_, i) => `${images_data.folder}/${i + 1}.jpg`
        );
      });
    } else {
      setImages(() => (image_url ? [image_url] : []));
    }
    return () => {};
  }, [images_data, image_url]);

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
