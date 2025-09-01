import {
  Box,
  ButtonGroup,
  HStack,
  IconButton,
  Pagination,
  Spinner,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import FrequencyGraph from "./GitHubHeatmap";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const FreqGraphDisplay = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const years = [2024, 2025];

  const handleSetPage = (newPage: number) => {
    setPage(newPage);
    const el = document.getElementById(`year-${years[newPage - 1]}`);
    if (el) {
      // Step 1: scroll to the element
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setLoading(true);

      // Step 2: scroll down a bit more after the animation starts
      setTimeout(() => {
        window.scrollBy({ top: -100, behavior: "smooth" }); // adjust 80px to navbar height
        setLoading(false);
      }, 800); // delay to let the first smooth scroll kick in
    }
  };

  return (
    <Stack width="full" gap="5" alignContent={"center"} marginY={10}>
      <Text color={"bg.emphasized"}>f</Text>
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
              {years.map((year) => (
                <Table.ColumnHeader key={year} id={`year-${year}`} minW="800px">
                  <Box scrollMarginTop={20}>{year}</Box>
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              {years.map((year) => (
                <Table.Cell key={year}>
                  <FrequencyGraph year={year} username={"MasonMines2006"} />
                </Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
      <HStack justifyContent={"space-between"}>
        <Pagination.Root
          count={years.length}
          pageSize={1}
          defaultPage={1}
          page={page}
          onPageChange={(e) => handleSetPage(e.page)}
        >
          <ButtonGroup variant="outline" size="sm">
            <Pagination.PrevTrigger asChild>
              <IconButton>
                <LuChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(pageNum) => (
                <IconButton
                  key={pageNum.value}
                  variant={{ base: "outline", _selected: "solid" }}
                >
                  {pageNum.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton>
                <LuChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
        <HStack>
          {loading && <Spinner size="sm" />}
          <Text>Scroll to search, hover for details</Text>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default FreqGraphDisplay;
