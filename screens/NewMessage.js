import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { auth, db } from "../firebaseConfig";
import { collection, addDoc, getDocs ,query,orderBy} from "firebase/firestore";


const NewMessage = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "Chats"), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const updatedData = querySnapshot.docs.map((doc) => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }));
            setMessages(updatedData);
        };
        fetchData();
    }, [messages]);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user,
        } = messages[0]
        const saveData = async () => {
            const docRef = await addDoc(collection(db, "Chats"), {
                _id,
                createdAt,
                text,
                user,
            });
        };
        
        saveData();
    }, [])
    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: auth.currentUser.uid,
                    name: auth.currentUser.displayName,
                }}
                renderBubble={props => {
                    return <Bubble {...props}
                        wrapperStyle={{
                            right: {
                                backgroundColor: '#3F95D4',
                            },
                            left: {
                                backgroundColor: '#3FD48D',

                            }
                        }} />
                }}
            />
        </View>
    )
}

export default NewMessage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})