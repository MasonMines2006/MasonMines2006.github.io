import { Accordion, Box, Grid, HStack, Span, Tag } from "@chakra-ui/react";
import Flexes from "./Flexes";

const Education = () => {
  const items = [
    {
      value: "a",
      title: "First Item",
      text: "Some value 1...",
      tag: "Completed",
      colorPalette: "green",
    },
    {
      value: "b",
      title: "Second Item",
      text: "Some value 2...",
      tag: "Completed",
      colorPalette: "green",
    },
    {
      value: "c",
      title: "Third Item",
      text: "Some value 3...",
      tag: "Completed",
      colorPalette: "green",
    },
  ];
  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
        <Flexes main={"4.0"} sub={"Major GPA"} />
        <Flexes main={"3.8"} sub={"Cumulative GPA"} />
        <Flexes main={"Honors"} sub={"~10% of Class of '28"} />
      </Grid>
      <Accordion.Root collapsible defaultValue={["a"]}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            <Accordion.ItemTrigger>
              <Span flex="1">
                <HStack justifyContent={"space-between"}>
                  {item.title}{" "}
                  <Tag.Root
                    colorPalette={item.colorPalette}
                    size="sm"
                    marginLeft={2}
                  >
                    <Tag.Label>{item.tag}</Tag.Label>
                  </Tag.Root>
                </HStack>
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
};

export default Education;
