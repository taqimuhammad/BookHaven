import React, { useState } from 'react'; // Corrected import
import { TouchableOpacity, ScrollView} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/Searchbar';
import Bottomnav from '../components/Bottomnav';
import { BookContainer, Bookinfo } from '../components/BookContainer';

const HomePage = ({ navigation }) => {

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  const notificationbar = () => {
    navigation.navigate('Notification');
  };
  
  const handlemenubar = () => {
    navigation.navigate('Menuscreen');


  };
  
  const messagebar = () => {
    navigation.navigate("msg_sc");
  };


  return (
    <View style={styles.container}>
        <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked} 
      />
      <Text style={styles.title}>Home</Text>

      <View style={styles.notificationContainer}>
        <TouchableOpacity onPress={notificationbar}>
          <Icon name="notifications" size={34} color="#404B7C" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.menubarContainer}>
        <TouchableOpacity onPress={handlemenubar}>
          <Icon name="menu" size={36} color="#404B7C" />
        </TouchableOpacity>
      </View>

      <View style={styles.messagebarContainer}>
        <TouchableOpacity onPress={messagebar}>
          <Icon name="messenger" size={30} color="#404B7C" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.bookList}>
        {Bookinfo.map((book) => (
          <BookContainer key={book.id} {...book} />
        ))}
      </ScrollView>

      <Bottomnav navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position : "relative",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set the background color for the home page
  },

  menubarContainer: {
    position:"relative",
    top:-50,
    right: 150,
  },
  
  messagebarContainer: {
    position:"relative",
    top:-80,
    left: 150,
  },
  
  notificationContainer: {
    top: -13,
    left: 115,
  },

  title: {
    fontSize: 34,
    color: 'black',
    fontWeight: 'bold',
    top: 24,
  },
  // Add more styles for other components on the home page if needed
});

export default HomePage;
