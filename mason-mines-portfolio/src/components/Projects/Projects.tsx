import { Box, Stack, Text } from "@chakra-ui/react";
import FreqGraphDisplay from "./FreqGraphDisplay";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <Box
      paddingX={10}
      paddingY={20}
      display={"flex"}
      flexDirection="column"
      alignItems="center"
      id="projects"
    >
      <Stack marginTop={2} marginBottom={4}>
        <Text textStyle="6xl" fontWeight="bold" textAlign={"center"}>
          Projects
        </Text>
        <Text
          textStyle="large"
          fontWeight="bold"
          color="fg.muted"
          textAlign={"center"}
        >
          Blah blah blha, description, yaddah yaddah.
        </Text>
        <FreqGraphDisplay />
        <ProjectList />
      </Stack>
    </Box>
  );
};

export default Projects;
