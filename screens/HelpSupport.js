import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const HelpSupport = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("Settings");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Help & Support</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.card}>
                <Text style={styles.texthead}>Help</Text>
                <Text style={styles.textin}>Sed ut perspiciatis unde omnis iste natus error 
                    sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem {'\n'}
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                    sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    ui dolorem eum fugiat quo voluptas nulla pariatur</Text>
                    <Text style={styles.texthead}>Support</Text>
                <Text style={styles.textin}>
                    For Support you can contact us at our emails:{'\n'}k201071@nu.ed.pk,{'\n'}k200411@bu.edu.pk,{'\n'}k201865@nu.edu.pk
                    {'\n'}
                    Sumquam eius modi 
                    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    ui dolorem eum fugiat quo voluptas nulla pariatur</Text>
            </ScrollView>
            <View style={styles.view}>

            </View>
        </View>
    );
}

export default HelpSupport;

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
    card: {
        flex: 1,
        marginTop: 20,
        height: 200,
        width: 320,
    },
    view: {
        flex: 0.1,
    },
    texthead: {
        marginBottom:10,
        color: '#404B7C',
        fontSize: 25,
        fontWeight: '500',
    },
    textin:{
        fontSize:16,    
        marginBottom:10,
    },
});