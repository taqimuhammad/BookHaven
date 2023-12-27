import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Wallet = ({ navigation }) =>
 {
    const handleBack = () => {
        navigation.navigate("Homescreen");
      };
  
return(
<View style={styles.container}>

      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Text style={styles.title}>Menu</Text> 

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
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // Set the background color for the home page
    },
  
    backButtonContainer: {
        position: 'absolute',
        top: 12,
        left: 10,
    },

    title: {
      fontSize: 34,
      color: 'black',
      fontWeight: 'bold',
      position: 'absolute',
      top: 4,
      left:135
    },
    // Add more styles for other components on the home page if needed
  });


export default Wallet;