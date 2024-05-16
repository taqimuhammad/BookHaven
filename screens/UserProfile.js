import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import ProfileText from '../components/ProfileText';
import { auth } from "../firebaseConfig";

const UserProfile = ({ navigation }) => {

 

  const GoToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const GoToWallet = () => {
    navigation.navigate("Wallet");
  };

  const GoToWishlist = () => {
    navigation.navigate("Wishlist");
  };

  const GoToSettings = () => {
    navigation.navigate("Settings");
  };

  const GoToLibrary = () => {
    navigation.navigate("Library");
  };

  const GoToLocation = () => {
    navigation.navigate("SetupLocation");
  };

  const GoToLogout = () => {
    navigation.navigate("Signout");
  };

  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    // user.displayName is working but not displayName
  }

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
       
        
        <View style={styles.imageview}>
          <Image source={require('../img/profile.jpg')} style={styles.image} />
          <Text style={styles.username}>{user.displayName}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.insidebody}>

          <View style={styles.tab}>
            <TouchableOpacity onPress={GoToEditProfile}>
              <Text style={styles.tabtext}>Edit Profile</Text>
              <AntDesign name="right" size={21} color="black" style={styles.tabicon} />
            </TouchableOpacity>
          </View>

          <View style={styles.tab}>
            <TouchableOpacity onPress={GoToWallet}>
              <Text style={styles.tabtext}>Manage E-Wallet</Text>
              <AntDesign name="right" size={21} color="black" style={styles.tabicon} />
            </TouchableOpacity>
          </View>

          <View style={styles.tab}>
            <TouchableOpacity onPress={GoToWishlist}>
              <Text style={styles.tabtext}>Wishlist</Text>
              <AntDesign name="right" size={21} color="black" style={styles.tabicon} />
            </TouchableOpacity>
          </View>

          <View style={styles.tab}>
            <TouchableOpacity onPress={GoToSettings}>
              <Text style={styles.tabtext}>Settings</Text>
              <AntDesign name="right" size={21} color="black" style={styles.tabicon} />
            </TouchableOpacity>
          </View>

          <View style={styles.tab}>
            <TouchableOpacity onPress={GoToLibrary}>
              <Text style={styles.tabtext}>Library</Text>
              <AntDesign name="right" size={21} color="black" style={styles.tabicon} />
            </TouchableOpacity>
          </View>

          <View style={styles.tab}>
            <TouchableOpacity onPress={GoToLocation}>
              <Text style={styles.tabtext}>Set Location</Text>
              <AntDesign name="right" size={21} color="black" style={styles.tabicon} />
            </TouchableOpacity>
          </View>

          <View style={styles.tab}>
            <TouchableOpacity onPress={GoToLogout}>
              <Text style={styles.tabtext}>Logout</Text>
              <AntDesign name="right" size={21} color="black" style={styles.tabicon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  topview: {
    flex: 0.60,
    backgroundColor: '#C1BADC',
    height: 200,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 80,
    borderColor: 'white',
    borderWidth: 3,
    position: 'absolute',
    left: 30,
    top:30,
  },
  username: {
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    right: 5,
    top: 110,
  },
  email: {
    fontSize: 20,
    color: '#C1BADC',
    position: 'absolute',
    right: 30,
    top: 155,
    fontWeight: 'bold',
  },
  body: {
    flex: 2,
  },
  insidebody: {
    marginTop: 125,
    alignSelf: 'center',
  },
  tab: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tabtext: {
    fontSize: 20,
    width: 250,
  },
  tabicon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 50,
  }
});

export default UserProfile;
