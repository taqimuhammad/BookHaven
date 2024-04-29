import * as React from "react";
import {View,TouchableOpacity,Text,TextInput,KeyboardAvoidingView,Platform,StyleSheet} from "react-native";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import DropDownTwo from "../components/DropDownTwo";
import { AntDesign } from '@expo/vector-icons';

const AddBook = ({navigation}) => {
  const handleadd = () => {
    navigation.navigate("Library");
  };

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
          <TouchableOpacity style={styles.buttonc} onPress={handleadd} >
        <Text style={styles.textc}>Add</Text>
        </TouchableOpacity>
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
  buttonc:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#404B7C',
    height:48,
    width:248,
    borderRadius:25,
  },
  textc:{
    fontSize:22,
    color:'white',
    fontWeight:'500',
  },
  button:{
      flex:1,
      alignSelf:'center',
      position:'absolute',
      bottom:10,
  },
  box:{
    marginTop:20,
    height:200,
    width:250,
    borderRadius:10,
    alignContent:'center',
    alignSelf:'center',
    backgroundColor:'#f7f5ff',
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