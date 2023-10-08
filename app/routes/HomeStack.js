import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../src/screens/ProductList'
import ProductDetails from '../src/screens/ProductDetails'
import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';



const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation:'slide_from_right'}} initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  )

}

export default HomeStack