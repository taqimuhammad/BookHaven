import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Faqs = ({ navigation }) => {
    const [opened,setOpened] = React.useState(false);

    const handleBack = () => {
        navigation.navigate("Homescreen");
    };

    const toggleAccordian = () => {

    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>
        <View style={styles.accordian}>
        <TouchableOpacity onPress={toggleAccordian}>
            <View style={styles.header}>
                <Text>title</Text>
                <AntDesign name={opened ? 'up' : 'down'}  size={24} color="black"/>
            </View>
        </TouchableOpacity>
        </View>    
    </View>
  )
}

export default Faqs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignSelf:'center',
    },
    accordian:{
        margin:10,
        padding:15,
        backgroundColor:'pink',
        borderRadius:6,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
});