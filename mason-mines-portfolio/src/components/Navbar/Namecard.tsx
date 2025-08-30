import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
<<<<<<< HEAD
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
=======

const Namecard = () => {
  return (
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
>>>>>>> 5f84b8bb14a6198dd1aa61c3f4f6488985f7647c
  );
};

export default Namecard;
