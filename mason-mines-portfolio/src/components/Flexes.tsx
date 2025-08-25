import { Box, Stack, Text } from "@chakra-ui/react";

interface FlexesProps {
  main: string;
  sub: string;
}

const Flexes = ({ main, sub }: FlexesProps) => {
  return (
    <Box
      border="1px solid"
      padding={4}
      borderRadius="md"
      backgroundColor={"bg.emphasized"}
    >
      <Stack alignContent={"center"} spaceY={1}>
        <Text textAlign={"center"} fontWeight={"bold"} textStyle={"xl"}>
          {main}
        </Text>
        <Text textAlign={"center"} textStyle={"lg"}>
          {sub}
        </Text>
      </Stack>
    </Box>
  );
};

export default Flexes;
