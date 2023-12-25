import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Splash2 = ({navigation}) => {
   
  const handlenext = () => {
    navigation.navigate("Splash3")
  };


  const handleBack = () => {
    navigation.popToTop();
  };
  
  return (
    <View style={styles.container}>
    <ImageBackground
      source={require('../img/p2.png')} // Replace with the path to your background image
      resizeMode='cover' // or 
      style={styles.backgroundImage}
    >
      <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      
      <View style={styles.nextContainer}>
        <TouchableOpacity onPress={handlenext}>
          <Text style={styles.nextbuttonText}>Next</Text>
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
    justifyContent: 'space-between', // pushes children to both ends
  },

  backButtonContainer: {
    alignSelf: 'flex-start',
    marginTop: 44, // Adjust this value to match your status bar height
    marginLeft: 16,
  },
 
 
  nextContainer: {
    alignSelf: 'flex-end', // aligns child to the right
    marginBottom: 15, // or the value that fits well with your layout
    marginRight: 15, // or the value that fits well with your layout
  },
  
  nextbuttonText: {
    color: '#534976', // Black text color
    fontSize: 18, // Font size
    fontWeight: 'bold', // Bold text
  },
 
});

export default Splash2;
