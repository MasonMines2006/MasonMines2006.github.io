import { Stack, Text, Image, Box } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box>
      <Stack>
        <Text
          textStyle="6xl"
          fontWeight="bold"
          textAlign={"center"}
          marginBottom={5}
        >
          About
        </Text>
        <Text
          textStyle="xl"
          textAlign={"center"}
          marginTop={4}
          marginBottom={2}
        >
          Honors Carolina student and Computer Science major at the University
          of North Carolina (Go Heels!). Currently improving my skills in
          front/back end development and exploring my interests (going on
          tangents) to everything from machine learning to hackathons to quantum
          computing. As a Kansas native now in North Carolina, I’m excited to
          meet the community here and give back as a software developer and
          human being.
        </Text>
        <Box position="relative" width="100%" height="200px">
          {/* Background image */}
          <Image
            src="/kansas.avif"
            alt="Background"
            width="100%"
            height="200px"
            objectFit="cover"
            borderRadius="md"
          />

          {/* Profile image overlay */}
          <Image
            src="/me.png"
            alt="My Photo"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="150px"
            height="150px"
            objectFit="cover"
            borderRadius="full"
            border="4px solid white" // optional for that “avatar frame” look
          />
        </Box>
      </Stack>
      <Text id="experiences" background={"bg"} color={"bg"}>
        {" "}
        f
      </Text>
    </Box>
  );
};

export default AboutMe;
