// src/App.tsx

import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleButtonClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth-50);
    const randomY = Math.floor(Math.random() * window.innerHeight-50);
    const newMessage = '無駄～';
    setMessages([...messages, newMessage]);

    // Optional: You can also display the message on the screen
    const messageElement = document.createElement('div');
    messageElement.textContent = newMessage;
    messageElement.classList.add('waste-text');
    messageElement.style.position = 'absolute';
    messageElement.style.left = `${randomX}px`;
    messageElement.style.top = `${randomY}px`;
    document.body.appendChild(messageElement);
  };

  return (
    <div className="App">
      <header className="App-header" >
        <button onClick={handleButtonClick} className='btn-solid-gold'>この私を倒そうというのか?</button>
      </header>
    </div>
  );
}

export default App;
