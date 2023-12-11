import * as React from "react";
import {View,ScrollView,Text,TextInput,KeyboardAvoidingView,Platform,StyleSheet} from "react-native";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import DropDownTwo from "../components/DropDownTwo";

const AddBook = () => {

  const [bookTitle,onChangeBookTitle] = React.useState('');
  const [authorName,onChangeAuthorName] = React.useState('');

  return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container} > 

          <ScrollView keyboardDismissMode="on-drag"> 
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
              <View style={styles.box}>

              </View>
          </ScrollView>
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
    marginTop:20,
    height:200,
    width:280,
    borderRadius:10,
    borderWidth:1,
    borderColor:10,
    alignContent:'center',
    alignSelf:'center',
    backgroundColor:'#F3EFFF',
  }
});

export default AddBook;