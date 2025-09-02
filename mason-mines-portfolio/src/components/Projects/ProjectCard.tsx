import { Box, Button, Card, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsBuildingsFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

interface ProjectCardProps {
  card?: Project;
}
export interface Project {
  active: boolean;
  title: string;
  date: string;
  location: string;
  summary: string;
  tags: string[];
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  const exampleCard: Project = {
    active: true,
    title: "Project Title",
    date: "Project Date",
    location: "Project Location",
    summary: "Project Summary",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7"],
  };
  const activeCard: Project = card || exampleCard;
  const { active, title, date, location, summary, tags } = activeCard;
  const iconComponent = active ? FaBookReader : FaBookBookmark;
  const iconText = active ? "Active" : "Complete";
  return (
    <Box>
      <Card.Root width="400px" variant="outline">
        <Card.Body gap="2">
          <HStack gap={4} width="100%" justifyContent="space-between">
            <HStack
              gap={3}
              background={active ? "bg.success" : "bg.emphasized"}
              padding={1}
              borderRadius="md"
            >
              <Icon as={iconComponent}></Icon>
              <Text textStyle="sm">{iconText}</Text>
            </HStack>
            <HStack>
              <Text textStyle="sm" color="fg.muted">
                {location}
              </Text>
              <Text textStyle="sm" color="fg.muted">
                -
              </Text>
              <Text textStyle="sm" color="fg.muted">
                {date}
              </Text>
            </HStack>
          </HStack>
          <Card.Title mt="2">
            <Text textStyle={"lg"}>{title}</Text>
          </Card.Title>
          <Card.Description>
            <Stack>
              <HStack>
                <BsBuildingsFill />
                <Text>{location}</Text>
                <Text>
                  {
                    <Button
                      key={tags[0]}
                      size="2xs"
                      variant="outline"
                      colorPalette={"teal"}
                    >
                      {tags[0]}
                    </Button>
                  }
                </Text>
              </HStack>
              <Text textStyle="md">{summary}</Text>
            </Stack>
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Box
            justifyContent="flex-start"
            overflow="auto"
            style={{
              display: "flex",
              gap: "8px",
              maxWidth: "100%",
              whiteSpace: "nowrap",
            }}
          >
            {tags.map((tag) => (
              <Button
                key={tag}
                size="2xs"
                variant="outline"
                colorPalette={"teal"}
              >
                {tag}
              </Button>
            ))}
          </Box>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
};

export default ProjectCard;
