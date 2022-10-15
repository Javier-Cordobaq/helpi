import React from 'react'
import { CardLayout } from '../styled-componetns'

const PlansCard = ({title, price}) => {

  return (
    <CardLayout title={title}>
      <h1>{title}</h1>
      <h2>{price}</h2>
    </CardLayout>
  )
}

export default PlansCard