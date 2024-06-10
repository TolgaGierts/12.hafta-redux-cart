import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { removeFromCart, selectCart } from '../../features/addToCartSlice';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { ProductStackParamList, RootTabsParamList } from '../../navigation/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CartScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<RootTabsParamList, 'Cart'>,
    NativeStackNavigationProp<ProductStackParamList>
>;

const CartScreen = () => {
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<CartScreenNavigationProp>();


    if (cart.length === 0) {
        return (
            <View className="flex-1 justify-center items-center bg-white p-4">
                <Text className="text-lg font-bold">Sepetiniz bos.</Text>
                <Button title="Anasayfaya git" onPress={() => navigation.navigate('Home')} />
            </View>
        )
    }

    return (
        <View className="flex-1 bg-white p-4">
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className="flex-row items-center p-4 border-b border-gray-300">
                        <Image source={{ uri: item.image }} className="w-20 h-20 mr-4" resizeMode="contain" />
                        <View className="flex-1">
                            <Text className="text-lg font-bold">{item.title}</Text>
                            <Text className="text-sm">Quantity: {item.count}</Text>
                            <Text className="text-sm text-[#fc4e71]">Price: ${item.price}</Text>
                        </View>
                        <View>
                            <Text className="text-lg font-bold px-4">${item.price * item.count}</Text>
                            <TouchableOpacity className='mt-4 rounded-md bg-blue-400' onPress={() => dispatch(removeFromCart(item.id))} >
                                <Text className="text-white text-center px-4 py-2">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default CartScreen;