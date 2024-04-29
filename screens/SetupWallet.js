import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';

const SetupWallet = ({ navigation }) => {
    const [fullName, onChangeFullName] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [cvcNumber, onChangeCvcNumber] = React.useState('');
    const [expiryDate, onChangeExpiryDate] = React.useState('');
    const handleBack = () => {
        navigation.navigate("Home");
    };
    const handlewalletsetup = () => {
        navigation.navigate("WalletCard");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Set up E-Wallet</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>Enter Card Details Below !</Text>
            </View>
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
                </KeyboardAvoidingView>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonc} onPress={handlewalletsetup} >
                   <Text style={styles.textc}>Setup E-Wallet</Text>
                    </TouchableOpacity>
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
    heading: {
        fontSize: 30,
        paddingTop: 40,
        margin: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
    },
    backButtonContainer: {
        position: 'absolute',
        left: 20,
        top: 50,
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
        marginTop: 80,
    },
    button: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        bottom:50,
      }

});