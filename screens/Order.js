import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'; // Import CheckBox from react-native-check-box
import img1 from '../img/img4.png';

const Order = ({ navigation }) => {
  const [selfPickup, setSelfPickup] = useState();
  const [delivery, setDelivery] = useState();

  const handleBack = () => {
    navigation.navigate("Home");
  };

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlec}>
        <Text style={styles.title}>Order</Text>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
        </TouchableOpacity>
      </View>
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
            <Text style={styles.ftext}>Title: </Text>
            <Text style={styles.ftext}>Author: </Text>
            <Text style={styles.ftext}>Price: </Text>
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
        <Text style={styles.dtext}>Total: </Text>

        <View>
          <TouchableOpacity style={styles.buttonc} onPress={handlePress} >
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
    position: "absolute",
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  card: {
    position: "absolute",
    marginTop: 100,
    left: 10,
    width: 340,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  detailview: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#C1BADC",
    height: 170,
    borderWidth: 0,
    borderColor: '#fff',
  },
  bookinfo: {
    position: "absolute",
    top: 20,
    left: 115,
    gap: 15,
  },
  text: {
    fontSize: 24,
    margin: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  ttext: {
    left: 275,
    top: -42,
  },
  btext: {
    top: -15,
    left: 10,
    fontSize: 18,
  },
  ctext: {
    top: 0,
    left: 10,
    fontSize: 18,
  },
  dtext: {
    marginTop: 20,
    left: 10,
    fontSize: 20,
  },
  ftext: {
    left: 10,
    fontSize: 15,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
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
    width: 248,
    left: 38,
    top: 80,
    borderRadius: 25,
  },
  titlec: {
    position: "absolute",
    top: 35,
    left: 120,
  },
  title: {
    fontSize: 34,
    color: 'black',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
