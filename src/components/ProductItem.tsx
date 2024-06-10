import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Product } from '../types/types'
import { Feather } from '@expo/vector-icons';

type Props = {
    item: Product
    onPress: () => void
}

const ProductItem = ({ item, onPress }: Props) => {
    return (
        <Pressable className="flex-1 p-4" onPress={onPress}>
            <Image
                source={{ uri: item.image }}
                style={{ height: 200, width: 200 }}
                resizeMode='contain'
            />
            <View className="flex flex-row justify-between mt-2">
                <Text className="text-lg font-bold text-[#fc4e71] ">$ {item.price}</Text>
                <Pressable>
                    <Feather name="heart" size={24} color="black" />
                </Pressable>
            </View>
            <Text className="text-gray-500 font-medium italic">{item.title}</Text>


        </Pressable>
    )
}

export default ProductItem