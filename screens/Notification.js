import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Bottomnav from '../components/Bottomnav';

const Notification = ({ navigation }) =>
 {
    const handleBack = () => {
        navigation.navigate("Homescreen");
      };
  
return(
<View style={styles.container}>
      <View style={styles.titlec}>
      <Text style={styles.title}>Notification</Text> 
      </View>
      <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
          </TouchableOpacity>
        </View>
        <Bottomnav navigation={navigation} />

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