import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeleteButton from '../components/DeleteButton';

const DeleteAccount = ({ navigation }) => {
    const handleBack = () => {
        navigation.navigate("Homescreen");
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
        <Text style={styles.text} >Are you sure you wish to proceed? {'\n'}{'\n'} 
        Once your account is terminated,{'\n'}     all your account data will be {'\n'}          permanently deleted.</Text>

      </View>
      <DeleteButton title="Proceed" />
    </View>
  );
}

export default DeleteAccount;

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
        fontSize: 32,
        paddingTop: 40,
        margin: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
      },
      insideview:{
        marginTop:150,
        height:150,
        width:300,
        backgroundColor:'#FAE0E0',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#F30E0E',
      },
      text: {
        alignSelf: 'center',
        fontSize: 19,
        marginTop: 20,
      },
});