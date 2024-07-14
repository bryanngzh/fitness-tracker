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
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: COLOURS.GRAY,
    marginBottom: 16,
    color: COLOURS.BLACK,
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
  modalBox: {
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  picker: {
    width: "100%",
  },
  pickerItem: {
    fontSize: SIZES.MEDIUM,
  },
  pickerBorder: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOURS.GRAY,
    marginBottom: 16,
    justifyContent: "center",
    backgroundColor: "white",
  },
  activityBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 5,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  activityName: {
    fontWeight: "bold",
  },
  activityDetail: {
    marginTop: 2,
  },
  trashIcon: {
    marginLeft: "auto",
  },
});

export default styles;
