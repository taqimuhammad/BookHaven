import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';

const Card = () => {
    return (
        <View style={styles.card}>
            <Image source={require('../img/img1.jpg')} style={styles.image}/>
            <View>
                <Text style={styles.title} >The Cursed Child</Text>
                <Text style={styles.author}>By: J.K Rowling</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        width:340,
        height:150,
        borderRadius:10,
        backgroundColor:'#f3efff',
        marginBottom:15,
    },
    image:{
        resizeMode:'cover',
        borderRadius:10,
        width:80,
        height:120,
        backgroundColor:'blue',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10,
    },
    author:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:10,
    }

});

export default Card;
