import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLOURS.GRAY,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  userContainer: { marginTop: 10 },
  userText: {
    fontFamily: "Title-Regular",
    fontSize: SIZES.LARGE,
  },
  infoContainer: {
    marginTop: 20,
    borderWidth: 2,
    width: "100%",
    borderColor: COLOURS.GRAY,
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "white",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    marginLeft: 10,
  },
});

export default styles;
