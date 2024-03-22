import { Dimensions, StatusBar, StyleSheet } from "react-native";

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
  check: {
    color: "#fbc02d",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: size.width,
    height: size.height,
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default style;
