import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    paddingBottom: "20%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "white",
  },
  headingFour: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 34,
  },
  headingFive: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 34,
  },
  headingSix: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 26,
    textAlign: "left",
  },
  innerParagraphs: {
    color: "#474747",
    lineHeight: 23,
  },

  paragraph: {
    color: "#474747",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 26,
  },
  fontRed: {
    color: "#C1063D",
  },
  policyFont: {
    color: "#474747",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
  },
  underlinedText: {
    textDecorationLine: "underline",
  },
  headingMain: {
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
});
