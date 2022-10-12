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
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <h1><strong className='gradiente_text'>Crea</strong> tu propio bot <br /> y <strong className='gradiente_text'>personalizalo</strong> a tu gusto!</h1>
        </div>
        <a href='#2'><Button primary>¿Qué es Helpi?</Button></a>
        <img className='wave' src={wave} alt='' />
      </div>
    </LayoutGrid>
  )
}

export default Hellow