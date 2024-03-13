import { Dimensions, StyleSheet } from "react-native";

const size = Dimensions.get("screen");

const style = StyleSheet.create({
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: size.height / 8,
  },
  text: {
    fontSize: 30,
    color: "#663399",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default style;
