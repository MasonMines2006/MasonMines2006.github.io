import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";

interface DialogProps {
  buttonText: string;
  title: string;
  text: string;
}

const DialogBox = ({ buttonText, title, text }: DialogProps) => {
  return (
    <Dialog.Root placement={"center"} motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Button variant="outline">{buttonText} </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body textAlign={"center"}>
              <Text textAlign={"center"}>{text}</Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Exit</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DialogBox;
