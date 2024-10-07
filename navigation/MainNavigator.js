import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import { Header } from "react-native/Libraries/NewAppScreen";
import Profile from "../screens/Profile/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ header: () => null, headerShown: false }}
        >
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
        </Drawer.Navigator>
    )
};

const MainNavigator = () => {
    return (<Stack.Navigator
        screenOptions={{ header: () => null, headerShown: false }}
        initialRouteName={'Drawer'} >

        <Stack.Screen name={'Drawer'} component={DrawerNavigator} />


    </Stack.Navigator >)
};

export default MainNavigator;