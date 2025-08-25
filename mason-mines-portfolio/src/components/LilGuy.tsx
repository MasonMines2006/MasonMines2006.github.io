import { Box, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import LilGuyStates from "./LilGuyStates";

interface LilGuyProps {
  action: string;
}
const LilGuy = ({}: LilGuyProps) => {
  const [action, setAction] = useState("");
  const handleChildData = (data: string) => {
    setAction(data);
    console.log("Data from child:", data);
  };
  return (
    <HStack>
      <LilGuyStates onSendAction={handleChildData} />
      <Box>
        {action == "board" && (
          <Image
            src="/src/assets/PeepoPaper.png"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "writing" && (
          <Image
            src="/src/assets/PepeNotes.gif"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "sleeping" && (
          <Image
            src="/src/assets/PeepoSleeping.gif"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "tosleep" && (
          <Image
            src="/src/assets/PeepoToSleep.gif"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "idle" && (
          <Image
            src="/src/assets/PeepoIdle.gif"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
      </Box>
    </HStack>
  );
};

export default LilGuy;
