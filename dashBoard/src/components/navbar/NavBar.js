import React from 'react'
import NavTitle from './NavTitle'
import Theme from './Theme'


function NavBar() {
  return (
    <nav className=' fixed top-0 left-0 w-full h-[80px] bg-white shadow-shadow2 flex justify-between items-center pl-[3%] pr-[3%] z-10'>
      <NavTitle /> 
      <Theme/>
    </nav>
  )
}

export default NavBar
