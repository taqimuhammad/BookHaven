import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Chat = ({ navigation }) =>
 {
  

      const handlenewmessage = () => {
        navigation.navigate("NewMessage");
      };
  
return(
<View style={styles.container}>

      
      
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
  
    
    // Add more styles for other components on the home page if needed
  });


export default Chat;