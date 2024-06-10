import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Product } from '../../types/types';
import ProductItem from '../../components/ProductItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProductStackParamList } from '../../navigation/types';

const HomeScreen = () => {

    const [product, setProduct] = React.useState<Product[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<ProductStackParamList, 'ProductList'>>();

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json() as Product[];
        setProduct(data);
    }

    return (
        <View className="flex-1 bg-white">
            <FlatList data={product} numColumns={2} columnWrapperStyle={{ justifyContent: 'space-around' }} renderItem={({ item }) => (
                <ProductItem item={item} onPress={() => navigation.navigate('ProductDetail', { id: item.id })} />
            )} />
        </View>
    )
}

export default HomeScreen