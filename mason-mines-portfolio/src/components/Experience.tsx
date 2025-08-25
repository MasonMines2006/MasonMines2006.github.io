import ProjectCard from "./ProjectCard";
import { Box, Grid } from "@chakra-ui/react";

export interface Experience {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Experience = () => {
  const Experiences: Experience[] = [
    {
      title: "National Institute of Aviation Research",
      description: "Description of NIAR",
      link: "https://www.wichita.edu/industry_and_defense/NIAR/",
      image: "/src/assets/NIAR_Campus.jpg",
    },
    {
      title: "CS for Social Good",
      description: "Description of CSSG",
      link: "https://www.cssgunc.org/",
      image: "/src/assets/CSSG-Full.jpeg",
    },
  ];

  return (
    <Grid templateColumns="repeat(2, 2fr)" gap="2">
      {Experiences.map((exp, index) => (
        <Box key={index} margin={4}>
          <ProjectCard experience={exp} />
        </Box>
      ))}
    </Grid>
  );
};

export default Experience;
