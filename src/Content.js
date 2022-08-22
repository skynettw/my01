import React from 'react'


const Content = () => {
    const handleNameChange = () => {
        const names = ['Richard', 'Tom', 'Jane'];
        const no = Math.floor(Math.random()*3);
        return names[no];
    }
    const handleClick = () => {
        console.log("You clicked it!")
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
            Hello, {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It!</button>
        <button onClick={() => handleClick2('Richard')}>Richard Click!</button>
        <button onClick={(e) => handleClick3(e)}>More Click!</button>
    </main>
  )
}

export default Content