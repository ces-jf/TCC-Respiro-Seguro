import { Dimensions, StyleSheet } from "react-native";

const size = Dimensions.get("screen");

const style = StyleSheet.create({
  header: {
    flexDirection: "column",
  },
  radioGroup: {
    fontSize: 20,
  },
  text: {
    fontWeight: "bold",
  },
});

export default style;
