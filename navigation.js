import React from 'react';
import { StyleSheet, Text, View} from 'react-native-web'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash from './screens/splash';
import splash2 from './screens/splash2';
import splash3 from './screens/splash3';
import homescreen from './screens/homescreen';
import notification from './components/notification';
import { SearchBar } from 'react-native-screens';

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
      name='search'
      component={SearchBar}
      />
    </stack.Navigator>
   </NavigationContainer>
    
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroungColour: '#fff',
    alignItems: 'centre',
    justifyContent:'centre',

}, 
});
 export default navigation;