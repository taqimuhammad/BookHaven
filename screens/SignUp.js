import * as React from "react";
import { View, ScrollView, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet,Image, TouchableOpacity } from "react-native";
import Button from "../components/Button";

const SignUp = ({ navigation }) => {
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
                <Button title="SIGN UP" navigation={navigation} />
            </View>
            <View style={styles.text}>
                <TouchableOpacity activeOpacity={0.9}>
                    <Text style={styles.textw}>Already have an Account?           <Text style={styles.log}>Log In</Text></Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.or}>
                <Text style={styles.ortext}>OR</Text>
            </View>
            <View style={styles.img}>
                <TouchableOpacity>
                    <Image source={require('../img/f.png')} style={styles.img1} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../img/gg.png')} style={styles.img2} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 30,
        paddingTop: 50,
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
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 140,
    },
    text:{
        alignSelf: 'center',
        justifyContent:'center',
        position:'absolute',
        bottom: 110,
        height:30,
        width:250,
    },
    log:{
        fontWeight:'bold',
        color:'#404B7C'
    },
    textw:{
        fontSize:17,
    },
    or:{
        alignSelf: 'center',
        justifyContent:'center',
        position:'absolute',
        bottom: 75,
        height:25,
        width:25,
    },
    ortext:{
        fontSize:20,
    },
    img:{
        flexDirection:'row',
        alignSelf: 'center',
        justifyContent:'space-between',
        position:'absolute',
        bottom:6,
        height:50,
        width:105,
    },
    img1:{
        height:40,
        width:40,
    },
    img2:{
        height:40,
        width:40,
    },

});

export default SignUp;