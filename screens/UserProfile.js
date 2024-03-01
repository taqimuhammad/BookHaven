import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import ProfileText from '../components/ProfileText';
import { auth } from "../firebaseConfig";

const UserProfile = ({ navigation }) => {

  const handleBack = () => {
    navigation.navigate("Homescreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
            <Icon name="arrow-back" size={34} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.editicon}>
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
        <View>
          <Image source={require('../img/profile.jpg')} style={styles.image} />
          <Text style={styles.username}>John Smith</Text>
          <Text style={styles.email}>{auth.currentUser?.email}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.insidebody}>
          <ProfileText title="Edit Profile"/>
          <ProfileText title="Manage E-Wallet"/>
          <ProfileText title="Wishlist"/>
          <ProfileText title="Settings"/>
          <ProfileText title="Library"/>
          <ProfileText title="Set Location"/>
          <ProfileText title="Logout"/>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 34,
    paddingTop: 50,
    margin: 10,
    paddingBottom: 5,
    alignSelf: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 60,
  },
  editicon: {
    position: 'absolute',
    top: 64,
    right: 20,
  },
  topview: {
    flex: 0.85,
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
    top: 30,
    left: 30,
  },
  username: {
    fontSize: 35,
    color: 'white',
    position: 'absolute',
    right: 30,
    top: 55,
  },
  email: {
    fontSize: 25,
    color: '#C1BADC',
    position: 'absolute',
    right: 50,
    top: 100,
    fontWeight: 'bold',
  },
  body: {
    flex: 2,
  },
  insidebody: {
    marginTop: 75,
    alignSelf:'center',
  }
});

export default UserProfile;
