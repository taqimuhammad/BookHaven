import React from 'react';
import { View, Image, TouchableOpacity , StyleSheet} from 'react-native';
import searchicon from '../img/searchicon.png';
import homeicon from '../img/homeicon.png';
import libraryicon from '../img/libraryicon.png';

const Bottomnav = ({ navigation }) => {

  const handleSearchPress = () => {
   
  };

  const handleHomePress = () => {
    navigation.navigate('Homescreen');
  };

  const handleLibraryPress = () => {
    navigation.navigate('Library');
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
      position: 'absolute',  
      top:700,
      bottom: 0,           
      left: 0,             
      right: 0,            
      backgroundColor: 'white', 
      padding: 2, 
      borderTopWidth: 2,   
      borderTopColor: '#98979F'            
    },
    homeicon: {
      width: 25,  
      height: 25, 
    },
    icon: {
        width: 35,  
        height: 35, 
      },
    homeButton: {
        backgroundColor: '#404B7C',
        padding: 15,            
        borderRadius: 50,        
        justifyContent: 'center', 
        alignItems: 'center',    
        width: 50,              
        height: 50,              
      },
      iconButton: {
        padding: 15,             
        borderRadius: 50,       
        justifyContent: 'center', 
        alignItems: 'center',    
        width: 50,              
        height: 50,             
      },
    
  });

export default Bottomnav;