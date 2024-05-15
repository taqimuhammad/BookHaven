import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';

const SetupWallet = ({ navigation }) => {
    const [fullName, onChangeFullName] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [cvcNumber, onChangeCvcNumber] = React.useState('');
    const [expiryDate, onChangeExpiryDate] = React.useState('');
    
    const handlewalletsetup = () => {
        navigation.navigate("BookHaven");
    };

    return (
        <View style={styles.container}>
           
            <View style={styles.body}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <TextInput
                        style={styles.input}
                        value={number}
                        onChangeText={onChangeNumber}
                        placeholder="Credit card number"
                        placeholderTextColor={'black'}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        value={fullName}
                        onChangeText={onChangeFullName}
                        placeholder="Card Holder"
                        placeholderTextColor={'black'}
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        value={expiryDate}
                        onChangeText={onChangeExpiryDate}
                        placeholder="Expiry Date"
                        placeholderTextColor={'black'}
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        value={cvcNumber}
                        onChangeText={onChangeCvcNumber}
                        placeholder="CVC number"
                        placeholderTextColor={'black'}
                        keyboardType="default"
                    />

            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonc} onPress={handlewalletsetup} >
                   <Text style={styles.textc}>Setup E-Wallet</Text>
                    </TouchableOpacity>
            </View>

                </KeyboardAvoidingView>
            
            </View>
            
        </View>
    )
}

export default SetupWallet;

const styles = StyleSheet.create({
    container: {
       
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
    },
    
    text: {
        alignSelf: 'center',
        fontSize: 22,
        marginTop: 50,
        marginLeft: 10,
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
    input: {
        fontSize: 20,
        height: 50,
        width: 300,
        margin: 10,
        borderBottomWidth: 1,
    },
    body: {
        paddingTop: 150,
       
    },
    button: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        top:380,
        

      }

});