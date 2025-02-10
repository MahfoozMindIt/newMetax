import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Metadata from '../components/Metadata'

const Contact = () => {
  return (
    <div  className='w-full flex flex-col items-center justify-center bg-[#F4F2F2]'>
      <Metadata metaData={`Contact`}/>
    <section className='lg:w-[85%] w-[95%] py-20'>
<main className='flex flex-col gap-10 w-full lg:w-[75%] xl:w-[50%]'>

<h1 className='lg:text-8xl text-6xl font-light'>We help your business grow</h1>
<p className='text-lg'>Contact our sales and support teams direct, or use the form for general requests.</p>

</main>

<main className='pt-20 w-full'>

<main className='flex flex-col w-full'>
  <div className='flex flex-col lg:flex-row pb-5 lg:pb-0 gap-5 justify-between w-full'>
    <main className='lg:w-[65%] w-full flex flex-col gap-10 lg:gap-20'>
<section className='flex flex-col lg:flex-row gap-5 w-full'><div className='flex flex-col gap-3 w-full'>
    <label htmlFor="" className='text-[18px] font-[500]'>* First Name</label>
    <input type="text" name="" id="" placeholder='Type here' className='border-[grey] border-[1px] rounded-xl p-3  outline-none placeholder:'/>
  </div>
  <div className='flex flex-col gap-3 w-full'>
    <label htmlFor="" className='text-[18px] font-[500]'>* Last Name</label>
    <input type="text" name="" id="" placeholder='Type here' className='border-[grey] border-[1px] rounded-xl p-3  outline-none placeholder:'/>
  </div></section>
  <section className='flex flex-col lg:flex-row gap-5 w-full'>
  <div className='flex flex-col gap-3 w-full'>
    <label htmlFor="" className='text-[18px] font-[500]'>* Phone Number</label>
    <input type="text" name="" id="" placeholder='Type here' className='border-[grey] border-[1px] rounded-xl p-3  outline-none placeholder:'/>
  </div>
  <div className='flex flex-col gap-3 w-full'>
    <label htmlFor="" className='text-[18px] font-[500]'>* Email Address</label>
    <input type="text" name="" id="" placeholder='Type here' className='border-[grey] border-[1px] rounded-xl p-3   outline-none placeholder:'/>
  </div></section></main>
  <div className='flex flex-col gap-3 w-full lg:w-[30%]'><label htmlFor="" className='text-[18px] font-[500]'>* What would you like to discuss?</label><textarea name="" id="" className='border-[grey] border-[1px] rounded-xl  outline-none h-[300px] p-3'></textarea></div>
  </div>
  <main><main className='lg:w-[65%] w-full flex flex-col gap-14'>
<section className='flex flex-col lg:flex-row gap-5 w-full'><div className='flex flex-col gap-3 w-full'>
    <label htmlFor="" className='text-[18px] font-[500]'>* Company</label>
    <input type="text" name="" id="" placeholder='Type here' className='border-[grey] border-[1px] rounded-xl p-3  outline-none placeholder:'/>
  </div>
  <div className='flex flex-col gap-3 w-full'>
    <label htmlFor="" className='text-[18px] font-[500]'>* Industry</label>
    <input type="text" name="" id="" placeholder='Type here' className='border-[grey] border-[1px] rounded-xl p-3  outline-none placeholder:'/>
  </div></section></main></main>
</main>

<div>
  
<section className='flex flex-col lg:flex-row justify-between gap-5 w-full mt-14'>
  <div className='flex flex-col gap-3 w-full lg:w-[42%]'>
    <label htmlFor="" className='text-[18px] font-[500]'>* Country</label>
    <input type="text" name="" id="" placeholder='Type here' className='border-[grey] border-[1px] rounded-xl p-3  outline-none placeholder:'/>
  </div>
  <div className='flex items-center gap-3 mt-8'>
    
  <input type="checkbox" name="" id="" className='h-8 w-8'/>
  <p className='text-sm'>I confirm that I have read and agree to the <Link to='https://metaxpayments.com/pages/privacy-policy' className='underline underline-offset-1'>Privacy Policy</Link>. I consent to receive marketing from XBD group entities regarding products and services. You can opt out at any time.</p>
  </div>
  </section>
</div>


        <button className='rounded-full mt-10 bg-[#542A74] text-white hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 border-[#542A74] border-[2px] md:text-[18px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Send <span><FaArrowRightLong/></span>   </button>

</main>


<main className='flex flex-col lg:flex-row justify-between gap-52 pt-48 pb-20'>
  <div>
    
  <h1 className='text-6xl font-light pb-10'>Support & enquiries</h1>
  <p className='text-lg'>Our support team are ready to help with any questions on our platform, plugins and PoS devices.</p>
<button className='rounded-full mt-10 bg-[#542A74] text-white hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 border-[#542A74] border-[2px] md:text-[18px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Talk to us <span><FaArrowRightLong/></span></button>

  </div>
  <div>
    
  <h1 className='text-6xl font-light pb-10'>Sales</h1>
  <p className='text-lg'>Contact sales to discuss existing XBD PAY accounts or about setting up a new one.</p>
<button className='rounded-full mt-10 bg-[#542A74] text-white hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 border-[#542A74] border-[2px] md:text-[18px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Talk to us <span><FaArrowRightLong/></span></button>
  </div>
</main>

</section></div>
  )
}

export default Contact
