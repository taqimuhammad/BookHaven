import * as React from "react";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { SelectList } from "react-native-dropdown-select-list";
import { Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';


const data1 = [
  { key: '1', value: 'Available' },
  { key: '2', value: 'Unavailable' },
];

const data2 = [
  { key: '1', value: 'Borrow' },
  { key: '2', value: 'For Sale' },
  { key: '3', value: 'Exchange' },
  { key: '4', value: 'Donate' },
  { key: '5', value: 'For Rent' },
];

const AddBook = ({ navigation }) => {

  const [bookID, setbookID] = useState('');
  const [bookTitle, onChangeBookTitle] = useState('');
  const [authorName, onChangeAuthorName] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [picture, setPicture] = useState(null);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const uploadImage = async () => {

      // convert image into blob image
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError("Network Request Failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);

      });

      // set metadata of image
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg',
      };

      // upload image on storage
      const storageRef = ref(storage, 'BookImages/' + Date.now());
      const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setPicture(downloadURL);
          });
        }
      );

    };

    if (image != null) {
      uploadImage();
      setImage(null);
    }

  }, [image]);

  const saveData = async () => {
    try {
      const docRef = await addDoc(collection(db, "Books"), {
        BookId: bookID,
        BookTitle: bookTitle,
        Author: authorName,
        Status: selectedStatus,
        Type: selectedType,
        Image: picture,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const handleadd = () => {
    saveData();
    navigation.navigate("Library");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.sc} >

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
          {/* <DropDown />
              <DropDownTwo /> */}

          <View style={styles.selectlist1}>
            <SelectList
              data={data1}
              setSelected={(val) => setSelectedStatus(val)}
              boxStyles={{ borderColor: 'black' }}
              inputStyles={{ fontSize: 20 }}
              dropdownStyles={{ borderColor: 'black' }}
              dropdownTextStyles={{ fontSize: 18 }}
              placeholder='Select Status'
              arrowicon={<FontAwesome name="angle-down" size={22} color="black" />}
              searchicon={<EvilIcons name="search" size={24} color="black" />}
              closeicon={<Ionicons name="close-outline" size={24} color="black" />}
              save="value"
              search={false}
            />
          </View>

          <View style={styles.selectlist2}>
            <SelectList
              data={data2}
              setSelected={setSelectedType}
              boxStyles={{ borderColor: 'black' }}
              inputStyles={{ fontSize: 20 }}
              dropdownStyles={{ borderColor: 'black' }}
              dropdownTextStyles={{ fontSize: 18 }}
              placeholder='Select Type'
              arrowicon={<FontAwesome name="angle-down" size={22} color="black" />}
              searchicon={<EvilIcons name="search" size={24} color="black" />}
              closeicon={<Ionicons name="close-outline" size={24} color="black" />}
              save="value"
              search={false}
            />
          </View>


          <View style={styles.box}>
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.boxtext}>Add Book Image </Text>
              <AntDesign name="plus" size={50} style={styles.plus} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonc} onPress={handleadd} >
            <Text style={styles.textc}>Add</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sc: {
    flex: 1,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 30,
    paddingTop: 50,
    margin: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    height: 50,
    width: 300,
    margin: 10,
    borderBottomWidth: 1,
  },
  buttonc: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404B7C',
    height: 48,
    width: 248,
    borderRadius: 25,
  },
  textc: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
  box: {
    marginTop: 20,
    height: 200,
    width: 250,
    borderRadius: 10,
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#f7f5ff',
  },
  boxtext: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  plus: {
    color: '#404B7C',
    alignSelf: 'center',
    marginTop: 50,
  },
  selectlist1: {
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
  selectlist2: {
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
  },

});

export default AddBook;