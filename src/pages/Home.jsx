import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import BgImg from "../assets/bgEarth.png"
import iconvg from '../assets/Vector-7.svg'
import group1 from '../assets/group1.png'
import content from '../assets/content.png'
import content2 from '../assets/content2.jpg'
import content3 from '../assets/content3.jpg'
import content4 from '../assets/content4.webp'
import global from '../assets/global.svg'
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='w-full'>
        <div  className='w-full flex flex-col items-center justify-center bg-[#F4F2F2]'>
        <section className='w-[85%] '>
 <main className='flex items-center justify-between py-10 gap-10 w-full'>
 <div className=''>
        <h1 className='text-7xl font-light pb-14'>
        Advanced <br /> payment <br /> technology <br /> powered by XBD <br /> PAY</h1>
        <button className='rounded-full bg-black text-white hover:bg-[#5BA7B9] hover:border-[#5BA7B9] transition-all duration-500 border-black border-[2px] text-[18px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Talk to us <span><FaArrowRightLong/></span>   </button>
  
    </div>
    <div className='h-[600px] w-[47%] rounded-full bg-white'>

    </div>
 </main>
 <main className='w-full flex py-10 '>
  <div className='w-[50%] h-10'></div>
  <div className='w-[50%] flex flex-col items-start gap-5'>
  <img src={iconvg} className='h-16 w-16' alt="" />
  <h2 className='text-3xl font-light tracking-wider leading-10'>We are redefining the digital asset payments space by leveraging our multi-licensed status to deliver seamless, cross-border payment and digital finance infrastructure.</h2></div>
 </main>

 <img src={BgImg} alt="" className='w-full h-full object-cover py-10'/>
 <main className='w-full flex justify-center items-center py-10'>
 <button className='rounded-full bg-black text-white border-black hover:bg-[#5BA7B9] hover:border-[#5BA7B9] transition-all duration-500 border-[2px] text-[20px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Book an appointment with one of our experts <span><FaArrowRightLong/></span>   </button>
  
 </main>

 <main className='flex gap-10 pt-28 pb-10  overflow-y-hidden'>
  <img src={group1} alt="" className='h-[450px] w-[100%] object-contain'/>
  <div>
    <h2 className='font-light text-6xl leading-16 homeContent'>Paving the way to <br /> digital asset <br /> acceptance, alongside <br /> traditional card <br /> payments</h2>
    <p className='py-5 text-lg leading-7'>
    As the world adapts to technological innovation and disruption, our relationship with money is evolving, influencing how we live, shop, and pay for goods and services.
    </p>
    <p className='py-5 leading-7 text-lg'>We ensure a seamless payment experience for businesses by providing quick, secure, and reliable payment solutions. Accept a range of currencies, whether local flat or digital assets.*</p>
    <p className='leading-7 text-lg'>*Digital asset services are currently unavailable in the UK.</p>
  </div>
 </main>
 <main className='flex flex-col justify-center items-center py-48 gap-16'>
<img src={iconvg} alt="" className='h-24 w-24' />
<h2 className='text-6xl font-light text-center leading-20'>
The digital payments landscape is <br /> transforming, we have the tools to help you <br /> evolve with it
</h2>
 </main>
 <main className='w-full flex gap-10 justify-between py-20 items-center'>
<div className='w-[47%]'>  <h2 className='text-6xl font-light homeContent'>Payment solutions to fit your business <br /> needs</h2>
  <p className='py-10 text-lg'>We support business of all sizes, from large enterprises to SMEs, across a wide range of industries.</p>
 <button className='rounded-full bg-black hover:bg-[#5BA7B9] hover:border-[#5BA7B9] transition-all duration-500 text-white border-black border-[2px] text-[20px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Talk to us <span><FaArrowRightLong/></span>   </button>
</div>
<img src={content} alt="" className='h-[570px] w-[45%] object-cover shadow-2xl rounded-4xl'/>
 </main>
 <main className='flex flex-col justify-center items-center py-48 gap-20'>
  <img src={global} alt="" className='h-24 w-24'/>
  <h2 className='text-6xl font-light text-center homeContent pb-1'>Global payment technology you can trust</h2>
 </main>
 <main className='w-full flex gap-10 justify-between py-20 items-center'>
<img src={content2} alt="" className='h-[570px] w-[45%] object-cover shadow-2xl rounded-4xl'/>
<div className='w-[47%]'>  <h2 className='text-6xl font-light homeContent pb-1'>We achieve this <br /> through</h2>
  <p className='pt-10 text-lg flex items-center gap-3'> <span><MdOutlineCheckCircleOutline className='text-4xl'/></span> Meeting customer needs with our intuitive payments technology products</p>
  <p className='py-4 text-lg flex items-center gap-3'> <span><MdOutlineCheckCircleOutline className='text-4xl'/></span>Strategic relationships that magnify & accelerate business opportunities through our partnerships</p>
  <p className=' text-lg flex items-center gap-3'> <span><MdOutlineCheckCircleOutline className='text-4xl'/></span>Customer satisfaction at the heart of our innovation</p>
  </div>
 </main>
 
 <main className='w-full flex gap-10 justify-between py-20 items-center'>
<div className='w-[47%] p-3'>  <h2 className='text-3xl leading-11 font-light'>We wanted a payment partner who could support our ambitious global growth plans and help us scale. In XBD PAY we found someone who could do that, but someone who also added real value to the business</h2>
  <p className='pt-14 text-lg font-normal'>Cheye Alexander, CEO, Christian Rose Clothing</p>
 
</div>
<img src={content3} alt="" className='h-[570px] w-[45%] object-cover shadow-2xl rounded-4xl'/>
 </main>
        </section>
        </div>

        <div className='w-full flex justify-end'>
          
        <section className='w-[93%]'>
          
          <main className='w-full flex gap-10 justify-between items-center'>
         <div className='w-[47%]'>  <h2 className='text-5xl font-light leading-14 homeContent'>Want to setup a call <br /> with one of our digital <br /> asset experts?</h2>
           <p className='pt-10 pb-5 text-3xl font-light'>Book a call today.</p>
           <button className='rounded-full bg-black hover:bg-[#5BA7B9] hover:border-[#5BA7B9] transition-all duration-500 text-white border-black border-[2px] text-[20px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Book now <span><FaArrowRightLong/></span>   </button>
         </div>
         <img src={content4} alt="" className='h-[500px] w-[52%] object-cover'/>
          </main>
                 </section>
        </div>
    </div>
  )
}

export default Home
