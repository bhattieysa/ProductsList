import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../constants/Dimensions';
import { Svg,  Polygon } from 'react-native-svg';
import Colors from '../constants/Colors';


let wide = Layout.width;
let high = Layout.height;
const NavigationBar = ({ text, navigation }) => {
    return (
        <View style={{ flexDirection: 'row',marginHorizontal:wide*0.03 }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Svg height={high * 0.08} id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width={wide * 0.08} >
                    <Polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
                </Svg>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', marginLeft:wide*0.055 }}>
                <Text style={{ fontSize: wide * 0.05, fontWeight: '700' ,color:Colors.black}} >{text}</Text>
            </View>
        </View>
    )
}

export default NavigationBar
