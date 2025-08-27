import {
  Drawer,
  Button,
  Portal,
  CloseButton,
  Text,
  Icon,
  Image,
  Stack,
} from "@chakra-ui/react";
import { BsHammer } from "react-icons/bs";

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
                <Text>
                  This site is currently under construction! I am actively
                  working on adding more projects, refining the design, and
                  improving the overall user experience. Please check back soon
                  to see the latest updates and features. Thank you for your
                  patience and understanding as I continue to enhance this
                  portfolio.
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
