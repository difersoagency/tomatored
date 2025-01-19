import React from 'react'
// import Header from './_component/Header'
import Image from 'next/image'
// import Trial from '@/public/images/try.webp'
import Logo from '@/public/images/logo_light.png'
import PhotoCarousel from './_component/PhotoSlider'

export default function page() {
  return (
    <>
    <section className='bg-primary'>
      {/* <Header/> */}
      {/* <PhotoCarousel/> */}
      <div className='flex'>
      <div className='mb-auto mt-[6vw] w-[70%] px-[6vw] py-[3vw] '>
        <PhotoCarousel/>
      </div>

      <div className='h-screen  px-[6vw] py-[3vw] gap-[5vw] flex bg-primary w-full'>
        {/* <Image
        src={Logo}
        width={1000}
        height={1000}
        alt=''
        className=' mt-auto ml-auto object-cover'
        /> */}

        <h1 className='text-white mt-auto ml-auto text-[6vw]'>Where Creativity Flourishes</h1>
        
       
      </div>
      </div>
    </section>
    </>
  )
}
