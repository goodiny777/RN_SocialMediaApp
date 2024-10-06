import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import { Header } from "react-native/Libraries/NewAppScreen";
import Profile from "../screens/Profile/Profile";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return <Stack.Navigator
        screenOptions={{ header: () => null, headerShown: false }}
        initialRouteName={Routes.Home} >

        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Profile} component={Profile} />


    </Stack.Navigator >
};

export default MainNavigator;