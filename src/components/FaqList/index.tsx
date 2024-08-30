import React from 'react'
import FaqItem from './FaqItem'

interface FaqListProps{
    items: {question: string, answer: string}[]
}

const FaqList: React.FC<FaqListProps>= (props) => {
    const { items } = props
  return items.map(item => (
    <FaqItem {...item} />
))
}

export default FaqList