<<<<<<< HEAD
import { Box, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction";
import Experiences from "./components/About/Experiences";
import AboutMe from "./components/About/AboutMe";
=======
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About/About";
>>>>>>> 5f84b8bb14a6198dd1aa61c3f4f6488985f7647c
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
        paddingX={10}
        maxWidth="800px"
        width="100%"
        margin="0 auto"
        paddingY={50}
        height="auto"
        minHeight="unset"
        maxHeight="unset"
      >
        <Introduction />
      </Box>
      <Box backgroundColor="bg.subtle" paddingTop={10} paddingBottom={20}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingX={10}
          maxWidth="800px"
          width="100%"
          margin="0 auto"
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
<<<<<<< HEAD
=======
        paddingTop={100}
>>>>>>> 5f84b8bb14a6198dd1aa61c3f4f6488985f7647c
        height="auto"
        minHeight="unset"
        maxHeight="unset"
      >
<<<<<<< HEAD
        <Experiences />
      </Box>

      <Box backgroundColor={"bg.muted"}>
        <Projects />
      </Box>
=======
        <Introduction />
        <Box width="100%" paddingTop={100}>
          <About />
        </Box>
      </Box>
      <Box backgroundColor={"bg.info"}>
        <Projects />
      </Box>
>>>>>>> 5f84b8bb14a6198dd1aa61c3f4f6488985f7647c
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
