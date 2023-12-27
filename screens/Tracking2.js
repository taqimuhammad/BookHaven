import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const Tracking2 = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("Homescreen");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tracking</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Order # abc123</Text>
                <Text style={styles.text}>Status: Not Started</Text>
                <TouchableOpacity style={styles.order}> 
                    <Text style={styles.edittext}>View Order Details</Text>
                    <AntDesign name="right" size={16} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Tracking2;

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
    card:{
        marginTop:50,
        height:200,
        width:300,
        borderRadius:20,
        borderWidth:1,
    },
    text:{
        fontSize:20,
        marginTop:20,
        marginLeft:20,
    },
    btext:{
        position:'absolute',
        fontSize:20,
        margin:20,
        bottom:10,
    },
    order:{
        position:'absolute',
        bottom:10,
        right:10,
        height:30,
        width:200,
        borderRadius:20,
        borderWidth:1,
        borderColor:'lightgrey'
    },
    edittext:{
        fontSize:20,
        textAlign:'center',
        textAlignVertical:'center',
        margin:5,
    },
    icon:{
        position:'absolute',
        right:5,
        bottom:5,
    }

});