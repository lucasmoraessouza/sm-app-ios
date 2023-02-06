import { FC } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { COLORS } from "../../theme/index";

interface InputProps extends TextInputProps {
  iconName?: string;
  onEyePress?: () => void;
  isPassword?: boolean;
}

const Input: FC<InputProps> = ({
  iconName,
  isPassword,
  onEyePress,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
}) => (
  <View style={styles.wrapper}>
    {/* <MaterialIcons name={"assistant-photo"} size={24} color={COLORS.GRAY} /> */}
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
    {isPassword && (
      <TouchableOpacity style={styles.eyeWrapper} onPress={onEyePress}>
        <Ionicons
          name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
          size={24}
          color={COLORS.GRAY}
        />
      </TouchableOpacity>
    )}
  </View>
);

export default Input;
