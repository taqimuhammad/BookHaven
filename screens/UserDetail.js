import * as React from 'react';
import {View,StyleSheet,Text,TextInput,ScrollView,KeyboardAvoidingView} from 'react-native';
import Button from '../components/Button';
import MultiSelect from '../components/MultiSelect';

const UserDetail = () => {
    const [cnic, onChangeCnic] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [bio, onChangeBio] = React.useState('');

    return (
        <KeyboardAvoidingView 
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}> 
        <View keyboardDismissMode="on-drag"> 
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
              <Button title = "Done"/>
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
        bottom:10,
    },
});

export default UserDetail;
