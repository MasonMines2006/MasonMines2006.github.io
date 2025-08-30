import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

const References = () => {
  return (
    <div>
      <HStack spaceX={4}>
        <Link to="experiences" smooth={true} duration={750}>
          <Text>Experiences</Text>
        </Link>
        <Link to="projects" smooth={true} duration={750}>
          <Text>Projects</Text>
        </Link>
        <Link to="connect" smooth={true} duration={750}>
          <Text>Connect</Text>
        </Link>
      </HStack>
    </div>
  );
};

export default References;
