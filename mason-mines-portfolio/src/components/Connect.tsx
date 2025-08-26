import { Card, Grid, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { BsMailbox2Flag, BsGithub, BsLinkedin } from "react-icons/bs";

const Connect = () => {
  return (
    <Stack align={"center"} spaceY={0} paddingY={20}>
      <Text textStyle="6xl" fontWeight="bold" textAlign={"center"}>
        Connect
      </Text>
      <Text
        textStyle="3xl"
        color="fg.muted"
        textAlign={"center"}
        paddingBottom={4}
      >
        I'm always open to connect. Whether your a potential partner, fellow
        researcher, or just want to say hi, feel free to reach out below.
      </Text>
      <Grid templateColumns="repeat(2, 2fr)" gap="10">
        <Card.Root width="320px">
          <Card.Body gap="0">
            <Card.Title mt="2" paddingBottom={4} textStyle={"2xl"}>
              {"Where to Find Me"}
            </Card.Title>
            <Card.Description alignContent={"center"} paddingBottom={20}>
              <Stack>
                <HStack>
                  <Link href="mailto:mmines@unc.edu">
                    <Icon size={"lg"} as={BsMailbox2Flag} color="gray.500" />
                  </Link>
                  <Text textStyle={"xl"}>mmines@unc.edu</Text>
                </HStack>
                <HStack>
                  <Link href="https://github.com/MasonMines2006">
                    <Icon size={"lg"} as={BsGithub} color="gray.500" />
                  </Link>
                  <Text textStyle={"xl"}>Github</Text>
                </HStack>
                <HStack>
                  <Link href="https://www.linkedin.com/in/masonmines2006">
                    <Icon size={"lg"} as={BsLinkedin} color="gray.500" />
                  </Link>
                  <Text textStyle={"xl"}>Linked-In</Text>
                </HStack>
              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root width="320px">
          <Card.Body gap="0">
            <Card.Title mt="2" paddingBottom={4} textStyle={"2xl"}>
              {"My Approach"}
            </Card.Title>
            <Card.Description alignContent={"center"}>
              <Stack>
                <HStack>
                  <Link href="mailto:mmines@unc.edu">
                    <Icon size={"lg"} as={BsMailbox2Flag} color="gray.500" />
                  </Link>
                  <Text textStyle={"xl"}>mmines@unc.edu</Text>
                </HStack>
                <HStack>
                  <Link href="https://github.com/MasonMines2006">
                    <Icon size={"lg"} as={BsGithub} color="gray.500" />
                  </Link>
                  <Text textStyle={"xl"}>Github</Text>
                </HStack>
                <HStack>
                  <Link href="https://www.linkedin.com/in/masonmines2006">
                    <Icon size={"lg"} as={BsLinkedin} color="gray.500" />
                  </Link>
                  <Text textStyle={"xl"}>Linked-In</Text>
                </HStack>
              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Grid>
    </Stack>
  );
};

export default Connect;
