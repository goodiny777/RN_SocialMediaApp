import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import { Header } from "react-native/Libraries/NewAppScreen";
import Profile from "../screens/Profile/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsavigator = () => {
    <ProfileTabs.Navigator>
        <ProfileTabs.Screen name={'Tab1'} component={Home} />
        <ProfileTabs.Screen name={'Tab2'} component={Home} />
        <ProfileTabs.Screen name={'Tab3'} component={Home} />
    </ProfileTabs.Navigator>
};

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