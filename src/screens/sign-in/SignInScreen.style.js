import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 16,
    fontSize: SIZES.LARGE,
    fontFamily: "Title-Bold",
    marginBottom: 16,
  },
  description: {
    fontSize: SIZES.SMALL,
    marginBottom: 16,
  },
  inputContainer: {
    flex: 3,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOURS.GRAY,
    marginBottom: 16,
  },
  btnContainer: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLOURS.BLUE,
    marginBottom: 16,
  },
  btnText: {
    color: "white",
  },
  signUpContainer: {
    flexDirection: "row",
    bottom: 0,
    position: "absolute",
    marginBottom: 20,
  },
  text: {
    fontSize: SIZES.MEDIUM,
  },
  signUpText: {
    fontSize: SIZES.MEDIUM,
    color: COLOURS.BLUE,
  },
});

export default styles;
