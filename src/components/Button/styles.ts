import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme/index";

type VariantProp = { isBlack?: boolean };

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: `${COLORS.BLACK}`,
    width: "100%",
    borderRadius: 16,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: `${FONTS.BOLD}`,
    color: `${COLORS.WHITE}`,
    fontSize: 18,
  },
});
