import * as React from 'react';
import {TouchableOpacity,StyleSheet,Text,TextInput,ScrollView,KeyboardAvoidingView} from 'react-native'

const UserDetail = () => {
    const [cnic, onChangeCnic] = React.useState('');
    const [address, onChangeAddress] = React.useState('');

    return (
        <KeyboardAvoidingView 
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container} > 

            <ScrollView keyboardDismissMode="on-drag"> 
                <Text style={styles.heading}>Enter your Details</Text>        
                <TextInput
                    style={styles.input}
                    value={cnic}
                    onChangeText={onChangeCnic}
                    placeholder="Enter your cnic number"
                    placeholderTextColor={'black'}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={onChangeAddress}
                    placeholder="Enter your address"
                    placeholderTextColor={'black'}
                    keyboardType="default"
                />
            </ScrollView>
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
    }
})

export default UserDetail;
