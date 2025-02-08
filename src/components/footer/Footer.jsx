import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import metax from "../../assets/metax.png"
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black w-full flex justify-center text-white'>
      <section className='w-[85%] py-20'>
<main className='flex flex-col md:flex-row justify-between gap-10'>
<div>
    <div className='pb-20'>
        
    <div className='bg-white xl:py-20 xl:px-7 xl:rounded-full p-1'><img src={metax} alt="" className='lg:h-14 object-contain h-10'/></div>
    </div>
    
    <div className='flex gap-10 text-3xl'>
    <FaLinkedinIn className='cursor-pointer hover:text-[#542A74] transition-all duration-300'/>
    <FaInstagram className='cursor-pointer hover:text-[#542A74] transition-all duration-300'/>
    </div>
    <p className='text-sm pb-2 pt-10'>Metax Payments Ltd © 2025</p>
    <p className='flex gap-2 text-sm'><Link to='https://metaxpayments.com/pages/privacy-policy' className='underline underline-offset-2 cursor-pointer hover:text-[#542A74] transition-all duration-300'>Privacy Policy</Link> <Link to='https://metaxpayments.com/pages/cookies' className='underline underline-offset-2 cursor-pointer hover:text-[#542A74] transition-all duration-300'>Cookie Policy</Link></p>
    </div>
    <div>
        <h4 className='font-semibold mb-24'>Contact Us</h4>
        <p className='font-semibold pb-5'>Stay up to date on Metax news, projects and more</p>
        <div className='flex flex-col md:flex-row items-center gap-10'>
            <div>
                
            <input type="email" name="" id="" placeholder='enter your email address here' className='border-t-0 border-l-0 border-r-0 outline-0 border-b-[1px] placeholder:text-white md:w-[500px] w-[350px] pb-2'/>
            <div className='flex  gap-3 items-center pt-5'>
            <input type="checkbox" className='h-5 w-5' name="" id="" />
                <label htmlFor="" className='text-[12px]'>By subscribing, you confirm that you have read our <Link to='https://metaxpayments.com/pages/privacy-policy' className='underline underline-offset-1'>Privacy Policy</Link></label>
            </div></div>
            <button className='rounded-full bg-white hover:bg-[#542A74] hover:border-[#542A74] transition-all duration-500 text-black border-white border-[2px] text-[20px] font-semibold px-9 cursor-pointer hover:text-white flex items-center gap-2 py-5'>Send <span><FaArrowRightLong/></span>   </button>
        </div>
    </div>
</main>
<p className='text-sm pt-10'>Metax Payments Ltd, incorporated in Canada (BC1406436), is Registered at 28 19628, 55A Avenue, Langley, British Columbia, V3A 3X2. The company is duly registered as a Money Services Business with FINTRAC under registration number M23579425, ensuring adherence to Canadian financial laws and regulations.</p>
{/* <p className='font-semibold text-sm py-5'>Fiat payments are powered by our partner - WorldPay Limited.</p> */}
<p className='text-sm pt-5'><span className='font-semibold text-sm'>Disclaimer:</span> The author assumes no responsibility or liability for any errors or omissions in the content of this site. The information contained in this site is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness, or timeliness.</p>
      </section>
    </div>
  )
}

export default Footer
