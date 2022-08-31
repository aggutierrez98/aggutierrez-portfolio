import skillsData from "../data/skills.json";
import { Skill } from "../interfaces/index";
export const getSkillInfo = (name: string) => {
  return skillsData.find((skill) => skill.name === name) as Skill;
};
