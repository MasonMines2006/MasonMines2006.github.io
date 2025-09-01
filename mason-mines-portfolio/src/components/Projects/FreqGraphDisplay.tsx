import { Stack, Table } from "@chakra-ui/react";
import FrequencyGraph from "./GitHubHeatmap";
import type { JSX } from "react";

const FreqGraphDisplay = () => {
  type Item = { id: number; data1: JSX.Element; data2: JSX.Element };
  const items: Item[] = [
    {
      id: 1,
      data1: <FrequencyGraph year={2024} username={"MasonMines2006"} />,
      data2: <FrequencyGraph year={2025} username={"MasonMines2006"} />,
    },
  ];
  return (
    <Stack width="full" gap="5" alignContent={"center"} marginY={10}>
      <Table.ScrollArea
        borderWidth="1px"
        maxW="3xl"
        colorPalette={"teal"}
        color={"bg.emphasized"}
        minW={"900px"}
      >
        <Table.Root size="lg" variant="outline" colorPalette={"teal"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader minW="800px">2024</Table.ColumnHeader>
              <Table.ColumnHeader minW="800px">2025</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.data1}</Table.Cell>
                <Table.Cell>{item.data2}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </Stack>
  );
};

export default FreqGraphDisplay;
