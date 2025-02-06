import React, { useState } from 'react'
import './Header.css'
import RespNav from './RespNav';
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [fix,setFix]=useState(false);
  const [showNav,setShowNav]=useState(false);

  const setFixed=()=>{
      if(window.scrollY>=3){
          setFix(true);
      }else{
          setFix(false);
      }
  }

  window.addEventListener('scroll',setFixed)


  return (
    <div className={`${fix?'navbar fixed':'navbar'} py-4 flex justify-center w-full`}>
       <RespNav show={showNav}/>
      <nav className='w-[85%] nav flex justify-between items-center'>
<h1 className='text-5xl font-extrabold'>XBD <span className='font-light'>PAY</span></h1>
<div className='flex gap-3'>
    <button className='rounded-full hover:border-[#5BA7B9] transition-all duration-300 hover:text-[#5BA7B9] border-black border-[2px] text-[16px] font-semibold py-2 px-10 cursor-pointer'>Sign Up</button>
    <button className='rounded-full bg-black hover:bg-[#5BA7B9] hover:border-[#5BA7B9] transition-all duration-300 text-white border-black border-[2px] text-[16px] font-semibold py-2 px-10 cursor-pointer'>Contact us</button>
    <button onClick={()=>setShowNav(!showNav)} className='rounded-full hover:border-[#5BA7B9] transition-all  duration-300 hover:text-[#5BA7B9] border-black border-[2px] text-[27px] font-semibold p-2 cursor-pointer'>{showNav?<RxCross1 />:<AiOutlineMenu/>}</button>
</div>
      </nav>
    </div>
  )
}

export default Header
