import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import splash2 from './splash2';

const splash3 = ({ navigation }) => {
  
  const handleGetStarted = () => {
    navigation.navigate("signup");
  };
  
  const handleLogin = () => {
    navigation.navigate("login");
  };

  const handleBack = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../img/p3.png')} // Replace with your image path
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.getStartedContainer}>
          <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
            <Text style={styles.getStartedButtonText}>Get started now!</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.loginContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
  },

  backButtonContainer: {
    alignSelf: 'flex-start',
    marginTop: 44, // Adjust this value to match your status bar height
    marginLeft: 16,
  },
 
 
  getStartedContainer: {
    alignItems: 'center',
    marginBottom: -500, // Adjust this to match the provided screen layout
  },
  
  getStartedButton: {
    width: '70%', // Match the width with your design
    paddingVertical: 15, // Adjust the padding to match your design
    borderRadius: 25,
    backgroundColor: '#404B7C', // Match the color with your design
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Space between the "Get started" and "Log in" buttons
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginContainer: {
    alignItems: 'center',
    marginBottom: 109,
    marginLeft: 160,
  },
   loginButtonText: {
    color: '#D21811',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default splash3;
