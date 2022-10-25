import { Project, Skills, Skill } from "../interfaces/index";

export const loadProjectsData = (projects: Project[], skillsData: Skill[]) => {
  for (let project of projects) {
    project.techs = loadProjectTechsData(project, skillsData);
  }
  return projects;
};

export const loadProjectTechsData = (project: Project, skillsData: Skill[]) => {
  let newTechsSet: Skill[] = [];
  for (const tech of project.techs) {
    const techData = skillsData.find((skill) => skill.name === tech)!;
    newTechsSet.push(techData);
  }
  return newTechsSet;
};

export const loadSkillsInfo = (skills: Skills, skillsData: Skill[]) => {
  const skillsArr = Object.values(skills);
  let newSkillsArr = [];

  for (const skillSet of skillsArr) {
    let newSkillSet = [];
    for (const skillName of skillSet) {
      const skillData = skillsData.find((skill) => skill.name === skillName);
      newSkillSet.push(skillData);
    }
    newSkillsArr.push(newSkillSet);
  }

  return newSkillsArr;
};
