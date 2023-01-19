import { useState } from "react";
export const useImageCarrousel = (images: string[]) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const setNextPage = () => {
    if (page !== images.length - 1) paginate(1);
  };

  const setPrevPage = () => {
    if (page !== 0) paginate(-1);
  };

  return {
    page,
    direction,
    setNextPage,
    setPrevPage,
  };
};
