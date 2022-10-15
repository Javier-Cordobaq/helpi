import { useState } from "react";

export const useText = () => {

    const [newMessage, setNewMessage] = useState('')
    const [clientMessages, setClientMessages] = useState([])

    const addClientMessage = (message) => {
        setClientMessages([...clientMessages, message])
    }

    return {
        newMessage,
        clientMessages,
        setNewMessage,
        addClientMessage
    }

}

export default useText;