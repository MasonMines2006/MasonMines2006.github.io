import { Grid, Stack, Text } from "@chakra-ui/react";
import Flexes from "./Flexes";

const AboutMe = () => {
  return (
    <Stack>
      <Text
        textStyle="xl"
        fontWeight="bold"
        textAlign={"center"}
        marginTop={10}
        marginBottom={4}
      >
        Honors Carolina student and Computer Science major at the University of
        North Carolina (Go Heels!). Currently improving my skills in front/back
        end development and exploring my interests (going on tangents) to
        everything from machine learning to hackathons to quantum computing. As
        a Kansas native now in North Carolina, I’m excited to meet the community
        here and give back as a software developer and human being.
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr 1fr" }} gap={6}>
        <Flexes main={""} sub={""} />
        <Flexes main={""} sub={""} />
        <Flexes main={""} sub={""} />
        <Flexes main={""} sub={""} />
      </Grid>
    </Stack>
  );
};

export default AboutMe;
