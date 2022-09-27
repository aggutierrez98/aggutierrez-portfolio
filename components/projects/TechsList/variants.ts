interface CustomProps {
  color: string;
  isDetailsPage: boolean;
}

export const techsVariants = {
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
  },
};
