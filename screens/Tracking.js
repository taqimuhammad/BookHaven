import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tracking = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Homescreen");
  };
  const handletracking = () => {
    navigation.navigate("Tracking2");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracking</Text>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>You have no orders currently on the way</Text>
        <Image style={styles.image} source={require('../img/tracking.png')} />
        <Text style={styles.btext}>Have your orders delivered to {'\n'}  
                  your doorsteps!</Text>
        <View style={styles.button}>
        <TouchableOpacity style={styles.buttonc} onPress={handletracking} >
        <Text style={styles.textc}>Track Order</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  title: {
    fontSize: 30,
    paddingTop: 40,
    margin: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -110,
  },
  buttonc:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#404B7C',
    height:48,
    width:248,
    borderRadius:25,
  },
  textc:{
    fontSize:22,
    color:'white',
    fontWeight:'500',
  },
  text: {
    color:'grey',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 50,
  },
  image: {
    marginTop: 50,
    marginLeft:25,
    resizeMode: 'contain',
    height: 200,
  },
  btext: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
  },
});


export default Tracking;