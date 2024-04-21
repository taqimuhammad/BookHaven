import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Wallet = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Home");
  };
  const handlewallet = () => {
    navigation.navigate("SetupWallet");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E- Wallet</Text>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>Your E-wallet will appear here</Text>
        <Image style={styles.image} source={require('../img/wallet.png')} />
        <Text style={styles.btext}>Setup E-wallet now and make {'\n'} online payments with ease.</Text>
        <View style={styles.button}>
        
       <TouchableOpacity style={styles.buttonc} onPress={handlewallet} >
                   <Text style={styles.textc}>Setup E-Wallet</Text>
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
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 50,
  },
  image: {
    marginTop: 50,
    resizeMode: 'contain',
    height: 200,
  },
  btext: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
  },
  button: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -110,
  }
});


export default Wallet;