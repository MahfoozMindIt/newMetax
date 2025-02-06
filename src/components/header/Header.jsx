import React, { useState } from 'react'
import './Header.css'
import RespNav from './RespNav';
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import metax from '../../assets/metax.png'

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

//   #542A74
// #7E489B

  return (
    <div className={`${fix?'navbar fixed':'navbar'} py-4 flex justify-center w-full`}>
       <RespNav show={showNav}/>
      <nav className='w-[85%] nav flex justify-between items-center'>
<img src={metax} alt="" className='h-14'/>
<div className='flex gap-3'>
    <button className='rounded-full hover:border-[#7E489B] text-[#542A74] transition-all duration-300 hover:text-[#7E489B] border-[#542A74] border-[2px] text-[16px] font-semibold py-2 px-10 cursor-pointer'>Sign Up</button>
    <button className='rounded-full bg-[#542A74] hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-300 text-white border-[#542A74] border-[2px] text-[16px] font-semibold py-2 px-10 cursor-pointer'>Contact us</button>
    <button onClick={()=>setShowNav(!showNav)} className='rounded-full hover:border-[#7E489B] text-[#542A74] transition-all  duration-300 hover:text-[#7E489B] border-[#542A74] border-[2px] text-[27px] font-semibold p-2 cursor-pointer'>{showNav?<RxCross1 />:<AiOutlineMenu/>}</button>
</div>
      </nav>
    </div>
  )
}

export default Header
