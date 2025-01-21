
import Image from 'next/image'
import React from 'react'
import Foto from '@/public/images/try.webp'

export default function Gallery() {
  return (
    <section className='px-[6vw] pb-[5vw] pt-[10vw]'>
        <div className='flex w-full items-start justify-between'>
            <div className=''>
                <Image
                src={Foto}
                width={1000}
                height={1000}
                alt=''
                className='w-[20vw]'
                />
            </div>

            <div className='pt-[10vw]'>
                <Image
                src={Foto}
                width={1000}
                height={1000}
                alt=''
                className='w-[20vw]'
                />
            </div>

            <div className=''>
                <Image
                src={Foto}
                width={1000}
                height={1000}
                alt=''
                className='w-[20vw]'
                />
            </div>
        </div>
    </section>
  )
}
