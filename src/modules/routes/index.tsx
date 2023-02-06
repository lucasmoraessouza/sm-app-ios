import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Login";
import { Chat } from "../screens/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { ActivityIndicator, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Idk } from "../screens/Idk";
import { Contact } from "../screens/Contact";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import ListIcon from "../../assets/icons/list-dashes.png";
import ContactIcon from "../../assets/icons/user.png";
import ImageIcon from "../../assets/icons/image.png";
import ChatIcon from "../../assets/icons/chats.png";
import ProfileIcon from "../../assets/icons/user-circle.png";

import { Feather } from "@expo/vector-icons";
Feather.loadFont();

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

function ChatStack() {
  return (
    <Navigator>
      <Screen
        name="Idk"
        component={Idk}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return (
              <Image source={ListIcon} style={{ width: 20, height: 20 }} />
            );
          },
        }}
      />
      <Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return (
              <Image source={ContactIcon} style={{ width: 20, height: 20 }} />
            );
          },
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return (
              <Image source={ImageIcon} style={{ width: 20, height: 20 }} />
            );
          },
        }}
      />
      <Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
          tabBarIcon: () => {
            return (
              <Image source={ChatIcon} style={{ width: 20, height: 20 }} />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return (
              <Image source={ProfileIcon} style={{ width: 20, height: 20 }} />
            );
          },
        }}
      />
    </Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export function RootNavigator() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
