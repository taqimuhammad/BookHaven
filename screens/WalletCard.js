import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const WalletCard = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("Homescreen");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>E- Wallet Card</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>XYZ Card</Text>
                <Text style={styles.btext}>Balance: 1234.5</Text>
                <TouchableOpacity style={styles.edit}> 
                    <Text style={styles.edittext}>Edit</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default WalletCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
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
    card:{
        marginTop:50,
        height:200,
        width:300,
        borderRadius:20,
        borderWidth:2,
    },
    text:{
        fontSize:20,
        margin:20,
    },
    btext:{
        position:'absolute',
        fontSize:20,
        margin:20,
        bottom:10,
    },
    edit:{
        position:'absolute',
        right:10,
        margin:15,
        height:30,
        width:70,
        borderRadius:20,
        borderWidth:1,
        borderColor:'lightgrey'
    },
    edittext:{
        fontSize:17,
        textAlign:'center',
        textAlignVertical:'center',
        margin:5,
        color:'lightgrey'
    }

});