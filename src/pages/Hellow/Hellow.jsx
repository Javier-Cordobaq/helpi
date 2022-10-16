import React from 'react'
import bot from '../../assets/helpi-bot.webp'
import bot_hand from '../../assets/helpi-hand-bot.webp'
import { Button } from '../../styled-components'
import { LayoutGrid } from './styled-components'
import wave from '../../assets/wave.webp'

const Hellow = () => {
  return (
    <LayoutGrid>
      <div className='cont_text'>
        <div>
          <h1><strong className='gradiente_text'>CREA</strong> TU PROPIO BOT <br /> Y <strong className='gradiente_text'>PERSONALIZALO</strong> A TU GUSTO!</h1>
        </div>
        <a href='#2'><Button whileTap={{ scale: 0.9 }} primary>¿Qué es Helpi?</Button></a>
        <img className='wave' src={wave} alt='' />
      </div>
    </LayoutGrid>
  )
}

export default Hellow