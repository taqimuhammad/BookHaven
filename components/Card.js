import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth,db } from '../firebaseConfig';
import { doc, deleteDoc } from "firebase/firestore";

const Card = ({ id,name, author, img, type, status }) => {

    const handledeletedata = async () =>{
        await deleteDoc(doc(db, "Books", id))
        .then(()=>{
            alert("Book Deleted Sucessfully");
        })
    }

    return (
        <View style={styles.card}>
            <Image source={{uri:img}} style={styles.image} />
            <View>
                <Text style={styles.title}>{name}</Text>
                <TouchableOpacity style={styles.close}>
                    <Ionicons name="close" size={24} color="red" onPress={handledeletedata} />
                </TouchableOpacity>
                <Text style={styles.author}>{author}</Text>

                <View style={styles.tag}>
                    <View style={styles.tagcontainer1}>
                        <TouchableHighlight style={[styles.insidetag1, { backgroundColor: "#404b7c" }]}>
                            <Text style={styles.tagtext}> {type} </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.tagcontainer2}>
                        <TouchableHighlight style={[styles.insidetag2, { backgroundColor: "#404b7c" }]}>
                            <Text style={styles.tagtext}> {status} </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        width: 350,
        height: 122,
        borderRadius: 10,
        backgroundColor: '#f7f5ff',
        marginBottom: 30,
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 10,
        width: 80,
        height: 120,
        backgroundColor: 'blue',
    },
    title: {
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    author: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 12,
    },
    tag: {
        width: 250,
        flexDirection: 'row',
        alignContent: 'space-between',
        paddingTop: 45,
        marginLeft: 15,
    },
    close: {
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 242,
    },
    tagcontainer1: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    insidetag1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        width: 106,
        borderRadius: 10,
        backgroundColor: '#404b7c',
    },
    tagtext: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    tagcontainer2: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    insidetag2: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        width: 106,
        borderRadius: 10,
        backgroundColor: '#3fd48d',
    },
});

export { Card };
