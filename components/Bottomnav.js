import React from 'react';
import { View, Image, TouchableOpacity , StyleSheet} from 'react-native';

// Import your icons
import searchicon from '../img/searchicon.png';
import homeicon from '../img/homeicon.png';
import libraryicon from '../img/libraryicon.png';

const Bottomnav = () => {
  // Functions to handle icon press
  const handleSearchPress = () => {
    // Logic for search press
  };

  const handleHomePress = () => {
    // Logic for home press
  };

  const handleLibraryPress = () => {
    // Logic for library press
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearchPress}style={styles.iconButton} >
        <Image source={searchicon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHomePress} style={styles.homeButton} >
        <Image source={homeicon} style={styles.homeicon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLibraryPress }style={styles.iconButton}>
        <Image source={libraryicon} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute', // Positioning it absolutely 
      bottom: 0,           // At the bottom of the screen
      left: 0,             // Align to the left
      right: 0,            // Align to the right
      backgroundColor: 'white', // Background color for the nav
      padding: 2, 
      borderTopWidth: 2,   
      borderTopColor: '#98979F'            // Optional padding for better appearance
    },
    homeicon: {
      width: 25,  // Set the width of the icon
      height: 25, // Set the height of the icon
    },
    icon: {
        width: 35,  // Set the width of the icon
        height: 35, // Set the height of the icon
      },
    homeButton: {
        backgroundColor: '#404B7C', // Background color for the circle
        padding: 15,             // Padding around the icon, can be adjusted
        borderRadius: 50,        // Large border radius to create a rounded shape
        justifyContent: 'center', // Center the icon horizontally
        alignItems: 'center',    // Center the icon vertically
        width: 50,               // Width of the circle (including padding)
        height: 50,              // Height of the circle (including padding)
      },
      iconButton: {
        padding: 15,             // Padding around the icon, can be adjusted
        borderRadius: 50,        // Large border radius to create a rounded shape
        justifyContent: 'center', // Center the icon horizontally
        alignItems: 'center',    // Center the icon vertically
        width: 50,               // Width of the circle (including padding)
        height: 50,              // Height of the circle (including padding)
      },
    
  });

export default Bottomnav;