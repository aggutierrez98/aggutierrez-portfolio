import techsData from "../data/techs.json";
import { Tech } from "../interfaces/index";
export const getTechInfo = (name: string) => {
  return techsData.find((tech) => tech.name === name) as Tech;
};
