import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as React from 'react';
import { Accordion } from 'react-native-animated-accordion';

const Faqs = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("Settings");
    };

    return (
        <View style={styles.container}>

            <View style={styles.sc}>
                <ScrollView contentContainerStyle={styles.mainContainer}>
                    <Accordion
                        headerText="How do I upload books to my library ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                With the 'Add Books' option on the 'Library' tab, users can upload books with ease.
                            </Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="Can I edit or remove the books from my list after they have been uploaded ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                Yes, you can edit and remove books from your library with ease.In your library, each book shows a
                                small 'X' sign on the top right corner. This will prompt the system to remove the book permanently 
                                from your library.
                            </Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="How can I add books to my wishlist ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                Tap on the 'heart' icon on the top right of any book to add to wishlist, or tap on the book 
                                to view its details and select the 'Add to wishlist' option.You can view and update your wishlist 
                                by tapping on the sidebar {'>'} Wishlist.
                            </Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="How do I know which sellers are reliable ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                Book Haven allows users to rate and review sellers which allows others to know how their experiences 
                                have been with them.To view any seller's rating you can select the seller's user profile and view the 
                                ratings and reviews posted under their profile. This would help you know what sellers are reliable.
                            </Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="How do I pay for books on the platform ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                Book Haven provides the ease of paying online using your ewallet.
                                Tap on the sidebar and select 'Ewallet'
                            </Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="Can I track the orders and payments ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                Yes, Book Haven provides the ease of tracking the status of your deliveries.Select the sidebar and 
                                tap on the 'Tracking' option to view all current ongoing orders that have yet to be delivered to you.
                            </Text>
                        </View>
                    </Accordion>
                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="What should I do if a book is returned to be damaged ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                If a user returns your book and it has been damaged, you are encouraged to report so.This will be reviewed 
                                and if proven in your favour, you will be paid in the decided security deposit for your book for reparations.
                            </Text>
                        </View>
                    </Accordion>

                    <View style={{ marginBottom: 10 }}></View>
                    <Accordion
                        headerText="What should I do if I encounter inappropriate content or behavior on the platform ?"
                        headerTextStyles={{ fontSize: 18 }}
                    >
                        <View style={{ padding: 10, paddingTop: 5 }}>
                            <Text style={{ fontSize: 18 }}>
                                All users are encouraged to follow community guidelines and any such breach of the guidelines is to be 
                                reported.You can report any inappropriate activity and it will be dealt with accordingly.
                            </Text>
                        </View>
                    </Accordion>
                </ScrollView>
            </View>

        </View>
    )
}

export default Faqs;

const styles = StyleSheet.create({
    sc: {
        flex: 1,
    },
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
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    mainContainer: {
        padding: 20,
        flexGrow: 1,
    },
});