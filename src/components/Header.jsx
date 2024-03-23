import React from 'react'
import MenuItems from './MenuItems'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { Span } from 'next/dist/trace'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
        <MenuItems title="Home" address="/" Icon={AiFillHome} />
        <MenuItems title="About" address="/about" Icon={BsFillInfoCircleFill} />

        </div>
        <div className='flex items-center gap-4'>
          <DarkModeSwitch/>
        <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold py-1 px-2 bg-amber-500 rounded-lg'>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone </span>

        </Link>
    </div>
    </div>
  )
}
