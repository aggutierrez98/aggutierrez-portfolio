export const tagMotion = {
  hover: (color: string) => ({
    outlineColor: color,
    boxShadow: `0 0 10px ${color}`,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  }),
  focus: (color: string) => ({
    outlineColor: color,
    boxShadow: `0 0 10px ${color}`,
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
    color: color,
    transition: {
      duration: 0.1,
    },
  }),
  focus: (color: string) => ({
    textShadow: `0 0 10px ${color}`,
    color: color,
    transition: {
      duration: 0.1,
    },
  }),
  rest: () => ({
    textShadow: `0 0 0 #eeeeee`,
  }),
};
