import { getSkillData } from "./fetchData";
import { Project, Skills } from "../interfaces/index";

export const loadProjectsData = async (projects: Project[]) => {
  for (let project of projects) {
    project.techs = await loadProjectTechsData(project);
  }
  return projects;
};

export const loadProjectTechsData = async (project: Project) => {
  let newTechsSet = [];
  for (const tech of project.techs) {
    const techData = await getSkillData(tech as string);
    newTechsSet.push(techData);
  }
  return newTechsSet;
};

export const loadSkillsInfo = async (skills: Skills) => {
  const skillsArr = Object.values(skills);
  let newSkillsArr = [];
  for (const skillSet of skillsArr) {
    let newSkillSet = [];
    for (const skillName of skillSet) {
      const skillData = await getSkillData(skillName as string);
      newSkillSet.push(skillData);
    }
    newSkillsArr.push(newSkillSet);
  }

  return newSkillsArr;
};
