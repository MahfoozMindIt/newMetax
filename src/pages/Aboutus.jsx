import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import iconvg from '../assets/X_logo.png'
import { SiComma } from "react-icons/si";
import '../styles/Home.css';
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'
import logo6 from '../assets/logo6.svg'
import content4 from '../assets/content4.webp'
import p1 from '../assets/p1.svg'
import p2 from '../assets/p2.svg'
import p3 from '../assets/p3.svg'
import Slider from 'react-infinite-logo-slider'

const Aboutus = () => {
  return (
     <div  className='w-full flex flex-col items-center justify-center bg-[#F4F2F2]'>
            <section className='lg:w-[85%] w-[95%] flex justify-center flex-col items-center '>
     <main className='flex flex-col xl:flex-row items-center justify-between py-10 pb-20 gap-10 w-full'>
     <div className='xl:w-[47%] w-full'>
            <h1 className='md:text-8xl text-5xl font-light pb-3'>About Metax</h1>
            <p className='lg:text-lg lg:w-[87%] w-full pb-5'>The Metax leadership team combines extensive experience in finance, technology, and operations, to drive innovation in the digital asset payments space. Our collective expertise ensures we deliver seamless, cross-border payment solutions at the forefront of the industry, that cater to the evolving needs of businesses worldwide.</p>
            <button className='rounded-full bg-[#542A74] text-white hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 border-[#542A74] border-[2px] md:text-[18px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Talk to us <span><FaArrowRightLong/></span>   </button>
      
        </div>
        <div className='h-[550px] xl:w-[43%] w-full hidden xl:block rounded-full bg-white'>
    
        </div>
     </main>
     <div className='w-full flex gap-2 pb-5 md:pb-2 lg:pb-0'>
     <SiComma className='text-start text-6xl text-[#542A74]'/>
     <SiComma className='text-start text-6xl text-[#542A74]'/>
     </div>
     <main className='border-white md:w-[70%] w-[95%] lg:p-20 md:p-10 p-5 border-2 shadow-2xl rounded-4xl'>
<h1 className='md:text-6xl text-3xl mb-3'>Our Story</h1>
<p className='py-5 md:text-lg text-sm'>The MetaxGroup is driven by a shared passion for simplifying payments through innovative technology. From creating seamless payment solutions and supporting clients to navigate the new payment landscape, we have grown into a global enterprise.</p>
<p className='pb-5'>We’ve brought together some of the brightest minds in the industry across Europe, Canada, Australia, and Africa. Building a team with unparalleled experience across all facets of payment infrastructure.</p>
<p className='pb-5'>Through strategic acquisitions and partnerships, we’ve also integrated a number of providers into our ecosystem, enabling us to deliver a truly localised service to businesses worldwide.</p>
<p className='pb-5'>As we continue to grow, our mission remains the same: to redefine what’s possible in the payments industry and become a trusted partner for businesses navigating the ever-changing financial landscape.</p>
<button className='rounded-full bg-[#542A74] text-white hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 border-[#542A74] border-[2px] md:text-[18px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Contact us <span><FaArrowRightLong/></span>   </button>
     </main>

      <main className='flex flex-col justify-center items-center xl:py-48 py-24 gap-16'>
     <img src={iconvg} alt="" className='lg:h-24 lg:w-24 h-16 w-16' />
     <h2 className='lg:text-6xl text-3xl font-light text-center leading-8 lg:leading-16 homeContent'>
     We are dedicated to advancing the future of <br className='hidden xl:block'/> money and its impact on the world of finance, <br /> embracing the shifting payments landscape to help your business adapt and thrive.
     </h2>
      </main>

      
     
     </section>
     <div className='py-32'>
      <h1 className='pb-5 lg:text-6xl font-light text-4xl text-black text-center'>Trusted By</h1>
      <main className='py-10'>


      <Slider
            width="350px"
            duration={10}
            pauseOnHover={false}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <div className='bg-white p-14  border-[1px] border-white rounded-xl'>
                <img src={logo1} alt="any" className='w-36' />
                </div>
            </Slider.Slide>
            <Slider.Slide>  <div className='bg-white p-14  border-[1px] border-white rounded-xl'>
                <img src={logo2} alt="any" className='w-36' />
                </div>
            </Slider.Slide>
            <Slider.Slide>  <div className='bg-white p-14  border-[1px] border-white rounded-xl'>
                <img src={logo3} alt="any" className='w-36' />
                </div>
            </Slider.Slide>
            <Slider.Slide>  <div className='bg-white px-20 py-5  border-[1px] border-white rounded-xl'>
                <img src={logo4} alt="any" className='w-36' />
                </div>
            </Slider.Slide>
        </Slider>
      </main>
     </div>
     <section className='lg:w-[85%] w-[95%] flex justify-center flex-col xl:pb-32 pb-10 items-center '>
     <main className='flex flex-col xl:flex-row items-center justify-between py-10  gap-10 w-full'>
     <div className='xl:w-[43%] w-full flex items-center gap-8'>
    <img src={p1} alt=""  className='md:h-32 md:w-32 h-20 w-20'/>
    <img src={p2} alt=""  className='md:h-32 md:w-32 h-20 w-20'/>
    <img src={p3} alt=""  className='md:h-32 md:w-32 h-20 w-20'/>
    </div>
     <div className='xl:w-[47%] w-full'>
            <h1 className='md:text-8xl text-5xl font-light pb-3'>Join us</h1>
            <p className='lg:text-lg lg:w-[87%] w-full pb-5'>At Metax Group, we’re not just building technology; we’re shaping the future of payments. If you’re passionate about innovation, driven to make an impact, and thrive in a fast-paced, collaborative environment, we’d love to hear from you. Join our team and be part of a journey that’s transforming the way the world moves money.</p>
            <button className='rounded-full bg-[#542A74] text-white hover:bg-[#7E489B] hover:border-[#7E489B] transition-all duration-500 border-[#542A74] border-[2px] md:text-[18px] text-[15px] font-semibold px-10 cursor-pointer flex items-center gap-2 py-5'>Contact us <span><FaArrowRightLong/></span>   </button>
      
        </div>
        
     </main></section>
           <div className='w-full flex justify-end'>
               
             <section className='md:w-[93%] w-full'>
               
               <main className='w-full flex-col md:flex-row flex gap-10 justify-between items-center'>
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

export default Aboutus
