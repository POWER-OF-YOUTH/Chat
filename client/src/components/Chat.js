import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageEditor from './MessageEditor';
import openSocket from 'socket.io-client';

function Chat({ userName }) {
    const [socket, setSocket] = useState();

    useEffect(() => {
        let candidate = openSocket('http://localhost:9999');
        candidate.emit('setname', {name: userName});
        setSocket(candidate);
    }, []);

    function sendMessage(message) {
        socket.emit('sendmsg', { message: message });
    }

    return (
        <div>
            <h2>Это чат</h2>
            {socket ? <MessageList socket={socket} /> : null}
            <MessageEditor sendMessage={sendMessage} />
        </div>
    );
}
export default Chat;