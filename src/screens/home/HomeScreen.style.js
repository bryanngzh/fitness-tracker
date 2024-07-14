import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: "Title-Bold",
    marginBottom: 16,
  },
  boxContainer: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 20,
  },
  box: {
    margin: 2,
    width: "48%",
    aspectRatio: 1.5,
  },
  btn: {
    marginTop: 14,
  },
});

export default styles;
