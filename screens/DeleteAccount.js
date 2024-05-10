import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeleteAccount = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Settings");
  };
  const handled = () => {
    navigation.navigate("DeleteConfirmation");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.insideview}>
        <Text style={styles.text}>Are you sure you wish to proceed?{'\n'}{'\n'}
          Once your account is terminated all your account data will be permanently deleted.
        </Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonc} onPress={handled} >
          <Text style={styles.textc}>Proceed</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  title: {
    fontSize: 32,
    paddingTop: 40,
    margin: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  insideview: {
    position: 'absolute',
    top: 280,
    height: 160,
    width: 320,
    backgroundColor: '#FAE0E0',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F30E0E',
  },
  buttonc: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 48,
    width: 248,
    borderRadius: 25,
  },
  textc: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 90,
  },
  text: {
    alignSelf: 'center',
    fontSize: 19,
    marginTop: 20,
  },
});