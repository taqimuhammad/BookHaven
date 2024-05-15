import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import img1 from '../img/img4.png';

const Order = ({ route, navigation }) => {
  const { book } = route.params;
  const [selfPickup, setSelfPickup] = useState(false);
  const [delivery, setDelivery] = useState(false);

  const handlePress = () => {
    if (selfPickup && !delivery) {
      Alert.alert(
        "Self Pickup",
        "Message with book owner to decide Pickup location",
        [
          { text: "OK", onPress: () => navigation.navigate('BookHaven') }
        ]
      );
    } else if (delivery && !selfPickup) {
      Alert.alert(
        "Delivery",
        "200Rs will be charged for Delivery",
        [
          { text: "OK", onPress: () => navigation.navigate('Payment') }
        ]
      );
    } else {
      Alert.alert(
        "Selection Required",
        "Please select either Self Pickup or Delivery"
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Order #</Text>
        <Text style={styles.ttext}> hrs ago</Text>
        <Text style={styles.btext}>Your request for the following order has been accepted</Text>

        <View style={styles.detailview}>
          <View>
            <Image
              source={img1}
              style={{ margin: 10, width: 100, height: 150 }}
            />
          </View>
          <View style={styles.bookinfo}>
            <Text style={styles.ftext}>Title: {book.title}</Text>
            <Text style={styles.ftext}>Author: {book.author}</Text>
            <Text style={styles.ftext}>Price: {book.price}</Text>
          </View>
        </View>
        <Text style={styles.ctext}>Select one: </Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            isChecked={selfPickup}
            onClick={() => setSelfPickup(!selfPickup)}
          />
          <Text style={styles.checkboxText}>Self Pickup</Text>
          <CheckBox
            isChecked={delivery}
            onClick={() => setDelivery(!delivery)}
          />
          <Text style={styles.checkboxText}>Delivery</Text>
        </View>
        <Text style={styles.dtext}>Total: {book.price}</Text>

        <View>
          <TouchableOpacity style={styles.buttonc} onPress={handlePress}>
            <Text style={styles.buttontext}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 340,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    backgroundColor: '#FFF',
  },
  detailview: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#C1BADC",
    height: 170,
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
    padding: 10,
  },
  bookinfo: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  ttext: {
    alignSelf: 'flex-end',
  },
  btext: {
    fontSize: 18,
    marginBottom: 10,
  },
  ctext: {
    fontSize: 18,
    marginBottom: 10,
  },
  dtext: {
    fontSize: 20,
    marginTop: 20,
  },
  ftext: {
    fontSize: 15,
  },
  buttontext: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  buttonc: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404B7C',
    height: 48,
    borderRadius: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
