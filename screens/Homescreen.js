import React, { useState } from 'react'; 
import { TouchableOpacity, ScrollView} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/searchbar';
import { BookContainer, Bookinfo } from '../components/BookContainer';


const HomePage = ({ navigation }) => {

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

 

  return (
    <View >

        <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}/>

      <ScrollView style={styles.bookList}>
        {Bookinfo.map((book) => (
        <BookContainer key={book.id} {...book} />
        ))}
      </ScrollView>


  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position : "relative",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color for the home page
  },
 
  
  
  
  


  
});

export default HomePage;
