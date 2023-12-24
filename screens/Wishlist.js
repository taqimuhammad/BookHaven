import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Wishlist = ({ navigation }) =>
 {  
  
    const [bookTitle, setBookTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [bookType, setBookType] = useState('');
    const [status, setStatus] = useState('Rent');

    const handleBack = () => {
        navigation.navigate("Homescreen");
      };
    const handleSubmit = () => {
       
        console.log(bookTitle, authorName, bookType, status);
      };
    
  
return(
<View style={styles.container}>

      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      
      <Text style={styles.title}>Wishlist</Text> 

      <View style={styles.backButtonContainer}>
     <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
      </TouchableOpacity>
      </View>

        <TextInput
        style={styles.input}
        placeholder="Enter Book Title"
        onChangeText={setBookTitle}
        value={bookTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Author Name"
        onChangeText={setAuthorName}
        value={authorName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Book Type"
        onChangeText={setBookType}
        value={bookType}
      />
      <Picker
      
        selectedValue={status}
        style={styles.picker}
        
        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
        
      >
      
        <Picker.Item label="Rent" value="rent" />
        <Picker.Item label="Buy" value="buy" />
        <Picker.Item label="Exchange" value="exchange" />
        <Picker.Item label="Lend" value="lend" />
      
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleSubmit} color="#007bff" />
      </View>
</View>

);
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20 // Set the background color for the home page
    },
  
    backButtonContainer: {
        position: 'absolute',
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
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '100%',
      marginBottom: 10,
      padding: 10,
    },
    picker: {
      height: 100,
      width: '30%',
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 0,
      
    },
    pickerItem: {
      color: 'black', // Set the color of the picker items
    },
    buttonContainer: {
      width: '100%',
      marginTop: 10,
    }
 });


export default Wishlist;