import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Item = () => {
    const {category} = useParams()
    console.log('category:', category)
  return (
    <div>{category}</div>
  )
}

export default Item