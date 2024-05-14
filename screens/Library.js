import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { useEffect, useState } from 'react';

const image = require('../img/img1.jpg');
const image2 = require('../img/img2.jpg');
const image3 = require('../img/img3.png');

const LibraryInfo = [
  {
    id: 1,
    name: "The Cursed Child",
    author: "By: J.K Rowling",
    img: image,
    type: "Exchange",
    color: "#404b7c",
    status: "Available",
    color2: "#3fd48d",
  },
  {
    id: 2,
    name: "The Great Gatsby",
    author: "By: F. Scott Fitzgerald",
    img: image2,
    type: "For Sale",
    color: "#404b7c",
    status: "Unavailable",
    color2: "#d43f51",
  },
  {
    id: 3,
    name: "Matilda",
    author: "By: Roald Dahl",
    img: image3,
    type: "Borrow",
    color: "#404b7c",
    status: "Available",
    color2: "#3fd48d",
  },
  {
    id: 4,
    name: "Matilda",
    author: "By: Roald Dahl",
    img: image3,
    type: "Borrow",
    color: "#404b7c",
    status: "Available",
    color2: "#3fd48d",
  },
]
const Library = ({ navigation }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const ref = collection(db, "Books");
  //     onSnapshot(ref, (Books) =>
  //       setData(Books.docs.map((book) => ({
  //         id: book.id,
  //         data: book.data(),
  //       })))
  //     )
  //   }
  //   getData();
  // });
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "Books"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }
    getData();
  })

  const handleaddbook = () => {
    navigation.navigate("AddBook");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.headingview}>
        <Text style={styles.heading}>My Library</Text>
      </View> */}
      <View style={styles.scrollview}>
        <ScrollView>
          {/* add data in place of libraryinfo for getting it from database
          // look for something to add color part all other are working */}
          {LibraryInfo.map((book) => (
            <Card key={book.id}
              // name={book.data.BookTitle}
              // author={book.data.Author}
              // img={book.data.Image}
              // type={book.data.Type}
              // status={book.data.Status}
              name={book.name}
              author={book.author}
              img={book.img}
              type={book.type}
              status={book.status}
            />
          ))}

        </ScrollView>
      </View>
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

