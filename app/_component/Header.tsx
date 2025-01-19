import Image from 'next/image'
import React from 'react'
import Logo from '@/public/images/logo_light.png'

export default function Header() {
  return (
    <header className='w-full header fixed  border px-[6vw] border-secondary bg-primary'>
        <div className='flex '>
            <a href='' className='py-[1.4vw] px-[3vw] border-x border-secondary'>
        
                    <Image
                    src={Logo}
                    width={1000}
                    height={1000}
                    alt=''
                    className='w-[8vw]'
                    />
            
            </a>
            <div className='w-[70%] border-r border-secondary flex items-center px-[3vw]'>
                <div className='flex gap-[2vw] ml-auto'>
                    <a href="" className='text-secondary text-[0.8vw] uppercase tracking-[0.12vw] font-bold'>About</a>
                    <a href="" className='text-secondary text-[0.8vw] uppercase tracking-[0.12vw] font-bold'>Project</a>
                </div>
            </div>

            <div className='py-[1.4vw] px-[3vw] w-[20%] border-r border-secondary flex items-center'>
                <a href="" className='text-secondary text-[1vw] uppercase tracking-[0.1vw] mx-auto font-bold text-center'>Contact</a>
            </div>
        </div>
    </header>
  )
}
