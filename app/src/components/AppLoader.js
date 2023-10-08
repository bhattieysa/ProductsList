import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import  Colors  from '../constants/Colors';

function AppLoader({visible}) {

    return (
      <>
      {visible==true?
              <View style={styles.container}>
                <ActivityIndicator style={{ transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }} animating  size='large' color={Colors.main} />
              </View>
              :
              <></>
      }
      </>
    );

  
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
});




export default AppLoader;