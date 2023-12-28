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
       
      //  console.log(bookTitle, authorName, bookType, data);
      };
      
    
  
return(
<View style={styles.container}>

      
      
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
        placeholder="Enter Book Genre"
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
        margin:1,
        width:300,
        height:50,         
    
    
    
    }}     
    defaultOption={{  value:'Select Status'  }}   //default selected option
    />

      <View >
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.buttonContainer}> 
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
</View>

);
};
const styles = StyleSheet.create({
    container: {
      position:"absolute",
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:199,
      
    },
  
    backButtonContainer: {
        position: 'absolute',
        top: 34,
        left: 15,
    },

    title: {
      fontSize: 34,
      color: 'black',
      fontWeight: 'bold',
      position: 'absolute',
      top: 34,
      left:120,
    },
    input: {

      bottom:20,
      fontSize:20,
      height:40,
      width:300,
      margin: 10,
      borderBottomWidth:1,
      borderColor: 'black',
    
      // paddingTop:4 ,
    },
    

    
    buttonContainer: {
      position: 'absolute',
      width: '64%',
      top: 60,
      alignSelf: 'center', // Center the button horizontally
      backgroundColor: '#404B7C', // The color you provided
      paddingVertical: 12, // Can be adjusted for height
      borderRadius: 30, // Adjust for rounded corners
      
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    }
 });


export default Wishlist;