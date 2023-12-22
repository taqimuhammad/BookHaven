import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import Tag from './Tag';

const Card = ({name,author,img,text,color,text2,color2}) => {
    return (
        <View style={styles.card}>
            <Image source={img} style={styles.image} />
            <View>
                <Text style={styles.title}>{ name }</Text>
                <Text style={styles.author}>{ author }</Text>
                <View style={styles.tag}>
                    <Tag text={text} color={color} />
                    <Tag text={text2} color={color2} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 350,
        height: 155,
        borderRadius: 10,
        backgroundColor: '#f3efff',
        marginBottom: 30,
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 10,
        width: 80,
        height: 120,
        backgroundColor: 'blue',
    },
    title: {
        paddingTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    author: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 12,
    },
    tag:{
        width:260,
        flexDirection:'row',
        alignContent:'space-between',
        marginTop:45,
        marginLeft:5,
    }    
});

export default Card;
