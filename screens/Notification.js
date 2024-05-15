import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Notification = ({ navigation }) =>
 {
    
  
return(
<View style={styles.container}>
      
        
</View>

);
};
const styles = StyleSheet.create({
    container: {
      position:"relative",
    flex: 1,   
      backgroundColor: '#FFFFFF', 
    },
  
    backButtonContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    
    titlec:{
      position:"absolute",
      top:30,
      left:100,
    },

    title: {
      fontSize: 34,
      color: 'black',
      fontWeight: 'bold',
  
    },
    
  });


export default Notification;