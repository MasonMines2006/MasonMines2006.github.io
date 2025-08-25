import { Stack, Text, Image } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Stack>
      <Text textStyle="xl" textAlign={"center"} marginTop={4} marginBottom={2}>
        Honors Carolina student and Computer Science major at the University of
        North Carolina (Go Heels!). Currently improving my skills in front/back
        end development and exploring my interests (going on tangents) to
        everything from machine learning to hackathons to quantum computing. As
        a Kansas native now in North Carolina, I’m excited to meet the community
        here and give back as a software developer and human being.
      </Text>
      <Image
        src="/src/assets/kansas.avif"
        alt="Profile Picture"
        mx="auto"
        width="100%"
        height="200px"
        objectFit="cover"
        objectPosition="center bottom"
        borderRadius="md"
      />
    </Stack>
  );
};

export default AboutMe;
