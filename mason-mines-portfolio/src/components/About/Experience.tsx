import ProjectCard from "./ExperienceCard";
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
      title:
        "ARTificial intelligence for Simulation of Advanced Nuclear Systems",
      description:
        "The research in the ARTISANS group revolves around uncertainty quantification (UQ) and scientific machine learning (SciML). The goal is to combine SciML, experimentation and modeling & simulation (M&S) into a unified approach to improve the predictive capabilities of computer models and enable reduced reliance on expensive measurement data. Additionally, the application of such research will be focused on risk and economics evaluations of advanced nuclear reactors, such as small modular reactors and micro-reactors. The ultimate goal is to dramatically reduce the capital and operating costs of nuclear systems to maintain global technology leadership for nuclear energy.",
      link: "https://ne.ncsu.edu/artisans/",
      image: "/NCState.jpg",
    },
    {
      title: "National Institute of Aviation Research",
      description:
        "The National Institute for Aviation Research (NIAR) was established at Wichita State University in 1985 in an effort to increase research and development capabilities, focused on the needs of the Air Capital of the World.",
      link: "https://www.wichita.edu/industry_and_defense/NIAR/",
      image: "/NIAR_Campus.jpg",
    },

    {
      title: "CS for Social Good",
      description:
        "CS + Social Good is a student organization dedicated to using our technical skills, time, and resources to make a positive impact on our campus, in our community, and in the world.",
      link: "https://www.cssgunc.org/",
      image: "/CSSG-Full.jpeg",
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
