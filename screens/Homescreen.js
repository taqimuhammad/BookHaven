import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { collection, onSnapshot, getDocs, query, where, } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import SearchBar from '../components/SearchBar';
import { BookContainer } from '../components/BookContainer';


const HomePage = ({ navigation }) => {

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "HomeBooks"));
      const updatedData = querySnapshot.docs.map((book) => ({
        id: book.id,
        data: book.data(),
      }));
      setData(updatedData);
      setLoading(false);
    };
    getData();
  }, [data]);

  return (
    <View >

      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked} />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#404B7C" />
        </View>
      ) : (
        <ScrollView style={styles.bookList}>
          {data.map((book) => (
            <BookContainer key={book.id}
              title={book.data.BookTitle}
              author={book.data.Author}
              price={book.data.Price}
              uploadedby={book.data.UploadedBy}
              image={book.data.Image}
              type={book.data.Type}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color for the home page
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
