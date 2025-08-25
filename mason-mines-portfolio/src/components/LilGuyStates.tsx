import { Menu, Button, Portal } from "@chakra-ui/react";

interface LilGuyStatesProps {
  onSendAction: (action: string) => void;
}

const LilGuyStates = ({ onSendAction }: LilGuyStatesProps) => {
  const handleClick = (data: string) => {
    onSendAction(data);
  };
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          LilGuy Emotions
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="board" onClick={() => handleClick("board")}>
              Show Board Animation
            </Menu.Item>
            <Menu.Item value="idle" onClick={() => handleClick("idle")}>
              Show Idle Animation
            </Menu.Item>
            <Menu.Item value="writing" onClick={() => handleClick("writing")}>
              Show Writing Animation
            </Menu.Item>
            <Menu.Item value="tosleep" onClick={() => handleClick("tosleep")}>
              Show To Sleep Animation
            </Menu.Item>
            <Menu.Item value="sleeping" onClick={() => handleClick("sleeping")}>
              Show Sleeping Animation
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default LilGuyStates;
