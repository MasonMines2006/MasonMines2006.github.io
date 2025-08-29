import { Box, Flex, Tabs, Text } from "@chakra-ui/react";
import SkilsList from "./SkilsList";
import Experience from "./Work";
import Education from "./Education";
import CampusAct from "./CampusAct";

const Expieriences = () => {
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
      title: "Campus Activity",
      content: <CampusAct />,
    },
  ];
  return (
    <Box id="Expieriences">
      <Box id="Expieriences" marginBottom={40}>
        <Text color={"bg"}>t</Text>
      </Box>
      <Text
        textStyle="6xl"
        fontWeight="bold"
        textAlign={"center"}
        marginBottom={10}
      >
        Expieriences
      </Text>
      <Flex minH="dvh">
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

export default Expieriences;
