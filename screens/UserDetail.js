import * as React from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const data = [
    { key: '1', value: 'Fiction' },
    { key: '2', value: 'Narrative' },
    { key: '3', value: 'Mystery' },
    { key: '4', value: 'Fantasy' },
    { key: '5', value: 'Novel' },
    { key: '6', value: 'Romance Novel' },
    { key: '7', value: 'Non-fiction' },
    { key: '8', value: 'Thriller' },
    { key: '9', value: 'Horror' },
    { key: '10', value: 'History' },
    { key: '11', value: 'Philosophy' },
    { key: '12', value: 'Satire' },
    { key: '13', value: 'Fairy Tale' },
    { key: '14', value: 'Adventure Fiction' },
    { key: '15', value: 'Autobiography' },
    { key: '16', value: 'Comedy' },
];

const UserDetail = ({ navigation }) => {
    const [cnic, onChangeCnic] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [selected, setSelected] = React.useState('');

    const handlePress = () => {
        saveData();
        navigation.navigate('Homescreen');
    };

    const saveData = async () => {
        try {
            const docRef = await addDoc(collection(db, "Users"), {
                cnic: cnic,
                address: address,
                selectedGenres:selected,
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
                        onChangeText={(text) => { onChangeCnic(text) }}
                        placeholder="Enter your cnic number"
                        placeholderTextColor={'black'}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        value={address}
                        onChangeText={(text) => { onChangeAddress(text) }}
                        placeholder="Enter your address"
                        placeholderTextColor={'black'}
                        keyboardType="default"
                    />
                    <View style={styles.multiselectlist}>
                        <MultipleSelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            label='Genres'
                            arrowicon={<FontAwesome name="angle-down" size={22} color="black" />}
                            searchicon={<EvilIcons name="search" size={24} color="black" />}
                            closeicon={<Ionicons name="close-outline" size={24} color="black" />}
                            save='value'
                            notFoundText='Does not exist'
                            labelStyles={{ fontSize: 20, fontWeight: 'normal' }}
                            badgeStyles={{ backgroundColor: '#404B7C' }}
                            badgeTextStyles={{ fontSize: 16 }}
                            searchPlaceholder='Search'
                            placeholder='Select Genres'
                            inputStyles={{ fontSize: 20 }}
                            boxStyles={{ borderColor: 'black' }}
                            dropdownStyles={{ borderColor: 'black' }}
                            dropdownTextStyles={{ fontSize: 16 }}
                            checkBoxStyles={{ borderColor: 'black', color: 'black' }}
                        />
                    </View>
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
        backgroundColor: 'white',
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
    multiselectlist:{
        width:300,
        height:55,
        alignSelf:'center',
        marginTop:10,
    }
});

export default UserDetail;
