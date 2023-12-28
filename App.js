import React from 'react';
// import Navigation from "./Navigation";
//import Bottomnav from './components/Bottomnav';
import Wishlist from './screens/Wishlist';
import { View,StyleSheet } from 'react-native';
import Tracking4 from './screens/Tracking4';
import UserProfile from './screens/UserProfile';
import EditProfile from './screens/EditProfile';
import WalletCard from './screens/WalletCard';
import Wallet from './screens/Wallet';
import SetupWallet from './screens/SetupWallet';
import SetupLocation from './screens/SetupLocation';
import Tracking2 from './screens/Tracking2';
import Tracking3 from './screens/Tracking3';
import Tracking from './screens/Tracking';
import DeleteAccount from './screens/DeleteAccount';
import DeleteConfirmation from './screens/DeleteConfirmation';
import AddBook from './screens/AddBook';
import TermsPolicies from './screens/TermsPolicies';
import Faqs from './screens/Faqs';
import HelpSupport from './screens/HelpSupport';
import ReportProblem from './screens/ReportProblem';

export default function App() {
  return(
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   }
});

