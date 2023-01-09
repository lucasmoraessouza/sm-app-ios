import { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import logo from "../../../assets/stacked-logo.png";

import Button from "../../../components/Button";
import { styles } from "./styles";
import { useAuth } from "../../../context/AuthContext";

export default function LoginScreen() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    auth
      .login(email, password)
      .catch(() => alert("You have entered an invalid username or password"));
  }

  return (
    <View style={styles.content}>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPasswordWrapper}>
        <Text style={styles.forgotPasswordLabel}>Forgot your password?</Text>
      </TouchableOpacity>

      <Button buttonText="Sign In" onPress={handleSubmit} />
    </View>
  );
}
