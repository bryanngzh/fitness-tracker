import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
    marginTop: 100,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
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
  signUpContainer: {
    flexDirection: "row",
    bottom: 0,
    position: "absolute",
    marginBottom: 40,
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
