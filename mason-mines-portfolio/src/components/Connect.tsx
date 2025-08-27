import { Card, Grid, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  BsMailbox2Flag,
  BsGithub,
  BsLinkedin,
  BsAsterisk,
} from "react-icons/bs";

const Connect = () => {
  return (
    <Stack align={"center"} spaceY={0} paddingTop={20} id="connect">
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
            <Card.Description as="div" alignContent="center" paddingBottom={10}>
              <Stack>
                <Grid
                  templateColumns="40px 1fr"
                  templateRows="auto auto"
                  gap={2}
                >
                  <Grid gridColumn="1" gridRow="1">
                    <Link href="mailto:mmines@unc.edu">
                      <Icon
                        boxSize={6}
                        as={BsMailbox2Flag}
                        color="bg.inverted"
                      />
                    </Link>
                  </Grid>
                  <Grid gridColumn="2" gridRow="1">
                    <Text textStyle="xl">mmines@unc.edu</Text>
                  </Grid>
                </Grid>
                <Grid
                  templateColumns="40px 1fr"
                  templateRows="auto auto"
                  gap={2}
                >
                  <Grid gridColumn="1" gridRow="1">
                    <Link href="https://github.com/MasonMines2006">
                      <Icon boxSize={6} as={BsGithub} color="bg.inverted" />
                    </Link>
                  </Grid>
                  <Grid gridColumn="2" gridRow="1">
                    <Text textStyle="xl">Github</Text>
                  </Grid>
                </Grid>
                <Grid
                  templateColumns="40px 1fr"
                  templateRows="auto auto"
                  gap={2}
                >
                  <Grid gridColumn="1" gridRow="1">
                    <Link href="https://www.linkedin.com/in/masonmines2006">
                      <Icon boxSize={6} as={BsLinkedin} color="bg.inverted" />
                    </Link>
                  </Grid>
                  <Grid gridColumn="2" gridRow="1">
                    <Text textStyle="xl">Linked-In</Text>
                  </Grid>
                </Grid>
              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root width="320px">
          <Card.Body gap="0">
            <Card.Title mt="2" paddingBottom={4} textStyle={"2xl"}>
              {"My Approach"}
            </Card.Title>
            <Card.Description as="div" alignContent="center" paddingBottom={20}>
              <Stack>
                <Grid
                  templateColumns="40px 1fr"
                  templateRows="auto auto"
                  gap={0.5}
                >
                  <Grid gridColumn="1" gridRow="1">
                    <Icon boxSize={6} as={BsAsterisk} color="bg.inverted" />
                  </Grid>
                  <Grid gridColumn="2" gridRow="1">
                    <Text textStyle="lg" color="bg.inverted">
                      Curiosity
                    </Text>
                  </Grid>
                  <Grid gridColumn="2" gridRow="2">
                    <Text textStyle="lg">
                      I love exploring new ideas and learning continuously.
                    </Text>
                  </Grid>
                </Grid>
                <Grid
                  templateColumns="40px 1fr"
                  templateRows="auto auto"
                  gap={0.5}
                >
                  <Grid gridColumn="1" gridRow="1">
                    <Icon boxSize={6} as={BsAsterisk} color="bg.inverted" />
                  </Grid>
                  <Grid gridColumn="2" gridRow="1">
                    <Text textStyle="lg" color="bg.inverted">
                      Self-Driven
                    </Text>
                  </Grid>
                  <Grid gridColumn="2" gridRow="2">
                    <Text textStyle="lg">
                      I take initiative and ownership of projects from start to
                      finish.
                    </Text>
                  </Grid>
                </Grid>
                <Grid
                  templateColumns="40px 1fr"
                  templateRows="auto auto"
                  gap={0.5}
                >
                  <Grid gridColumn="1" gridRow="1">
                    <Icon boxSize={6} as={BsAsterisk} color="bg.inverted" />
                  </Grid>
                  <Grid gridColumn="2" gridRow="1">
                    <Text textStyle="lg" color="bg.inverted">
                      Collaboration
                    </Text>
                  </Grid>
                  <Grid gridColumn="2" gridRow="2">
                    <Text textStyle="lg">
                      I value teamwork and open communication to achieve the
                      best results.
                    </Text>
                  </Grid>
                </Grid>
              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Grid>
    </Stack>
  );
};

export default Connect;
