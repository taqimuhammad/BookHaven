import React from 'react';
import { View, Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EntyIcon from 'react-native-vector-icons/Entypo';
import Ionics from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionic from 'react-native-vector-icons/FontAwesome';
import pic from './img/Capture.png';

import Splash from './screens/Splash';
import Splash2 from './screens/Splash2';
import Splash3 from './screens/Splash3';
import Homescreen from './screens/Homescreen';
import Notification from './screens/Notification';
import UserDetail from './screens/UserDetail';
import SignUp from './screens/SignUp';
import Signout from './screens/Signout';
import Login from './screens/Login';
import Menuscreen from './screens/Menubar';
import Chat from './screens/Chat';
import Location from './screens/Location';
import Settings from './screens/Settings';
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
import Faqs from './screens/Faqs';
import Payment from './screens/Payment';
import Order from './screens/Order';
import Faq from './screens/Faqs';
import Paymentstripe from './screens/Paymentstripe';
import StripeApp from './src/StripeApp';
import NewMessage from './screens/NewMessage';
import SearchBar from './components/SearchBar';

import { auth } from './firebaseConfig';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: "black",
      headerStyle:{
        backgroundColor:"#404B7C",
      },
      headerTintColor: '#FFFFFF', // Text color of the header
      headerTitleStyle: {
      fontWeight: 'bold', // Font weight of the header title
       },
       headerTitleAlign: 'center',
      }}>
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='Splash2' component={Splash2} options={{ headerShown: false }} />
      <Stack.Screen name='Splash3' component={Splash3} options={{ headerShown: false }} />
      <Stack.Screen name='Homescreen' component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Searchbar' component={SearchBar} options={{ headerShown: false }}/>
      <Stack.Screen name='Notification' component={Notification} options={{ headerShown: true }} />
      <Stack.Screen name='Payment' component={Payment} options={{ headerShown: true }} />
      <Stack.Screen name='Order' component={Order} options={{ headerShown: true }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name='loginpagebutton' component={Button} options={{ headerShown: false }} />
      <Stack.Screen name='Menuscreen' component={Menuscreen} options={{ headerShown: false }} />
      <Stack.Screen name='UserDetail' component={UserDetail} options={{ headerShown: false }} />
      <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
      <Stack.Screen name='Location' component={Location} options={{ headerShown: false }} />
      {/* <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }}/> */}
      <Stack.Screen name='Signout' component={Signout} options={{ headerShown: false }} />
      <Stack.Screen name='Wallet' component={Wallet} options={{ headerShown: false }} />
      <Stack.Screen name='SetupWallet' component={SetupWallet} options={{ headerShown: true }} />
      <Stack.Screen name='WalletCard' component={WalletCard} options={{ headerShown: false }} />
      <Stack.Screen name='Tracking' component={Tracking} options={{ headerShown: false }} />
      <Stack.Screen name='Tracking2' component={Tracking2} options={{ headerShown: false }} />
      <Stack.Screen name='Tracking3' component={Tracking3} options={{ headerShown: false }} />
      <Stack.Screen name='Tracking4' component={Tracking4} options={{ headerShown: false }} />
      <Stack.Screen name='UserProfile' component={UserProfile} options={{ headerShown: false }} />
      <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: true }} />
      <Stack.Screen name='SetupLocation' component={SetupLocation} options={{ headerShown: false }} />
      <Stack.Screen name='DeleteAccount' component={DeleteAccount} options={{ headerShown: false }} />
      <Stack.Screen name='DeleteConfirmation' component={DeleteConfirmation} options={{ headerShown: false }} />
      <Stack.Screen name='AddBook' component={AddBook} options={{ headerShown: false }} />
      <Stack.Screen name='TermsPolicies' component={TermsPolicies} options={{ headerShown: true }} />
      <Stack.Screen name='HelpSupport' component={HelpSupport} options={{ headerShown: true }} />
      <Stack.Screen name='ReportProblem' component={ReportProblem} options={{ headerShown: true }} />
      <Stack.Screen name='Faqs' component={Faqs} options={{ headerShown: false }} />
      <Stack.Screen name='Wishlist' component={Wishlist} options={{ headerShown: false }} />
      <Stack.Screen name='Bottomnav' component={Bottomnav} options={{ headerShown: false }} />
       {/* <Stack.Screen name='Library' component={Library} options={{ headerShown: false }}/>  */}
      <Stack.Screen name='Bookdetail' component={Bookdetail} options={{ headerShown: true }} />
      <Stack.Screen name='Faq' component={Faq} options={{ headerShown: true }} />
      <Stack.Screen name='Paymentstripe' component={Paymentstripe} options={{ headerShown: true }} />
      <Stack.Screen name='Payment Detail' component={StripeApp} options={{ headerShown: false }} />
      <Stack.Screen name='NewMessage' component={NewMessage} options={{ headerShown: false }} />


    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    // user.displayName is working but not displayName
  }

  return (
    <Drawer.Navigator
      drawerContent={
        (props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 230,
                  width: '100%',
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#404B7C",

                }}
              >
                <Image
                  source={pic}
                  style={{
                    marginVertical: 10,
                    height: 130,
                    width: 130,
                    borderRadius: 65,
                    borderWidth:2,
                    borderColor:'white',
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    marginVertical: 8,
                    fontWeight: "bold",
                    color: "white",
                  }}>{user.displayName}</Text>

              </View>
              <DrawerItemList{...props} />
            </SafeAreaView>
          )
        }
      }
      screenOptions={{
        statusBarColor: "black",
        headerStyle: {
          backgroundColor: "#404B7C",
        },
        headerTintColor: '#FFFFFF', // Text color of the header
        headerTitleStyle: {
          fontWeight: 'bold', // Font weight of the header title
        },
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name='BookHaven' component={TabNavigator}
        options={{
          headerShown: true,

          headerRight: () => (
            <Icon
              icon="menu" // Change to your desired icon
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),

          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),

        }} />
      <Drawer.Screen name='Wallet' component={Wallet}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Icon name="wallet" color={color} size={size} />
          ),
        }} />
      <Drawer.Screen name='Wishlist' component={Wishlist}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Icon name="hearto" color={color} size={size} />
          ),

        }} />
      <Drawer.Screen name='Location' component={Location}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <EntyIcon name="location" color={color} size={size} />
          ),
        }} />
      <Drawer.Screen name='UserProfile' component={UserProfile}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionic name="user-circle-o" color={color} size={size} />
          ),
        }} />
      <Drawer.Screen name='Signout' component={Signout}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionics name="sign-out" color={color} size={size} />
          ),
        }} />


      <Drawer.Screen name='Settings' component={Settings}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Icon name="setting" color={color} size={size} />
          ),
        }} />

    </Drawer.Navigator>
  );
};




const Home1 = 'Homescreen';
const Library1 = 'Library';
const Notification1 = 'Notification';
const chat1 = 'Chat';


const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Home1}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === Home1) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === Library1) {
            iconName = focused ? 'library' : 'library-outline';

          } else if (rn === Notification1) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (rn === chat1) {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
          }




          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{

        activeTintColor: '#404B7C',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 7, fontSize: 10 },
        style: { padding: 10, height: 70 },
        tabBarStyle: { backgroundColor: "white" }


      }}
    >
      <Tab.Screen name={Home1} component={Homescreen}
        options={{ headerShown: false }} />
      <Tab.Screen name={Library1} component={Library}
        options={{ headerShown:false}} />
      <Tab.Screen name={Notification1} component={Notification}
        options={{ headerShown: false }} />
      <Tab.Screen name={chat1} component={Chat}
        options={{ headerShown: false }} />


    </Tab.Navigator>
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
