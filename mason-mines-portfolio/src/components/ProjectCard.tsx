import { Card, Image, Button, Link } from "@chakra-ui/react";
import type { Experience } from "./Experience";

interface ProjectCardProps {
  experience: Experience;
}

const ProjectCard = ({ experience }: ProjectCardProps) => {
  const { title, description, link: viewLink, image } = experience;
  return (
    <Card.Root width="320px">
      <Card.Body gap="0">
        <Image
          src={image}
          alt="Alternate"
          borderRadius={"10px"}
          height={"200px"}
        />
        <Card.Title mt="2">{title ? title : "Empty Title"}</Card.Title>
        <Card.Description alignContent={"center"}>
          {description ? description : "Empty Description"}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Link href={viewLink} textStyle="md" fontWeight="bold">
          <Button variant="outline">View Project</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
