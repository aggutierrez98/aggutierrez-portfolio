import colorsData from "../data/colors.json";
export const getTechColor = (name: string) =>
  colorsData[name as keyof typeof colorsData] || "#000000";
