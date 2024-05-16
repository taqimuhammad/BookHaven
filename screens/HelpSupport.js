import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const HelpSupport = ({ navigation }) => {

  
    return (
        <View style={styles.container}>
           

            <ScrollView style={styles.card}>
                <Text style={styles.texthead}>FAQs</Text>
                <Text style={styles.textin}>
                    Browse our Frequently Asked Questions to find answers to common
                    inquiries about using Book Haven. From uploading books to resolving
                    transaction disputes, we've got you covered.
                </Text>

                <Text style={styles.texthead}>Contact Information</Text>
                <Text style={styles.textin}>
                    Need assistance? Contact our support team via email at support@bookhaven.com
                    or call us toll-free at 1-800-123-4567. Our dedicated support staff are available
                    to help you with any questions or concerns.
                </Text>

                <Text style={styles.texthead}>User Guides and Tutorials</Text>
                <Text style={styles.textin}>
                    Check out our user guides and tutorials for step-by-step instructions on using different
                    features of Book Haven. Whether you're a new user or a seasoned pro, our guides will
                    help you make the most of our platform.
                </Text>

                <Text style={styles.texthead}>Troubleshooting and Technical Support</Text>
                <Text style={styles.textin}>
                    Encountering an issue? Visit our troubleshooting page for tips and solutions to common problems.
                    If you still need help, contact our technical support team for personalized assistance.
                </Text>

                <Text style={styles.texthead}>Feedback and Suggestions</Text>
                <Text style={styles.textin}>
                    We value your feedback! Share your thoughts, suggestions, or feature requests with us via our
                    feedback form. Your input helps us improve Book Haven for everyone.
                </Text>

                <Text style={styles.texthead}>Policy Clarifications</Text>
                <Text style={styles.textin}>
                    Need clarification on our terms, policies, or guidelines? Check out our policy clarifications section for explanations
                    and examples to help you better understand our rules and regulations.
                </Text>

                <Text style={styles.texthead}>Updates and Announcements</Text>
                <Text style={styles.textin}>
                    Stay informed about the latest updates, announcements, and changes to [Your App Name]. Visit our updates page regularly
                    to stay up-to-date on important developments.
                </Text>

            </ScrollView>
        </View>
    );
}

export default HelpSupport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
    },

   
    card: {
        flex: 1,
        marginTop: 20,
        height: 200,
        width: 320,
        marginBottom:10,
    },
    view: {
        flex: 0.1,
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