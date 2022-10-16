import { useState, useEffect } from "react";

const useMessage = (clientMessages, startGlobal) => {
    console.log(startGlobal, 'StartGlovbal desde CusdtomHooks')
    // Para inicializar el Bot
    const [start, setStart] = useState(false)
    //Para guardar todos los mesnajes
    const [messages, setMessages] = useState([])

    const addMessage = (message) => {
        setMessages([...messages, message])
    }

    const answers = () => {
        clientMessages.find(c => c.text === 'hola') ? addMessage({
            text: 'En helpi te ofrecemos dos bots, uno para telegram y otro para whatsap, digita 1 para whatsapp',
            buttons: ['Whatsapp', 'Telegram'],
            by: 'bot'
        }) : null
        clientMessages.find(c => c.text === 'Telegram') ? addMessage({
            text: 'Escribiste telegram?',
            by: 'bot'
        }) : null
    }

    useEffect(() => {
        if (messages.length !== 0) {
            setTimeout(() => { answers() }, 800)
        }
        if (messages.length === 0 && startGlobal === true) {
            addMessage({
                text: 'Hola!, bienbenido a helpi, para interactuar escribe hola',
                by: 'bot'
            })
        }
    }, [clientMessages, startGlobal])

    return {
        messages,
        start,
        addMessage,
        setStart,
    }

}

export default useMessage;