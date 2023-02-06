import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./src/modules/screens/Login";

import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";
import AuthProvider from "./src/context/AuthContext";
export default function App() {
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
