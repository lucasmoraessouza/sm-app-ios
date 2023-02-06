import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme/index";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  container: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
  date: {
    fontWeight: "500",
    fontSize: 14,
    color: "#999",
  },
  user: {
    fontSize: 14,
    color: "#999",
  },
  lastMessage: {
    fontSize: 14,
    color: "#999",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#CCC",
    marginRight: 10,
  },
  nameAndDate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userAndMessage: {
    flexDirection: "column",
  },
});
