import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const TermsPolicies = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("Settings");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Terms & Policies</Text>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={handleBack} >
                    <Icon name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.card}>
                <Text style={styles.texthead}>Privacy Policy</Text>
                <Text style={styles.textin}>
                    At Book Haven, we are committed to protecting your privacy and ensuring the
                    security of your personal information. Our Privacy Policy outlines
                    how we collect, use, and safeguard your data when you use our platform.
                </Text>

                <Text style={styles.texthead}>Terms of Service</Text>
                <Text style={styles.textin}>
                    Welcome to Book Haven! By accessing or using our platform, you agree to
                    comply with our Terms of Service. These terms govern your use of the platform,
                    including registration, posting content, and engaging in transactions.
                </Text>

                <Text style={styles.texthead}>Community Guidelines</Text>
                <Text style={styles.textin}>
                    Our Community Guidelines are designed to foster a safe and respectful environment
                    for all users. Please review these guidelines before participating in discussions
                    or interacting with other members of the community.
                </Text>

                <Text style={styles.texthead}>Payment and Transaction Policies</Text>
                <Text style={styles.textin}>
                    Before making a purchase or engaging in a transaction on Book Haven, please review
                    our Payment and Transaction Policies. These policies cover payment processing, fees, refunds,
                    and dispute resolution procedures.
                </Text>

                <Text style={styles.texthead}>Safety and Security Policies</Text>
                <Text style={styles.textin}>
                    Your safety and security are our top priorities. Our Safety and Security Policies outline
                    the measures we take to protect your account, personal information, and transactions from
                    unauthorized access and fraudulent activity.
                </Text>
            </ScrollView>
            
        </View>
    );
}

export default TermsPolicies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    card: {
        flex: 1,
        marginTop: 20,
        height: 200,
        width: 320,
        marginBottom: 10,
    },
    texthead: {
        marginBottom: 10,
        color: '#404B7C',
        fontSize: 25,
        fontWeight: '500',
    },
    textin: {
        fontSize: 18,
        marginBottom: 10,
    },
});