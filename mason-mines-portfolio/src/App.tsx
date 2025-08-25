import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import { useColorModeValue } from "./components/ui/color-mode";
import Projects from "./components/Projects";
import ConstructionDrawer from "./components/ConstructionDrawer";
import LilGuy from "./components/LilGuy";

const App = () => {
  const text = useColorModeValue("Light", "Dark");
  return (
    <>
      <Box
        paddingX={10}
        paddingY={2}
        position="sticky"
        borderBottom={"1px solid"}
        top={0}
        zIndex={1000}
        bg={text == "Light" ? "white" : "black"}
      >
        <Navbar />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingX={10}
        maxWidth="800px"
        height="1300px"
        margin="0 auto"
        paddingY={10}
      >
        <Introduction />
        <About />
      </Box>
      <Projects />

      <Box
        position="fixed"
        bottom={4}
        right={4}
        zIndex={1100}
        borderBottom="none"
        bg={text == "Light" ? "white" : "black"}
        borderRadius="md"
        boxShadow="md"
      >
        <ConstructionDrawer />
      </Box>
      <Box
        position="fixed"
        bottom={4}
        left={4}
        zIndex={1100}
        borderBottom="none"
        bg={text == "Light" ? "white" : "black"}
        borderRadius="md"
        boxShadow="md"
      >
        <LilGuy action="" />
      </Box>
    </>
  );
};

export default App;
