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
import Input from "../../../components/Input";

import { styles } from "./styles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";
import { COLORS } from "../../../theme";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // function signUp(e: any) {
  //   e.preventDefault();

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       console.log(userCredential);
  //       // ...
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/email-in-already-in-use") {
  //         console.log("email ja existente");
  //       }
  //       if (error.code === "auth/invalid-email") {
  //         console.log("email invalido");
  //       }
  //     });
  // }

  function signIn(e: any) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("usuario logado"))
      .catch((error) => console.log(error));
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
      {/* <Input
        iconName="lock-outline"
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={!isVisible}
        isPassword
        onEyePress={() => setIsVisible((oldState) => !oldState)}
      /> */}
      <TouchableOpacity style={styles.forgotPasswordWrapper}>
        <Text style={styles.forgotPasswordLabel}>Forgot your password?</Text>
      </TouchableOpacity>

      <Button buttonText="Sign In" onPress={signIn} />
    </View>
  );
}
