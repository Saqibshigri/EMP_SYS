import React from 'react'

const Header = () => {
  return (
    <div> 
        <h1 className='font-semibold flex text-end justify-between text-2xl '>Hello<br/><span className='font-semibold text-3xl'>Saqib 👋</span>   </h1>
        <button className='bg-red-600 px-4 py-2 text-lg font-medium '>log out</button>
    </div>
  )
}

export default Header