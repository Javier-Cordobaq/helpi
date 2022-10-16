import { useState } from 'react'
import { LayoutNav } from '../styled-components'
import logo from '../assets/helpi-logo.webp'
import letterLogo from '../assets/helpi-logo-grande-dark.webp'
import { GrLanguage } from "react-icons/gr";

const Nav = () => {

  const [scroll, setScroll] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  window.onscroll = () => {
    setScrollPosition(window.scrollY)
    scrollPosition > 200 ? setScroll(true) : setScroll(false)
  }

  return (
    <LayoutNav scroll={scroll.toString()}>
      <div className='logo_container'>
        <img className='iconLogo' src={logo} alt='' />
        <img className='letterLogo' src={letterLogo} alt='' />
      </div>
      <div className='menu_container'>
        <GrLanguage className='translate-icon' style={{ height: '1.5rem', width: '1.5rem', opacity: '60%' }} />
        <div className='translate-menu'>
          <p>Español (ES)</p>
          <p>English (ES)</p>
        </div>
      </div>
    </LayoutNav>
  )
}

export default Nav