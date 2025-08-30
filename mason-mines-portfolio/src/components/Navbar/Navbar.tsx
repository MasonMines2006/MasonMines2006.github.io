import { Box, HStack, Text } from "@chakra-ui/react";
import ThemeButton from "./ThemeButton";
import Namecard from "./Namecard";
import References from "./References";

const Navbar = () => {
  return (
    <Box paddingX={10} position="sticky" top={0} zIndex={1000}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        paddingX={10}
        padding={2}
      >
        <Namecard />
        <HStack direction={"row"} gap={4} alignItems="center">
          <References />
          <ThemeButton />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
