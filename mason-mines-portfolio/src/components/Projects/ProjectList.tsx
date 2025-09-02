import { Box, HStack, Stack } from "@chakra-ui/react";
import ProjectCard, { type Project } from "./ProjectCard";

const ProjectList = () => {
  const projectList: Project[] = [
    {
      title: "Project Title",
      date: "Project Date",
      location: "Project Location",
      summary: "Project Summary",
      active: true,
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7"],
    },
  ];

  const filtueredProjects = projectList;

  return (
    <Box>
      <HStack>
        <Stack gap={4} alignItems="center" marginTop={10} marginBottom={10}>
          {filtueredProjects.map((project, index) => (
            <ProjectCard key={index} card={project} />
          ))}
        </Stack>
      </HStack>
    </Box>
  );
};

export default ProjectList;
