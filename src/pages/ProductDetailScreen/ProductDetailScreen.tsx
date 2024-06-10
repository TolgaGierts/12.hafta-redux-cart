import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductStackParamList } from '../../navigation/types';
import { Product } from '../../types/types';
import { useAppDispatch } from '../../app/hook';
import { addToCart } from '../../features/addToCartSlice';



type Props = NativeStackScreenProps<ProductStackParamList, 'ProductDetail'>;

const ProductDetailScreen = ({ route }: Props) => {
    const { id } = route.params
    const [product, setProduct] = React.useState<Product>({} as Product)
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const dispatch = useAppDispatch();


    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json() as Product
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }
    if (isLoading) {
        return (
            <View className="flex-1 bg-white">
                <ActivityIndicator size="large" color="blue" />
            </View>
        )
    }

    return (
        <View className="flex-1 bg-white p-4">
            <Image
                source={{ uri: product.image }}
                style={{ height: 200, width: '100%' }}
                resizeMode='contain'
                className='m-4'
            />
            <Text className="text-lg font-bold text-center m-4">{product.title}</Text>
            <Text className='text-lg font-bold text-center text-[#fc4e71]'>${product.price}</Text>

            <Text className="text-gray-500 font-medium italic mt-4">{product.description}</Text>
            <TouchableOpacity className="mt-auto" onPress={() => dispatch(addToCart(product))}>
                <Text className=" text-lg font-bold text-center mt-4 text-white bg-blue-500 p-4 rounded-md">Sepete Ekle</Text>
            </TouchableOpacity >

        </View >
    )
}

export default ProductDetailScreen