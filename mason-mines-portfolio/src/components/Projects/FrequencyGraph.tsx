import { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { type Day, fetchGitHubContributions } from "@/services/Github";

const GitHubHeatmap = () => {
  const [days, setDays] = useState<Day[]>([]);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    if (!token) return;
    fetchGitHubContributions(token)
      .then(setDays)
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <SimpleGrid columns={53} gap={1}>
      {days.map((day) => (
        <Tooltip
          key={day.date}
          skipAnimationOnMount={false}
          content={`${day.date}: ${day.contributionCount} contributions`}
          openDelay={100}
        >
          <Box
            w={3} // 12px
            h={3}
            bg={day.contributionCount ? day.color : "gray.200"}
            borderRadius="sm"
          />
        </Tooltip>
      ))}
    </SimpleGrid>
  );
};

export default GitHubHeatmap;
