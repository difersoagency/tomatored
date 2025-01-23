"use client"

import { usePathname, useRouter } from "next/navigation"
import React from 'react'
import { animatePageOut } from "../utils/animation"

interface Props {
    href: string,
    label: string,
    isMenu : boolean,
    position: string,
    newFunc : () => void 
}

export default function TransitionLink({newFunc, href, label, isMenu = false, position}:Props) {   

    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if(pathname !== href) {
            animatePageOut(href, router)
        }

        newFunc();
    }

  return (
    <a className={` ${position === 'banner' ? 'font-climate-crisis text-[4vw]' : 'smooch text-[1.5vw]'} tracking-[0.1rem] ${
        isMenu ? "text-secondary" : "text-primary"
      } cursor-pointer uppercase`} onClick={handleClick}>
            {label}
        </a>
  )
}