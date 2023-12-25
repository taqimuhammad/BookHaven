import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import Tag from './Tag';
import { Ionicons } from '@expo/vector-icons';

const Card = ({name,author,img,text,color,text2,color2}) => {
    return (
        <View style={styles.card}>
            <Image source={img} style={styles.image} />
            <View>
                <Text style={styles.title}>{ name }</Text>
                <TouchableOpacity style={styles.close}>
                    <Ionicons name="close" size={24} color="red" />
                </TouchableOpacity>
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
        height: 122,
        borderRadius: 10,
        backgroundColor: '#f7f5ff',
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
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    author: {
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 12,
    },
    tag:{
        width:250,
        flexDirection:'row',
        alignContent:'space-between',
        marginTop:58,
        marginLeft:15,
    },
    close:{
        position:'absolute',
        flexDirection:'row',
        marginLeft:242,
    }    
});

export default Card;
