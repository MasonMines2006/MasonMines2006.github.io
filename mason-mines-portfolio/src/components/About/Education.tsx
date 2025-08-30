import { Accordion, Box, Grid, HStack, Span, Tag } from "@chakra-ui/react";
<<<<<<< HEAD
import Flexes from "../Connect/Flexes";
=======
import Flexes from "../Flexes";
>>>>>>> 5f84b8bb14a6198dd1aa61c3f4f6488985f7647c

const Education = () => {
  const items = [
    {
      value: "a",
      title: "COMP 211 - System Program Fundamentals",
      text: "This is the first course in the introductory systems sequence. Students enter the course having taken an introductory programming course in a high-level programming language (COMP 110) and a course in discrete structures. The overarching goal is to bridge the gap between a students' knowledge of a high-level programming language (COMP 110) and computer organization (COMP 311).",
      progress: "In Progress",
      progressColor: "yellow",
      subject: "Computer Science",
      subjectColor: "blue",
      honors: false,
    },
    {
      value: "b",
      title: "COMP 301 - Structure/Organize own code",
      text: "Students will learn how to reason about how their code is structured, identify whether a given structure is effective in a given context, and look at ways of organizing units of code that support larger programs. In a nutshell, the primary goal of the course is to equip students with tools and techniques that will help them not only in later courses in the major but also in their careers afterwards.",
      progress: "In Progress",
      progressColor: "yellow",
      subject: "Computer Science",
      subjectColor: "blue",
      honors: false,
    },
    {
      value: "c",
      title: "MATH 347 - Linear Algebra",
      text: "Algebra of matrices with applications: determinants, solution of linear systems by Gaussian elimination, Gram-Schmidt procedure, and eigenvalues.",
      progress: "In Progress",
      progressColor: "yellow",
      subject: "Mathematics",
      subjectColor: "blue",
      honors: false,
    },
    {
      value: "d",
      title: "PHYS 119 - Electromagnetism and Quanta",
      text: "Unification of the laws of electricity and magnetism; electromagnetic waves; the particle-wave duality; fundamental principles and applications of quantum mechanics. Students may not receive credit for PHYS 119 in addition to PHYS 105, 115, or 117. Honors version available.",
      progress: "In Progress",
      progressColor: "yellow",
      subject: "Physics",
      subjectColor: "blue",
      honors: false,
    },
    {
      value: "e",
      title: "COMP 210 - Data Structures and Analysis",
      text: "This course will teach you how to organize the data used in computer programs so that manipulation of that data can be done efficiently on large problems and large data instances. Rather than learning to use the data structures found in the libraries of programming languages, you will be learning how those libraries are constructed, and why the items that are included in them are there (and why some are excluded).",
      progress: "Completed",
      progressColor: "green",
      subject: "Computer Science",
      subjectColor: "blue",
      honors: false,
    },
    {
      value: "f",
      title: "COMP 283 - Discrete Structures",
      text: "Introduces discrete structures (sets, tuples, relations, functions, graphs, trees) and the formal mathematics (logic, proof, induction) used to establish their properties and those of algorithms that work with them. Develops problem-solving skills through puzzles and applications central to computer science. Honors version available.",
      progress: "Completed",
      progressColor: "green",
      subject: "Computer Science",
      subjectColor: "blue",
      honors: true,
    },
    {
      value: "g",
      title: "COMP 110 - Introduction to Programming",
      text: "Introduces students to programming from a computational perspective. With an emphasis on modern applications in society, students gain experience with problem decomposition, algorithms for data analysis, abstraction design, and ethics in computing. No prior programming experience expected. Foundational concepts include data types, sequences, boolean logic, control flow, functions/methods, recursion, classes/objects, input/output, and data organization and transformations. Students may not enroll in COMP 110 after receiving credit for COMP 210. Honors version available.",
      progress: "Completed",
      progressColor: "green",
      subject: "Computer Science",
      subjectColor: "blue",
      honors: false,
    },
    {
      value: "h",
      title: "PHYS 118 - Introductory Calculus-based Mechanics and Relativity",
      text: "Mechanics of particles and rigid bodies. Newton's laws; mechanical and potential energy; mechanical conservation laws; frame-dependence of physical laws; Einstein's Theory of Relativity. Students may not receive credit for PHYS 118 in addition to PHYS 104, 114, or 116. Honors version available.",
      progress: "Completed",
      progressColor: "green",
      subject: "Physics",
      subjectColor: "blue",
      honors: false,
    },
    {
      value: "i",
      title: "MATH 233 - Calculus of Functions of Several Variables",
      text: "Vector algebra, solid analytic geometry, partial derivatives, multiple integrals. Honors version available.",
      progress: "Completed",
      progressColor: "green",
      subject: "Mathematics",
      subjectColor: "blue",
      honors: false,
    },
  ];
  return (
    <Box>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={6}
        paddingBottom={4}
      >
        <Flexes main={"4.0"} sub={"Major GPA"} />
        <Flexes main={"3.8"} sub={"Cumulative GPA"} />
        <Flexes main={"Honors"} sub={"~10% of Class of '28"} />
      </Grid>
      <Accordion.Root collapsible defaultValue={["a"]}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            <Accordion.ItemTrigger>
              <Span flex="1">
                <HStack justifyContent={"space-between"}>
                  {item.title}{" "}
                  <HStack gap={2}>
                    {item.honors && (
                      <Tag.Root colorPalette="red" size="sm" marginLeft={2}>
                        <Tag.Label>Honors</Tag.Label>
                      </Tag.Root>
                    )}
                    <Tag.Root
                      colorPalette={item.subjectColor}
                      size="sm"
                      marginLeft={2}
                    >
                      <Tag.Label>{item.subject}</Tag.Label>
                    </Tag.Root>
                    <Tag.Root
                      colorPalette={item.progressColor}
                      size="sm"
                      marginLeft={2}
                    >
                      <Tag.Label>{item.progress}</Tag.Label>
                    </Tag.Root>
                  </HStack>
                </HStack>
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
};

export default Education;
