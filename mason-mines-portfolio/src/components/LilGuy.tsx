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
            src="/public/PeepoPaper.png"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "writing" && (
          <Image
            src="/public/PepeNotes.gif"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "sleeping" && (
          <Image
            src="/public/PeepoSleeping.gif"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "tosleep" && (
          <Image
            src="/public/PeepoToSleep.gif"
            alt="Lil Guy"
            width="100%"
            height="auto"
          />
        )}
        {action == "idle" && (
          <Image
            src="/public/PeepoIdle.gif"
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
