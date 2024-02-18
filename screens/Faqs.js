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
                    <Text style={{ color: '#000000', marginVertical: 20 }}>Light Theme</Text>
                    <Accordion
                        headerText="Light Theme"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{padding:10}}>
                            <Text style={{ color: '#000000' }}>Light Theme</Text>
                            <Text style={{ color: '#000000' }}>Light Theme</Text>
                            <Text style={{ color: '#000000' }}>Light Theme</Text>
                            <Text style={{ color: '#000000' }}>Light Theme</Text>
                            <Text style={{ color: '#000000' }}>Light Theme</Text>
                        </View>
                    </Accordion>

                    <Text style={{ color: '#000000', marginVertical: 20 }}>Dark Theme</Text>
                    <Accordion
                        bodyStyles={{
                            backgroundColor: 'black',
                        }}
                        headerText="Dark Theme"
                        headerStyles={{ paddingVertical: 15, backgroundColor: '#000000' }}
                        headerTextStyles={{ color: '#ffffff' }}
                        headerIconStyles={{ fontSize: 15 }}
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
                            <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
                            <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
                            <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
                            <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
                        </View>
                    </Accordion>

                    <Text style={{ color: '#000000', marginVertical: 20 }}>Props Intro</Text>
                    <Accordion
                        parentContainerStyles={{
                            marginTop: 20,
                        }}
                        bodyStyles={{
                            backgroundColor: 'yellow',
                        }}
                        headerText="Header"
                        headerStyles={{ paddingVertical: 20 }}
                        headerTextStyles={{ fontStyle: 'italic' }}
                        headerIconStyles={{ fontSize: 15 }}
                        isOpen={isOpen}
                        onPress={() => setIsOpen(!isOpen)}
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ color: '#000000' }}>Header</Text>
                            <Text style={{ color: '#000000' }}>Header</Text>
                            <Text style={{ color: '#000000' }}>Header</Text>
                            <Text style={{ color: '#000000' }}>Header</Text>
                            <Text style={{ color: '#000000' }}>Header</Text>
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