import React, { useState } from 'react';

function MessageEditor({ sendMessage }) {
    const [message, setMessage] = useState('');

    function submit(event) {
        event.preventDefault();
        sendMessage(message);
        setMessage('');
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" onChange={(event) => setMessage(event.target.value)} value={message} />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default MessageEditor;