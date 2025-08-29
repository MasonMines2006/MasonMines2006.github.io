import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About/Expieriences";
import AboutMe from "./components/About/AboutMe";
import { useColorModeValue } from "./components/ui/color-mode";
import Projects from "./components/Projects/Projects";
import ConstructionDrawer from "./components/ConstructionDrawer";
import LilGuy from "./components/LilGuy";
import Connect from "./components/Connect/Connect";

const App = () => {
  const text = useColorModeValue("Light", "Dark");
  return (
    <Box>
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
        width="100%"
        margin="0 auto"
        paddingTop={100}
        height="auto"
        minHeight="unset"
        maxHeight="unset"
      >
        <Introduction />
      </Box>
      <Box backgroundColor="bg.info">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingX={10}
          maxWidth="800px"
          width="100%"
          margin="0 auto"
          paddingTop={100}
          height="auto"
          minHeight="unset"
          maxHeight="unset"
        >
          <AboutMe />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingX={10}
        maxWidth="800px"
        width="100%"
        margin="0 auto"
        paddingTop={100}
        height="auto"
        minHeight="unset"
        maxHeight="unset"
      >
        <About />
      </Box>

      <Box backgroundColor={"bg.info"}>
        <Projects />
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
        <Connect />
      </Box>

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
    </Box>
  );
};

export default App;
