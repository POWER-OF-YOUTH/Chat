import React from 'react';

function Message({ data }) {
    return (
    <div>
        <span><b>{data.user}</b>: {data.message}</span>
    </div>
    );
}

export default Message;