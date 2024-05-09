import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";


const Signout = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Homescreen");
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      navigation.replace('Login');
    }).
    catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signout</Text>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
        </TouchableOpacity>
      </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonc} onPress={handleSignOut} >
            <Text style={styles.textc}>Sign Out</Text>
          </TouchableOpacity>
        </View>

    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  backButtonContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },

  title: {
    fontSize: 30,
    paddingTop: 40,
    margin: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    top:300,
  },
  buttonc: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404B7C',
    height: 48,
    width: 248,
    borderRadius: 25,
    marginBottom: 5,
  },
  textc: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },

});


export default Signout;