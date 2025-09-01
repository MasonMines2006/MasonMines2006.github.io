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
  involvement: string;
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
        "UNC’s annual hackathon where students team up to build innovative tech projects in just 24 hours. As a member of the Sponsorship Team, I help secure partnerships and resources to ensure participants have the tools they need to succeed, while coordinating with sponsors to maximize engagement and support.",
      involvement:
        "Sponsorship Team – I reached out to potential sponsors, negotiated partnerships, and coordinated with company representatives to provide resources, prizes, and mentorship for hackathon participants, ensuring a smooth experience for both students and sponsors.",
      link: "https://hacknc.com/",
      image: "/HackNC.png",
    },
    {
      value: "cdc",
      title: "Carolina Data Challenge",
      icon: <RiBarChart2Line />,
      description:
        "A campus-wide data science hackathon focused on solving real-world problems using datasets from industry and academia. I contribute as part of the Sponsorship Team, connecting with organizations and ensuring participants have access to mentorship, resources, and prizes for successful project completion.",
      involvement:
        "Sponsorship Team – I coordinated with industry sponsors to secure datasets, prizes, and mentorship opportunities, managed sponsor communications, and helped organize logistics for sponsor-student interactions throughout the competition.",
      link: "https://cdc.cs.unc.edu/",
      image: "/CDC.png",
    },
    {
      value: "cssg",
      title: "CS for Social Good",
      icon: <RiGroupLine />,
      description:
        "A student organization applying computer science skills to benefit local and global communities. I served on both the Education and Project Teams, helping teach programming skills to students and contributing to meaningful projects that directly impact social initiatives.",
      involvement:
        "Education & Project Team – I developed and delivered workshops for students to learn coding, collaborated with teammates to design and implement social-impact projects, and assisted in guiding project teams from ideation to execution to maximize community benefit.",
      link: "https://www.cssgunc.org/",
      image: "/CSSG.jpeg",
    },
    {
      value: "taekwondo",
      title: "Carolina Taekwondo",
      icon: <RiSwordLine />,
      description:
        "The UNC Taekwondo club promotes physical fitness, self-defense, and community through martial arts practice. As Chair and Demo Team Captain, I organize club activities, lead demonstrations at events, and mentor new members while fostering teamwork and discipline among participants.",
      involvement:
        "Chair & Demo Team Captain – I organized practice schedules, coordinated and led public demonstrations, mentored new members, and managed team logistics to ensure the club runs smoothly while maintaining a strong culture of discipline, teamwork, and skill development.",
      link: "https://heellife.unc.edu/organization/taekwondo",
      image: "/Taekwondo.jpeg",
    },
    {
      value: "quantum",
      title: "Quantum Computing Club at UNC",
      icon: <BsRocketTakeoff />,
      description:
        "A club for students interested in exploring the principles and applications of quantum computing and quantum information science. On the Planning Committee, I help design the club’s events and workshops, coordinate speakers, and ensure students have opportunities to learn and collaborate on cutting-edge topics in quantum computing.",
      involvement:
        "Planning Committee – I planned and organized workshops, coordinated guest speakers, and structured learning sessions for club members, ensuring students have hands-on experiences with quantum computing tools and opportunities to collaborate on research and projects.",
      link: "https://sites.google.com/view/uncqc",
      image: "/Quantum.jpeg",
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
        colorPalette={"teal"}
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
