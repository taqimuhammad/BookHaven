import * as React from "react";
import { View, ScrollView, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth,db } from "../firebaseConfig";

const SignUp = ({ navigation }) => {

    const [fullName, onChangeFullName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [RePassword, onChangeReEnterPassword] = React.useState('');


    const handleSignUpPress = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
               
                const user = userCredential.user;
                console.log(user.email)
                
                
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
         navigation.navigate('UserDetail');
        saveData();
    };

    const saveData = async () =>{
        try {
            const docRef = await addDoc(collection(db, "Users"), {
              email: email,
              password: password,
              fullname: fullName,
              number: number,
              repassword: RePassword,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const handlelogin = () => {
        navigation.navigate('Login');
    };


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.kbview}
            >
                <ScrollView keyboardDismissMode="on-drag">
                    <Text style={styles.heading}>Let's Get Started !</Text>
                    <TextInput
                        style={styles.input}
                        value={fullName}
                        onChangeText={(text) => {onChangeFullName(text)}}
                        placeholder="Enter your full name"
                        placeholderTextColor={'black'}
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => {onChangeEmail(text)}}
                        placeholder="Enter your email"
                        placeholderTextColor={'black'}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        value={number}
                        onChangeText={(text) => {onChangeNumber(text)}}
                        placeholder="Enter number"
                        placeholderTextColor={'black'}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => {onChangePassword(text)}}
                        placeholder="Enter password"
                        placeholderTextColor={'black'}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        value={RePassword}
                        onChangeText={(text) => {onChangeReEnterPassword(text)}}
                        placeholder="Re enter password"
                        placeholderTextColor={'black'}
                        secureTextEntry={true}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.bottomview}>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonc} onPress={handleSignUpPress} >
                        <Text style={styles.textc}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.text}>
                    <TouchableOpacity onPress={handlelogin}>
                        <Text style={styles.textw}>Already have an Account?
                            <Text style={styles.log}>Log In</Text></Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.or}>
                    <Text style={styles.ortext}>{'OR'}</Text>
                </View>

                <View style={styles.img}>
                    <TouchableOpacity>
                        <Image source={require('../img/f.png')} style={styles.img1} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../img/gg.png')} style={styles.img2} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    kbview: {
        flex: 2,
        alignSelf: 'center',
    },
    bottomview: {
        flex: 1,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 30,
        paddingTop: 50,
        margin: 10,
        fontWeight: 'bold',
    },
    buttonc: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#404B7C',
        height: 48,
        width: 248,
        borderRadius: 25,
        marginBottom: 5,
    },
    textc: {
        fontSize: 22,
        color: 'white',
        fontWeight: '500',
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
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 110,
        height: 30,
        width: 250,
        paddingBottom: 7,
    },
    log: {
        fontWeight: 'bold',
        color: '#404B7C'
    },
    textw: {
        fontSize: 17,
    },
    or: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 75,
        height: 25,
        width: 25,
    },
    ortext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#404B7C',
    },
    img: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 6,
        height: 50,
        width: 105,
    },
    img1: {
        height: 40,
        width: 40,
    },
    img2: {
        height: 40,
        width: 40,
    },

});

export default SignUp;