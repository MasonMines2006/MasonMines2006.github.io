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
      description:
        "The National Institute for Aviation Research (NIAR) was established at Wichita State University in 1985 in an effort to increase research and development capabilities, focused on the needs of the Air Capital of the World.",
      link: "https://www.wichita.edu/industry_and_defense/NIAR/",
      image: "/src/assets/NIAR_Campus.jpg",
    },
    {
      title: "CS for Social Good",
      description:
        "CS + Social Good is a student organization dedicated to using our technical skills, time, and resources to make a positive impact on our campus, in our community, and in the world.",
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
