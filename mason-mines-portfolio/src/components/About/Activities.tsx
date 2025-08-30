import { RadioCard, Icon, Stack, HStack } from "@chakra-ui/react";
import {
  RiCodeSSlashLine, // hackathons / coding
  RiBarChart2Line, // data / analytics
  RiGroupLine, // social / community
  RiSwordLine, // quantum physics
} from "react-icons/ri";

import { useState } from "react";
import ActivityCard from "./ActivityCard";
import { BsRocketTakeoff } from "react-icons/bs";

export interface Activity {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  link: string;
  image: string;
}

const Activities = () => {
  const items: Activity[] = [
    {
      value: "hacknc",
      title: "Hack NC",
      icon: <RiCodeSSlashLine />,
      description:
        "UNC’s annual hackathon where students team up to build innovative tech projects in just 24 hours.",
      link: "",
      image: "",
    },
    {
      value: "cdc",
      title: "Carolina Data Challenge",
      icon: <RiBarChart2Line />,
      description:
        "A campus-wide data science hackathon focused on solving real-world problems using datasets from industry and academia.",
      link: "",
      image: "",
    },
    {
      value: "cssg",
      title: "CS for Social Good",
      icon: <RiGroupLine />,
      description:
        "A student organization applying computer science skills to projects that benefit local and global communities.",
      link: "",
      image: "",
    },
    {
      value: "taekwondo",
      title: "Carolina Taekwondo",
      icon: <RiSwordLine />,
      description:
        "The UNC Taekwondo club promotes physical fitness, self-defense, and community through martial arts practice.",
      link: "",
      image: "",
    },
    {
      value: "quantum",
      title: "Quantum Computing Club at UNC",
      icon: <BsRocketTakeoff />,
      description:
        "A club for students interested in exploring the principles and applications of quantum computing and quantum information science.",
      link: "",
      image: "",
    },
  ];

  // store the selected value (string)
  const [activityValue, setActivityValue] = useState<string | null>(
    items[0].value
  );

  // derive the full object whenever needed
  const activity = items.find((item) => item.value === activityValue)!;

  return (
    <Stack>
      <RadioCard.Root
        value={activityValue}
        onValueChange={(e) => setActivityValue(e.value)}
      >
        <RadioCard.Label>Select an experience</RadioCard.Label>
        <HStack align="stretch">
          {items.map((item) => (
            <RadioCard.Item key={item.value} value={item.value}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemContent>
                  <Icon boxSize="6" color="fg.muted" mb="2">
                    {item.icon}
                  </Icon>
                  <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                </RadioCard.ItemContent>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
            </RadioCard.Item>
          ))}
        </HStack>
      </RadioCard.Root>

      <ActivityCard activity={activity} />
    </Stack>
  );
};

export default Activities;
