import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import SearchBar from '../components/SearchBar';
import { BookContainer } from '../components/BookContainer';

const HomePage = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "HomeBooks"), (querySnapshot) => {
      const updatedData = querySnapshot.docs.map((book) => ({
        id: book.id,
        data: book.data(),
      }));
      setData(updatedData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("Data of Homescreen:", data);
  }, [data]);

  // Filtered data based on the search phrase
  const filteredData = data.filter(book => 
    book.data.BookTitle.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <View style={styles.container}>
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
          {filteredData.map((book) => (
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
    backgroundColor: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bookList: {
    width: '100%',
  },
});

export default HomePage;
