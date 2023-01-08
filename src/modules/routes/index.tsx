import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../modules/screens/LoginScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const OnBoardingRoutes = () => (
  <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={LoginScreen} />
  </Navigator>
);

export default OnBoardingRoutes;
