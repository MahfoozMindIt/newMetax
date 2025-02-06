import React from 'react'
import './RespNav.css'
import { Link, useLocation } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
// import Logo from "../../assets/Logo.png"


const RespNav = ({show}) => {

const location = useLocation();

  return (
    <div className={`${show?'sideNav active':'sideNav'} w-full justify-end flex p-0 shadow-black`}>
<section className='flex w-[30%] bg-white h-full shadow-2xl flex-col gap-10 items-start justify-start p-10'>
    
    {/* <Link to='/'><img src={Logo} className='h-16 object-contain pt-5'/></Link> */}
    
    <ul className='list-none font-medium text-[17px] font-railway flex flex-col w-full  justify-center '>
        <Li url='/' text='Home' location={location}/>
        {/* <Li url='/aboutUs' text='About us' location={location}/> */}
        <Li url='/aboutUs' text='Personal' location={location}/>
        {/* <Li url='/business' text='Business' location={location}/> */}
        {/* <Li url='/partnership' text='Partnerships' location={location}/> */}
        {/* <Li url='/latestNews' text='Latest News' location={location}/> */}
        <Li url='/contact' text='Contact' location={location}/>
      
    </ul>
  <div className='flex justify-center items-center gap-3 flex-col'>
    <Link to="https://live.metaxexchange.com/login">
    <button className='bg-secondary py-3 px-7 rounded-full text-white font-bold text-sm hover:bg-white hover:text-secondary transition-all duration-300 border-[1px] border-secondary '>Login</button></Link>
             {/* <button className='bg-primary px-3 py-3 rounded-full text-white font-bold text-sm flex gap-2 items-center hover:bg-white hover:text-primary transition-all duration-300 border-[1px] border-primary'> <span><FaPhoneAlt/></span>+971 50 597 9972</button> */}
             <button className='bg-primary px-2 py-3 rounded-full text-white font-bold text-sm flex gap-2 items-center hover:bg-white hover:text-primary transition-all duration-300 border-[1px] border-primary'> <span><FaPhoneAlt/></span>+ 44 204 600 0540</button>
             </div>
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
          style={{fontSize:30,fontWeight:300,}}
          className='hover:text-[#5BA7B9] transition-all duration-300'
        >
          {text}
        </Link>
      </li>
    );
  };
  

export default RespNav
