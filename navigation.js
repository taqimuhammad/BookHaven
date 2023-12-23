import React from 'react';
import { StyleSheet, Text, View} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash from './screens/splash';
import splash2 from './screens/splash2';
import splash3 from './screens/splash3';
import homescreen from './screens/homescreen';
import notification from './components/notification';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Button from './components/Button';
import menuscreen from './components/menuscreen';



const stack=createNativeStackNavigator ()

const navigation = () => {
  return (
   <NavigationContainer>
    <stack.Navigator
    screenOptions={{
          headerShown: false, // This will hide the header for all screens
        }}
        >
      
      <stack.Screen
      name='splash1'
      component={splash}
      />
      <stack.Screen
      name='splash2'
      component={splash2}
      />
       <stack.Screen
      name='splash3'
      component={splash3}
      />
      
      <stack.Screen
      name='homescreen'
      component={homescreen}
      />

      <stack.Screen
      name='notification'
      component={notification}
      />
      <stack.Screen
      name='login'
      component={Login}
      />
      <stack.Screen
      name='signup'
      component={SignUp}
      />
      <stack.Screen
      name='loginpagebutton'
      component={Button}
      />
      <stack.Screen
      name='menuscreen'
      component={menuscreen}
      />
      
     
    </stack.Navigator>
   </NavigationContainer>
    
  );
};

 export default navigation;