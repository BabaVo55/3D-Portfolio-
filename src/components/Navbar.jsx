import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
const Navbar = () => {
// navbar extensivley added'
  const [active, setActive] = useState('')
  return (
    <nav className={`
      ${styles.paddindX}  flex
      items-center py-5 fixed top-0 z-20
      bg-primary`}>

      <div className='w-full flex justify-between
      items-center max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive=('');
            window.scrollTo(0, 0);
          }}
        >
          <img className='w-9 h-9 object-contain' src={logo} alt="logo" />
          {/* <img className='w-1/2 h-1/2 object-contain' src={'/src/assets/logo3.png'} alt="logo" /> */}
          <div className='bg-white 100 h-100'></div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar