"use client";
import React, { useState } from 'react'
import Links from './Links'
import Link from 'next/link'
import { navigations } from './nav_links';
import { IoLogoFreebsdDevil } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
const Navbar = () => {
  const[open, setopen] = useState(false);
  const session =true;
  const isAdmin =true
  return (
    <div className=''>
    <div className="my-2 flex   justify-between text-white">
    <div className="logo">
    <Link href={"/"}>
    <IoLogoFreebsdDevil size={40}/>

    </Link>
    </div>
    
    <div className="desktop hidden md:block">
       <Links />
       {/* add to links */}
       {/* {
        session?<Links item={'Admin'} />: <div>
        <form action=''>
        <button className='bg-blue'> Login</button> 
        </form>
        </div>
       } */}
    </div>
    {/* condition so as not to appear on desktop */}
    <div onClick={()=> setopen(prev=>!prev)} className='md:hidden'> 
    {
      open? <CgClose size={25} />:
      <GiHamburgerMenu size={25} />
    }
</div> 
   

    </div>
    {/* mobile navigations */}
    {open && (
      <div className="mobile  bg-[#2D2B42] h-screen absolute top-[80px] right-0 w-[80%] m-auto  ">
    <div className='p-4'>
      {navigations.map((item)=>(
        <div className='' key={item._id}>
          <ul>
          <Link href={`${item.path}`}>
          <li className='my-4' onClick={()=>setopen(false)}>{item.title} </li>
          </Link>
          </ul>
        </div>
      ))}
    </div>
    </div>)}
    </div>
  )
}

export default Navbar