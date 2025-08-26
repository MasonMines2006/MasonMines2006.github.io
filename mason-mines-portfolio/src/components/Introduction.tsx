import {
  Button,
  DownloadTrigger,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BsArrowBarRight,
  BsEnvelopePaperFill,
  BsFileEarmarkArrowDownFill,
  BsFillPinMapFill,
  BsGithub,
  BsLinkedin,
  BsMailbox2Flag,
} from "react-icons/bs";

const Introduction = () => {
  const data = async () => {
    const res = await fetch("/src/assets/resume.pdf");
    return res.blob();
  };
  return (
    <Stack align={"center"} spaceY={0} paddingY={20}>
      <Text textStyle="7xl" fontWeight="bold" textAlign={"center"}>
        Mason Mines
      </Text>
      <Text textStyle="3xl" color="fg.muted" textAlign={"center"}>
        UNC Honors Carolina - Computer Science & Physics '28 - Research and Full
        Stack Development
      </Text>

      <HStack spaceX={6} paddingTop={4} paddingBottom={4}>
        <HStack>
          <Icon as={BsFillPinMapFill} color="gray.500" />
          <Text textStyle="md">Chapel Hill, NC</Text>
        </HStack>
        <HStack>
          <Icon as={BsEnvelopePaperFill} color="gray.500" />
          <Text textStyle="md">University of North Carolina @ Chapel Hill</Text>
        </HStack>
        <HStack>
          <Link href="mailto:mmines@unc.edu">
            <Icon as={BsMailbox2Flag} color="gray.500" size="md" />
          </Link>
          <Link href="https://github.com/MasonMines2006">
            <Icon as={BsGithub} color="gray.500" size="md" />
          </Link>
          <Link href="https://www.linkedin.com/in/masonmines2006">
            <Icon as={BsLinkedin} color="gray.500" size="md" />
          </Link>
        </HStack>
      </HStack>
      <HStack>
        <Button asChild size="xl" background={"fg.info"}>
          <Link href="#">Projects {<BsArrowBarRight />}</Link>
        </Button>
        <DownloadTrigger
          data={data}
          fileName="resume.pdf"
          mimeType="application/pdf"
          asChild
        >
          <Button size="xl">Resume {<BsFileEarmarkArrowDownFill />}</Button>
        </DownloadTrigger>
      </HStack>
    </Stack>
  );
};

export default Introduction;
