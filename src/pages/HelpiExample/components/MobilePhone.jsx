import { MobileInput, MobileLayout } from '../styled-components'
import { BsEmojiSmile, BsBatteryFull } from "react-icons/bs";
import { BiMicrophone, BiDotsVerticalRounded } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useText, useMessage } from '../hooks';
import { motion } from 'framer-motion';
import helpi from '../../../assets/helpi-logo.webp'
import { useEffect, useState } from 'react';

const MobilePhone = () => {

    const [messages, setMessages] = useState([])
    const {start, setStart, addMessage } = useMessage({setMessages, messages})
    const { newMessage, setNewMessage } = useText()

    const handleAdd = (message) => {
        setMessages([...messages, message])
        setNewMessage('')
    }

    const answers = () => {
        messages.find(c => c.text === 'hola') ? handleAdd({
            text: 'En helpi te ofrecemos dos bots, uno para telegram y otro para whatsap, digita 1 para whatsapp',
            by: 'bot'
        }) : null
    }

    useEffect(() => {
        console.log('Se vovlio a Ejecutar')
        if (messages.length !== 0) {
            answers()
        }
    }, [])

    return (
        <MobileLayout
            initial={{ opacity: 0, y: '50px' }}
            whileInView={{ opacity: 1, y: '0' }}
            transition={{ delay: 1.1, type: 'fade' }}
        >
            <div className='content-container'>
                <div className='chat-header-container'>
                    <div className='mobile-info'>
                        <p>6:00 PM</p>
                        <span></span>
                        <BsBatteryFull style={{ zIndex: 2 }} />
                    </div>
                    <div className='menu-container'>
                        <FaArrowLeft onClick={() => setStart(false)} />
                        <div className='profile-picture'>
                            <img src={helpi} alt='' />
                        </div>
                        <div className='name-container'>
                            <p>Helpi</p>
                            <p>Bot</p>
                        </div>
                        <BiDotsVerticalRounded />
                    </div>

                </div>
                <div className='messages-container'>
                    {
                        start === false ?
                            <div className='button-start' >
                                <button onClick={() => setStart(true)}>Comenzar</button>
                            </div> :
                            <div>
                                {messages?.map(c =>
                                    c.by === 'bot' ?
                                        <div key={c.text} className='bot-message'>
                                            <motion.p
                                                animate={{ opacity: '100%', y: '0' }}
                                                initial={{ opacity: '20%', y: '5px' }}
                                            >
                                                {c.text}
                                            </motion.p>
                                        </div> :
                                        <div key={c.text} className='client-message'>
                                            <motion.p
                                                animate={{ opacity: '100%', y: '0' }}
                                                initial={{ opacity: '20%', y: '5px' }}
                                            >
                                                {c.text}
                                            </motion.p>
                                        </div>
                                )}
                            </div>
                    }
                </div>
                <div className='input-container'>
                    <BsEmojiSmile style={{ color: '#5A7575', fontSize: '1.5vw' }} />
                    <MobileInput
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder='Mensaje'
                    />
                    {
                        newMessage === '' ?
                            <div style={{ display: 'flex' }}>
                                <ImAttachment style={{ color: '#5A7575', fontSize: '1.5vw' }} />
                                <BiMicrophone style={{ color: '#5A7575', fontSize: '1.5vw' }} />
                            </div> :
                            <IoSend onClick={() => handleAdd({ text: newMessage, by: 'client' })} style={{ color: '#5A7575', fontSize: '1.5vw' }} />
                    }
                </div>
            </div>
            <div>

            </div>
        </MobileLayout>
    )
}

export default MobilePhone