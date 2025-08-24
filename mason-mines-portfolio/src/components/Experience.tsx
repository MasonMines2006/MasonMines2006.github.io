import ProjectCard from "./ProjectCard";
import { Box } from "@chakra-ui/react";

export interface Experience {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Experience = () => {
  const Experiences: Experience[] = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "",
      image: "",
    },
  ];

  return Experiences.map((exp, index) => (
    <Box key={index} margin={4}>
      <ProjectCard experience={exp} />
    </Box>
  ));
};

export default Experience;
