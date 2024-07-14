import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 100,
  },
  title: {
    marginTop: 16,
    fontSize: SIZES.LARGE,
    fontFamily: "Title-Bold",
    marginBottom: 16,
  },
  inputContainer: {
    width: "100%",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    marginBottom: 30,
    marginTop: 20,
  },
  btn: {
    width: "48%",
  },
});

export default styles;
