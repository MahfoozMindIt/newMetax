import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import metax from "../../assets/metax.png"
import './Footer.css'

const Footer = () => {
  return (
    <div className='bg-black w-full flex justify-center text-white'>
      <section className='w-[85%] py-20'>
<main className='flex justify-between'>
<div>
    <div className='pb-20'>
        
    <div className='bg-white py-20 px-7 rounded-full'><img src={metax} alt="" className='h-14'/></div>
    </div>
    
    <div className='flex gap-10 text-3xl'>
    <FaLinkedinIn className='cursor-pointer hover:text-[#542A74] transition-all duration-300'/>
    <FaInstagram className='cursor-pointer hover:text-[#542A74] transition-all duration-300'/>
    </div>
    <p className='text-sm pb-2 pt-10'>METAX Pay © 2025</p>
    <p className='flex gap-2 text-sm'><span className='underline underline-offset-2 cursor-pointer hover:text-[#542A74] transition-all duration-300'>Privacy Policy</span> <span className='underline underline-offset-2 cursor-pointer hover:text-[#542A74] transition-all duration-300'>Cookie Policy</span></p>
    </div>
    <div>
        <h4 className='font-semibold mb-24'>Contact Us</h4>
        <p className='font-semibold pb-5'>Stay up to date on XBD news, projects and more</p>
        <div className='flex items-center gap-10'>
            <div>
                
            <input type="email" name="" id="" placeholder='enter your email address here' className='border-t-0 border-l-0 border-r-0 outline-0 border-b-[1px] placeholder:text-white w-[500px] pb-2'/>
            <div className='flex gap-3 items-center pt-5'>
            <input type="checkbox" className='h-5 w-5' name="" id="" />
                <label htmlFor="" className='text-[12px]'>By subscribing, you confirm that you have read our <span className='underline underline-offset-1'>Privacy Policy</span></label>
            </div></div>
            <button className='rounded-full bg-white hover:bg-[#542A74] hover:border-[#542A74] transition-all duration-500 text-black border-white border-[2px] text-[20px] font-semibold px-9 cursor-pointer hover:text-white flex items-center gap-2 py-5'>Send <span><FaArrowRightLong/></span>   </button>
        </div>
    </div>
</main>
<p className='text-sm pt-10'>XBD Pay is a product provided by the following group entities, licensed in multiple jurisdictions. The specific entity providing services will depend on your jurisdiction.</p>
<p className='font-semibold text-sm py-5'>Fiat payments are powered by our partner - WorldPay Limited.</p>
<p className='text-sm'>XBase Digital UAB: registered in Lithuania, company number: 305943164 <br />
XBase Digital Inc: registered in Canada, company number BC1439482 and licence number M21658614 <br />
XBase Digital Uk Limited: registered in the United Kingdom, company number 15031056 <br />
XBD Holdings Limited: registered in Abu Dhabi company number 00009488</p>
      </section>
    </div>
  )
}

export default Footer
