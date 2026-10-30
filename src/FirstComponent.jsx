import React from 'react'
import img1 from './assets/hero.png'
//import './style.css'

const FirstComponent = () => {
  return (
    <div>
      <h1 className='bg-red-500 text-amber-400 pt-6 py-6 px-4 font-bold text-4xl'>First Component 2232</h1>
      <img src={img1} alt="" />
      <button>Read more</button>
    </div>
  )
}

export default FirstComponent
