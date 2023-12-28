import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Bookdetail = ({ route , navigation}) => {

  const handleBack = () => {
    navigation.navigate("Homescreen");
  };
  const msgiconbar = () => {
    navigation.navigate("");
  };
  // Destructure the book object passed through the route
  const { book } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Book Details</Text>
      <View style={styles.msgContainer}>
          <TouchableOpacity onPress={msgiconbar} >            
          <Icon name="message" left={10} top={6} size={34} color="rgba(64, 75, 124, 1)" />
          <Text>Message</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
          </TouchableOpacity>
        </View>
      <Image source={book.image} style={styles.image} />
      <View style={styles.infoContainer}>
      <Text style={styles.type}>For {book.type}</Text>
        <Text style={styles.title}>Title: {book.title}</Text>
        <Text style={styles.author}>Author: {book.author}</Text>
        <Text style={styles.price}>Price: {book.price}</Text>
        <Text style={styles.uploadedBy}>Uploaded by: {book.uploadedBy}</Text>
        <Text style={styles.chattext}>Message with {book.type}r Now:</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
  image: {
    marginTop:120,
    width: '100%',
    height: 250,
    resizeMode: "contain",
  },
  infoContainer: {
    alignItems: "baseline",
    padding: 0,
  },
  heading: {
    position: "absolute",
    top:33,
    left:88,
    fontSize: 34,
    fontWeight: "bold",
  },
  backButtonContainer: {

    position: "absolute",
    top: 40,
    left: 8,
},
msgContainer:{
  position: "absolute",
  bottom: 34,
  right: 40,
},
  title: {
    left:35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom:8,
  },
  author: {
    left:35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom:8,
  },
  price: {
    left:35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom:8,
  },
  chattext:{
    right:20,
    fontSize: 20,
    fontWeight: "normal",
    padding:55,
  

  },
  uploadedBy: {
    left:35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom:8,
  },
  type: {
    left:80,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#404B7C',
    margin: 20,
    textTransform: 'uppercase',
    padding:6,
  },
});

export default Bookdetail;
