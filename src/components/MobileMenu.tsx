import React, { ReactEventHandler } from 'react'

interface Props {
  handleClick: ReactEventHandler
  isMenuVisible: boolean
}

export const MobileMenu = ({ handleClick, isMenuVisible }: Props) => {
  return (
    <header className={`flex absolute top-0 left-0 z-20 w-full min-h-screen bg-black duration-300 ${isMenuVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
      <div className='container flex flex-col py-10 px-5 mx-auto'>
        <div className='flex items-center'>
          <img src="logo.svg" alt="logo" />
          <img
            src="icon-close.svg"
            alt="menu icon"
            className='ml-auto cursor-pointer'
            onClick={handleClick}
          />
        </div>

        <ul className='flex flex-col flex-1 gap-5 justify-center font-secondary text-2xl'>
          <li>ABOUT</li>
          <li>CAREERS</li>
          <li>EVENTS</li>
          <li>PRODUCTS</li>
          <li>SUPPORT</li>
        </ul>
      </div>

    </header>
  )
}
