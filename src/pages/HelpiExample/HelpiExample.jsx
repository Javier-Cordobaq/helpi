import React from 'react'
import MobilePhone from './components/MobilePhone'
import { Layout } from './styled-components/layout.styled'
import { useMessage } from './hooks'
import HowItWorks from './components/HowItWorks'

const HelpiExample = () => {

  const { start, setStart } = useMessage()

  return (
    <Layout>
      <div className='text-container'>
        <HowItWorks />
      </div>
      <div className='mobile-cont'>
        <div className='bubble'>
          <MobilePhone startGlobal={start} setStart={setStart} />
        </div>
      </div>
    </Layout>
  )
}

export default HelpiExample