import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import Splash from './screens/Splash';
import Splash2 from './screens/Splash2';
import Splash3 from './screens/Splash3';
import Homescreen from './screens/Homescreen';
import Notification from './screens/Notification';
import UserDetail from './screens/UserDetail';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Menuscreen from './screens/Menubar';
import Chat from './screens/Chat';
import Location from './screens/Location';
import Settings from './screens/Settings';
import Signout from './screens/Signout';
import Wallet from './screens/Wallet';
import Wishlist from './screens/Wishlist';
import Button from './components/Button';
import Bookdetail from './components/Bookdetail';
import Tracking4 from './screens/Tracking4';
import UserProfile from './screens/UserProfile';
import EditProfile from './screens/EditProfile';
import WalletCard from './screens/WalletCard';
import SetupWallet from './screens/SetupWallet';
import SetupLocation from './screens/SetupLocation';
import Tracking2 from './screens/Tracking2';
import Tracking3 from './screens/Tracking3';
import Tracking from './screens/Tracking';
import DeleteAccount from './screens/DeleteAccount';
import DeleteConfirmation from './screens/DeleteConfirmation';
import AddBook from './screens/AddBook';
import Bottomnav from './components/Bottomnav';
import Library from './screens/Library';
import TermsPolicies from './screens/TermsPolicies';
import HelpSupport from './screens/HelpSupport';
import ReportProblem from './screens/ReportProblem';
import Payment from './screens/Payment';
import Order from './screens/Order';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      statusBarColor :"black",
    }}>
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='Splash2' component={Splash2} options={{ headerShown: false }} />
      <Stack.Screen name='Splash3' component={Splash3} options={{ headerShown: false }} />
      <Stack.Screen name='Homescreen' component={DrawerNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }}/>
      <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }}/>
      <Stack.Screen name='Order' component={Order} options={{ headerShown: false }}/>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name='loginpagebutton' component={Button} options={{ headerShown: false }}/>
      <Stack.Screen name='Menuscreen' component={Menuscreen} options={{ headerShown: false }}/>
      <Stack.Screen name='UserDetail' component={UserDetail} options={{ headerShown: false }}/>
      <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }}/>
      <Stack.Screen name='Location' component={Location} options={{ headerShown: false }}/>
      <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }}/>
      <Stack.Screen name='Signout' component={Signout} options={{ headerShown: false }}/>
      <Stack.Screen name='Wallet' component={Wallet} options={{ headerShown: false }}/>
      <Stack.Screen name='SetupWallet' component={SetupWallet} options={{ headerShown: false }}/>
      <Stack.Screen name='WalletCard' component={WalletCard} options={{ headerShown: false }}/>
      <Stack.Screen name='Tracking' component={Tracking} options={{ headerShown: false }}/>
      <Stack.Screen name='Tracking2' component={Tracking2} options={{ headerShown: false }}/>
      <Stack.Screen name='Tracking3' component={Tracking3} options={{ headerShown: false }}/>
      <Stack.Screen name='Tracking4' component={Tracking4} options={{ headerShown: false }}/>
      <Stack.Screen name='UserProfile' component={UserProfile} options={{ headerShown: false }}/>
      <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }}/>
      <Stack.Screen name='SetupLocation' component={SetupLocation} options={{ headerShown: false }}/>
      <Stack.Screen name='DeleteAccount' component={DeleteAccount} options={{ headerShown: false }}/>
      <Stack.Screen name='DeleteConfirmation' component={DeleteConfirmation} options={{ headerShown: false }}/>
      <Stack.Screen name='AddBook' component={AddBook} options={{ headerShown: false }}/>
      <Stack.Screen name='TermsPolicies' component={TermsPolicies} options={{ headerShown: false }}/>
      <Stack.Screen name='HelpSupport' component={HelpSupport} options={{ headerShown: false }}/>
      <Stack.Screen name='ReportProblem' component={ReportProblem} options={{ headerShown: false }}/>
      <Stack.Screen name='Wishlist' component={Wishlist} options={{ headerShown: false }}/>
      <Stack.Screen name='Bottomnav' component={Bottomnav} options={{ headerShown: false }}/>
      <Stack.Screen name='Library' component={Library} options={{ headerShown: false }}/>
      <Stack.Screen name='Bookdetail' component={Bookdetail} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      statusBarColor :"black",
      headerStyle:{
        backgroundColor:"#404B7C",
      },
      headerTintColor: '#FFFFFF', // Text color of the header
  headerTitleStyle: {
    fontWeight: 'bold', // Font weight of the header title
  },
  headerTitleAlign: 'center',
    }}
    >
      <Drawer.Screen name='Home' component={Homescreen} options={{ headerShown: true }}  />
      <Drawer.Screen name='Wallet' component={Wallet} options={{ headerShown: false }}/>
      <Drawer.Screen name='Wishlist' component={Wishlist} options={{ headerShown: false }}/>
      <Drawer.Screen name='Location' component={Location} options={{ headerShown: false }}/>
      <Drawer.Screen name='Order' component={Order} options={{ headerShown: false }}/>
      <Drawer.Screen name='Payment' component={Payment} options={{ headerShown: false }}/>
      <Drawer.Screen name='Tracking' component={Tracking} options={{ headerShown: false }}/>
      <Drawer.Screen name='Settings' component={Settings} options={{ headerShown: false }}/>
      
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" /> 
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );

};

export default Navigation;
