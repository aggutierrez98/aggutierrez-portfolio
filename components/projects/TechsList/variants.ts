interface CustomProps {
  color: string;
  isDetailsPage: boolean;
}

export const techsVariants = {
  container: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: ({ color, isDetailsPage }: CustomProps) => {
      return isDetailsPage
        ? { borderColor: color, color: color, y: 20, opacity: 0 }
        : { color: color, y: 20, opacity: 0 };
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.15 },
    },
    hover: ({ color, isDetailsPage }: CustomProps) => {
      return isDetailsPage
        ? { boxShadow: `0 0 10px ${color}`, transition: { duration: 0.15 } }
        : {
            borderColor: color,
            boxShadow: `0 0 5px ${color}`,
            transition: { duration: 0.25 },
          };
    },
  },
};
