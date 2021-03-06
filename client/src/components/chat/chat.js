import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../infobar/infobar'
import Input from '../input/input'
import Messages from '../messages/messages'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('asdasd');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages]);

    //function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(message, messages);

    return (
        <div>
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
            />

        </div>

    )
}

export default Chat;