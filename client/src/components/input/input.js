import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form>
            <input type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null} />
            <button onClick={(event) => sendMessage(event)}>Submit</button>
        </form>
    )
}

export default Input;