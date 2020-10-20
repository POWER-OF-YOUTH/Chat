import React, { useState, useEffect } from 'react';
import Message from './Message';

function MessageList({ socket }) {
    const [messages, setMessages] = useState([
        {
            user: 'server',
            message: 'Подключено наверное'
        }
    ]);

    function fnc(user, message) {
        setMessages(messages.concat({
            user: user,
            message: message
        }));
    }

    socket.off('msg'); // Костыль :madhouse:
    socket.on('msg', event => {
        console.log(event.message);
        fnc(event.owner, event.message);
    });

    return (
        <div>
            {messages.map(message => <Message data={message} />)}
        </div>
    )
}

export default MessageList;