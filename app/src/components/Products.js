import {  Text,TouchableOpacity } from 'react-native'
import React,{memo} from 'react'
import Layout from '../constants/Dimensions';
import Colors from '../constants/Colors';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';

const Products = ({item,navigation}) => {
    let wide = Layout.width;
    let high = Layout.height;
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails", {
                productDetails: item
            })}
            style={{ backgroundColor: Colors.white, borderRadius: wide * 0.025, width: wide * 0.4, height: wide * 0.6, marginBottom: wide * 0.09 }}>
            <FastImage style={{ width: wide * 0.4, height: wide * 0.4, borderTopLeftRadius: wide * 0.025, borderTopRightRadius: wide * 0.025 }} source={{ uri: item.thumbnail }} />
            <Animated.View style={{ marginHorizontal: wide * 0.02, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode='tail' style={{ textAlign: 'center', fontSize: wide * 0.038, fontWeight: '600', color: Colors.black }}>{item.title}</Text>
                <Text style={{ color: Colors.red, fontSize: wide * 0.04, marginTop: wide * 0.01 }}>${item.price}</Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

export default memo(Products)