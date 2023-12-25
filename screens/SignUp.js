import * as React from "react";
import {View,ScrollView,Text,TextInput,KeyboardAvoidingView,Platform,StyleSheet} from "react-native";
import Button from "../components/Button";

const SignUp = ({navigation}) => {
    const [fullName, onChangeFullName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [RePassword, onChangeReEnterPassword] = React.useState('');

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
       > 

            <ScrollView keyboardDismissMode="on-drag"> 
                <Text style={styles.heading}>Let's Get Started !</Text>        
                <TextInput
                    style={styles.input}
                    value={fullName}
                    onChangeText={onChangeFullName}
                    placeholder="Enter your full name"
                    placeholderTextColor={'black'}
                    keyboardType="default"
                />
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
                    value={number}
                    onChangeText={onChangeNumber}
                    placeholder="Enter number"
                    placeholderTextColor={'black'}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="Enter password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    value={RePassword}
                    onChangeText={onChangeReEnterPassword}
                    placeholder="Re enter password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                />
            </ScrollView>
            <View style={styles.button}>
                <Button title = "SIGN UP" navigation={navigation}/>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
    },
    heading:{
        fontSize:30,
        paddingTop:50,
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
    },
    button:{
        flex:1,
        alignSelf:'center',
        position:'absolute',
        bottom:140,
    }
  });

export default SignUp;