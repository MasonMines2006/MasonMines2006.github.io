import {
  Drawer,
  Button,
  Portal,
  CloseButton,
  Text,
  Icon,
  Image,
  Stack,
  Link,
  HStack,
} from "@chakra-ui/react";
import { BsHammer } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const ConstructionDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="solid" color="Info" size="md">
          <Icon as={BsHammer} boxSize={6} />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>A Note about This Site</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Stack display={"flex"} flex-direction={"column"} gap={4}>
                <Text borderBottom={"1px solid"} paddingBottom={2}>
                  This site is currently under construction! I make this
                  portfolio from scratch in React with minimal AI usage, as this
                  portfolio is as much a space for me to develop my full-stack
                  skills as it is a place to view my final projects. Please
                  excuse the mess!
                </Text>

                <Text borderBottom={"1px solid"} paddingBottom={2}>
                  {" "}
                  This website was also modelled after Jinao Wang's own
                  portofilo out of Duke University, although no code was copied
                  in any way from his site. You can his site here:{" "}
                  {
                    <HStack>
                      <FaChevronRight />
                      <Link color={"blue.400"} href="https://wjinao.com/">
                        Jinao Wang's Site
                      </Link>
                      <FaChevronLeft />
                    </HStack>
                  }
                </Text>

                <Text borderBottom={"1px solid"} paddingBottom={2}>
                  Tech Stack: Vite+React front-end, Node.js backend, Chakra.UI
                  Styling
                </Text>
                <Image
                  src="/public/PeepoToSleep.gif"
                  alt="Lil Guy"
                  width="100%"
                  height="auto"
                />
              </Stack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default ConstructionDrawer;
