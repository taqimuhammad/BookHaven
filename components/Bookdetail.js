import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Bookdetail = ({ route, navigation }) => {
  const { book } = route.params;

  const msgiconbar = () => {
    navigation.navigate("NewMessage");
  };

  const handleSubmit = () => {
    navigation.navigate("Order", { book });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.msgContainer}>
        <TouchableOpacity onPress={msgiconbar}>
          <Icon name="message" size={34} color="rgba(64, 75, 124, 1)" />
          <Text>Message</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: book.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.type}>For {book.type} :</Text>
        <Text style={styles.title}>Title: {book.title}</Text>
        <Text style={styles.author}>Author: {book.author}</Text>
        <Text style={styles.price}>Price: {book.price}</Text>
        <Text style={styles.uploadedBy}>Uploaded by: {book.uploadedby}</Text>
        <Text style={styles.chattext}>Chat with Owner:</Text>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
          <Text style={styles.Ordertext}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    marginTop: 50,
    width: '100%',
    height: 250,
    resizeMode: "contain",
  },
  infoContainer: {
    alignItems: "baseline",
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: '#404B7C',
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 15,
  },
  msgContainer: {
    position: "absolute",
    top: 520,
    right: 100,
  },
  title: {
    left: 35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom: 8,
  },
  author: {
    left: 35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom: 8,
  },
  price: {
    left: 35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom: 8,
  },
  uploadedBy: {
    left: 35,
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom: 8,
  },
  chattext: {
    left: 22,
    fontSize: 20,
    fontWeight: "normal",
    padding: 12,
  },
  Ordertext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  type: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: 'bold',
    color: '#404B7C',
    margin: 20,
    textTransform: 'uppercase',
    padding: 6,
  },
});

export default Bookdetail;
