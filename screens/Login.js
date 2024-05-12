import { useState, useEffect } from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                navigation.replace('Homescreen');
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
        return unsubscribe
    }, [])

    const handlesignin = () => {
        navigation.navigate('SignUp');
    };

    const handleforgotpassword = () => {
        if (email != null) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    // Password reset email sent!
                    // ..
                    alert("Password reset email has been sent successfully");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        else {
            alert("Please enter a valid email");
        }
    };

    const handleloginPress = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("User Logged in Sucessfully");
                console.log('Logged in with:', user.email);
                navigation.replace('Homescreen');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

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
                    <TouchableOpacity onPress={handlesignin}>
                        <Text style={styles.textw}>Don't have an account ? <Text style={styles.sign}>            Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textff}>
                    <TouchableOpacity onPress={handleforgotpassword} >
                        <Text style={styles.textf}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    sc: {
        top: 250,
        flex: 0.2,
        alignSelf: 'center',
        backgroundColor: 'white',
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
    buttonc: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#404B7C',
        height: 48,
        width: 248,
        borderRadius: 25,
    },
    textc: {
        fontSize: 22,
        color: 'white',
        fontWeight: '500',
    },
    button: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: -100,
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -140,
        height: 45,
        width: 260,
    },
    sign: {
        fontWeight: 'bold',
        color: '#404B7C',
    },
    textw: {
        fontSize: 15,
    },
    textf: {
        fontSize: 15,
    },
    textff: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -160,
        height: 45,
        width: 260,
    }
});

export default Login;