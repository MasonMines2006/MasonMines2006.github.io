import { Card, Image, Button, Link } from "@chakra-ui/react";
import type { Experience } from "./Experience";
import DialogBox from "../DialogBox";

interface ProjectCardProps {
  experience: Experience;
}

const ProjectCard = ({ experience }: ProjectCardProps) => {
  const { title, description, link: viewLink, image } = experience;
  const new_title = title ? title : "Empty Title";
  const new_description = description ? description : "Empty Description";
  return (
    <Card.Root width="320px">
      <Card.Body gap="0">
        <Image
          src={image}
          alt="Alternate"
          borderRadius={"10px"}
          height={"200px"}
        />
        <Card.Title mt="2" textAlign={"center"} paddingTop={3}>
          {new_title}
        </Card.Title>
      </Card.Body>
      <Card.Footer justifyContent="space-between" alignItems={"center"}>
        <DialogBox
          title={new_title}
          buttonText="Description"
          text={new_description}
        ></DialogBox>
        <Link href={viewLink} textStyle="md" fontWeight="bold">
          <Button variant="outline">Go To Site</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
