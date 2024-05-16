import { ActivityIndicator, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { collection, onSnapshot, getDocs,query, where, } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { useEffect, useState } from 'react';

const Library = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const getData = async () => {
  //   const q = query(collection(db, "Books"), where("UserId", "==", auth.currentUser.uid));
  //   const querySnapshot = await getDocs(q);
  //   const updatedData = querySnapshot.docs.map((book) => ({
  //     id: book.id,
  //     data: book.data(),
  //   }));
  //   setData(updatedData);
  //   setLoading(false);
  // };

  useEffect(() => {
    const q = query(collection(db, "Books"), where("UserId", "==", auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
    console.log("Data of Library:", data); // Log data whenever it changes
  }, [data]);


  const handleaddbook = () => {
    navigation.navigate("AddBook");
  };

  return (
    <View style={styles.container}>
      {loading ? ( // Show activity indicator if loading is true
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#404B7C" />
        </View>
      ) : (

        <View style={styles.scrollview}>
          <ScrollView>
            {data.map((book) => (
              <Card key={book.id}
                id = {book.id}
                name={book.data.BookTitle}
                author={book.data.Author}
                img={book.data.Image}
                type={book.data.Type}
                status={book.data.Status}
              />
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.buttonview}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonc} onPress={handleaddbook} >
            <Text style={styles.textc}>Add Books</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollview: {
    flex: 3,
    alignSelf: 'center',
    paddingTop: 10,
  },
  textc: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },

  headingview: {
    flex: 0.5,
  },
  buttonc: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404B7C',
    height: 48,
    width: 248,
    borderRadius: 25,
  },
  heading: {
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 10,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonview: {
    flex: 0.5,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    top: 20,
  }
});

export default Library;

