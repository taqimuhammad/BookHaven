import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Settings = ({ navigation }) =>
 {
    const handleBack = () => {
        navigation.navigate("Homescreen");
      };
  
return(
<View style={styles.container}>

      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Text style={styles.title}>Settings</Text> 

      <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
          </TouchableOpacity>
        </View>
</View>

);
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', 
    },
  
    backButtonContainer: {
        position: 'alignself',
        top: -330,
        right: 150,
    },

    title: {
      fontSize: 34,
      color: 'black',
      fontWeight: 'bold',
      position: 'absolute',
      top: 4,
    },
   
  });


export default Settings;


