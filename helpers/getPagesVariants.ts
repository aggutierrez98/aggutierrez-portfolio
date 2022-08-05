export const getPagesVariants = (
  pathname: string,
  previousPathname: string
) => {
  const currentPageOrder = getPagesOrder(pathname);
  const previousPageOrder = getPagesOrder(previousPathname);
  const maxOrder = 2;
  const isFirst = currentPageOrder === 0;
  const isLast = currentPageOrder === maxOrder;

  let variants: any = {
    hidden: { opacity: 0, x: "20%" },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-20%" },
  };

  //Moving to left
  if (currentPageOrder < previousPageOrder) {
    variants.hidden.x = "-20%";
    variants.exit.x = "20%";
  }
  //Moving to right
  else if (currentPageOrder > previousPageOrder) {
    variants.hidden.x = "20%";
    variants.exit.x = "-20%";
  }

  if (isFirst) variants.exit.x = "-20%";
  else if (isLast) variants.exit.x = "20%";

  if (pathname.includes("/projects/")) {
    variants = {
      hidden: { scale: 0.9, opacity: 0 },
      enter: { scale: 1, opacity: 1 },
      exit: { scale: 0.9, opacity: 0 },
    };
  }

  return variants;
};

const getPagesOrder = (pathname: string) => {
  let pageOrder = 0;

  switch (pathname) {
    case "/":
      pageOrder = 0;
      break;
    case "/projects":
      pageOrder = 1;
      break;
    case "/contact":
      pageOrder = 2;
      break;

    default:
      break;
  }

  return pageOrder;
};
