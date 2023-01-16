import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./src/modules/screens/Login";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";
import AuthProvider from "./src/context/AuthContext";
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
