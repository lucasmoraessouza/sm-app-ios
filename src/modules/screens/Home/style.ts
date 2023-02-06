import { StatusBar, StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { COLORS } from "../../../theme/index";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 60,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flex: 1,
    width: "95%",
    marginTop: StatusBar.currentHeight || 0,
  },
  containerSelect: {
    justifyContent: "center",
    alignItems: "center",
    width: "78%",
  },
  header: {
    height: 50,
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderBottomColor: "#f3f3f3",
    borderBottomWidth: 3,
    flexDirection: "row",
  },
  backgroundTwitter: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#CCC",
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  twitterLogo: {
    width: 20,
    height: 20,
  },
  textHeader: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: "95%",
    height: 45,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
  },
});
