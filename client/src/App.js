import React, { useState } from 'react';
import Chat from './components/Chat';
import Connect from './components/Connect';

function App() {
  const [user, setUser] = useState();

  function connected(user) {
    console.log(`User name: ${user}`);
    setUser(user);
  }

  return (
    <div className="App">
      {user ? <Chat userName={user}/> : <Connect userSet={connected} />}
    </div>
  );
}

export default App;
