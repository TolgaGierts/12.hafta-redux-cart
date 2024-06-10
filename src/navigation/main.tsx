import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabsParamList } from './types';
import ProductListStackScreen from './ProductListStack/ProductListStackScreen';
import CartScreen from '../pages/CartScreen/CartScreen';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '../pages/SettingsScreen/SettingsScreen';
import AddScreen from '../pages/AddScreen/AddScreen';
import { Feather } from '@expo/vector-icons';
import { selectCart } from '../features/addToCartSlice';
import { useAppSelector } from '../app/hook';


const Tab = createBottomTabNavigator<RootTabsParamList>();

const TabIcon = ({ icon, color }) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <Feather name={icon} size={24} color={color} />
        </View>
    );
};

const Tabs = () => {
    const cart = useAppSelector(selectCart);
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 84,
                },
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: "bold"
                }
            }}>
                <Tab.Screen name="Home" component={ProductListStackScreen} options={{
                    tabBarIcon: ({ color }) =>
                        <TabIcon
                            icon={'home'}
                            color={color}
                        />,
                    headerShown: false
                }} />

                <Tab.Screen name="Cart" component={CartScreen} options={{
                    tabBarBadge: cart.length > 0 ? cart.length : null,
                    tabBarBadgeStyle: { backgroundColor: 'red', color: 'white', marginTop: 10 },
                    tabBarIcon: ({ color }) =>
                        <TabIcon
                            icon={'shopping-bag'}
                            color={color}
                        />
                }} />

                <Tab.Screen name="Settings" component={SettingsScreen} options={{
                    tabBarIcon: ({ color }) =>
                        <TabIcon
                            icon={'settings'}
                            color={color}
                        />
                }} />
                <Tab.Screen name="Add" component={AddScreen} options={{
                    tabBarIcon: ({ color }) =>
                        <TabIcon
                            icon={'plus'}
                            color={color}
                        />
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs