import {
  Card,
  Image,
  Link,
  Button,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import DialogBox from "../DialogBox";
import type { Activity } from "./Activities";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { title, description, involvement, link: viewLink, image } = activity;
  const new_title = title ? title : "Empty Title";
  const new_description = description ? description : "Empty Description";
  return (
    <Card.Root width="700px">
      <Card.Body gap="0">
        <Stack justifyContent="space-between" alignItems={"center"}>
          <Image
            src={image}
            alt="Alternate"
            borderRadius={"10px"}
            height={"200px"}
          />
          <Card.Title fontSize={"2xl"} textAlign={"center"} paddingTop={3}>
            {new_title}
          </Card.Title>
          <HStack>
            <Text textAlign={"center"}>{new_description}</Text>
          </HStack>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="space-between" alignItems={"center"}>
        <DialogBox
          title={new_title}
          buttonText="Involvement"
          text={involvement}
        ></DialogBox>
        <Link href={viewLink} textStyle="md" fontWeight="bold">
          <Button variant="outline">Go To Site</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
};

export default ActivityCard;
