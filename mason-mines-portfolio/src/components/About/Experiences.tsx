import { Box, Flex, Text, Tabs } from "@chakra-ui/react";
import SkilsList from "./SkilsList";
import Education from "./Education";
import CampusAct from "./Activities";
import Work from "./Work";

const Experiences = () => {
  const items = [
    { title: "Skills", content: <SkilsList /> },
    { title: "Experience", content: <Work /> },
    { title: "Education", content: <Education /> },
    { title: "Campus Activity", content: <CampusAct /> },
  ];

  return (
    <Box id="about">
      <Text
        textStyle="6xl"
        fontWeight="bold"
        textAlign="center"
        marginBottom={10}
      >
        Experiences
      </Text>
      <Flex padding={10}>
        <Tabs.Root defaultValue="Skills" width="full">
          <Tabs.List>
            {items.map((item) => (
              <Tabs.Trigger key={item.title} value={item.title}>
                {item.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Box minH="150px" width="700px" mx="auto">
            {items.map((item) => (
              <Tabs.Content
                key={item.title}
                value={item.title}
                _open={{
                  animationName: "fade-in, scale-in",
                  animationDuration: "700ms",
                }}
                _closed={{ display: "none" }}
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

export default Experiences;
