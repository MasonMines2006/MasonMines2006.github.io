import { Box, Badge, Text, Stack } from "@chakra-ui/react";

interface BadgeListProps {
  badges: string[];
  color: string;
  title: string;
}

const BadgeList = ({ badges, color, title }: BadgeListProps) => {
  return (
    <Box outline={"1px solid"} padding={4} borderRadius="md">
      <Stack>
        <Text textStyle="md" fontWeight="bold" marginBottom={2}>
          {title}
        </Text>
        <Box>
          {badges.map((badge) => (
            <Badge
              key={badge}
              variant="subtle"
              colorPalette={color}
              marginRight={2}
              marginBottom={2}
              size={"lg"}
            >
              {badge}
            </Badge>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default BadgeList;
