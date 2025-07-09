import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Button, HStack } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Homepage />
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </div>
  );
};

export default App;
