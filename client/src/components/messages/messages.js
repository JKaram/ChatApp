import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../message/message'

const Messages = ({ messages, name }) => {
    console.log(messages, 'Messages')
    console.log(name, 'Name')
    
    return (
        <ScrollToBottom>
            {
                messages.map((message, i) => (
                    <div key={i}><Message message={message} name={name} /></div>
                ))
            }
        </ScrollToBottom>
    )
}

export default Messages;