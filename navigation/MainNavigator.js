import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import { Header } from "react-native/Libraries/NewAppScreen";
import Profile from "../screens/Profile/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabTitle from "../components/TabTitle/TabTitle";
import { TabBarIndicator } from "react-native-tab-view";
import { title } from "process";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigator = () => {
    return (<ProfileTabs.Navigator screenOptions={{
        tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
        },
        tabBarStyle: {
            zIndex: 0,
        }
    }}>
        <ProfileTabs.Screen options={{ tabBarLabel: ({ focused }) => TabTitle({ title: 'Photos', isFocused: focused }) }} name={'Photos'} component={Home} />
        <ProfileTabs.Screen options={{ tabBarLabel: ({ focused }) => TabTitle({ title: 'Videos', isFocused: focused }) }} name={'Videos'} component={Home} />
        <ProfileTabs.Screen options={{ tabBarLabel: ({ focused }) => TabTitle({ title: 'Saved', isFocused: focused }) }} name={'Saved'} component={Home} />
    </ProfileTabs.Navigator>);
};



const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ header: () => null, headerShown: false }}
        >
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
        </Drawer.Navigator>
    );
};

const MainNavigator = () => {
    return (<Stack.Navigator
        screenOptions={{ header: () => null, headerShown: false }}
        initialRouteName={'Drawer'} >

        <Stack.Screen name={'Drawer'} component={DrawerNavigator} />


    </Stack.Navigator >)
};

export default MainNavigator;