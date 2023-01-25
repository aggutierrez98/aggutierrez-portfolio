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
  const skillsArr: string[][] = Object.values(skills);
  let newSkillsArr: Skills = {};
  let index = 0;

  for (const skillSet of skillsArr) {
    let newSkillSet: Skill[] = [];
    for (const skillName of skillSet) {
      const skillData = skillsData.find((skill) => skill.name === skillName);
      if (skillData) newSkillSet.push(skillData);
    }

    if (index === 0) newSkillsArr.frontend = newSkillSet;
    if (index === 1) newSkillsArr.backend = newSkillSet;
    if (index === 2) newSkillsArr.database = newSkillSet;
    if (index === 3) newSkillsArr.others = newSkillSet;
    index++;
  }

  return newSkillsArr as Skills;
};
