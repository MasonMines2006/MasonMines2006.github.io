import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  title: {
    description: "Main resume title — your name",
    value: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "-0.2px",
      textTransform: "none",
    },
  },
  header: {
    description: "Section headers (Experience, Education, Skills)",
    value: {
      fontFamily: "Roboto",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0px",
      textTransform: "none",
    },
  },
  subheader: {
    description: "Job titles, degrees, or major roles",
    value: {
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0px",
      textTransform: "none",
    },
  },
  textHeader: {
    description: "Secondary labels (company, location, dates)",
    value: {
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0px",
      textTransform: "none",
    },
  },
  text: {
    description: "Body text for descriptions and bullet points",
    value: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0px",
      textTransform: "none",
    },
  },
  caption: {
    description: "Small supporting text (skills list, dates, footnotes)",
    value: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
  },
});
