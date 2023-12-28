import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const Tracking3 = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("Homescreen");
    };
    const handlet3 = () => {
        navigation.navigate("Tracking4");
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
                <View style={styles.order}>
                <View style={styles.button}>
                <TouchableOpacity style={styles.buttonc} onPress={handlet3} >
                <Text style={styles.textc}>Get Tracking No</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>

        </View>
    );
}

export default Tracking3;

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
      button: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        bottom: -110,
      },
      text: {
        color:'grey',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 50,
      },
    card:{
        marginTop:30,
        height:110,
        width:300,
        borderRadius:20,
        borderWidth:1,
    },
    text:{
        fontSize:23,
        marginTop:20,
        marginLeft:20,
    },
    body:{
        height:300,
        width:300,
        marginTop:30,
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