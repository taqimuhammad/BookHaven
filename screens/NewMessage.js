import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const NewMessage = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = (messageArray) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messageArray),
        )
    };
    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
}

export default NewMessage;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

})