import { Grid } from "@chakra-ui/react";
import BadgeList from "./BadgeList";

const SkilsList = () => {
  const languagesList = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "HTML",
    "CSS",
    "Groovy",
    "R",
  ];
  const fullstackList = [
    "React",
    "Vite",
    "Next.js",
    "Bootstrap",
    "Chakra UI",
    "Tailwind CSS",
    "Vercel",
    "Node.js",
    "cors",
    "Express.js",
    "Streamlit",
    "Figma",
  ];
  const aiList = [
    "TensorFlow",
    "pyTorch",
    "Keras",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-Learn",
  ];
  const toolsList = [
    "Git",
    "GitHub",
    "Docker",
    "Unity",
    "Tableu",
    "Jupyter",
    "LaTeX",
    "VS Code",
    "Bash",
  ];

  return (
    <Grid templateColumns="repeat(2, 2fr)" gap="6">
      <BadgeList badges={languagesList} color="green" title="Languages" />
      <BadgeList badges={fullstackList} color="purple" title="Full-Stack" />
      <BadgeList badges={aiList} color="blue" title="AI/Machine Learning" />
      <BadgeList badges={toolsList} color="orange" title="Tools & Frameworks" />
    </Grid>
  );
};

export default SkilsList;
