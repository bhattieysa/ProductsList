import { SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, FlatList, StatusBar, RefreshControl, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppLoader from '../components/AppLoader'
import Layout from '../constants/Dimensions';
import Colors from '../constants/Colors';
import { Svg, Path } from 'react-native-svg';
import * as api from '../../api/index';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import Products from '../components/Products';



const ProductList = ({ navigation }) => {

  //  //These Layouts are  Dimensions, We Used for App Responsiveness On All Screens
  let wide = Layout.width;
  let high = Layout.height;
  const [loading, setLoading] = useState(true)
  const [productsData, setProductsData] = useState(null)
  const [productsDataCopy, setProductsDataCopy] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [searchValue, setSearchValue] = useState(null)


  useEffect(() => {
    axios({
      method: 'GET',
      url: api.productsList_API,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        setProductsData(response.data.products)
        setProductsDataCopy(response.data.products)
        setLoading(false)
        if (refresh) {
          setRefresh(false)
        }
      })
      .catch(function (error) {
        console.log("error", error)
        setLoading(false)
      })
  }, [])


  //Api Call On Refresh Of Flatlist using  Pull Down
  const onRefresh = () => {
    setRefresh(true)
    axios({
      method: 'GET',
      url: api.productsList_API,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        setProductsData(response.data.products)
        setProductsDataCopy(response.data.products)
        setRefresh(false)
      })
      .catch(function (error) {
        console.log("error", error)
        setLoading(false)
      })
  }

  //Function for Search Bar Search Products BY Name
  const onSearch = () => {
    const searchedData = productsDataCopy.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()));
    setProductsData(searchedData)
  }
  const renderItem = ({item}) => <Products item={item} navigation={navigation} />;


  return (

    <View style={{ flex: 1 }}>
      {Platform.OS == 'ios' ?
        <StatusBar barStyle="dark-content" backgroundColor={Colors.black} />
        :
        <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      }
      {/*  Component For Loading Indicator */}
      <AppLoader visible={loading} />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={{ marginHorizontal: wide * 0.05, marginTop: wide * 0.03 }}>
            <Text style={{ fontSize: wide * 0.09, fontWeight: 600,color:Colors.black }}>Products List</Text>
            <View style={{ flexDirection: 'row', backgroundColor: Colors.grey, height: high * 0.045, justifyContent: "center", alignItems: 'center', borderRadius: wide * 0.02, justifyContent: 'flex-start', paddingHorizontal: wide * 0.04, marginTop: wide * 0.02 }}>
              <Svg height={high * 0.05} width={wide * 0.05} viewBox="0 0 500 500" enable-background="new 0 0 512 512">
                <Path d="M344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C132.1 64 64 132.2 64 216.3c0 84.1 68.1 152.3 152.1 152.3 30.5 0 58.9-9 82.7-24.4l6.9-4.8L414.3 448l33.7-34.3-108.5-108.6 5-7.1zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85c-22.7 22.7-52.9 35.2-85 35.2s-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-85s12.5-62.3 35.2-85c22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2z" fill="#8b8b8d" class="fill-000000"></Path>
              </Svg>
              <TextInput returnKeyType="search" onChangeText={text => setSearchValue(text)} onSubmitEditing={() => onSearch()} style={{ marginHorizontal: wide * 0.02, flex: 1, paddingVertical: wide * 0.02 }} placeholder='Search' placeholderTextColor={Colors.darkGrey} />
            </View>
            <View style={{ marginVertical: wide * 0.1 }}>
              <FlatList
                data={productsData}
                numColumns={2}
                refreshControl={
                  <RefreshControl
                    colors={[Colors.black]} // for android
                    tintColor={Colors.black} // for ios 
                    refreshing={refresh} onRefresh={onRefresh} />
                }
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                style={{ marginBottom: wide * 0.1, }}
                keyExtractor={item => item.id}
                ListFooterComponent={() => <View style={{ marginBottom: high * 0.1 }}></View>}
                renderItem={renderItem} />
            </View>
          </View>
        </KeyboardAvoidingView>

      </SafeAreaView>
    </View>
  )
}

export default ProductList


