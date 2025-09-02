import { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { type Day } from "@/services/Github";

interface GitHubHeatmapProps {
  year: number;
  username: string;
}

const GitHubHeatmap = ({ year, username }: GitHubHeatmapProps) => {
  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/github?year=${year}&username=${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("GitHub data:", data); // <- see if you actually get contributions
        setDays(data);
      })
      .catch(console.error);
  }, [year, username]);

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
