import * as React from "react";
import {View,TouchableOpacity,Text,TextInput,KeyboardAvoidingView,Platform,StyleSheet} from "react-native";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import DropDownTwo from "../components/DropDownTwo";
import { AntDesign } from '@expo/vector-icons';

const AddBook = () => {

  const [bookTitle,onChangeBookTitle] = React.useState('');
  const [authorName,onChangeAuthorName] = React.useState('');

  return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container} > 

          <View> 
              <Text style={styles.heading}>Add Book</Text>        
              <TextInput
                  style={styles.input}
                  value={bookTitle}
                  onChangeText={onChangeBookTitle}
                  placeholder="Enter Book Title"
                  placeholderTextColor={'black'}
                  keyboardType="default"
              />
              <TextInput
                  style={styles.input}
                  value={authorName}
                  onChangeText={onChangeAuthorName}
                  placeholder="Enter Author name"
                  placeholderTextColor={'black'}
                  keyboardType="email-address"
              />
              <DropDown />
              <DropDownTwo />
              <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.boxtext}>Add Book Image </Text>
                    <AntDesign name="plus" size={50} style={styles.plus}/>
                </View>
              </TouchableOpacity>
          </View>
          <View style={styles.button}>
              <Button title = "Add"/>
          </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignSelf:'center',
  },
  heading:{
      fontSize:30,
      paddingTop:50,
      margin:10,
      paddingBottom:5,
      fontWeight:'bold',
  },
  input: {
      fontSize:20,
      height:50,
      width:300,
      margin: 10,
      borderBottomWidth:1,
  },
  button:{
      flex:1,
      alignSelf:'center',
      position:'absolute',
      bottom:50,
  },
  box:{
    marginTop:30,
    height:220,
    width:250,
    borderRadius:10,
    alignContent:'center',
    alignSelf:'center',
    backgroundColor:'#F3EFFF',
  },
  boxtext:{
    fontSize:20,
    alignSelf:'center',
    marginTop:10,
  },
  plus:{
    color:'#404B7C',
    alignSelf:'center',
    marginTop:50,
  }
});

export default AddBook;