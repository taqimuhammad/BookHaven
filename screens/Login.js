import * as React from "react";
import {View,KeyboardAvoidingView,Platform,TextInput,StyleSheet} from "react-native";

const Login = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:0.3,
        alignSelf:'center',
    },
    heading:{
        fontSize:30,
        margin:10,
        paddingBottom:5,
        fontWeight:'bold',
    },
    input: {
        fontSize:20,
        height:50,
        width:300,
        margin: 10,
        borderBottomWidth:1,
    }
  });

export default Login;