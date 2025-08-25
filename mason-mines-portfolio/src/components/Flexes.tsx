import { Box, Stack, Text } from "@chakra-ui/react";

interface FlexesProps {
  main: string;
  sub: string;
}

const Flexes = ({ main, sub }: FlexesProps) => {
  return (
    <Box border="1px solid" padding={4} borderRadius="md">
      <Stack>
        <Text>{main}</Text>
        <Text>{sub}</Text>
      </Stack>
    </Box>
  );
};

export default Flexes;
