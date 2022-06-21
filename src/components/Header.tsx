import React from 'react'

export const Header = () => {
  return (
    <header className='h-screen text-white bg-hero bg-cover flex flex-col'>
      <div className='container px-5 py-10 flex flex-1 flex-col'>
        <nav className='flex items-center justify-between'>
          <img src="logo.svg" alt="loopstudios logo" />
          <img src="icon-hamburger.svg" alt="menu icon" />
        </nav>

        <div className='flex flex-1 flex-col justify-center items-center'>
          <h1 className='border-2 p-5 pt-7 text-5xl font-secondary'>IMMERSIVE EXPERIENCES THAT<br /> DELIVER</h1>
        </div>
      </div >
    </header >
  )
}
