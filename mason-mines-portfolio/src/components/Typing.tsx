import { ReactTyped } from "react-typed";
import { Text, Box } from "@chakra-ui/react";

interface TypingProps {
  strings: string[];
}

const Typing = ({ strings }: TypingProps) => {
  const extra_strings = strings;
  console.log(extra_strings);
  return (
    <Box>
      <Text>
        I'm a{" "}
        <ReactTyped
          strings={["Developer", "Writer", "Designer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
      </Text>
    </Box>
  );
};

export default Typing;
