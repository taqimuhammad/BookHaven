import * as React from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import MultiSelect from '../components/MultiSelect';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const UserDetail = ({ navigation }) => {
    const [cnic, onChangeCnic] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    // const [bio, onChangeBio] = React.useState('');

    const handlePress = () => {
        saveData();
        navigation.navigate('Homescreen');
    };

    const saveData = async () =>{
        try {
            const docRef = await addDoc(collection(db, "Users"), {
              cnic: cnic,
              address: address,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }

    return (
        <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.sc}>
            <View keyboardDismissMode="on-drag">
                <Text style={styles.heading}>Enter your Details</Text>
                <TextInput
                    style={styles.input}
                    value={cnic}
                    onChangeText={(text) => {onChangeCnic(text)}}
                    placeholder="Enter your cnic number"
                    placeholderTextColor={'black'}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={(text) => {onChangeAddress(text)}}
                    placeholder="Enter your address"
                    placeholderTextColor={'black'}
                    keyboardType="default"
                />
                {/* <TextInput
                    style={styles.input}
                    value={bio}
                    onChangeText={onChangeBio}
                    placeholder="Add your bio"
                    placeholderTextColor={'black'}
                    keyboardType="default"
                /> */}
                <MultiSelect />
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonc} onPress={handlePress} >
                    <Text style={styles.textc}>Done</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    sc: {
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
        bottom: 10,
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
});

export default UserDetail;
