import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeleteButton from '../components/DeleteButton';

const DeleteConfirmation = ({ navigation }) => {
    const handleBack = () => {
        navigation.navigate("Homescreen");
    };

    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delete Account</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.insideview}>
                <Text style={styles.text}>
                    Enter your password to confirm {'\n'}          account termination.
                </Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="   Enter password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                />
            </View>
            <DeleteButton title="Delete Account" />
        </View>
    );
}

export default DeleteConfirmation;

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
        fontSize: 32,
        paddingTop: 40,
        margin: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom:20,
    },
    input: {
        fontSize: 20,
        height: 50,
        width: 300,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#F30E0E',
    },
    insideview:{
        marginTop:120,
    }
});