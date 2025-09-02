import { Card, Grid, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  BsMailbox2Flag,
  BsGithub,
  BsLinkedin,
  BsAsterisk,
} from "react-icons/bs";

const contactLinks = [
  {
    icon: BsMailbox2Flag,
    href: "mailto:mmines@unc.edu",
    label: "mmines@unc.edu",
  },
  {
    icon: BsGithub,
    href: "https://github.com/MasonMines2006",
    label: "Github",
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/masonmines2006",
    label: "LinkedIn",
  },
];

const approachItems = [
  {
    title: "Curiosity",
    description: "I love exploring new ideas and learning continuously.",
  },
  {
    title: "Self-Driven",
    description:
      "I take initiative and ownership of projects from start to finish.",
  },
  {
    title: "Collaboration",
    description:
      "I value teamwork and open communication to achieve the best results.",
  },
];

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
        <Card.Root width="320px" background={"bg.info"}>
          <Card.Body gap="0">
            <Card.Title mt="2" paddingBottom={4} textStyle={"2xl"}>
              {"Where to Find Me"}
            </Card.Title>
            <Card.Description as="div" alignContent="center" paddingBottom={10}>
              <Stack>
                {contactLinks.map(({ icon, href, label }) => (
                  <Grid
                    key={label}
                    templateColumns="40px 1fr"
                    templateRows="auto auto"
                    gap={2}
                  >
                    <Grid gridColumn="1" gridRow="1">
                      <Link href={href}>
                        <Icon boxSize={6} as={icon} color="bg.inverted" />
                      </Link>
                    </Grid>
                    <Grid gridColumn="2" gridRow="1">
                      <Text textStyle="xl">{label}</Text>
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root
          width="320px"
          colorPalette="teal"
          variant="outline"
          background={"bg.info"}
        >
          <Card.Body gap="0" colorPalette="teal">
            <Card.Title mt="2" paddingBottom={4} textStyle={"2xl"}>
              {"My Approach"}
            </Card.Title>
            <Card.Description as="div" alignContent="center" paddingBottom={20}>
              <Stack>
                {approachItems.map(({ title, description }) => (
                  <Grid
                    key={title}
                    templateColumns="40px 1fr"
                    templateRows="auto auto"
                    gap={0.5}
                  >
                    <Grid gridColumn="1" gridRow="1">
                      <Icon boxSize={6} as={BsAsterisk} color="bg.inverted" />
                    </Grid>
                    <Grid gridColumn="2" gridRow="1">
                      <Text textStyle="lg" color="bg.inverted">
                        {title}
                      </Text>
                    </Grid>
                    <Grid gridColumn="2" gridRow="2">
                      <Text textStyle="lg">{description}</Text>
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Grid>
    </Stack>
  );
};

export default Connect;
