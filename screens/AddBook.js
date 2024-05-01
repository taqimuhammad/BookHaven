import * as React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import DropDownTwo from "../components/DropDownTwo";
import { AntDesign } from '@expo/vector-icons';
import { SelectList } from "react-native-dropdown-select-list";
import { Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';

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
  

  const [bookTitle, onChangeBookTitle] = React.useState('');
  const [authorName, onChangeAuthorName] = React.useState('');
  const [selected1, setSelected1] = React.useState('');
  const [selected2, setSelected2] = React.useState('');


  const handleadd = () => {
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
              setSelected={(val) => setSelected1(val)}
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
              setSelected={setSelected2}
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
            <TouchableOpacity>
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