import { Box, Stack, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box
      paddingX={10}
      paddingY={10}
      display={"flex"}
      flexDirection="column"
      alignItems="center"
    >
      <Stack marginTop={10} marginBottom={4}>
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
      </Stack>
    </Box>
  );
};

export default Projects;
