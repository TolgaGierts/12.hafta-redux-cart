
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from '../../pages/ProductDetailScreen/ProductDetailScreen';

import { ProductStackParamList } from '../types'
import HomeScreen from '../../pages/HomeScreen/HomeScreen';



const ProductListStack = createNativeStackNavigator<ProductStackParamList>();

const ProductListStackScreen = () => {
    return (
        <ProductListStack.Navigator screenOptions={{ headerShown: false }}>
            <ProductListStack.Screen name="ProductList" component={HomeScreen} options={{ headerShown: true, headerTitle: 'Urun Listesi', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: 'bold' } }} />
            <ProductListStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: true, headerTitle: 'Urun Detayi' }} />
        </ProductListStack.Navigator>
    )
}

export default ProductListStackScreen