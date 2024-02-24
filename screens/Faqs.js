import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as React from 'react';
import { Accordion } from 'react-native-animated-accordion';

const Faqs = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("Settings");
    };
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FAQs</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView contentContainerStyle={styles.mainContainer}>
                    <Accordion
                        headerText="Question 1"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>The users can pay throught the online systems or they can pay by meeting physcially</Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="Question 2"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>The users can pay throught the online systems or they can pay by meeting physcially</Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="Question 3"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                       <View style={{padding:10,paddingTop:5}}>
                            <Text style={{ fontSize:18 }}>The users can pay throught the online systems or they can pay by meeting physcially</Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="Question 4"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{padding:10,paddingTop:5}}>
                            <Text style={{ fontSize:18 }}>The users can pay throught the online systems or they can pay by meeting physcially</Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="Question 5"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{padding:10,paddingTop:5}}>
                            <Text style={{ fontSize:18 }}>The users can pay throught the online systems or they can pay by meeting physcially</Text>
                        </View>
                    </Accordion>
                </ScrollView>
            </View>

        </View>
    )
}

export default Faqs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        alignSelf: 'center',
    },
    mainContainer: {
        padding: 20,
        flexGrow: 1,
    },
});