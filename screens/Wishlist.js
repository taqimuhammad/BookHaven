import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Wishlist = ({ navigation }) =>
 {  
  
    const [bookTitle, setBookTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [bookType, setBookType] = useState('');
    const [selected, setSelected] = React.useState('');
      
    const data = [
      {key:'1', value:'Buy'},
      {key:'2', value:'Lend'},
      {key:'3', value:'Exchange'},
      {key:'4', value:'Borrow'},
      {key:'5', value:'Rent'},
      ]

    const handleBack = () => {
        navigation.navigate("Homescreen");
      };
    const handleSubmit = () => {
       
        console.log(bookTitle, authorName, bookType, data);
      };
      
    
  
return(
<View style={styles.container}>

      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      
      <Text style={styles.title}>Wishlist</Text> 

      <View style={styles.backButtonContainer}>
     <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34}  />
      </TouchableOpacity>
      </View>

        <TextInput
        style={styles.input}
              value={bookTitle}
              onChangeText={setBookTitle}
              placeholder="Enter Book Title"
              placeholderTextColor={'black'}
              keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Author Name"
        placeholderTextColor={'black'}
        onChangeText={setAuthorName}
        keyboardType="default"
        value={authorName}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        keyboardType="default"
        placeholder="Enter Book Type"
        onChangeText={setBookType}
        value={bookType}
      />
      <SelectList 
      
      setSelected={setSelected} 
      data={data}   
      search={false} 
      boxStyles={{
        borderColor:'black',
        borderWidth:1, 
        margin:10,
        width:300,
        height:50,         
    
    
    
    }} //override default styles
      defaultOption={{  value:'Select Status' }}   //default selected option
    />

      <View >
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.buttonContainer}
        activeOpacity={0.7} >

           <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
    </View>
</View>

);
};
const styles = StyleSheet.create({
    container: {
      position:"relative",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    backButtonContainer: {
        position: 'absolute',
        top: 10,
        left: 15,
    },

    title: {
      fontSize: 34,
      color: 'black',
      fontWeight: 'bold',
      position: 'absolute',
      top: 4,
    },
    input: {

      top:-20,
      fontSize:20,
      height:50,
      width:300,
      margin: 10,
      borderBottomWidth:2,
      borderColor: 'black',
       padding: 10,
    },
    

    
    buttonContainer: {
      position: 'absolute',
      width: '64%',
      top: 60,
      alignSelf: 'center', // Center the button horizontally
      backgroundColor: '#404B7C', // The color you provided
      paddingVertical: 12, // Can be adjusted for height
      borderRadius: 30, // Adjust for rounded corners
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    }
 });


export default Wishlist;