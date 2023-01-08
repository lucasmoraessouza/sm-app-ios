import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme/index";

export const styles = StyleSheet.create({
  wrapper: {
    flexFirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: `${COLORS.GRAY}`,
    paddingBottom: 12,
    alignItems: "center",
    marginTop: 32,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: `${COLORS.BLACK}`,
    fontSize: 18,
  },
  eyeWrapper: {
    marginLeft: 12,
  },
});
