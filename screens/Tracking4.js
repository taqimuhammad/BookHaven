import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const Tracking4 = ({ navigation }) => {

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
                <Text style={styles.text}>Current Status: Not Started</Text>
                <Text style={styles.tnum}>Tracking Number: 472848</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.heading}>Order Details:</Text>
                <Text style={styles.insidetext}>Book # 123xyz 
                    {'\n'}{'\n'}
                    Book Title:{'\n'}
                    The Hunger Games{'\n'}{'\n'}
                    Purchased from user:{'\n'}
                    Smith John{'\n'}{'\n'}
                    Price:{'\n'}
                    PKR 350
                </Text>
            </View>

        </View>
    );
}

export default Tracking4;

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
        
        marginTop:25,
        height:170,
        width:300,
        borderRadius:20,
        borderWidth:1,
    },
    text:{
        fontSize:23,
        marginTop:18,
        marginLeft:20,
    },
    tnum:{
        fontSize:23,
        marginTop:18,
        marginLeft:20,
        textDecorationLine:'underline',
    },
    body:{
        height:300,
        width:300,
        marginTop:20,
    },
    heading:{
        fontSize:22,
        fontWeight:'500',
        margin:20,
    },
    insidetext:{
        fontSize:20,
        marginLeft:20,
    }
});