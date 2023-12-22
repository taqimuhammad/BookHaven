import * as React from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform, TextInput, StyleSheet, Text } from "react-native";
import Button from "../components/Button";

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <ScrollView keyboardDismissMode="on-drag">
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Enter your email"
                    placeholderTextColor={'black'}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="Enter password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                />
            </ScrollView>
            <View style={styles.button}>
                <Button title="LOG IN" navigation={navigation} />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        top:250,
        flex: 0.2,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 30,
        margin: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 20,
        height: 50,
        width: 300,
        margin: 10,
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: -100,
    }
});

export default Login;