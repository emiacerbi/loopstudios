import React from 'react'
import { HeaderList } from './HeaderList'

export const Header = () => {
  return (
    <header className='flex relative flex-col h-screen text-white bg-center bg-cover bg-hero md:bg-heroDesktop'>

      <div className='absolute w-full h-full bg-black opacity-40 '></div>

      <div className='container flex z-10 flex-col flex-1 py-10 px-5 mx-auto max-w-6xl'>
        <nav className='flex justify-between items-center'>
          <img src="logo.svg" alt="loopstudios logo" />
          <img src="icon-hamburger.svg" alt="menu icon" className='cursor-pointer lg:hidden' />

          <HeaderList />
        </nav>

        <div className='flex flex-col flex-1 justify-center items-center lg:items-start'>
          <h1 className='p-5 pt-7 max-w-2xl font-secondary text-5xl border-2 lg:p-7 lg:pt-11 lg:text-7xl'>IMMERSIVE EXPERIENCES THAT<br className='lg:hidden' /> DELIVER</h1>
        </div>
      </div >
    </header >
  )
}
