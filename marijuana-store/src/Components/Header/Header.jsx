import React from 'react'
import { useState } from 'react';
import header from './header.module.css'
import logo from '../../assets/Images/logo.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

function Header() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    

  return (
    <div className={`${header.OuterContainer} ${openMenu ? header.activeBg : ''}`}>
        <div className={header.container}>
            <div className={header.left}>
                <img src={logo} />
            </div>
            <div className={header.right}>

                {/*Hamberger Icon */}
                <div className={header.hamburger} onClick={()=>setOpenMenu(!openMenu)}>
                    <MenuIcon />
                </div>
                
                <ul className={`${header.navLinks} ${openMenu ? header.active : ''}`}>
                    <li><a href='/'>Home</a></li>

                    { /*About us Link */}

                    <li className={header.about} onMouseEnter={()=>setAboutOpen(true)} onMouseLeave={()=>setAboutOpen(false)}><a href='/' >About Us +</a>
                    {aboutOpen && (
                        <ul className={header.dropDown}>
                            <li><a href='/'>Testimonials</a></li>
                            <li><a href='/'>Gallery</a></li>
                            <li><a href='/'>FAQ</a></li>
                        </ul>
                    )}
                    </li>

                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'><PersonOutlineOutlinedIcon /></a></li>
                    <li><a href='/'><ShoppingBasketOutlinedIcon /></a></li>
                </ul>

            </div>
        </div>

      
    </div>
  )
}

export default Header
