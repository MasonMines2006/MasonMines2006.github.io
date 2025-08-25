import { Box, Flex, Tabs, Text } from "@chakra-ui/react";
import SkilsList from "./SkilsList";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Education from "./Education";

const About = () => {
  const items = [
    {
      title: "Skills",
      content: <SkilsList />,
    },
    {
      title: "Experience",
      content: <Experience />,
    },

    {
      title: "Education",
      content: <Education />,
    },
    {
      title: "About Me",
      content: <AboutMe />,
    },
  ];
  return (
    <Box>
      <Text
        textStyle="6xl"
        fontWeight="bold"
        textAlign={"center"}
        marginTop={10}
        marginBottom={4}
      >
        About
      </Text>
      <Flex minH="dvh">
        <Tabs.Root defaultValue="About Me" width="full">
          <Tabs.List>
            {items.map((item, index) => (
              <Tabs.Trigger key={index} value={item.title}>
                {item.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Box pos="relative" minH="150px" width="700px">
            {items.map((item, index) => (
              <Tabs.Content
                key={index}
                value={item.title}
                position="absolute"
                inset="0"
                _open={{
                  animationName: "fade-in, scale-in",
                  animationDuration: "700ms",
                }}
                _closed={{
                  animationName: "fade-out, scale-out",
                  animationDuration: "500ms",
                }}
              >
                {item.content}
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Flex>
    </Box>
  );
};

export default About;
