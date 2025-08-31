import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Namecard = () => {
  return (
    <Link to="introduction" smooth={true} duration={750}>
      <Stack align="center" direction={"row"}>
        <HStack key={"EX"} gap="4">
          <Avatar.Root size="lg" variant="solid">
            <Avatar.Fallback name={"Mason Mines"} fontWeight={"bold"} />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="bold">{"Mason Mines"}</Text>
          </Stack>
        </HStack>
      </Stack>
    </Link>
  );
};

export default Namecard;
