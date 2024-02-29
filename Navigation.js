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
import Location from './screens/Location';
import Settings from './screens/Settings';
import Signout from './screens/Signout';
import Wallet from './screens/Wallet';
import Wishlist from './screens/Wishlist';
import Button from './components/Button';
import Bookdetail from './components/Bookdetail';
import UserDetail from './screens/UserDetail';

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
import Library from './screens/Library'

import TermsPolicies from './screens/TermsPolicies';
import HelpSupport from './screens/HelpSupport';
import ReportProblem from './screens/ReportProblem';
import Payment from './screens/Payment';
import Order from './screens/Order';





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
      component={Splash}/>
      <stack.Screen
      name='Splash2'
      component={Splash2}/>
       <stack.Screen
      name='Splash3'
      component={Splash3}/> 
      <stack.Screen
      name='Homescreen'
      component={Homescreen}/>
      <stack.Screen
      name='Notification'
      component={Notification}/>
      
      <stack.Screen
      name='Payment'
      component={Payment}/>
      <stack.Screen
      name='Order'
      component={Order}/>
      
      <stack.Screen
      name='Login'
      component={Login}/>
      <stack.Screen
      name='SignUp'
      component={SignUp}/>
      <stack.Screen
      name='UserDetail'
      component={UserDetail}/>
      <stack.Screen
      name='loginpagebutton'
      component={Button}/>
      <stack.Screen
      name='Menuscreen'
      component={Menuscreen}/>

      <stack.Screen
      name='Chat'
      component={Chat}/>
      
      <stack.Screen
      name='Location'
      component={Location}/>
      
      <stack.Screen
      name='Settings'
      component={Settings}/>
      
      <stack.Screen
      name='Signout'
      component={Signout}/>
      
      <stack.Screen
      name='Wallet'
      component={Wallet}/>

      <stack.Screen
      name='SetupWallet'
      component={SetupWallet}/>
      
      <stack.Screen
      name='WalletCard'
      component={WalletCard}/>
      
      <stack.Screen
      name='Tracking'
      component={Tracking}/>

      <stack.Screen
      name='Tracking2'
      component={Tracking2}/>
      <stack.Screen
      name='Tracking3'
      component={Tracking3}/>
      <stack.Screen
      name='Tracking4'
      component={Tracking4}/>
      <stack.Screen
      name='UserProfile'
      component={UserProfile}/>
      <stack.Screen
      name='EditProfile'
      component={EditProfile}/>

      <stack.Screen
      name='SetupLocation'
      component={SetupLocation}/>
       <stack.Screen
      name='DeleteAccount'
      component={DeleteAccount}/>
       <stack.Screen
      name='DeleteConfirmation'
      component={DeleteConfirmation}/>
       <stack.Screen
      name='AddBook'
      component={AddBook }/>

       <stack.Screen
      name='TermsPolicies'
      component={TermsPolicies}/>
       <stack.Screen
      name='HelpSupport'
      component={HelpSupport}/>
       <stack.Screen
      name='ReportProblem'
      component={ReportProblem}/>
      
       <stack.Screen
      name='Wishlist'
      component={Wishlist}/>
       <stack.Screen
      name='Bottomnav'
      component={Bottomnav}/>
      <stack.Screen
      name='Library'
      component={Library}/>
      <stack.Screen
      name='Bookdetail'
      component={Bookdetail }/>
    </stack.Navigator>
   </NavigationContainer>
    
  );
};



 export default Navigation;

