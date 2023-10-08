import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layout from '../constants/Dimensions';
import NavigationBar from '../components/NavigationBar'
import FastImage from 'react-native-fast-image';
import Colors from '../constants/Colors';
import Animated,{ FadeInDown, ZoomInLeft,ZoomInRight,FadeIn,BounceIn } from 'react-native-reanimated';


const ProductDetails = ({ route, navigation }) => {

  //These Layouts are  Dimensions, We Used for App Responsiveness On All Screens
  let wide = Layout.width;
  let high = Layout.height;
  const productDetails = route.params?.productDetails


  return (

    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
         {/*  Component For Navigation B/W Products List And Product Details Screen */}
        <NavigationBar text={"Product Details"} navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={{ marginHorizontal: wide * 0.045 }}>
       
          <Animated.Image sharedTransitionTag={productDetails.id.toString()}   entering={BounceIn.duration(1500).delay(200)}   style={{ width: '100%', height: high * 0.3, borderRadius: wide * 0.025, borderTopRightRadius: wide * 0.025 }} source={{ uri: productDetails.thumbnail }} />
      
           <Animated.View  entering={FadeInDown.duration(600).delay(600)}  style={{marginVertical:wide*0.04}}>
            <Text style={{fontSize: wide * 0.055, fontWeight:'500',color:Colors.black }}>{productDetails.title}</Text>
            <Text style={{color:Colors.red,fontSize:wide*0.055,marginTop:wide*0.01}}>${productDetails.price}</Text>
            <Text style={{fontSize:wide*0.06,fontWeight:'700',marginTop:wide*0.04,color:Colors.black}}>Brief Description.</Text>
            <Text style={{fontSize:wide*0.04,color:Colors.black}}>{productDetails.description}</Text>
          </Animated.View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default ProductDetails

