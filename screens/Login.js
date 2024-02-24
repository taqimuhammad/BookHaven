import * as React from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform, TextInput, StyleSheet, Text,TouchableOpacity } from "react-native";


const Login = ({ navigation }) => {

    const handlesignin= () => {
        navigation.navigate('SignUp'); 
      };
    const handleloginPress = () => {
        navigation.navigate('Homescreen'); 
      };
      


    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.sc}>
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
            <TouchableOpacity style={styles.buttonc} onPress={handleloginPress} >
                   <Text style={styles.textc}>Login</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <TouchableOpacity  onPress={handlesignin}>
                    <Text style={styles.textw}>Don't have an Account ? <Text style={styles.sign}>         Sign Up</Text></Text>
                </TouchableOpacity> 
            </View>
        </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    sc: {
        top:250,
        flex: 0.2,
        alignSelf: 'center',
        backgroundColor:'white',
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
    button: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: -100,
    },
    text:{
        alignSelf: 'center',
        justifyContent:'center',
        position:'absolute',
        bottom:-144,
        height:45,
        width:250,
        
    },
    sign:{
        fontWeight:'bold',
        color:'#404B7C',
        
    },
    textw:{
        
        fontSize:17,
    },
});

export default Login;