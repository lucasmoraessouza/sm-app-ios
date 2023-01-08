import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../theme/index";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 48,
    paddingHorizontal: 32,
  },
  logo: {
    width: "100%",
    height: "30%",
  },
  title: {
    fontFamily: `${FONTS.BOLD}`,
    color: `${COLORS.BLACK}`,
    fontSize: 32,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  forgotPasswordWrapper: {
    alignSelf: "flex-end",
    marginVertical: 32,
    marginHorizontal: 0,
  },
  forgotPasswordLabel: {
    fontFamily: `${FONTS.BOLD}`,
    color: `${COLORS.BLACK}`,
    fontSize: 14,
  },
  input: {
    width: "100%",
    borderColor: `${COLORS.GRAY}`,
    borderBottomWidth: 1,
    height: 60,
    marginBottom: 12,
    fontSize: 16,
    fontFamily: `${FONTS.REGULAR}`,
    color: `${COLORS.BLACK}`,
  },
});
