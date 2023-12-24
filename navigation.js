import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/Splash';
import Splash2 from './screens/Splash2';
import Splash3 from './screens/Splash3';
import Homescreen from './screens/Homescreen';
import Notification from './screens/Notification';

import SignUp from './screens/SignUp';
import Login from './screens/Login';

import Menuscreen from './screens/Menubar';
import Chat from './screens/Chat';
import Community from './screens/Community';
import Settings from './screens/Settings';
import Signout from './screens/Signout';
import Wallet from './screens/Wallet';
import Wishlist from './screens/Wishlist';
import Button from './components/Button';




const stack=createNativeStackNavigator ()

const Navigation = () => {
  return (
   <NavigationContainer>
    <stack.Navigator
    screenOptions={{
          headerShown: false, // This will hide the header for all screens
        }}
        >

      <stack.Screen
      name='Splash'
      component={Splash}
      />
      <stack.Screen
      name='Splash2'
      component={Splash2}
      />
       <stack.Screen
      name='Splash3'
      component={Splash3}
      />
      
      <stack.Screen
      name='Homescreen'
      component={Homescreen}
      
      />

      <stack.Screen
      name='Notification'
      component={Notification}
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
      name='Menuscreen'
      component={Menuscreen}
      />

      <stack.Screen
      name='Chat'
      component={Chat}
      />
      
      <stack.Screen
      name='Community'
      component={Community}
      />
      
      <stack.Screen
      name='Settings'
      component={Settings}
      />
      
      <stack.Screen
      name='Signout'
      component={Signout}
      />
      
      <stack.Screen
      name='Wallet'
      component={Wallet}
      />
      
      <stack.Screen
      name='Wishlist'
      component={Wishlist}
      />
      
      
    </stack.Navigator>
   </NavigationContainer>
    
  );
};



 export default Navigation;