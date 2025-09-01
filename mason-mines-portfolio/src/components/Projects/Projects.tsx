import { Box, Stack, Text } from "@chakra-ui/react";
import FreqGraphDisplay from "./FreqGraphDisplay";

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
          textStyle="xl"
          fontWeight="bold"
          color="fg.muted"
          textAlign={"center"}
          paddingTop={6}
        >
          A visual representation of my projects, both personal and
          professional.
        </Text>
        <FreqGraphDisplay />
      </Stack>
    </Box>
  );
};

export default Projects;
