import { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { type Day, fetchGitHubContributions } from "@/services/Github";

interface GitHubHeatmapProps {
  year: number;
  username: string;
}

const GitHubHeatmap = ({ year, username }: GitHubHeatmapProps) => {
  const [days, setDays] = useState<Day[]>([]);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    if (!token) return;
    fetchGitHubContributions(token, year, username)
      .then(setDays)
      .catch((err) => console.error(err));
  }, [token, year, username]);

  return (
    <Box>
      <SimpleGrid columns={53} gap={1}>
        {days.map((day) => (
          <Tooltip
            key={day.date}
            skipAnimationOnMount={false}
            content={`${day.date}: ${day.contributionCount} contributions`}
            openDelay={100}
          >
            <Box
              w={3}
              h={3}
              bg={day.contributionCount ? day.color : "bg.muted"}
              borderRadius="sm"
            />
          </Tooltip>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GitHubHeatmap;
