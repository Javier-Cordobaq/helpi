import { MobileInput, MobileLayout } from '../styled-components'
import { BsEmojiSmile, BsBatteryFull } from "react-icons/bs";
import { BiMicrophone, BiDotsVerticalRounded } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useText, useMessage } from '../hooks';
import { motion } from 'framer-motion';
import helpi from '../../../assets/helpi-logo.webp'

const mobileVariants = {
    open: {
        scale: 1,
        y: 0,
    },
    closed: {
        scale: 1.4,
        y: 120,
    }
}

const MobilePhone = ({ startGlobal, setStart }) => {

    const { newMessage, clientMessages, setNewMessage, addClientMessage } = useText()
    const { messages, addMessage } = useMessage(clientMessages, startGlobal)

    const handleAdd = () => {
        addMessage({ text: newMessage, by: 'client' })
        addClientMessage({ text: newMessage, by: 'client' })
        setNewMessage('')
    }

    const handleButton = (c) => {
        addMessage({ text: c, by: 'client' })
        addClientMessage({ text: c, by: 'client' })
    }

    return (
        <MobileLayout
            animate={startGlobal === true ? 'open' : 'closed'}
            variants={mobileVariants}
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
                        startGlobal === false ?
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
                                            {
                                                c.buttons?.map(c => <motion.button
                                                    animate={{ opacity: '100%', y: '0' }}
                                                    initial={{ opacity: '20%', y: '5px' }}
                                                    onClick={() => handleButton(c)}
                                                >
                                                    {c}
                                                </motion.button>)
                                            }
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
                            <IoSend onClick={() => handleAdd()} style={{ color: '#5A7575', fontSize: '1.5vw' }} />
                    }
                </div>
            </div>
            <div>

            </div>
        </MobileLayout>
    )
}

export default MobilePhone