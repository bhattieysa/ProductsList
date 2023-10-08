import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './app/routes/HomeStack'



function App(){

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
