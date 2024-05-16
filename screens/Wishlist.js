import React, { useState ,useEffect} from 'react';
import { View, TextInput, Text, Button, StyleSheet, } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db, storage, auth } from "../firebaseConfig";
import { FontAwesome} from '@expo/vector-icons';

const Wishlist = ({ navigation }) => {

  const [bookID, setbookID] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookType, setBookType] = useState(null);
  const [selected, setSelected] = React.useState('');

  const data = [
    { key: '1', value: 'Buy' },
    { key: '2', value: 'Lend' },
    { key: '3', value: 'Exchange' },
    { key: '4', value: 'Borrow' },
    { key: '5', value: 'Rent' },
  ]


  const handleSubmit = () => {
    updateid();
    navigation.navigate("BookHaven");
    //  console.log(bookTitle, authorName, bookType, data);
  };

  const saveData = async () => {
    try {
      const docRef = await addDoc(collection(db, "Wishlist"), {
        DocId: bookID,
        BookTitle: bookTitle,
        Author: authorName,
        Genre: bookType,
        Type: selected,
      });
      console.log("Wishlist Document written with ID: ", docRef.id);
      setbookID(docRef.id);
      console.log('Book Data added to wishlist');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    if (bookType != null) {
      saveData();
    }
  }, [bookType]);

  const updateid = async () => {
    const docRef = doc(db, "Wishlist", bookID);
    await updateDoc(docRef, {
      DocId: bookID,
    })
      .then(() => {
        alert("Book Added to Wishlist");
      })
  }


  return (
    <View style={styles.container}>
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
      <View style={styles.selectlist1}>
        <SelectList
          save='value'
          setSelected={setSelected}
          data={data}
          search={false}
          boxStyles={{ borderColor: 'black' }}
              inputStyles={{ fontSize: 20 }}
              dropdownStyles={{ borderColor: 'black' }}
              dropdownTextStyles={{ fontSize: 18 }}
          defaultOption={{ value: 'Select Status' }}
          arrowicon={<FontAwesome name="angle-down" size={22} color="black" />}   //default selected option
        />
      </View>

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
    flex: 1,
    position: "absolute",
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 149,

  },
  selectlist1: {
    width: 300,
    alignSelf: 'center',
    paddingBottom: 10,
  },


  input: {

    bottom: 30,
    fontSize: 20,
    height: 40,
    width: 300,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: 'black',

    // paddingTop:4 ,
  },



  buttonContainer: {
    position: 'absolute',
    width: '100%',
    top: 100,
    alignSelf: 'center', // Center the button horizontally
    backgroundColor: '#404B7C', // The color you provided
    paddingVertical: 12, // Can be adjusted for height
    borderRadius: 30,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  }
});


export default Wishlist;