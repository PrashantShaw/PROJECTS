import APIcall from './APIcall'
import Category from './Category'
import './news.css'
import { useState } from 'react'

function NEWS() {
  const [CATEGORY, setCATEGORY] = useState('general')
  return (
    <>
      <Category setCATEGORY={setCATEGORY}/>
      <APIcall CATEGORY={CATEGORY}/>
    </>
  )
}

export default NEWS