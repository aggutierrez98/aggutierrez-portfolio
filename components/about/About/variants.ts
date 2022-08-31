export const tagMotion = {
  hover: (color: string) => ({
    outlineColor: color,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  }),
};

export const pMotion = {
  hover: (color: string) => ({
    textShadow: `0 0 10px ${color}`,
    transition: {
      duration: 0.1,
    },
  }),
};
