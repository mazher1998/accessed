import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CountdownTimer from './CountDownTimer'



const Navbar = () => {
  return (
    <nav className="">
        <div className="px-100 py-12 px-27 ">
            <div className='d-flex justify-content-between'>
          <Link className="navbar-brand" href="#">
            <Image src='/logo/accessedlogo.svg' width={168} height={42} alt='Accessed Logo' className='d-none d-sm-block'/>
            <Image src='/logo/mobilelogo.svg' width={61} height={42} alt='Accessed Logo' className='d-block d-sm-none'/>

          </Link>
          <div className="">
            <CountdownTimer targetDate={'2024-11-16T23:59:59'} />
            {/* <button className="me-3 bg-3980F3 pxy-16-10 text-FFFFFF border-none border-radius-8">Login</button>
            <button className="bg-FFFFFF border-none text-3980F3">Sign Up</button> */}
          </div>
          </div>
        </div>
      </nav>

  )
}

export default Navbar