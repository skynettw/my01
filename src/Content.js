import { useState } from 'react';
import React from 'react';


const Content = () => {
    const [name, setName] = useState('Richard');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Richard', 'Tom', 'Jane'];
        const no = Math.floor(Math.random()*3);
        setName(names[no]);
    }

    const handleClick = () => {
        console.log(count);
        setName(count+1);
    }
    const handleClick2 = (name) => {
        console.log(`${name} clicked it!`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello, {name}!
        </p>
        <button onClick={handleNameChange}>Change name</button>
        <button onClick={handleClick}>Richard Click!</button>
        <button onClick={(e) => handleClick3(e)}>More Click!</button>
    </main>
  )
}

export default Content