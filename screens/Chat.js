import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Chat = ({ navigation }) =>
 {
    const handleBack = () => {
        navigation.navigate("Homescreen");
      };

      const handlenewmessage = () => {
        navigation.navigate("NewMessage");
      };
  
return(
<View style={styles.container}>

      
      <Text style={styles.title}>Chat</Text> 

      <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handlenewmessage}>
            <Text>Goto New Message</Text>
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
      backgroundColor: '#FFFFFF', // Set the background color for the home page
    },
  
    backButtonContainer: {
        position: "absolute",
        top: 34,
        left: 20,
    },

    title: {
      fontSize: 34,
      color: 'black',
      fontWeight: 'bold',
      position: 'absolute',
      top: 34,
    },
    // Add more styles for other components on the home page if needed
  });


export default Chat;