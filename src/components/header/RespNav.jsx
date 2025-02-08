import React from 'react'
import './RespNav.css'
import { Link, useLocation } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
// import Logo from "../../assets/Logo.png"

//   #542A74
// #7E489B

const RespNav = ({show}) => {

const location = useLocation();

  return (
    <div className={`${show?'sideNav active':'sideNav'} w-full justify-end flex shadow-black`}>
<section className='flex md:w-[30%] w-[70%] bg-white h-full shadow-2xl flex-col gap-10 items-start justify-start p-10'>
    
<div className='flex justify-between w-full'>
<button className='rounded-full md:hidden block hover:border-[#7E489B] text-[#542A74] transition-all duration-300 hover:text-[#7E489B] border-[#542A74] border-[2px] text-[14px] font-semibold py-2 px-5 cursor-pointer'>Sign Up</button>
    <button className='rounded-full block md:hidden bg-[#542A74] hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-300 text-white border-[#542A74] border-[2px] text-[14px] font-semibold py-2 px-5 cursor-pointer'>Contact us</button>
    
</div>
    
    <ul className='list-none font-medium text-[17px] gap-3 font-railway flex flex-col w-full  justify-center '>
        <Li url='/' text='Home' location={location}/>
        <Li url='/aboutUs' text='About Us' location={location}/>
        <Li url='/contact' text='Contact' location={location}/>
      
    </ul>
</section>
    </div>
  )
}


const Li = ({ url, text, location }) => {
    // const isActive = url === '/' ? location.pathname === '/' : location.pathname.includes(url);
  
    return (
      <li
        style={{
        }}
      >
        <Link
          to={url}
          // onClick={()=>{!show}}
          style={{fontWeight:300,}}
          className='hover:text-[#542A74] md:text-3xl text-xl transition-all duration-300'
        >
          {text}
        </Link>
      </li>
    );
  };
  

export default RespNav
