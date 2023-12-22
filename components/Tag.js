import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

const Tag = ({ color, text }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight style={[styles.tag, { backgroundColor: color }]}>
                <Text style={styles.text}> {text} </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    tag: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        width: 106,
        borderRadius: 10,
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight:'600',
        textAlign:'center',
    }
});

export default Tag;

