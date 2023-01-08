import { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
  isBlack?: boolean;
}

const Button: FC<ButtonProps> = ({ buttonText, isBlack, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

export default Button;
