import { Dimensions, StyleSheet } from "react-native";

const size = Dimensions.get("screen");

const style = StyleSheet.create({
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: size.height / 8,
  },
  circle: {
    backgroundColor: "#663399",
    color: "white",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: size.height / 4,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    textAlignVertical: "center",
    marginTop: 10,
  },
  subtext: {
    fontSize: 24,
    color: "#663399",
    fontWeight: "bold",
    marginBottom: 50,
  },
  text: {
    fontSize: 18,
    color: "#663399",
    fontWeight: "bold",
  },
  textLeve: {
    fontSize: 18,
    color: "#665a6f",
    fontWeight: "bold",
  },
  textSevera: {
    fontSize: 18,
    color: "#d32f2f",
    fontWeight: "bold",
  },
  button: {
    marginBottom: 10,
    alignItems: "center",
  },
});

export default style;
