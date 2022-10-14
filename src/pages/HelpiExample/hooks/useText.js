import { useState } from "react";

export const useText = () => {

    const [newMessage, setNewMessage] = useState('')

    return {
        newMessage,
        setNewMessage
    }

}

export default useText;