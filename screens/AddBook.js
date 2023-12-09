import * as React from "react";
import {View,ScrollView,Text,TextInput,KeyboardAvoidingView,Platform,StyleSheet} from "react-native";
import Button from "../components/Button";

const AddBook = () => {

  const [bookTitle,onChangeBookTitle] = React.useState('');
  const [authorName,onChangeAuthorName] = React.useState('');

  return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container} > 

          <ScrollView keyboardDismissMode="on-drag"> 
              <Text style={styles.heading}>Let's Get Started !</Text>        
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
              <Text>Select Status</Text>
              <Text>Select Type</Text>
              <Text>Add Book Image Box</Text>
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
      bottom:190,
  }
});

export default AddBook;