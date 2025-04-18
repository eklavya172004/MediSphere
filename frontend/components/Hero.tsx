'use client'
import React from 'react'
import { BackgroundBeamsDemo } from './Beams'
import { FloatingNav } from './ui/NavBar'

const Hero = () => {

    const navItems = [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
      
        },
        {
          name: "Contact",
          link: "/contact"
        },
        {
            name: "Services",
            link: "/services"
          },
      ];

  return (
    <div className="relative">
        <FloatingNav navItems={navItems} />
        <BackgroundBeamsDemo/>
        
        {/* </div> */}
    </div>
  )
}

export default Hero