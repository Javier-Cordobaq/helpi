import React from 'react'
import MobilePhone from './components/MobilePhone'
import { Layout } from './styled-components/layout.styled'
import { motion } from 'framer-motion'

const HelpiExample = () => {
  return (
    <Layout>
      <MobilePhone />
      <div className='how-it-works-text'>
        {/* {
          ['H', 'E', 'L', 'P', 'I'].map(c => <motion.span
            initial={{ y: '100px', opacity: '20%' }}
            whileInView={{ y: '0', opacity: '100%' }}
            transition={{ delay: 0.5 }}
          >{c}</motion.span>)
        } */}
        <motion.span
          initial={{ y: '100px', opacity: '20%' }}
          whileInView={{ y: '0', opacity: '100%' }}
          transition={{ delay: 0.5 }}
        >H</motion.span>
        <motion.span
          initial={{ y: '100px', opacity: '20%' }}
          whileInView={{ y: '0', opacity: '100%' }}
          transition={{ delay: 0.6 }}
        >E</motion.span>
        <motion.span
          initial={{ y: '100px', opacity: '20%' }}
          whileInView={{ y: '0', opacity: '100%' }}
          transition={{ delay: 0.7 }}
        >L</motion.span>
        <motion.span
          initial={{ y: '100px', opacity: '20%' }}
          whileInView={{ y: '0', opacity: '100%' }}
          transition={{ delay: 0.8 }}
        >P</motion.span>
        <motion.span
          initial={{ y: '100px', opacity: '20%' }}
          whileInView={{ y: '0', opacity: '100%' }}
          transition={{ delay: 0.9 }}
        >I</motion.span>
      </div>
    </Layout>
  )
}

export default HelpiExample