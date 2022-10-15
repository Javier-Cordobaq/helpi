import React from 'react'
import { Layout } from './styled-componetns'
import PlansCard from './components/PlansCard'

const plans = [
  {
    title: 'Basic',
    price: '$40',
    
  },
  {
    title: 'Bussines',
    price: '$80'
  },
  {
    title: 'Enterprice',
    price: '$150'
  },
]

const PlansAndPricing = () => {
  return (
    <Layout>
      <div>
        <h1>Precios que se ajustan a tus necesidades</h1>
      </div>
      <div className='plans-container'>
        {
          plans.map(c => <PlansCard key={c.title} title={c.title} price={c.price} />)
        }
      </div>
    </Layout>
  )
}

export default PlansAndPricing