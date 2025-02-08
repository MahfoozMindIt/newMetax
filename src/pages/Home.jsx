import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import BgImg from "../assets/bgEarth.png"
import map from "../assets/map.png"
import iconvg from '../assets/X_logo.png'
import banner from '../assets/v1.png'
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
        <section className='lg:w-[85%] w-[95%] '>
 <main className='flex flex-col xl:flex-row items-center justify-between py-10 gap-10 w-full'>
 <div className='xl:w-[47%] w-full '>
        <h1 className='md:text-7xl text-3xl font-light pb-14'>
        Advanced <br className='hidden md:block'/> payment <br /> technology <br className='hidden md:block'/> powered by Metax <br /> Payments</h1>
        <button className='rounded-full bg-[#542A74] text-white hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 border-[#542A74] border-[2px] md:text-[18px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Talk to us <span><FaArrowRightLong/></span>   </button>
  
    </div><div className='flex items-center justify-center w-[50%]'>
      
    <div className='lg:h-[570px] lg:w-[65%] md:h-[500px]  md:w-[500px] xl:w-[500px] xl:h-[500px] h-[200px] rounded-full  flex items-center justify-center'>
<img src={banner} alt="" className='h-full rounded-full w-full object-cover shadow-2xl'/>
    </div>
    </div>
 </main>
 <main className='w-full flex py-10 '>
  <div className='w-[50%] hidden md:block h-10'></div>
  <div className='lg:w-[50%] md:w-[75%] w-full flex flex-col items-start gap-5'>
  <img src={iconvg} className='md:h-16 md:w-16 h-10 w-10' alt="" />
  <h2 className='md:text-3xl text-xl font-light tracking-wider leading-7 md:leading-10'>We are redefining the digital asset payments space by leveraging our multi-licensed status to deliver seamless, cross-border payment and digital finance infrastructure.</h2></div>
 </main>

 <img src={map} alt="" className='w-full h-full object-cover py-10'/>
 <main className='w-full flex justify-center items-center py-10'>
 <button className='rounded-full bg-primary text-white border-primary hover:bg-secondary hover:border-secondary transition-all duration-500 border-[2px] md:text-[20px] text-[15px] font-semibold md:px-10 px-7 cursor-pointer flex items-center gap-2 py-3 md:py-5'>Book an appointment with one of our experts <span><FaArrowRightLong/></span>   </button>
  
 </main>

 <main className='flex flex-col xl:flex-row gap-10 pt-28 pb-10'>
  <img src={group1} alt="" className='h-[450px] w-[100%] object-contain'/>
  <div>
    <h2 className='font-light lg:text-6xl text-3xl leading-9 lg:leading-16 homeContent'>Paving the way to <br className='hidden lg:block'/> digital asset <br className='hidden lg:block'/> acceptance, alongside <br className='hidden lg:block'/> traditional card <br className='hidden lg:block'/> payments</h2>
    <p className='py-5 lg:text-lg text-md leading-7'>
    As the world adapts to technological innovation and disruption, our relationship with money is evolving, influencing how we live, shop, and pay for goods and services.
    </p>
    <p className='py-5 leading-7 lg:text-lg text-md'>We ensure a seamless payment experience for businesses by providing quick, secure, and reliable payment solutions. Accept a range of currencies, whether local flat or digital assets.*</p>
    <p className='leading-7 lg:text-lg text-sm'>*Digital asset services are currently unavailable in the UK.</p>
  </div>
 </main>
 <main className='flex flex-col justify-center items-center xl:py-48 py-24 gap-16'>
<img src={iconvg} alt="" className='lg:h-24 lg:w-24 h-16 w-16' />
<h2 className='lg:text-6xl text-3xl font-light homeContent text-center leading-8 lg:leading-20'>
The digital payments landscape is <br className='hidden xl:block'/> transforming, we have the tools to help you <br /> evolve with it
</h2>
 </main>
 <main className='w-full flex flex-col xl:flex-row gap-10 justify-between py-20 items-center'>
<div className='xl:w-[47%] w-full'>  <h2 className='lg:text-6xl text-3xl font-light homeContent'>Payment solutions to fit your business <br className='xl:block hidden'/> needs</h2>
  <p className='py-10 text-lg'>We support business of all sizes, from large enterprises to SMEs, across a wide range of industries.</p>
 <button className='rounded-full bg-[#542A74] hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 text-white border-[#542A74] border-[2px] md:text-[20px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Talk to us <span><FaArrowRightLong/></span>   </button>
</div>
<img src={content} alt="" className='xl:h-[570px] h-[350px] xl:w-[45%] w-full object-cover shadow-2xl rounded-4xl'/>
 </main>
 <main className='flex flex-col justify-center items-center py-20 lg:py-48 gap-20'>
  <img src={global} alt="" className='h-24 w-24'/>
  <h2 className='lg:text-6xl text-3xl font-light text-center homeContent pb-1'>Global payment technology you can trust</h2>
 </main>
 <main className='w-full flex flex-col xl:flex-row gap-10 justify-between py-10 items-center'>
<img src={content2} alt="" className='xl:h-[570px] h-[350px] xl:w-[45%] w-full object-cover shadow-2xl rounded-4xl'/>
<div className='xl:w-[47%] w-full '>  <h2 className='lg:text-6xl text-3xl font-light homeContent pb-1'>We achieve this <br className='hidden xl:block'/> through</h2>
  <p className='pt-10 lg:text-lg text-sm flex items-center  gap-3'> <span><MdOutlineCheckCircleOutline className='lg:text-4xl mr-3 text-xl'/></span> Meeting customer needs with our intuitive payments technology products</p>
  <p className='py-4 lg:text-lg text-sm flex items-center justify-center gap-3 w-full '> <span className=''><MdOutlineCheckCircleOutline className='lg:text-4xl text-xl mr-5 xl:mr-3'/></span> Strategic relationships that magnify & accelerate business opportunities through our partnerships</p>
  <p className=' lg:text-lg text-sm flex items-center gap-3'> <span><MdOutlineCheckCircleOutline className='lg:text-4xl mr-1 text-xl'/></span>Customer satisfaction at the heart of our innovation</p>
  </div>
 </main>
 
 <main className='w-full flex flex-col xl:flex-row gap-10 justify-between py-20 items-center'>
<div className='xl:w-[47%] w-full p-3'>  <h2 className='text-3xl lg:leading-11 font-light'>We wanted a payment partner who could support our ambitious global growth plans and help us scale. In Metax PAY we found someone who could do that, but someone who also added real value to the business</h2>
  <p className='pt-14 text-lg font-normal'>Cheye Alexander, CEO, Christian Rose Clothing</p>
 
</div>
<img src={content3} alt="" className='xl:h-[570px] h-[350px] xl:w-[45%] w-full object-cover shadow-2xl rounded-4xl'/>
 </main>
        </section>
        </div>

        <div className='w-full flex justify-end'>
          
        <section className='md:w-[93%] w-full'>
          
          <main className='w-full flex-col md:flex-row flex gap-10 pt-10 md:pt-0 justify-between items-center'>
         <div className='md:w-[47%] w-full pl-5'>  <h2 className='lg:text-5xl text-3xl font-light lg:leading-14 leading-9 homeContent'>Want to setup a call <br /> with one of our digital <br /> asset experts?</h2>
           <p className='pt-10 pb-5 lg:text-3xl text-xl font-light'>Book a call today.</p>
           <button className='rounded-full bg-[#542A74] hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 text-white border-[#542A74] border-[2px] lg:text-[20px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Book now <span><FaArrowRightLong/></span>   </button>
         </div>
         <img src={content4} alt="" className='md:h-[500px] h-[350px] md:w-[52%] w-full object-cover'/>
          </main>
                 </section>
        </div>
    </div>
  )
}

export default Home
