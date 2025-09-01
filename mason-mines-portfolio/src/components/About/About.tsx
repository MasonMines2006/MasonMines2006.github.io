import { Box, Flex, Tabs, Text } from "@chakra-ui/react";
import SkilsList from "./SkilsList";
import Education from "./Education";
import CampusAct from "./Activities";
import Work from "./Work";

const Experiences = () => {
  const items = [
    {
      title: "Education",
      content: <Education />,
    },
    {
      title: "Skills",
      content: <SkilsList />,
    },
    {
      title: "Work and Research",
      content: <Work />,
    },
    {
      title: "Campus Activity",
      content: <CampusAct />,
    },
  ];
  return (
    <Box marginY={10}>
      <Text
        textStyle="6xl"
        fontWeight="bold"
        textAlign={"center"}
        marginBottom={10}
      >
        Experiences
      </Text>
      <Flex padding={10}>
        <Tabs.Root defaultValue="Skills" width="full">
          <Tabs.List>
            {items.map((item, index) => (
              <Tabs.Trigger key={index} value={item.title}>
                {item.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Box minH="150px" width="700px" mx="auto">
            {items.map((item, index) => (
              <Tabs.Content
                key={index}
                value={item.title}
                _open={{
                  animationName: "fade-in, scale-in",
                  animationDuration: "700ms",
                }}
                _closed={{
                  display: "none", // 👈 this hides inactive tabs instead of overlapping
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

export default Experiences;
