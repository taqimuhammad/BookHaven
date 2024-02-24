import { StyleSheet, Text, View, TouchableOpacity ,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';
import React from 'react';

const ReportProblem = ({ navigation }) => {

    const [title, onChangeTitle] = React.useState('');
    const [description, onChangeDescription] = React.useState('');

    const handleBack = () => {
        navigation.navigate("Settings");
    };

    const handlereport = () => {
        navigation.navigate("Homescreen");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report Problem</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Title</Text>
            <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={onChangeTitle}
                        placeholder="Enter title of your problem"
                        placeholderTextColor={'black'}
                        keyboardType="default"
                    />
            <Text style={styles.text}>Enter Description</Text>        
            <View style={styles.card}>
            <TextInput
                        style={styles.input2}
                        value={description}
                        onChangeText={onChangeDescription}
                        placeholder="Enter description"
                        placeholderTextColor={'black'}
                        keyboardType="default"
                    />
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonc} onPress={handlereport} >
                <Text style={styles.textc}>Report</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default ReportProblem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
    },

    backButtonContainer: {
        position: 'absolute',
        left: 20,
        top: 50,
    },
    title: {
        fontSize: 30,
        paddingTop: 40,
        margin: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
    },
    card:{
        marginTop:20,
        height:200,
        width:300,
        borderRadius:20,
        borderWidth:1,
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
    input: {
        fontSize: 20,
        height: 50,
        width: 300,
        margin: 10,
        marginBottom:20,
        borderBottomWidth:1,
    },
    input2: {
        fontSize: 20,
        height: 50,
        width: 300,
        marginLeft:20,
        marginBottom:20,
    },
    button: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 80,
    },
    text:{
        fontSize:25,
        fontWeight:'500',
        marginTop:20,
        marginLeft:40,
        alignSelf:'flex-start',
    },
});