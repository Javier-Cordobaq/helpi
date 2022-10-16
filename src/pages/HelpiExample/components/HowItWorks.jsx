import React from 'react'
import { Button } from '../../../styled-components'
import { HowWorksLayout } from '../styled-components'

const HowItWorks = () => {
    return (
        <HowWorksLayout>
            <h1>¿Como funciona?</h1>
            <p>Podemos decirte muchas cosas técnicas, pero todos sabemos que la mejor manera de conocer algo es probandolo.</p>
            <p>Prueba helpi en vivo dando clic en el boton de comenzar!</p>
            <Button
                whileTap={{ scale: 0.8 }}
                onClick={() => setStart(true)}>
                Comenzar
            </Button>
        </HowWorksLayout>
    )
}

export default HowItWorks