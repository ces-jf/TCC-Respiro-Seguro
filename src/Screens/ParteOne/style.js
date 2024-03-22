import { Dimensions, StyleSheet } from "react-native";

const size = Dimensions.get("screen");

const style = StyleSheet.create({
  header: {
    flexDirection: "column",
    alignItems: "left",
    marginTop: size.height / 20,
  },
  radioGroup: {
    fontSize: 20,
  },
  text: {
    padding: 1,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  surface: {
    padding: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    alignItems: "justify",
    justifyContent: "justify",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#f5f1a4",
  },
});

export default style;
