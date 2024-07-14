import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  modalContent: {
    height: "55%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "15%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
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
});

export default styles;
