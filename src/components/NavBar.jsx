import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import MobileNav from './MobileNav';
import Logo from '../images/logo.png'


const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  }

  return (
    <div className='bg-[#5D3FD3] py-6 px-14 text-white  flex items-center justify-between'>
      {toggle && (
        <MobileNav toggleMenu={toggleMenu}/>
      )}
          
          <div className='flex-1'>
             
                <Link to='/'>
                    <img src={Logo} alt="logo" className='w-16 cursor-pointer' />
                </Link>
                
             
          </div>
          <div className='hidden lg:flex space-x-7'>
              <Link to='/'>HOME</Link>
              <Link to='procurement'>PROCUREMENT TENDER</Link>
              <Link to='auction'>AUCTION</Link>
          </div>
              <AiOutlineBars onClick={toggleMenu} size={20} className='text-white lg:hidden cursor-pointer'/>
    </div>
  )
}

export default NavBar
