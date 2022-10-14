import { useState, useEffect } from "react";

const useMessage = ({setMessages, messages}) => {

    // Para inicializar el Bot
    const [start, setStart] = useState(false)
    //Para guardar todos los mesnajes
    //const [messages, setMessages] = useState([])

    const addMessage = (message) => {
        setMessages([...messages, message])
    }

    useEffect(() => {
        if (messages.length !== 0 || start === true) {
            addMessage({
                text: 'Bienvenido!, para interactuar escribe hola',
                by: 'bot'
            })
        }
    }, [start])

    return {
        start,
        setStart,
    }

}

export default useMessage;