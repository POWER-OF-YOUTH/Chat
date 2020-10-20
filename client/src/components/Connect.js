import React, { useState } from 'react';

function Connect({ userSet }) {
    const [name, setName] = useState('');

    function submit(event) {
        event.preventDefault();
        userSet(name);
    }

    return (<div>
        <form onSubmit={submit}>
            <h3>Имя</h3>
            <input type="text" onChange={(event) => setName(event.target.value) }/>
            <button type="submit">Войти</button>
        </form>
    </div>
    );
}

export default Connect;