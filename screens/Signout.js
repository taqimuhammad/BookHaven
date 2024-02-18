import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Signout = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Homescreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signout</Text>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
        </TouchableOpacity>
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
    top: 50,
    left: 20,
  },

  title: {
    fontSize: 30,
    paddingTop: 40,
    margin: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },

});


export default Signout;