import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const splash = ({navigation}) => {
  const handlenext = () => {
    navigation.navigate("splash2")
    
  };

  const handleskip = () => {
    navigation.navigate("splash3")
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/p1.png')} // Replace with the path to your background image
        resizeMode='cover' 
        style={styles.backgroundImage}
      >
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={handleskip}>
            <Text style={styles.skipbuttonText}>Skip</Text>
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
  skipContainer: {
    alignSelf: 'flex-end', // aligns child to the right
    marginTop: 30, // or the value that fits well with your layout
    marginRight: 15, // or the value that fits well with your layout
  },
  
  skipbuttonText: {
    color: '#FFFFFF', // Black text color
    fontSize: 18, // Font size
    fontWeight: 'bold', // Bold text
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

export default splash;
